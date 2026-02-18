<script setup lang="ts">

import {Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Loader, Send} from "lucide-vue-next";
import {Form} from "@inertiajs/vue3";
import {store} from "@/routes/employees";
import { ref } from "vue";

const open = ref(false);
const showSuccess = ref(false);
let successTimer: number | null = null;

const handleSuccess = (): void => {
    open.value = false;
    showSuccess.value = true;

    if (successTimer) {
        window.clearTimeout(successTimer);
    }

    successTimer = window.setTimeout(() => {
        showSuccess.value = false;
    }, 3000);
};
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger as-child>
            <Button size="sm">Add Employee</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Employee</DialogTitle>
                <DialogDescription></DialogDescription>
            </DialogHeader>
            <Form
                :action="store()"
                #default="{ processing }"
                method="post"
                class="grid gap-4"
                resetOnSuccess
                disableWhileProcessing
                @success="handleSuccess"
            >
                <div class="grid gap-3">
                    <label for="name" class="text-sm font-medium leading-none">Name</label>
                    <Input id="name" name="name" />
                </div>
                <div class="grid gap-3">
                    <label for="email" class="text-sm font-medium leading-none">Email</label>
                    <Input id="email" name="email" type="email" placeholder="example@email.com" />
                </div>
                <Button type="submit">
                    <Send v-if="!processing" />
                    <Loader class="animate-spin" v-if="processing" color="currentColor" />
                    {{ processing ? 'Sending Invite...' : 'Invite Employee'}}
                </Button>
            </Form>
        </DialogContent>
    </Dialog>

    <div
        v-if="showSuccess"
        class="fixed top-4 right-4 z-50 rounded-md border bg-background px-4 py-3 text-sm shadow-md"
    >
        Employee invite sent.
    </div>
</template>
