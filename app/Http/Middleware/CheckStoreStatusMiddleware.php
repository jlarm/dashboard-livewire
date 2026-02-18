<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Models\Dealer\Store;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckStoreStatusMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! tenant('id') || $request->routeIs('dealer.dashboard') || Store::query()->exists()) {
            return $next($request);
        }

        return to_route('dealer.dashboard');
    }
}
