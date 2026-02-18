@extends('layouts.app')

@section('title', 'Profile Settings')

@section('content')
    <h1 class="text-2xl font-semibold">Profile</h1>

    <form method="POST" action="{{ route('profile.update') }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        @method('PATCH')

        <div>
            <label for="name" class="block text-sm font-medium">Name</label>
            <input id="name" name="name" type="text" value="{{ old('name', auth()->user()->name) }}" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="email" class="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email', auth()->user()->email) }}" required class="mt-1 w-full rounded border p-2">
        </div>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Save profile</button>
    </form>

    <form method="POST" action="{{ route('profile.destroy') }}" class="mt-4 rounded border border-red-300 bg-red-50 p-4">
        @csrf
        @method('DELETE')
        <div>
            <label for="delete_password" class="block text-sm font-medium">Confirm password to delete account</label>
            <input id="delete_password" name="password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>
        <button type="submit" class="mt-3 rounded bg-red-700 px-4 py-2 text-white">Delete account</button>
    </form>
@endsection
