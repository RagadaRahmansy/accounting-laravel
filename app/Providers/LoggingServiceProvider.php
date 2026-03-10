<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

class LoggingServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Enable query logging in development
        if ($this->app->environment('local', 'development', 'testing')) {
            $this->enableQueryLogging();
        }
    }

    /**
     * Enable database query logging
     */
    protected function enableQueryLogging()
    {
        if (config('app.debug')) {
            DB::listen(function ($query) {
                // Log slow queries (> 1000ms)
                if ($query->time > 1000) {
                    Log::channel('query')->warning('Slow Query Detected', [
                        'sql' => $query->sql,
                        'bindings' => $query->bindings,
                        'time' => $query->time . 'ms',
                        'connection' => $query->connectionName,
                    ]);
                } else {
                    Log::channel('query')->debug('Query Executed', [
                        'sql' => $query->sql,
                        'bindings' => $query->bindings,
                        'time' => $query->time . 'ms',
                        'connection' => $query->connectionName,
                    ]);
                }
            });
        }
    }
}
