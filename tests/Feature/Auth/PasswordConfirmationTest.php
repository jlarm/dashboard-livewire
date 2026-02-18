<?php

declare(strict_types=1);

use App\Models\User;

test('confirm password screen can be rendered', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('password.confirm'))
        ->assertOk()
        ->assertViewIs('auth.confirm-password');
});

test('password confirmation requires authentication', function (): void {
    $this->get(route('password.confirm'))
        ->assertRedirect(route('login'));
});

test('password can be confirmed with correct password', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('password.confirm'), [
        'password' => 'password',
    ]);

    $response->assertRedirect(route('dashboard', absolute: false));
    $response->assertSessionHasNoErrors();
});

test('password cannot be confirmed with incorrect password', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('password.confirm'), [
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors('password');
});
