@extends('layouts.app')

@section('title', 'Password Settings')

@section('content')
    <h1 class="text-2xl font-semibold">Password</h1>

    <form method="POST" action="{{ route('user-password.update') }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        @method('PUT')

        <div>
            <label for="current_password" class="block text-sm font-medium">Current password</label>
            <input id="current_password" name="current_password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password" class="block text-sm font-medium">New password</label>
            <input id="password" name="password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password_confirmation" class="block text-sm font-medium">Confirm new password</label>
            <input id="password_confirmation" name="password_confirmation" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Update password</button>
    </form>
@endsection
