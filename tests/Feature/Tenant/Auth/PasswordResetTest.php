<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\Rules\Password;

beforeEach(function (): void {
    Password::defaults(fn () => Password::min(8));
});

test('tenant reset password link screen can be rendered', function (): void {
    $this->get(route('dealer.password.request'))
        ->assertOk()
        ->assertViewIs('auth.forgot-password')
        ->assertViewHas('status');
});

test('tenant reset password link can be requested', function (): void {
    Notification::fake();

    $this->post(route('dealer.password.email'), ['email' => $this->consultant->email]);

    Notification::assertSentTo($this->consultant, ResetPassword::class);
});

test('tenant reset password link is not sent for non-existent email', function (): void {
    Notification::fake();

    $response = $this->post(route('dealer.password.email'), ['email' => 'nonexistent@example.com']);

    Notification::assertNothingSent();
    $response->assertSessionHasErrors('email');
});

test('tenant reset password screen can be rendered', function (): void {
    Notification::fake();

    $this->post(route('dealer.password.email'), ['email' => $this->consultant->email]);

    Notification::assertSentTo($this->consultant, ResetPassword::class, function ($notification): true {
        $this->get(route('dealer.password.reset', $notification->token))
            ->assertOk()
            ->assertViewIs('auth.reset-password')
            ->assertViewHas('token')
            ->assertViewHas('email');

        return true;
    });
});

test('tenant password can be reset with valid token', function (): void {
    Notification::fake();

    $this->post(route('dealer.password.email'), ['email' => $this->consultant->email]);

    Notification::assertSentTo($this->consultant, ResetPassword::class, function ($notification): true {
        $response = $this->post(route('dealer.password.store'), [
            'token' => $notification->token,
            'email' => $this->consultant->email,
            'password' => 'new-password-123',
            'password_confirmation' => 'new-password-123',
        ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/login');

        // Verify password was actually updated in the tenant database
        expect(Hash::check('new-password-123', $this->consultant->fresh()->password))->toBeTrue();

        return true;
    });
});

test('tenant password cannot be reset with invalid token', function (): void {
    $response = $this->post(route('dealer.password.store'), [
        'token' => 'invalid-token',
        'email' => $this->consultant->email,
        'password' => 'newpassword123',
        'password_confirmation' => 'newpassword123',
    ]);

    $response->assertSessionHasErrors('email');
});

test('tenant password reset requires matching confirmation', function (): void {
    Notification::fake();

    $this->post(route('dealer.password.email'), ['email' => $this->consultant->email]);

    Notification::assertSentTo($this->consultant, ResetPassword::class, function ($notification): true {
        $response = $this->post(route('dealer.password.store'), [
            'token' => $notification->token,
            'email' => $this->consultant->email,
            'password' => 'new-password-123',
            'password_confirmation' => 'different-password',
        ]);

        $response->assertSessionHasErrors('password');

        return true;
    });
});

test('tenant password reset does not affect central database', function (): void {
    Notification::fake();

    // Store original central password hash
    tenancy()->end();
    $centralUser = User::query()->where('email', $this->consultant->email)->first();
    $originalCentralHash = $centralUser?->password;
    tenancy()->initialize($this->tenant);

    $this->post(route('dealer.password.email'), ['email' => $this->consultant->email]);

    Notification::assertSentTo($this->consultant, ResetPassword::class, function ($notification) use ($originalCentralHash): true {
        $this->post(route('dealer.password.store'), [
            'token' => $notification->token,
            'email' => $this->consultant->email,
            'password' => 'new-password-123',
            'password_confirmation' => 'new-password-123',
        ]);

        // Verify the central user's password was NOT changed
        tenancy()->end();
        $centralUser = User::query()->where('email', $this->consultant->email)->first();

        if ($centralUser !== null) {
            expect($centralUser->password)->toBe($originalCentralHash);
        }

        tenancy()->initialize($this->tenant);

        return true;
    });
});
