<?php

declare(strict_types=1);

use App\Models\Dealership;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function (): void {
    $this->seedRolesAndPermissions();
});

it('redirects guests to login', function (): void {
    $this->get(route('dealerships.index'))
        ->assertRedirect(route('login'));
});

it('allows super-admins to see all dealerships', function (): void {
    $superAdmin = User::factory()->create();
    $superAdmin->assignRole('super-admin');

    $alphaTenant = $this->createTenant([
        'id' => 'alpha-'.uniqid(),
        'name' => 'Alpha Autos',
        'domain' => 'alpha-'.uniqid().'.localhost',
        'owner' => $superAdmin,
    ]);

    $zebraTenant = $this->createTenant([
        'id' => 'zebra-'.uniqid(),
        'name' => 'Zebra Motors',
        'domain' => 'zebra-'.uniqid().'.localhost',
    ]);

    $this->actingAs($superAdmin)
        ->get(route('dealerships.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('central/dealership/Index')
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

it('does not allow non super-admins to see all dealerships', function (): void {
    $consultant = User::factory()->create();
    $consultant->assignRole('Consultant');

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

    $this->actingAs($consultant)
        ->get(route('dealerships.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('central/dealership/Index')
            ->has('dealerships', 1)
            ->where('dealerships.0.id', $visibleTenant->id)
            ->where('dealerships.0.name', 'Visible Motors')
            ->where('dealerships.0.url', 'https://'.$visibleTenant->domain().'/dashboard')
            ->missing('dealerships.1')
            ->etc()
        );
});

it('allows consultants to create a dealership and its domain', function (): void {
    $consultant = User::factory()->create();
    $consultant->assignRole('Consultant');

    $name = 'Acme Motors';

    $this->actingAs($consultant)
        ->post(route('dealerships.store'), [
            'name' => $name,
        ])
        ->assertOk();

    $dealership = Dealership::query()->where('name', $name)->first();

    expect($dealership)->not->toBeNull();
    expect($dealership?->user_id)->toBe($consultant->id);

    $expectedDomain = 'acme-motors.'.config('tenancy.central_domains')[0];

    $this->assertDatabaseHas('domains', [
        'tenant_id' => $dealership?->id,
        'domain' => $expectedDomain,
    ]);
});

it('forbids users without consultant or super-admin roles from creating dealerships', function (): void {
    $employee = User::factory()->create();

    $this->actingAs($employee)
        ->post(route('dealerships.store'), [
            'name' => 'Forbidden Motors',
        ])
        ->assertForbidden();

    $this->assertDatabaseMissing('tenants', [
        'name' => 'Forbidden Motors',
    ]);
});

it('validates dealership name when creating', function (): void {
    $consultant = User::factory()->create();
    $consultant->assignRole('Consultant');

    $this->actingAs($consultant)
        ->post(route('dealerships.store'), [
            'name' => 'Invalid@Name',
        ])
        ->assertSessionHasErrors(['name']);

    $this->assertDatabaseMissing('tenants', [
        'name' => 'Invalid@Name',
    ]);
});
