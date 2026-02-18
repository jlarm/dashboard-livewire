<?php

declare(strict_types=1);

use App\Models\Dealer\Store;
use App\Models\User;
use Illuminate\Support\Facades\Date;

test('tenant consultant can create a store with only a name', function (): void {
    Store::query()->delete();

    $consultant = $this->consultant->fresh();

    $response = $this->actingAs($consultant)->post(route('dealer.stores.store'), [
        'name' => 'Name Only Store',
    ]);

    $response->assertRedirect(route('dealer.dashboard', absolute: false));

    $this->assertDatabaseHas('stores', [
        'name' => 'Name Only Store',
        'address' => null,
        'city' => null,
        'state' => null,
        'postal_code' => null,
    ]);
});

test('tenant super-admin bypasses store create policy check', function (): void {
    Store::query()->delete();

    $superAdmin = User::query()->create([
        'name' => 'Tenant Super Admin',
        'email' => 'tenant-super-admin@test-tenant.localhost',
        'password' => bcrypt('password'),
        'email_verified_at' => Date::now(),
    ]);
    $superAdmin->assignRole('super-admin');

    $response = $this->actingAs($superAdmin->fresh())->post(route('dealer.stores.store'), [
        'name' => 'Super Admin Store',
    ]);

    $response->assertRedirect(route('dealer.dashboard', absolute: false));
    $this->assertDatabaseHas('stores', ['name' => 'Super Admin Store']);
});

test('tenant manager cannot create a store', function (): void {
    Store::query()->delete();

    $manager = $this->manager->fresh();

    $response = $this->actingAs($manager)->post(route('dealer.stores.store'), [
        'name' => 'Forbidden Store',
    ]);

    $response->assertForbidden();
    $this->assertDatabaseMissing('stores', ['name' => 'Forbidden Store']);
});

test('dashboard shows initial setup mode with no stores and manual route access redirects to dashboard', function (): void {
    Store::query()->delete();

    $consultant = $this->consultant->fresh();

    $this->actingAs($consultant)
        ->get(route('dealer.dashboard'))
        ->assertOk()
        ->assertViewIs('tenant.dashboard')
        ->assertViewHas('states');

    $this->actingAs($consultant)
        ->get(route('dealer.employees.index'))
        ->assertRedirect(route('dealer.dashboard', absolute: false));
});

test('after initial store creation, tenant routes become accessible', function (): void {
    Store::query()->delete();

    $consultant = $this->consultant->fresh();

    $this->actingAs($consultant)
        ->post(route('dealer.stores.store'), [
            'name' => 'Unlocked Store',
        ])
        ->assertRedirect(route('dealer.dashboard', absolute: false));

    $this->actingAs($consultant->fresh())
        ->get(route('dealer.dashboard'))
        ->assertOk()
        ->assertViewIs('tenant.dashboard')
        ->assertViewHas('states');

    $this->actingAs($consultant->fresh())
        ->get(route('dealer.employees.index'))
        ->assertOk()
        ->assertViewIs('tenant.employee.index');
});

test('tenant store creation requires only name', function (): void {
    Store::query()->delete();

    $consultant = $this->consultant->fresh();

    $response = $this->actingAs($consultant)->post(route('dealer.stores.store'), []);

    $response->assertSessionHasErrors(['name']);
    $response->assertSessionDoesntHaveErrors([
        'address',
        'city',
        'state',
        'postal_code',
    ]);
});
