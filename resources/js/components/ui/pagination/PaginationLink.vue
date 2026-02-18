<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<PrimitiveProps & {
  class?: HTMLAttributes["class"]
  isActive?: boolean
}>(), {
  as: "a",
})
</script>

<template>
  <Primitive
    data-slot="pagination-link"
    :aria-current="isActive ? 'page' : undefined"
    :as="as"
    :as-child="asChild"
    :class="cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size: 'icon',
      }),
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
