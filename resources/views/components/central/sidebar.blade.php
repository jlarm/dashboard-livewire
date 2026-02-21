<flux:sidebar sticky collapsible="mobile" class="bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-700">
    <flux:sidebar.header>
        <x-central.brand />

        <flux:sidebar.collapse class="lg:hidden" />
    </flux:sidebar.header>

    <x-central.main-navigation />

    <flux:sidebar.spacer />

    <x-central.secondary-navigation />

    <flux:dropdown position="top" align="start" class="max-lg:hidden">
        <flux:sidebar.profile avatar="/img/demo/user.png" name="Olivia Martin" />

        <x-central.user-navigation />
    </flux:dropdown>
</flux:sidebar>
