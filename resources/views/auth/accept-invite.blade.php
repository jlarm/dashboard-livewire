@extends('layouts.app')

@section('title', 'Accept Invite')

@section('content')
    <h1 class="text-2xl font-semibold">Accept Invite</h1>
    <p class="mt-2 text-slate-600">{{ $user['name'] }} ({{ $user['email'] }})</p>

    <form method="POST" action="{{ route('invite.store', $user['id']) }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        <div>
            <label for="phone" class="block text-sm font-medium">Phone (###-###-####)</label>
            <input id="phone" name="phone" type="text" value="{{ old('phone') }}" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password" class="block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <div>
            <label for="password_confirmation" class="block text-sm font-medium">Confirm password</label>
            <input id="password_confirmation" name="password_confirmation" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Accept invite</button>
    </form>
@endsection
