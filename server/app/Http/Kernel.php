<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    // Other class properties...

    protected $middleware = [
        // Other middleware...
        \App\Http\Middleware\Cors::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
    ];


    // Or add it to a middleware group like 'api'
    protected $middlewareGroups = [
        'web' => [
            // Other middleware...
            \App\Http\Middleware\VerifyCsrfToken::class,
        ],
        'api' => [
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Fruitcake\Cors\HandleCors::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];



    // Other class methods...
}
