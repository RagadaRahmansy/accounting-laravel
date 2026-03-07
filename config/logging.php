<?php

use Monolog\Handler\NullHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\SyslogUdpHandler;
use Monolog\Formatter\LineFormatter;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    */
    'default' => env('LOG_CHANNEL', 'stack'),

    /*
    |--------------------------------------------------------------------------
    | Deprecations Log Channel
    |--------------------------------------------------------------------------
    */
    'deprecations' => [
        'channel' => env('LOG_DEPRECATIONS_CHANNEL', 'daily'),
        'trace' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    */
    'channels' => [
        // Main stack that combines multiple channels
        'stack' => [
            'driver' => 'stack',
            'channels' => ['single', 'daily'],
            'ignore_exceptions' => false,
        ],

        // Single log file (for development)
        'single' => [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
            'formatter' => LineFormatter::class,
            'formatter_with' => [
                'format' => '[%datetime%] %channel%.%level_name%: %message% %context% %extra%',
                'dateFormat' => 'Y-m-d H:i:s',
            ],
        ],

        // Daily rotating log files (14 days retention)
        'daily' => [
            'driver' => 'daily',
            'path' => storage_path('logs/laravel.log'),
            'level' => env('LOG_LEVEL', 'debug'),
            'days' => 14,
            'formatter' => LineFormatter::class,
            'formatter_with' => [
                'format' => '[%datetime%] %channel%.%level_name%: %message% %context% %extra%',
                'dateFormat' => 'Y-m-d H:i:s',
            ],
        ],

        // Separate channel for errors only
        'error' => [
            'driver' => 'daily',
            'path' => storage_path('logs/error.log'),
            'level' => 'error',
            'days' => 30,
            'formatter' => LineFormatter::class,
            'formatter_with' => [
                'format' => '[%datetime%] %channel%.%level_name%: %message% %context% %extra%',
                'dateFormat' => 'Y-m-d H:i:s',
            ],
        ],

        // Separate channel for security events
        'security' => [
            'driver' => 'daily',
            'path' => storage_path('logs/security.log'),
            'level' => 'warning',
            'days' => 30,
            'formatter' => LineFormatter::class,
            'formatter_with' => [
                'format' => '[%datetime%] %channel%.%level_name%: %message% %context% %extra%',
                'dateFormat' => 'Y-m-d H:i:s',
            ],
        ],

        // Separate channel for database queries
        'query' => [
            'driver' => 'daily',
            'path' => storage_path('logs/query.log'),
            'level' => 'debug',
            'days' => 7,
        ],

        // Slack notifications for critical errors
        'slack' => [
            'driver' => 'slack',
            'url' => env('LOG_SLACK_WEBHOOK_URL'),
            'username' => 'Raga App Error',
            'emoji' => ':boom:',
            'level' => env('LOG_LEVEL', 'critical'),
        ],

        // Papertrail for centralized logging
        'papertrail' => [
            'driver' => 'monolog',
            'level' => env('LOG_LEVEL', 'debug'),
            'handler' => env('LOG_PAPERTRAIL_HANDLER', SyslogUdpHandler::class),
            'handler_with' => [
                'host' => env('PAPERTRAIL_URL'),
                'port' => env('PAPERTRAIL_PORT'),
                'connectionString' => 'tls://'.env('PAPERTRAIL_URL').':'.env('PAPERTRAIL_PORT'),
            ],
        ],

        // stderr for containerized environments
        'stderr' => [
            'driver' => 'monolog',
            'level' => env('LOG_LEVEL', 'debug'),
            'handler' => StreamHandler::class,
            'formatter' => env('LOG_STDERR_FORMATTER'),
            'with' => [
                'stream' => 'php://stderr',
            ],
        ],

        // syslog
        'syslog' => [
            'driver' => 'syslog',
            'level' => env('LOG_LEVEL', 'debug'),
        ],

        // errorlog
        'errorlog' => [
            'driver' => 'errorlog',
            'level' => env('LOG_LEVEL', 'debug'),
        ],

        // null handler
        'null' => [
            'driver' => 'monolog',
            'handler' => NullHandler::class,
        ],

        // emergency
        'emergency' => [
            'path' => storage_path('logs/laravel.log'),
        ],
    ],
];
