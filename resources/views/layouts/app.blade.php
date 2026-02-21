<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('components.partials.head')
</head>
<body class="min-h-screen antialiased">
<div class="flex min-h-screen">
    <x-central.sidebar />

    <flux:header class="lg:hidden">
        <flux:sidebar.toggle class="lg:hidden" icon="bars-2" inset="left" />

        <flux:spacer />

        <flux:profile avatar="/img/demo/user.png" />
    </flux:header>

    <flux:main>
        <div class="flex items-center justify-between">
            @isset($title)
            <flux:heading size="xl">{{ $title }}</flux:heading>
            @endisset
            @isset($actions)
                {{ $actions }}
            @endisset
        </div>
        @if(isset($title) || isset($actions))
            <flux:separator variant="subtle" class="my-4" />
        @endif
        {{ $slot }}
    </flux:main>
</div>
@livewireScripts
@fluxScripts
</body>
</html>
