<script setup lang="ts">
import {Trash2} from "lucide-vue-next";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Form} from "@inertiajs/vue3";
import {destroy} from "@/routes/employees";

defineProps<{
    user: { id: number, name: string }
}>();
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button size="sm" variant="destructive">
                <Trash2 />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Delete {{ user.name }}</DialogTitle>
                <DialogDescription>Are you sure you want to delete this employee?</DialogDescription>
            </DialogHeader>
            <Form :action="destroy(user)" class="grid grid-cols-2 gap-2" method="post" #default="{ processing }">
                <Button type="submit" variant="destructive" class="w-full" :disabled="processing">
                    {{ processing ? 'Deleting...' : 'Delete' }}
                </Button>
                <DialogClose as-child>
                    <Button class="w-full" variant="outline">Cancel</Button>
                </DialogClose>
            </Form>
        </DialogContent>
    </Dialog>
</template>
