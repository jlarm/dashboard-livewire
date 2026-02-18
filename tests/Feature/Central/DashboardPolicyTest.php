<?php

declare(strict_types=1);

use App\Models\User;
use App\Policies\Central\DashboardPolicy;

beforeEach(function (): void {
    $this->seedRolesAndPermissions();
});

it('allows super-admin users to view any dealership on the dashboard', function (): void {
    $user = User::factory()->create();
    $user->assignRole('super-admin');

    $policy = resolve(DashboardPolicy::class);

    expect($policy->viewAny($user))->toBeTrue();
});

it('allows consultant users to view any dealership on the dashboard', function (): void {
    $user = User::factory()->create();
    $user->assignRole('Consultant');

    $policy = resolve(DashboardPolicy::class);

    expect($policy->viewAny($user))->toBeTrue();
});

it('denies non-authorized roles from viewing dealerships on the dashboard', function (): void {
    $user = User::factory()->create();
    $user->assignRole('Manager');

    $policy = resolve(DashboardPolicy::class);

    expect($policy->viewAny($user))->toBeFalse();
});
