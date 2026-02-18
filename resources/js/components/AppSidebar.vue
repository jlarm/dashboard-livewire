<script setup lang="ts">
import {SidebarFooter, SidebarProps} from '@/components/ui/sidebar'
import { Link, usePage } from '@inertiajs/vue3'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import NavUser from "@/components/NavUser.vue";
import {dashboard} from "@/routes";
import AppLogoIcon from "@/components/AppLogoIcon.vue";
import { computed } from 'vue';
import dealerships from "@/routes/dealerships";
import employees from "@/routes/employees";

const props = defineProps<SidebarProps>()
const page = usePage()
const canViewEmployees = computed(() =>
    Boolean(page.props.auth?.abilities?.viewEmployees),
);

const navMain = computed(() => [
    {
        items: [
            {
                title: 'Dashboard',
                url: dashboard()
            },
            ...(canViewEmployees.value
                ? [
                      {
                          title: 'Employees',
                          url: employees.index.url(),
                      },
                  ]
                : []),
            {
                title: 'Dealerships',
                url: dealerships.index.url(),
            },
        ],
    },
]);
</script>

<template>
  <Sidebar v-bind="props" collapsible="none">
    <SidebarHeader class="h-16 justify-center px-4 py-0">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton as-child class="h-9 data-[slot=sidebar-menu-button]:!p-1.5">
                    <Link :href="dashboard()">
                        <AppLogoIcon class="h-5 w-5" />
                        <span class="text-base font-semibold">ARMP</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup v-for="(item, index) in navMain" :key="index">
        <SidebarGroupLabel v-if="item.title">{{ item.title }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
              <SidebarMenuButton as-child :is-active="page.url.startsWith(childItem.url)">
                <Link :href="childItem.url">{{ childItem.title }}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
      <SidebarFooter>
          <NavUser />
      </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
