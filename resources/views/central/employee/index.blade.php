<x-app-layout>
    <x-slot:title>Employees</x-slot:title>
    <x-slot:actions>
        <flux:button variant="primary" size="sm">Invite Employee</flux:button>
    </x-slot:actions>

    <flux:card>
        <livewire:central.employee.index />
    </flux:card>
</x-app-layout>
