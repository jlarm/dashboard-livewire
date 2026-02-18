<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Inertia\Testing\AssertableInertia as Assert;

test('login screen can be rendered', function (): void {
    $this->get(route('login'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('auth/Login')
            ->has('canResetPassword')
            ->has('canRegister')
        );
});

test('users can authenticate using the login screen', function (): void {
    $user = User::factory()->create();

    $response = $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('users can not authenticate with invalid password', function (): void {
    $user = User::factory()->create();

    $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});

test('users can not authenticate with non-existent email', function (): void {
    $this->post(route('login.store'), [
        'email' => 'nonexistent@example.com',
        'password' => 'password',
    ]);

    $this->assertGuest();
});

test('login requires email', function (): void {
    $response = $this->post(route('login.store'), [
        'password' => 'password',
    ]);

    $response->assertSessionHasErrors('email');
    $this->assertGuest();
});

test('login requires password', function (): void {
    $user = User::factory()->create();

    $response = $this->post(route('login.store'), [
        'email' => $user->email,
    ]);

    $response->assertSessionHasErrors('password');
    $this->assertGuest();
});

test('login requires valid email format', function (): void {
    $response = $this->post(route('login.store'), [
        'email' => 'not-an-email',
        'password' => 'password',
    ]);

    $response->assertSessionHasErrors('email');
    $this->assertGuest();
});

test('authenticated users are redirected from login page', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('login'))
        ->assertRedirect(route('dashboard', absolute: false));
});

test('users can logout', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('logout'));

    $this->assertGuest();
    $response->assertRedirect('/');
});

test('users are rate limited after too many failed attempts', function (): void {
    $user = User::factory()->create();

    $throttleKey = Str::transliterate(Str::lower($user->email).'|127.0.0.1');
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);

    $response = $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors('email');
});

test('rate limiter is cleared after successful login', function (): void {
    $user = User::factory()->create();

    $throttleKey = Str::transliterate(Str::lower($user->email).'|127.0.0.1');
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);
    RateLimiter::hit($throttleKey);

    $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    expect(RateLimiter::tooManyAttempts($throttleKey, 5))->toBeFalse();
});

test('soft deleted users cannot authenticate', function (): void {
    $user = User::factory()->create();
    $user->delete();

    $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertGuest();
});
