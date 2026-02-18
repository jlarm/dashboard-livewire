<script setup lang="ts">

import {Head, Link} from "@inertiajs/vue3";
import AppLayout from "@/layouts/AppLayout.vue";
import {BreadcrumbItemType} from "@/index";
import employees from "@/routes/employees";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import CreateDialog from "@/pages/central/user/partials/CreateDialog.vue";
import Navigation from "@/pages/central/user/partials/Navigation.vue";

interface User {
    id: number;
    name: string;
    slug: string;
    email: string;
    role: string;
    passed_courses_count: number;
}

defineProps<{
    users: User[];
    totalCourseCount: number;
}>();

const breadcrumbs: BreadcrumbItemType[] = [
    {
        title: 'Employees',
        href: employees.index.url(),
    }
]
</script>

<template>
    <Head title="Employees" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <template #header-actions>
            <div class="flex items-center gap-4">
                <Navigation />
                <CreateDialog />
            </div>
        </template>

        <div class="overflow-hidden rounded-lg border">
            <Table class="text-sm">
                <TableHeader class="[&_tr]:border-b bg-muted sticky top-0 z-10">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Completed Courses</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user in users" :key="user.id">
                        <TableCell>{{ user.name }}</TableCell>
                        <TableCell>{{ user.email }}</TableCell>
                        <TableCell>
                            <Badge variant="outline">
                                {{ user.role }}
                            </Badge>
                        </TableCell>
                        <TableCell>{{ user.passed_courses_count }} of {{ totalCourseCount }}</TableCell>
                        <TableCell class="text-right">
                            <Button size="sm" variant="outline" :user="user" as-child>
                                <Link :href="employees.show(user)">View</Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </AppLayout>
</template>
