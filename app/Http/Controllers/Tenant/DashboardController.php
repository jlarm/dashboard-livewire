<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Enums\State;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        return view('tenant.dashboard', [
            'states' => collect(State::cases())->map(fn (State $state): array => [
                'value' => $state->value,
                'label' => $state->label(),
            ])->values()->all(),
        ]);
    }
}
