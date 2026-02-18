@extends('layouts.app')

@section('title', 'Confirm Password')

@section('content')
    <h1 class="text-2xl font-semibold">Confirm Password</h1>

    <form method="POST" action="{{ url('/confirm-password') }}" class="mt-6 space-y-4 rounded border bg-white p-4">
        @csrf
        <div>
            <label for="password" class="block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required class="mt-1 w-full rounded border p-2">
        </div>

        <button type="submit" class="rounded bg-slate-900 px-4 py-2 text-white">Confirm</button>
    </form>
@endsection
