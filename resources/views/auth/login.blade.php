<x-guest-layout>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-md">
            <flux:card class="space-y-6">
                <div>
                    <flux:heading size="lg">Log in to your account</flux:heading>
                    <flux:text class="mt-2">Welcome back!</flux:text>
                </div>

                <form method="post" action="{{ route('login.store') }}" class="space-y-6">
                    @csrf
                    <div class="space-y-6">
                        <flux:field>
                            <flux:label>Email address</flux:label>
                            <flux:input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus />
                            <flux:error name="email" />
                        </flux:field>

                        <flux:field>
                            <div class="flex justify-between">
                                <flux:label>Password</flux:label>
                                <flux:link wire:navigate variant="subtle" href="{{ route('password.request') }}" class="text-sm">Forgot password?</flux:link>
                            </div>
                            <flux:input id="password" name="password" type="password" required />
                            <flux:error name="password" />
                        </flux:field>

                        <flux:checkbox name="remember" label="Remember me" />
                    </div>

                    <flux:button type="submit" variant="primary" class="w-full">Log in</flux:button>
                </form>
            </flux:card>
        </div>
    </div>
</x-guest-layout>
