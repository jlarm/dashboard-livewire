@extends('layouts.app')

@section('title', 'Employee Details')

@section('content')
    <h1 class="text-2xl font-semibold">Employee Details</h1>
    <div class="mt-6 rounded border bg-white p-4">
        <pre class="overflow-x-auto text-sm text-slate-700">{{ json_encode(['user' => $user ?? null, 'currentDealerships' => $currentDealerships ?? [], 'dealerships' => $dealerships ?? []], JSON_PRETTY_PRINT) }}</pre>
    </div>
@endsection
