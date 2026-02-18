<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Mail;

beforeEach(function (): void {
    $this->seedRolesAndPermissions();
});

it('redirects guests to login', function (): void {
    $this->get(route('employees.index'))
        ->assertRedirect(route('login'));
});

it('allows super-admins to access employee pages', function (): void {
    $superAdmin = User::factory()->create();
    $superAdmin->assignRole('super-admin');
    $employee = User::factory()->create();

    $this->actingAs($superAdmin)->get(route('employees.index'))->assertOk();
    $this->actingAs($superAdmin)->get(route('employees.open-invites'))->assertOk();
    $this->actingAs($superAdmin)->get(route('employees.deleted'))->assertOk();
    $this->actingAs($superAdmin)->get(route('employees.show', $employee))->assertOk();
});

it('forbids non super-admins from accessing employee pages', function (): void {
    $consultant = User::factory()->create();
    $consultant->assignRole('Consultant');
    $employee = User::factory()->create();

    $this->actingAs($consultant)->get(route('employees.index'))->assertForbidden();
    $this->actingAs($consultant)->get(route('employees.open-invites'))->assertForbidden();
    $this->actingAs($consultant)->get(route('employees.deleted'))->assertForbidden();
    $this->actingAs($consultant)->get(route('employees.show', $employee))->assertForbidden();
});

it('allows super-admins to send employee invites', function (): void {
    Mail::fake();

    $superAdmin = User::factory()->create();
    $superAdmin->assignRole('super-admin');

    $inviteeEmail = 'invitee-'.uniqid().'@example.com';

    $this->actingAs($superAdmin)->post(route('employees.store'), [
        'name' => 'Invited User',
        'email' => $inviteeEmail,
    ])->assertOk();

    $invitedUser = User::query()->where('email', $inviteeEmail)->first();

    expect($invitedUser)->not->toBeNull();
    expect($invitedUser->hasRole('Consultant'))->toBeTrue();
});

it('forbids non super-admins from sending employee invites', function (): void {
    Mail::fake();

    $consultant = User::factory()->create();
    $consultant->assignRole('Consultant');

    $inviteeEmail = 'forbidden-invitee-'.uniqid().'@example.com';

    $this->actingAs($consultant)->post(route('employees.store'), [
        'name' => 'Forbidden Invite',
        'email' => $inviteeEmail,
    ])->assertForbidden();

    $this->assertDatabaseMissing('users', [
        'email' => $inviteeEmail,
    ]);
});
