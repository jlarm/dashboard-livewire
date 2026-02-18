<script setup lang="ts">

import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/tenant/AppSidebar.vue";
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
    <SidebarProvider
        :style=" {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        }"
    >
        <AppSidebar variant="floating" />
        <SidebarInset>
<!--            <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">-->
<!--                <div class="flex items-center gap-2 px-4">-->
<!--                    <Breadcrumbs :breadcrumbs="breadcrumbs" />-->
<!--                </div>-->
<!--            </header>-->
            <div class="p-6">
                <slot />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>
