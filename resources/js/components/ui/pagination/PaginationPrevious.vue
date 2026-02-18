<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { ChevronLeft } from "lucide-vue-next"
import PaginationLink from "./PaginationLink.vue"

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <PaginationLink
    aria-label="Go to previous page"
    :as="as"
    :as-child="asChild"
    :class="['gap-1 px-2.5 sm:pl-2.5 w-auto', props.class]"
  >
    <ChevronLeft class="size-4" />
    <span>Previous</span>
  </PaginationLink>
</template>
