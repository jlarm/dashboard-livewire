<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { ChevronRight } from "lucide-vue-next"
import PaginationLink from "./PaginationLink.vue"

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <PaginationLink
    aria-label="Go to next page"
    :as="as"
    :as-child="asChild"
    :class="['gap-1 px-2.5 sm:pr-2.5 w-auto', props.class]"
  >
    <span>Next</span>
    <ChevronRight class="size-4" />
  </PaginationLink>
</template>
