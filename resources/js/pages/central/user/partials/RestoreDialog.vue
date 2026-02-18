<script setup lang="ts">

import {Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Form} from "@inertiajs/vue3";
import {restore} from "@/routes/employees";

defineProps<{
    user: { id: number, name: string }
}>();
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button size="sm" variant="outline">
                Restore
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Restore {{ user.name }}</DialogTitle>
                <DialogDescription>Are you sure you want to restore this employee?</DialogDescription>
            </DialogHeader>
            <Form :action="restore(user)" class="grid grid-cols-2 gap-2" #default="{ processing }">
                <Button type="submit" class="w-full" :disabled="processing">
                    {{ processing ? 'Restoring...' : 'Restore' }}
                </Button>
                <DialogClose as-child>
                    <Button class="w-full" variant="outline">Cancel</Button>
                </DialogClose>
            </Form>
        </DialogContent>
    </Dialog>
</template>
