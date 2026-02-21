<flux:sidebar.nav>
    <flux:sidebar.item wire:navigate icon="home" href="{{ route('dashboard') }}">Home</flux:sidebar.item>
    <flux:sidebar.item wire:navigate icon="user" href="{{ route('employees.index') }}">Employees</flux:sidebar.item>
    <flux:sidebar.item wire:navigate icon="document-text" href="#">Dealerships</flux:sidebar.item>
</flux:sidebar.nav>
