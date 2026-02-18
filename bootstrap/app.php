<?php

declare(strict_types=1);

use App\Http\Middleware\CheckStoreStatusMiddleware;
use App\Http\Middleware\ImpersonationMiddleware;
use App\Http\Middleware\Localization;
use App\Http\Middleware\SecurityHeadersMiddleware;
use App\Http\Middleware\SingleStoreMiddleware;
use App\Http\Middleware\StoreAccessMiddleware;
use App\Http\Middleware\StoreIdentifierMiddleware;
use App\Http\Middleware\StoreMiddleware;
use App\Providers\AppServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Support\Facades\Route;
use Maatwebsite\Excel\ExcelServiceProvider;
use Sentry\Laravel\Integration;
use Spatie\Permission\Middleware\PermissionMiddleware;
use Spatie\Permission\Middleware\RoleMiddleware;
use Spatie\Permission\Middleware\RoleOrPermissionMiddleware;
use Webklex\PDFMerger\Providers\PDFMergerServiceProvider;

return Application::configure(basePath: dirname(__DIR__))
    ->withProviders([
        PDFMergerServiceProvider::class,
        ExcelServiceProvider::class,
    ])
    ->withRouting(
        commands: __DIR__.'/../routes/console.php',
        channels: __DIR__.'/../routes/channels.php',
        health: '/up',
        then: function (): void {
            foreach (config('tenancy.central_domains', []) as $domain) {
                Route::middleware('web')
                    ->domain($domain)
                    ->group(base_path('routes/web.php'));
            }
        },
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo(fn (): string => '/login');
        $middleware->redirectUsersTo(AppServiceProvider::HOME);

        $middleware->append(SecurityHeadersMiddleware::class);

        $middleware->web([
            StoreIdentifierMiddleware::class,
            Localization::class,
            ImpersonationMiddleware::class,
        ]);

        $middleware->group('universal', []);
        $middleware->group('api', [
            ThrottleRequests::class.':api',
            SubstituteBindings::class,
        ]);

        $middleware->alias([
            'canAccessStore' => StoreAccessMiddleware::class,
            'has.stores' => CheckStoreStatusMiddleware::class,
            'permission' => PermissionMiddleware::class,
            'role' => RoleMiddleware::class,
            'role_or_permission' => RoleOrPermissionMiddleware::class,
            'single.store' => SingleStoreMiddleware::class,
            'stores' => StoreMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->reportable(function (Throwable $e): void {
            if (app()->bound('sentry')) {
                resolve('sentry')->captureException($e);
            }
        });

        Integration::handles($exceptions);
    })->create();
