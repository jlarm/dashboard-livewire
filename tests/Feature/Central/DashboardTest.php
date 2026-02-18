<?php

declare(strict_types=1);

use App\Models\User;

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
        ->assertViewIs('dashboard')
        ->assertViewHas('dealerships', fn ($dealerships): bool => count($dealerships) === 2
            && $dealerships[0]['id'] === $alphaTenant->id
            && $dealerships[0]['name'] === 'Alpha Autos'
            && $dealerships[0]['url'] === 'https://'.$alphaTenant->domain().'/dashboard'
            && $dealerships[1]['id'] === $zebraTenant->id
            && $dealerships[1]['name'] === 'Zebra Motors'
            && $dealerships[1]['url'] === 'https://'.$zebraTenant->domain().'/dashboard');
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
        ->assertViewIs('dashboard')
        ->assertViewHas('dealerships', fn ($dealerships): bool => count($dealerships) === 1
            && $dealerships[0]['id'] === $visibleTenant->id
            && $dealerships[0]['name'] === 'Visible Motors'
            && $dealerships[0]['url'] === 'https://'.$visibleTenant->domain().'/dashboard');
});
