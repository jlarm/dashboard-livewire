@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
    <h1 class="text-2xl font-semibold">Dashboard</h1>
    <p class="mt-2 text-slate-600">Temporary Blade view while migrating to Livewire 4.</p>

    <div class="mt-6 rounded border bg-white p-4">
        <h2 class="font-medium">Dealerships</h2>
        <pre class="mt-3 overflow-x-auto text-sm text-slate-700">{{ json_encode($dealerships ?? [], JSON_PRETTY_PRINT) }}</pre>
    </div>
@endsection
