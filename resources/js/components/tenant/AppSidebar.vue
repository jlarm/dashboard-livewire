<script setup lang="ts">
import {
    IconDashboard,
    IconInnerShadowTop,
    IconSettings,
    IconClipboardSearch,
    IconFileCertificate,
    IconWall,
    IconUsers,
    IconPuzzle2,
    IconShield,
    IconFishHook, IconFolder, IconMedicalCross, IconBoxMultiple, IconArchive,
} from "@tabler/icons-vue"

import NavMain from "@/components/tenant/NavMain.vue"
import NavUser from "@/components/tenant/NavUser.vue"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import {useInitials} from "@/composables/useInitials";
import tenant from "@/actions/App/Http/Controllers/Tenant";
import AppLogoIcon from "@/components/AppLogoIcon.vue";

const page = usePage();
const tenantName = computed(() => page.props.tenant?.name);
const hasStores = computed(() => page.props.tenant?.hasStores ?? true);
const user = computed(() => page.props.auth?.user);

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: tenant.DashboardController.index.url(),
            icon: IconDashboard,
        },
        {
            title: "Employees",
            url: tenant.EmployeeController.index.url(),
            icon: IconUsers,
        },
        // {
        //     title: "IT Scans",
        //     url: "#",
        //     icon: IconWall,
        // },
        // {
        //     title: "Manuals",
        //     url: "#",
        //     icon: IconFileCertificate,
        //     isActive: true,
        //     items: [
        //         {
        //             title: "ISP",
        //             url: "#",
        //         },
        //         {
        //             title: "OSHA",
        //             url: "#",
        //         },
        //         {
        //             title: "Red Flag",
        //             url: "#",
        //         },
        //         {
        //             title: "CMS",
        //             url: "#",
        //         },
        //     ],
        // },
        // {
        //     title: "Audits",
        //     url: "#",
        //     icon: IconClipboardSearch,
        //     isActive: true,
        //     items: [
        //         {
        //             title: "OSHA",
        //             url: "#",
        //         },
        //         {
        //             title: "Body Shop",
        //             url: "#",
        //         },
        //         {
        //             title: "GLBA Walkthrough",
        //             url: "#",
        //         },
        //         {
        //             title: "Deal Jackets",
        //             url: "#",
        //         },
        //         {
        //             title: "Fit Tests",
        //             url: "#",
        //         },
        //     ],
        // },
        // {
        //     title: "Vendors",
        //     url: "#",
        //     icon: IconPuzzle2,
        // },
        // {
        //     title: "Ridgeback",
        //     url: "#",
        //     icon: IconShield,
        // },
        // {
        //     title: "Phishing",
        //     url: "#",
        //     icon: IconFishHook,
        // },
        // {
        //     title: "Documents",
        //     url: "#",
        //     icon: IconFolder,
        // },
        // {
        //     title: "OSHA 300 Form",
        //     url: "#",
        //     icon: IconMedicalCross,
        // },
        // {
        //     title: "SDS Sheets",
        //     url: "#",
        //     icon: IconBoxMultiple,
        // },
        // {
        //     title: "Settings",
        //     url: "#",
        //     icon: IconSettings,
        // },
        {
            title: "Logs",
            url: tenant.LogController.index.url(),
            icon: IconArchive,
        },
    ],
}
</script>

<template>
    <Sidebar collapsible="offcanvas">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        as-child
                        class="data-[slot=sidebar-menu-button]:!p-1.5"
                    >
                        <a href="#">
                            <AppLogoIcon class="h-5 w-5" />
                            <span class="text-base font-semibold tru">{{ tenantName }}</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <NavMain :items="data.navMain" :disabled="!hasStores" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="user" />
        </SidebarFooter>
    </Sidebar>
</template>
