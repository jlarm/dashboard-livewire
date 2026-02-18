<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

beforeEach(function (): void {
    Password::defaults(fn () => Password::min(8));
});

test('password can be updated', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->put(route('password.update'), [
        'current_password' => 'password',
        'password' => 'new-password-123',
        'password_confirmation' => 'new-password-123',
    ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect()
        ->assertSessionHas('status', 'password-updated');

    expect(Hash::check('new-password-123', $user->fresh()->password))->toBeTrue();
});

test('password cannot be updated with incorrect current password', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->put(route('password.update'), [
        'current_password' => 'wrong-password',
        'password' => 'new-password-123',
        'password_confirmation' => 'new-password-123',
    ]);

    $response->assertSessionHasErrors('current_password', errorBag: 'updatePassword');
});

test('password update requires confirmation to match', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->put(route('password.update'), [
        'current_password' => 'password',
        'password' => 'new-password-123',
        'password_confirmation' => 'different-password',
    ]);

    $response->assertSessionHasErrors('password', errorBag: 'updatePassword');
});

test('password update requires authentication', function (): void {
    $this->put(route('password.update'), [
        'current_password' => 'password',
        'password' => 'new-password-123',
        'password_confirmation' => 'new-password-123',
    ])->assertRedirect(route('login'));
});
