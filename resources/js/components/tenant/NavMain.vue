<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next"
import { ChevronRight } from "lucide-vue-next"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link, usePage } from "@inertiajs/vue3"
import { computed } from "vue"

const props = withDefaults(defineProps<{
    disabled?: boolean
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}>(), {
    disabled: false,
})

const isPlaceholderUrl = (url: string) => {
    const value = url.trim()
    return value === "" || value === "#" || value.startsWith("#")
}

const canonicalizePath = (path: string) =>
    path !== "/" ? path.replace(/\/+$/, "") : path

const normalizePath = (url: string) => {
    if (isPlaceholderUrl(url)) {
        return ""
    }

    try {
        const parsed = new URL(url, typeof window !== "undefined" ? window.location.origin : "http://localhost")
        return canonicalizePath(parsed.pathname)
    } catch {
        return canonicalizePath(url)
    }
}

const page = usePage()
const currentPath = computed(() => normalizePath(page.url))
const linksEnabled = computed(() => !props.disabled)

const isPathActive = (url: string) => {
    const normalized = normalizePath(url)
    return normalized !== "" && normalized === currentPath.value
}

const hasActiveChild = (item: { items?: { url: string }[] }) =>
    item.items?.some((subItem) => isPathActive(subItem.url)) ?? false

const isItemActive = (item: {
    url: string
    isActive?: boolean
    items?: { url: string }[]
}) => isPathActive(item.url) || hasActiveChild(item)
</script>

<template>
    <SidebarGroup>
        <SidebarMenu>
            <template v-for="item in items" :key="item.title">
                <Collapsible
                    v-if="item.items?.length"
                    as-child
                    :default-open="hasActiveChild(item)"
                    class="group/collapsible"
                >
                    <SidebarMenuItem>
                        <CollapsibleTrigger as-child>
                            <SidebarMenuButton :tooltip="item.title" :is-active="isItemActive(item)">
                                <component :is="item.icon" v-if="item.icon" />
                                <span>{{ item.title }}</span>
                                <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                                    <SidebarMenuSubButton as-child :is-active="isPathActive(subItem.url)">
                                        <Link v-if="linksEnabled" :href="subItem.url">
                                            <span>{{ subItem.title }}</span>
                                        </Link>
                                        <span v-else class="opacity-60">
                                            <span>{{ subItem.title }}</span>
                                        </span>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem v-else>
                    <SidebarMenuButton as-child :tooltip="item.title" :is-active="isItemActive(item)">
                        <Link v-if="linksEnabled" :href="item.url">
                            <component :is="item.icon" v-if="item.icon" />
                            <span>{{ item.title }}</span>
                        </Link>
                        <span v-else class="flex items-center gap-2 opacity-60">
                            <component :is="item.icon" v-if="item.icon" />
                            <span>{{ item.title }}</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </template>
        </SidebarMenu>
    </SidebarGroup>
</template>
