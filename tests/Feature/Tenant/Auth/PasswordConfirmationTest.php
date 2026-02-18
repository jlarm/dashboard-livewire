<?php

declare(strict_types=1);

use Inertia\Testing\AssertableInertia as Assert;

test('tenant confirm password screen can be rendered', function (): void {
    $this->actingAs($this->consultant)
        ->get(route('dealer.password.confirm'))
        ->assertOk()
        ->assertInertia(fn (Assert $page): Assert => $page
            ->component('auth/ConfirmPassword')
        );
});

test('tenant password confirmation requires authentication', function (): void {
    $this->get(route('dealer.password.confirm'))
        ->assertRedirect(route('dealer.login'));
});

test('tenant password can be confirmed with correct password', function (): void {
    $response = $this->actingAs($this->consultant)->post('/confirm-password', [
        'password' => 'password',
    ]);

    $response->assertRedirect(route('dealer.dashboard', absolute: false));
    $response->assertSessionHasNoErrors();
});

test('tenant password cannot be confirmed with incorrect password', function (): void {
    $response = $this->actingAs($this->consultant)->post('/confirm-password', [
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors('password');
});
