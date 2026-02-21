<!doctype html>
<html lang="en">
<head>
    @include('components.partials.head')
</head>
<body class="antialiased">
    <div>
        {{ $slot }}
    </div>
</body>
<x-footer />
</html>
