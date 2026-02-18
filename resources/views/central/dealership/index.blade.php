@extends('layouts.app')

@section('title', 'Dealerships')

@section('content')
    <h1 class="text-2xl font-semibold">Dealerships</h1>
    <div class="mt-6 rounded border bg-white p-4">
        <pre class="overflow-x-auto text-sm text-slate-700">{{ json_encode($dealerships ?? [], JSON_PRETTY_PRINT) }}</pre>
    </div>
@endsection
