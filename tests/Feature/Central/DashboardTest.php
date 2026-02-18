<?php

declare(strict_types=1);

use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function (): void {
    $this->seedRolesAndPermissions();
});

it('redirects guests to login', function (): void {
    $this->get(route('dashboard'))
        ->assertRedirect(route('login'));
});

it('renders the dashboard with dealerships sorted by name', function (): void {
    $user = User::factory()->create();
    $user->assignRole('super-admin');
    $this->actingAs($user);

    $zebraTenant = $this->createTenant([
        'id' => 'zebra-'.uniqid(),
        'name' => 'Zebra Motors',
        'domain' => 'zebra-'.uniqid().'.localhost',
        'owner' => $user,
    ]);

    $alphaTenant = $this->createTenant([
        'id' => 'alpha-'.uniqid(),
        'name' => 'Alpha Autos',
        'domain' => 'alpha-'.uniqid().'.localhost',
        'owner' => $user,
    ]);

    $this->get(route('dashboard'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('Dashboard')
            ->has('dealerships', 2)
            ->where('dealerships.0.id', $alphaTenant->id)
            ->where('dealerships.0.name', 'Alpha Autos')
            ->where('dealerships.0.url', 'https://'.$alphaTenant->domain().'/dashboard')
            ->where('dealerships.1.id', $zebraTenant->id)
            ->where('dealerships.1.name', 'Zebra Motors')
            ->where('dealerships.1.url', 'https://'.$zebraTenant->domain().'/dashboard')
            ->etc()
        );
});

it('renders only the authenticated consultants dealerships', function (): void {
    $consultant = User::factory()->create();
    $consultant->assignRole('Consultant');
    $this->actingAs($consultant);

    $visibleTenant = $this->createTenant([
        'id' => 'visible-'.uniqid(),
        'name' => 'Visible Motors',
        'domain' => 'visible-'.uniqid().'.localhost',
        'owner' => $consultant,
    ]);

    $this->createTenant([
        'id' => 'hidden-'.uniqid(),
        'name' => 'Hidden Autos',
        'domain' => 'hidden-'.uniqid().'.localhost',
    ]);

    $consultant->dealerships()->attach($visibleTenant->id);

    $this->get(route('dashboard'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('Dashboard')
            ->has('dealerships', 1)
            ->where('dealerships.0.id', $visibleTenant->id)
            ->where('dealerships.0.name', 'Visible Motors')
            ->where('dealerships.0.url', 'https://'.$visibleTenant->domain().'/dashboard')
            ->missing('dealerships.1')
            ->etc()
        );
});
