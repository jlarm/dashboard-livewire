<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;

test('tenant login screen can be rendered', function (): void {
    $this->get(route('dealer.login'))
        ->assertOk()
        ->assertViewIs('auth.login')
        ->assertViewHas('canResetPassword')
        ->assertViewHas('canRegister');
});

test('tenant user can authenticate', function (): void {
    $response = $this->post(route('dealer.login.store'), [
        'email' => $this->consultant->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dealer.dashboard', absolute: false));
});

test('tenant user cannot authenticate with invalid password', function (): void {
    $this->post(route('dealer.login.store'), [
        'email' => $this->consultant->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});

test('tenant login validates against tenant database not central', function (): void {
    // Create a user in the central DB that does NOT exist in the tenant DB
    tenancy()->end();
    $centralOnlyUser = User::factory()->create(['email' => 'central-only@example.com']);
    tenancy()->initialize($this->tenant);

    // This user should not be able to log in on the tenant domain
    $this->post(route('dealer.login.store'), [
        'email' => $centralOnlyUser->email,
        'password' => 'password',
    ]);

    $this->assertGuest();
});

test('tenant login requires email', function (): void {
    $response = $this->post(route('dealer.login.store'), [
        'password' => 'password',
    ]);

    $response->assertSessionHasErrors('email');
    $this->assertGuest();
});

test('tenant login requires password', function (): void {
    $response = $this->post(route('dealer.login.store'), [
        'email' => $this->consultant->email,
    ]);

    $response->assertSessionHasErrors('password');
    $this->assertGuest();
});

test('authenticated tenant users are redirected from login page', function (): void {
    $this->actingAs($this->consultant)
        ->get(route('dealer.login'))
        ->assertRedirect(route('dealer.dashboard', absolute: false));
});

test('tenant user can logout', function (): void {
    $response = $this->actingAs($this->consultant)
        ->post(route('dealer.logout'));

    $this->assertGuest();
    $response->assertRedirect('/');
});

test('tenant login is rate limited after too many failed attempts', function (): void {
    $throttleKey = Str::transliterate(Str::lower($this->consultant->email).'|127.0.0.1');
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);

    $response = $this->post(route('dealer.login.store'), [
        'email' => $this->consultant->email,
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors('email');
});
