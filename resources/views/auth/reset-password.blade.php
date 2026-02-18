@extends('layouts.app')

@section('title', 'Reset Password')

@section('content')
    <h1 class="text-2xl font-semibold">Reset Password</h1>

    <form method="POST" action="{{ route('password.store') }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        <input type="hidden" name="token" value="{{ $token }}">

        <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email', $email) }}" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password" class="block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password_confirmation" class="block text-sm font-medium">Confirm password</label>
            <input id="password_confirmation" name="password_confirmation" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Reset password</button>
    </form>
@endsection
