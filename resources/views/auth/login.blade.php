@extends('layouts.app')

@section('title', 'Login')

@section('content')
    <h1 class="text-2xl font-semibold">Login</h1>

    <form method="POST" action="{{ route('login.store') }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password" class="block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <label class="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" name="remember">
            <span>Remember me</span>
        </label>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Sign in</button>

        <div class="text-sm">
            @if (!empty($canResetPassword))
                <a href="{{ route('password.request') }}" class="text-blue-700 underline">Forgot password?</a>
            @endif
        </div>
    </form>
@endsection
