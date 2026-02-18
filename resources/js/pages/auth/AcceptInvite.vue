<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { store } from '@/routes/invite';
import { Form, Head } from '@inertiajs/vue3';

interface InvitedUser {
    id: number;
    name: string;
    email: string;
}

defineProps<{
    user: InvitedUser;
}>();

const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 10);

    if (digits.length <= 3) {
        return digits;
    }

    if (digits.length <= 6) {
        return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }

    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const handlePhoneInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const formatted = formatPhone(target.value);
    if (target.value !== formatted) {
        target.value = formatted;
    }
};
</script>

<template>
    <AuthLayout
        title="Set up your account"
        :description="`Welcome ${user.name}. Add your phone and create a password to activate your account.`"
    >
        <Head title="Accept invitation" />

        <Form
            v-bind="store({ user: user.id })"
            :reset-on-success="['password', 'password_confirmation']"
            v-slot="{ errors, processing }"
            class="flex flex-col gap-6"
        >
            <div class="grid gap-6">

                <div class="grid gap-2">
                    <Label for="phone">Phone number</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        @input="handlePhoneInput"
                        required
                        autocomplete="tel-national"
                        inputmode="numeric"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        maxlength="12"
                        placeholder="999-999-9999"
                        autofocus
                    />
                    <InputError :message="errors.phone" />
                </div>

                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autocomplete="new-password"
                        placeholder="Password"
                    />
                    <InputError :message="errors.password" />
                </div>

                <div class="grid gap-2">
                    <Label for="password_confirmation">Confirm password</Label>
                    <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        required
                        autocomplete="new-password"
                        placeholder="Confirm password"
                    />
                    <InputError :message="errors.password_confirmation" />
                </div>

                <Button type="submit" class="w-full" :disabled="processing">
                    <Spinner v-if="processing" />
                    Activate account
                </Button>
            </div>
        </Form>
    </AuthLayout>
</template>
