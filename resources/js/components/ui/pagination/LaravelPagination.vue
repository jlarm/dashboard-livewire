<script setup lang="ts">
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";
import Pagination from "./Pagination.vue";
import PaginationContent from "./PaginationContent.vue";
import PaginationEllipsis from "./PaginationEllipsis.vue";
import PaginationItem from "./PaginationItem.vue";
import PaginationLink from "./PaginationLink.vue";
import PaginationNext from "./PaginationNext.vue";
import PaginationPrevious from "./PaginationPrevious.vue";

interface PaginationNavLink {
    url: string | null;
    label: string;
    active: boolean;
}

const props = defineProps<{
    links: PaginationNavLink[];
}>();

const hasPagination = computed(() => props.links.length > 2);

const previousLink = computed(() => props.links[0] ?? null);

const nextLink = computed(() => props.links[props.links.length - 1] ?? null);

const pageLinks = computed(() => props.links.slice(1, -1));

function isEllipsis(label: string): boolean {
    return label.includes("...");
}

function normalizeLabel(label: string): string {
    return label.replace("&laquo;", "").replace("&raquo;", "").trim();
}
</script>

<template>
    <Pagination v-if="hasPagination">
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious
                    v-if="previousLink?.url"
                    :as="Link"
                    :href="previousLink.url"
                    preserve-scroll
                />
                <PaginationPrevious
                    v-else
                    as="span"
                    class="pointer-events-none opacity-50"
                />
            </PaginationItem>

            <PaginationItem
                v-for="(pageLink, index) in pageLinks"
                :key="`${pageLink.label}-${index}`"
            >
                <PaginationEllipsis v-if="isEllipsis(pageLink.label)" />

                <PaginationLink
                    v-else-if="pageLink.url"
                    :as="Link"
                    :href="pageLink.url"
                    preserve-scroll
                    :is-active="pageLink.active"
                >
                    {{ normalizeLabel(pageLink.label) }}
                </PaginationLink>

                <PaginationLink
                    v-else
                    as="span"
                    class="pointer-events-none opacity-50"
                    :is-active="pageLink.active"
                >
                    {{ normalizeLabel(pageLink.label) }}
                </PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationNext
                    v-if="nextLink?.url"
                    :as="Link"
                    :href="nextLink.url"
                    preserve-scroll
                />
                <PaginationNext
                    v-else
                    as="span"
                    class="pointer-events-none opacity-50"
                />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
</template>
