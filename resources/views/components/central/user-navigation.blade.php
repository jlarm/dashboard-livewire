<flux:dropdown position="top" align="start" class="max-lg:hidden">
    <flux:sidebar.profile :name="auth()->user()->name" />

    <flux:menu>
        <flux:sidebar.item icon="cog-6-tooth" :href="route('profile.edit')">Profile</flux:sidebar.item>

        <flux:menu.separator />

        <flux:menu.item icon="arrow-right-start-on-rectangle">Logout</flux:menu.item>
    </flux:menu>
</flux:dropdown>
