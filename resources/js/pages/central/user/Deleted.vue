<script setup lang="ts">
import {BreadcrumbItemType} from "@/index";
import {deleted, openInvites} from "@/routes/employees";
import {Head} from "@inertiajs/vue3";
import CreateDialog from "@/pages/central/user/partials/CreateDialog.vue";
import Navigation from "@/pages/central/user/partials/Navigation.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Trash2} from "lucide-vue-next";
import RestoreDialog from "@/pages/central/user/partials/RestoreDialog.vue";

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    deletedAt: string;
}

defineProps<{
    users: User[];
}>();

const breadcrumbs: BreadcrumbItemType[] = [
    {
        title: 'Deleted Employees',
        href: deleted.url(),
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
                No deleted employees.
            </div>
            <Table v-else class="text-sm">
                <TableHeader class="[&_tr]:border-b bg-muted sticky top-0 z-10">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Deleted</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user in users" :key="user.id">
                        <TableCell>{{ user.name }}</TableCell>
                        <TableCell>{{ user.email }}</TableCell>
                        <TableCell>{{ user.deletedAt }}</TableCell>
                        <TableCell>
                            <Badge :variant="user.email_verified_at ? 'default' : 'secondary'">
                                {{ user.email_verified_at ? 'User' : 'Invite' }}
                            </Badge>
                        </TableCell>
                        <TableCell class="text-right">
                            <RestoreDialog :user="user" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </AppLayout>
</template>
