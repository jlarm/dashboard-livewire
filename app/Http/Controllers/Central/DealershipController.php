<?php

declare(strict_types=1);

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Http\Requests\Central\DealershipCreateRequest;
use App\Http\Resources\Central\DealershipResource;
use App\Models\Dealership;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class DealershipController extends Controller
{
    public function index(): Response
    {
        $dealerships = auth()->user()->hasRole('super-admin')
            ? Dealership::query()
                ->with('domains', 'users')
                ->orderBy('name')
                ->get()
            : auth()->user()->dealerships()
                ->with('domains', 'users')
                ->orderBy('name')
                ->get();

        return Inertia::render('central/dealership/Index', [
            'dealerships' => DealershipResource::collection($dealerships)->resolve(),
        ]);
    }

    public function store(DealershipCreateRequest $request): void
    {
        Gate::authorize('create', Dealership::class);

        $validated = $request->validated();

        try {
            DB::transaction(function () use ($validated): void {
                $dealership = Dealership::query()->create([
                    'user_id' => auth()->user()->id,
                    ...$validated,
                ]);

                $subDomainName = Str::slug($validated['name']);
                $domain = $subDomainName.'.'.config('tenancy.central_domains')[0];

                $dealership->domains()->create([
                    'domain' => $domain,
                ]);
            });
        } catch (Exception $e) {
            Log::error('Failed to create dealership', [
                'error' => $e->getMessage(),
            ]);
        }
    }
}
