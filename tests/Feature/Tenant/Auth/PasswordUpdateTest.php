<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

beforeEach(function (): void {
    Password::defaults(fn () => Password::min(8));
});

test('tenant user can update password', function (): void {
    $response = $this->actingAs($this->consultant)->put(route('dealer.password.update'), [
        'current_password' => 'password',
        'password' => 'new-password-123',
        'password_confirmation' => 'new-password-123',
    ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect()
        ->assertSessionHas('status', 'password-updated');

    expect(Hash::check('new-password-123', $this->consultant->fresh()->password))->toBeTrue();
});

test('tenant user cannot update password with incorrect current password', function (): void {
    $response = $this->actingAs($this->consultant)->put(route('dealer.password.update'), [
        'current_password' => 'wrong-password',
        'password' => 'new-password-123',
        'password_confirmation' => 'new-password-123',
    ]);

    $response->assertSessionHasErrors('current_password', errorBag: 'updatePassword');
});

test('tenant password update requires confirmation to match', function (): void {
    $response = $this->actingAs($this->consultant)->put(route('dealer.password.update'), [
        'current_password' => 'password',
        'password' => 'new-password-123',
        'password_confirmation' => 'different-password',
    ]);

    $response->assertSessionHasErrors('password', errorBag: 'updatePassword');
});

test('tenant password update requires authentication', function (): void {
    $this->put(route('dealer.password.update'), [
        'current_password' => 'password',
        'password' => 'new-password-123',
        'password_confirmation' => 'new-password-123',
    ])->assertRedirect(route('dealer.login'));
});
