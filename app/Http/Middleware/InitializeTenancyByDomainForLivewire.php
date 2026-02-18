<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Override;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Symfony\Component\HttpFoundation\Response;

class InitializeTenancyByDomainForLivewire extends InitializeTenancyByDomain
{
    #[Override]
    public function handle(Request $request, Closure $next): Response
    {
        $host = $request->getHost();

        if (in_array($host, config('tenancy.central_domains', []), true)) {
            return $next($request);
        }

        $this->tenancy->initialize(
            $this->resolver->resolve($host)
        );

        return $next($request);
    }
}
