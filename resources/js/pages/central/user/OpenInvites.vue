<script setup lang="ts">
import {BreadcrumbItemType} from "@/index";
import {openInvites} from "@/routes/employees";
import {Head} from "@inertiajs/vue3";
import CreateDialog from "@/pages/central/user/partials/CreateDialog.vue";
import Navigation from "@/pages/central/user/partials/Navigation.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import DeleteDialog from "@/pages/central/user/partials/DeleteDialog.vue";

interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
}

defineProps<{
    users: User[];
}>();

const breadcrumbs: BreadcrumbItemType[] = [
    {
        title: 'Open Invites',
        href: openInvites.url(),
    }
]
</script>

<template>
    <Head title="Open Invites" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <template #header-actions>
            <div class="flex items-center gap-4">
                <Navigation />
                <CreateDialog />
            </div>
        </template>

        <div class="overflow-hidden rounded-lg border">
            <div
                v-if="users.length === 0"
                class="px-6 py-12 text-center text-sm text-muted-foreground"
            >
                No open invites.
            </div>
            <Table v-else class="text-sm">
                <TableHeader class="[&_tr]:border-b bg-muted sticky top-0 z-10">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Invited</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user in users" :key="user.id">
                        <TableCell>{{ user.name }}</TableCell>
                        <TableCell>{{ user.email }}</TableCell>
                        <TableCell>{{ user.createdAt }}</TableCell>
                        <TableCell class="text-right">
                            <DeleteDialog :user="user" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </AppLayout>
</template>
