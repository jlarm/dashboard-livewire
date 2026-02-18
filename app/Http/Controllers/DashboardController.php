<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\Central\DealershipResource;
use App\Models\Dealership;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    public function index(): View
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

        return view('dashboard', [
            'dealerships' => DealershipResource::collection(
                $dealerships
            )->resolve(),
        ]);
    }
}
