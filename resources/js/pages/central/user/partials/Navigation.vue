<script setup lang="ts">

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import {Link, usePage} from "@inertiajs/vue3";
import employees, {deleted, openInvites} from "@/routes/employees";

const page = usePage();
</script>

<template>
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :active="page.url === employees.index.url()">
                    <Link :href="employees.index.url()">Employees</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :active="page.url === openInvites.url()">
                    <Link :href="openInvites.url()">Open Invites</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink as-child :active="page.url === deleted.url()">
                    <Link :href="deleted.url()">Deleted</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>
