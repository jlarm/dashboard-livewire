<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\Rules\Password;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function (): void {
    Password::defaults(fn () => Password::min(8));
});

test('reset password link screen can be rendered', function (): void {
    $this->get(route('password.request'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('auth/ForgotPassword')
            ->has('status')
        );
});

test('reset password link can be requested', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

test('reset password link is not sent for non-existent email', function (): void {
    Notification::fake();

    $response = $this->post(route('password.email'), ['email' => 'nonexistent@example.com']);

    Notification::assertNothingSent();
    $response->assertSessionHasErrors('email');
});

test('reset password link requires email', function (): void {
    $response = $this->post(route('password.email'), []);

    $response->assertSessionHasErrors('email');
});

test('reset password screen can be rendered', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification): true {
        $this->get(route('password.reset', $notification->token))
            ->assertOk()
            ->assertInertia(fn (Assert $page): Assert => $page
                ->component('auth/ResetPassword')
                ->has('token')
                ->has('email')
            );

        return true;
    });
});

test('password can be reset with valid token', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user): true {
        $response = $this->post(route('password.store'), [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'new-password-123',
            'password_confirmation' => 'new-password-123',
        ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/login');

        return true;
    });
});

test('password cannot be reset with invalid token', function (): void {
    $user = User::factory()->create();

    $response = $this->post(route('password.store'), [
        'token' => 'invalid-token',
        'email' => $user->email,
        'password' => 'newpassword123',
        'password_confirmation' => 'newpassword123',
    ]);

    $response->assertSessionHasErrors('email');
});

test('password reset requires matching confirmation', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post(route('password.email'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user): true {
        $response = $this->post(route('password.store'), [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'new-password-123',
            'password_confirmation' => 'different-password',
        ]);

        $response->assertSessionHasErrors('password');

        return true;
    });
});

test('password reset requires all fields', function (): void {
    $response = $this->post(route('password.store'), []);

    $response->assertSessionHasErrors(['token', 'email', 'password']);
});

test('authenticated users are redirected from forgot password page', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('password.request'))
        ->assertRedirect(route('dashboard', absolute: false));
});
