@extends('layouts.app')

@section('title', 'Forgot Password')

@section('content')
    <h1 class="text-2xl font-semibold">Forgot Password</h1>

    <form method="POST" action="{{ route('password.email') }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email') }}" required class="mt-1 w-full rounded border p-2">
        </div>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Email reset link</button>
    </form>
@endsection
