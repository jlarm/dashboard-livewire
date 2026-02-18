<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tenant\StoreCreateRequest;
use App\Models\Dealer\Store;
use Illuminate\Support\Facades\Gate;

class StoreController extends Controller
{
    public function store(StoreCreateRequest $request)
    {
        Gate::authorize('create', Store::class);

        $validated = $request->validated();

        Store::query()->create([
            'name' => $validated['name'],
            'address' => $validated['address'] ?? null,
            'city' => $validated['city'] ?? null,
            'state' => $validated['state'] ?? null,
            'postal_code' => $validated['postal_code'] ?? null,
        ]);

        return to_route('dealer.dashboard');
    }
}
