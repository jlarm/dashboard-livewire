<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Enums\State;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('tenant/Dashboard', [
            'states' => collect(State::cases())->map(fn (State $state): array => [
                'value' => $state->value,
                'label' => $state->label(),
            ])->values()->all(),
        ]);
    }
}
