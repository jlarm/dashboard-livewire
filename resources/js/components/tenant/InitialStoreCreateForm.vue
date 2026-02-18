<script setup lang="ts">

import {Card} from "@/components/ui/card";
import {Form, usePage} from "@inertiajs/vue3";
import {Input} from "@/components/ui/input";
import {Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet} from "@/components/ui/field";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import type { AppPageProps } from "@/types";
import {computed} from "vue";
import {store} from "@/actions/App/Http/Controllers/Tenant/StoreController";

const page = usePage<AppPageProps<{
    states?: {
        value: string
        label: string
    }[]
}>>()

const states = computed(() => page.props.states ?? [])
</script>

<template>
    <Card class="p-5">
        <Form
            :action="store()"
            #default="{ errors, processing }"
            method="post"
            resetOnSuccess
            disableWhileProcessing
        >
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Create a Dealership</FieldLegend>
                    <FieldDescription>
                        A minimum of one dealership must be created before moving forward.
                    </FieldDescription>
                    <Field>
                        <FieldLabel for="name">Dealership Name <span>*</span></FieldLabel>
                        <Input id="name" name="name" type="text" required autofocus />
                        <FieldError :errors="[errors.name]" />
                    </Field>
                    <Field>
                        <FieldLabel for="address">Address</FieldLabel>
                        <Input id="address" name="address" type="text" />
                        <FieldError :errors="[errors.address]" />
                    </Field>
                    <div class="grid grid-cols-3 gap-4">
                        <Field>
                            <FieldLabel for="city">City</FieldLabel>
                            <Input id="city" name="city" type="text" />
                            <FieldError :errors="[errors.city]" />
                        </Field>
                        <Field>
                            <FieldLabel for="state">State</FieldLabel>
                            <Select name="state" id="state">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a state" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        v-for="state in states"
                                        :key="state.value"
                                        :value="state.value"
                                    >
                                        {{ state.label }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FieldError :errors="[errors.state]" />
                        </Field>
                        <Field>
                            <FieldLabel for="postal_code">Zip Code</FieldLabel>
                            <Input id="postal_code" name="postal_code" type="text" />
                            <FieldError :errors="[errors.postal_code]" />
                        </Field>
                    </div>
                    <Field orientation="horizontal">
                        <Button type="submit">{{ processing ? 'Creating...' : 'Create'}}</Button>
                    </Field>
                </FieldSet>
            </FieldGroup>
        </Form>
    </Card>
</template>
