<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\Central\DealershipResource;
use App\Models\Dealership;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', Dealership::class);

        $dealerships = auth()->user()->hasRole('super-admin')
            ? Dealership::query()
                ->with(['domains', 'users'])
                ->orderBy('name')
                ->get()
            : auth()->user()->dealerships()
                ->with(['domains', 'users'])
                ->orderBy('name')
                ->get();

        return Inertia::render('Dashboard', [
            'dealerships' => DealershipResource::collection(
                $dealerships
            )->resolve(),
        ]);
    }
}
