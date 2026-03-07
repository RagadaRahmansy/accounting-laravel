<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        \Illuminate\Auth\AuthenticationException::class => \Psr\Log\LogLevel::WARNING,
        \Illuminate\Validation\ValidationException::class => \Psr\Log\LogLevel::INFO,
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        // Report all exceptions with detailed logging
        $this->reportable(function (Throwable $exception) {
            $this->logException($exception);
        });

        // Custom handlers for specific exceptions

        // Handle 404 Not Found
        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Resource not found',
                    'error' => '404'
                ], 404);
            }

            // Log 404 errors
            \Log::warning('404 Not Found', [
                'url' => $request->fullUrl(),
                'ip' => $request->ip(),
                'user_id' => auth()->id() ?? 'guest'
            ]);

            return back()->with('error', 'Halaman tidak ditemukan');
        });

        // Handle 405 Method Not Allowed
        $this->renderable(function (MethodNotAllowedHttpException $e, $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Method not allowed',
                    'error' => '405'
                ], 405);
            }

            \Log::warning('405 Method Not Allowed', [
                'url' => $request->fullUrl(),
                'method' => $request->method()
            ]);
        });

        // Handle Model Not Found
        $this->renderable(function (ModelNotFoundException $e, $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data tidak ditemukan',
                    'error' => 'Model Not Found'
                ], 404);
            }

            return back()->with('error', 'Data tidak ditemukan');
        });

        // Handle Validation Exceptions
        $this->renderable(function (ValidationException $e, $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $e->errors()
                ], 422);
            }
        });

        // Handle Authentication Exceptions
        $this->renderable(function (AuthenticationException $e, $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Unauthorized',
                    'error' => 'Authentication required'
                ], 401);
            }

            return redirect()->route('login_view')->with('error', 'Silakan login terlebih dahulu');
        });
    }

    /**
     * Custom exception logging
     */
    protected function logException(Throwable $exception)
    {
        $context = [
            'exception' => get_class($exception),
            'message' => $exception->getMessage(),
            'code' => $exception->getCode(),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
            'trace' => $exception->getTraceAsString(),
            'url' => request()->fullUrl() ?? null,
            'method' => request()->method() ?? null,
            'ip' => request()->ip() ?? null,
            'user_id' => auth()->id() ?? null,
            'user_agent' => request()->userAgent() ?? null,
        ];

        // Determine log level based on exception type
        if ($exception instanceof \Illuminate\Auth\AuthenticationException) {
            \Log::warning('Authentication Exception: ' . $exception->getMessage(), $context);
        } elseif ($exception instanceof \Illuminate\Validation\ValidationException) {
            \Log::info('Validation Exception', $context);
        } elseif ($exception instanceof \Symfony\Component\HttpKernel\Exception\HttpException) {
            \Log::info('HTTP Exception: ' . $exception->getStatusCode(), $context);
        } else {
            // Log as error for unhandled exceptions
            \Log::error('Unhandled Exception: ' . $exception->getMessage(), $context);
        }
    }

    /**
     * Prepare a JSON response for the given exception.
     */
    protected function prepareJsonResponse($request, Throwable $e)
    {
        return response()->json([
            'success' => false,
            'message' => config('app.debug') ? $e->getMessage() : 'Terjadi kesalahan pada server',
            'error' => class_basename($e),
            'trace' => config('app.debug') ? $e->getTrace() : null,
        ], $this->isHttpException($e) ? $e->getStatusCode() : 500);
    }

    /**
     * Prepare response containing exception to show in non-debug mode.
     */
    protected function convertExceptionToResponse(Throwable $e)
    {
        if (config('app.debug')) {
            return parent::convertExceptionToResponse($e);
        }

        // Custom error message for production
        $message = 'Terjadi kesalahan pada sistem. Silakan coba lagi atau hubungi administrator.';

        // Log the full exception for admin review
        \Log::error('Production Error', [
            'exception' => get_class($e),
            'message' => $e->getMessage(),
            'url' => request()->fullUrl(),
        ]);

        return response()->view('errors.custom', [
            'message' => $message,
            'code' => 500
        ], 500);
    }
}
