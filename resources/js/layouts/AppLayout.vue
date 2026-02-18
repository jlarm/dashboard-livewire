<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {BreadcrumbItemType} from "@/index";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
                <slot name="header-actions" />
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4">
                <slot />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>
