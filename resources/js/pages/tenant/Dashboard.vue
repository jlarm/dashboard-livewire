<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { BreadcrumbItem } from '@/index';
import TenantLayout from "@/layouts/TenantLayout.vue";
import tenant from "@/actions/App/Http/Controllers/Tenant";
import InitialStoreCreateForm from "@/components/tenant/InitialStoreCreateForm.vue";
import { computed } from "vue";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: tenant.DashboardController.index.url(),
    },
];

const page = usePage()
const hasStores = computed(() => page.props.tenant?.hasStores ?? true)
</script>

<template>
    <Head title="Dashboard" />

    <TenantLayout :breadcrumbs="breadcrumbs">
        <div v-if="!hasStores" class="max-w-xl mx-auto">
            <InitialStoreCreateForm />
        </div>
    </TenantLayout>
</template>
