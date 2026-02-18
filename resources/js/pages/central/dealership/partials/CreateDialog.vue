<script setup lang="ts">

import {Button} from "@/components/ui/button";
import {ref} from "vue";
import {Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent} from "@/components/ui/dialog";
import {Form} from "@inertiajs/vue3";
import {Input} from "@/components/ui/input";
import {store} from "@/actions/App/Http/Controllers/Central/DealershipController";
import {Loader} from "lucide-vue-next";

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
            <Button size="sm">Add Dealership</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Dealership</DialogTitle>
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
                    <Input id="name" name="name" placeholder="Dealership Name" />
                </div>
                <Button type="submit">
                    <Loader class="animate-spin" v-if="processing" color="currentColor" />
                    {{ processing ? 'Creating Dealership...' : 'Add Dealership' }}
                </Button>
            </Form>
        </DialogContent>
    </Dialog>
</template>
