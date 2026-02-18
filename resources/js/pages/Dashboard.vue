<script setup lang="ts">

import {Head} from "@inertiajs/vue3";
import AppLayout from "@/layouts/AppLayout.vue";
import {BreadcrumbItem} from "@/index";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-vue-next";
import {dashboard} from "@/routes";

interface Dealership {
    id: number;
    name: string;
    url: string;
}

defineProps<{
    dealerships: Dealership[];
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
    },
];
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <ul class="w-[400px] mx-auto divide-y">
            <li v-for="dealership in dealerships" :key="dealership.id" class="flex items-center justify-between py-3">
                <p>{{ dealership.name }}</p>
                <Button size="sm" variant="outline" as-child>
                    <a :href="dealership.url" target="_blank">View <ArrowUpRight /></a>
                </Button>
            </li>
        </ul>
    </AppLayout>
</template>
