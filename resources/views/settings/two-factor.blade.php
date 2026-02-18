@extends('layouts.app')

@section('title', 'Two-Factor Authentication')

@section('content')
    <h1 class="text-2xl font-semibold">Two-Factor Authentication</h1>
    <div class="mt-6 rounded border bg-white p-4 text-sm">
        <p><strong>Enabled:</strong> {{ !empty($twoFactorEnabled) ? 'Yes' : 'No' }}</p>
        <p><strong>Requires confirmation:</strong> {{ !empty($requiresConfirmation) ? 'Yes' : 'No' }}</p>
        <p class="mt-2 text-slate-600">Replace this with your Livewire 4 two-factor settings UI.</p>
    </div>
@endsection
