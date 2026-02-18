<?php

declare(strict_types=1);

use App\Models\User;
use App\Providers\AppServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\URL;

test('verified tenant users are redirected from verification notice', function (): void {
    $this->consultant->email_verified_at = now();
    $this->consultant->save();

    $this->actingAs($this->consultant)
        ->get(route('dealer.verification.notice'))
        ->assertRedirect(AppServiceProvider::HOME);
});

test('tenant email verification screen requires authentication', function (): void {
    $this->get(route('dealer.verification.notice'))
        ->assertRedirect(route('dealer.login'));
});

test('tenant email can be verified with valid signed url', function (): void {
    Event::fake([Verified::class]);

    $unverified = User::query()->create([
        'name' => 'Unverified User',
        'email' => 'unverified@test-tenant.localhost',
        'password' => bcrypt('password'),
        'email_verified_at' => null,
    ]);

    $verificationUrl = URL::temporarySignedRoute(
        'dealer.verification.verify',
        now()->addMinutes(60),
        ['id' => $unverified->id, 'hash' => sha1($unverified->getEmailForVerification())]
    );

    $this->actingAs($unverified)
        ->get($verificationUrl)
        ->assertRedirect(AppServiceProvider::HOME.'?verified=1');

    Event::assertDispatched(Verified::class);
    expect($unverified->fresh()->hasVerifiedEmail())->toBeTrue();
});

test('tenant email cannot be verified with invalid hash', function (): void {
    $unverified = User::query()->create([
        'name' => 'Unverified User',
        'email' => 'unverified@test-tenant.localhost',
        'password' => bcrypt('password'),
        'email_verified_at' => null,
    ]);

    $verificationUrl = URL::temporarySignedRoute(
        'dealer.verification.verify',
        now()->addMinutes(60),
        ['id' => $unverified->id, 'hash' => sha1('wrong-email')]
    );

    $this->actingAs($unverified)->get($verificationUrl);

    expect($unverified->fresh()->hasVerifiedEmail())->toBeFalse();
});

test('tenant verification notification can be resent', function (): void {
    Notification::fake();

    $unverified = User::query()->create([
        'name' => 'Unverified User',
        'email' => 'unverified@test-tenant.localhost',
        'password' => bcrypt('password'),
        'email_verified_at' => null,
    ]);

    $this->actingAs($unverified)
        ->post(route('dealer.verification.send'))
        ->assertRedirect()
        ->assertSessionHas('status', 'verification-link-sent');

    Notification::assertSentTo($unverified, VerifyEmail::class);
});

test('tenant verification notification is not sent if already verified', function (): void {
    Notification::fake();

    $this->consultant->email_verified_at = now();
    $this->consultant->save();

    $this->actingAs($this->consultant)
        ->post(route('dealer.verification.send'))
        ->assertRedirect(AppServiceProvider::HOME);

    Notification::assertNothingSent();
});
