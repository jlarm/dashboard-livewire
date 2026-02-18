<script setup lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuLink,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuLink
    data-slot="navigation-menu-link"
    v-bind="forwarded"
    :class="cn('data-active:focus:bg-arm-blue-50 data-active:hover:bg-arm-blue-100 data-active:bg-arm-blue-50 data-active:text-arm-blue-700 dark:data-active:focus:bg-arm-blue-900 dark:data-active:hover:bg-arm-blue-800 dark:data-active:bg-arm-blue-900 dark:data-active:text-arm-blue-200 hover:bg-arm-blue-50 hover:text-arm-blue-700 focus:bg-arm-blue-50 focus:text-arm-blue-700 dark:hover:bg-arm-blue-900 dark:hover:text-arm-blue-200 dark:focus:bg-arm-blue-900 dark:focus:text-arm-blue-200 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*=\'text-\'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*=\'size-\'])]:size-4', props.class)"
  >
    <slot />
  </NavigationMenuLink>
</template>
