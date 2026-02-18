<script setup lang="ts">
import TenantLayout from "@/layouts/TenantLayout.vue";
import { computed } from "vue";
import { Head } from "@inertiajs/vue3";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LaravelPagination } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logsRoutes from "@/routes/dealer/logs";
import { useTableFilters } from "@/composables/useTableFilters";

interface Log {
    id: number;
    event: string;
    date: string;
    model: string;
    causer: string;
}

interface PaginationNavLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedLogs {
    data: Log[];
    links: PaginationNavLink[];
    meta: {
        from: number | null;
        to: number | null;
        total: number;
    };
}

interface Option {
    value: string;
    label: string;
}

const props = defineProps<{
    logs: PaginatedLogs | Log[];
    activityTypes: string[];
    modelTypes: Option[];
    users: Option[];
    filters?: {
        search?: string;
        activity_type?: string;
        model_type?: string;
        user_id?: string;
    };
}>();

const { filters, resetFilters } = useTableFilters({
    routeUrl: logsRoutes.index.url(),
    initialFilters: {
        search: props.filters?.search ?? "",
        activity_type: props.filters?.activity_type ?? "",
        model_type: props.filters?.model_type ?? "",
        user_id: props.filters?.user_id ?? "",
    },
    debounceMs: 300,
    onlyProps: ["logs", "filters"],
});

const ALL_ACTIVITY_TYPES = "__all__";
const ALL_MODEL_TYPES = "__all_model__";
const ALL_USERS = "__all_users__";

const selectedActivityType = computed({
    get: () => (filters.value.activity_type === "" ? ALL_ACTIVITY_TYPES : filters.value.activity_type),
    set: (value: string) => {
        filters.value.activity_type = value === ALL_ACTIVITY_TYPES ? "" : value;
    },
});

const selectedModelType = computed({
    get: () => (filters.value.model_type === "" ? ALL_MODEL_TYPES : filters.value.model_type),
    set: (value: string) => {
        filters.value.model_type = value === ALL_MODEL_TYPES ? "" : value;
    },
});

const selectedUser = computed({
    get: () => (filters.value.user_id === "" ? ALL_USERS : filters.value.user_id),
    set: (value: string) => {
        filters.value.user_id = value === ALL_USERS ? "" : value;
    },
});

const isPaginated = computed(() => !Array.isArray(props.logs));

const logRows = computed(() => {
    return isPaginated.value ? (props.logs as PaginatedLogs).data : (props.logs as Log[]);
});

const logsMeta = computed(() => {
    if (isPaginated.value) {
        return (props.logs as PaginatedLogs).meta;
    }

    const total = (props.logs as Log[]).length;

    return {
        from: total > 0 ? 1 : 0,
        to: total,
        total,
    };
});

const hasActiveFilters = computed(() => {
    return (
        filters.value.search !== "" ||
        filters.value.activity_type !== "" ||
        filters.value.model_type !== "" ||
        filters.value.user_id !== ""
    );
});
</script>

<template>
    <Head title="Logs" />

    <TenantLayout>
        <div class="mb-5 flex flex-wrap items-center gap-3">
            <h1 class="text-3xl font-bold">Logs</h1>
            <Input
                v-model="filters.search"
                placeholder="Search logs..."
                class="max-w-sm"
            />
            <Select v-model="selectedActivityType">
                <SelectTrigger class="w-[220px]">
                    <SelectValue placeholder="All activity types" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem :value="ALL_ACTIVITY_TYPES">
                        All activity types
                    </SelectItem>
                    <SelectItem
                        v-for="activityType in activityTypes"
                        :key="activityType"
                        :value="activityType"
                    >
                        {{ activityType }}
                    </SelectItem>
                </SelectContent>
            </Select>
            <Select v-model="selectedModelType">
                <SelectTrigger class="w-[220px]">
                    <SelectValue placeholder="All models" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem :value="ALL_MODEL_TYPES">
                        All models
                    </SelectItem>
                    <SelectItem
                        v-for="modelType in modelTypes"
                        :key="modelType.value"
                        :value="modelType.value"
                    >
                        {{ modelType.label }}
                    </SelectItem>
                </SelectContent>
            </Select>
            <Select v-model="selectedUser">
                <SelectTrigger class="w-[220px]">
                    <SelectValue placeholder="All users" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem :value="ALL_USERS">
                        All users
                    </SelectItem>
                    <SelectItem
                        v-for="user in users"
                        :key="user.value"
                        :value="user.value"
                    >
                        {{ user.label }}
                    </SelectItem>
                </SelectContent>
            </Select>
            <Button
                variant="outline"
                :disabled="!hasActiveFilters"
                @click="resetFilters"
            >
                Clear
            </Button>
        </div>

        <div class="overflow-hidden rounded-lg border">
            <Table class="text-sm">
                <TableHeader class="[&_tr]:border-b bg-muted sticky top-0 z-10">
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Activity</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>User</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="log in logRows" :key="log.id">
                        <TableCell class="font-mono">{{ log.id }}</TableCell>
                        <TableCell>
                            <Badge variant="outline">{{ log.event }}</Badge>
                        </TableCell>
                        <TableCell>{{ log.date }}</TableCell>
                        <TableCell>{{ log.model }}</TableCell>
                        <TableCell>{{ log.causer }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <div class="mt-4 flex items-center justify-between gap-4">
            <p class="text-sm text-muted-foreground">
                Showing {{ logsMeta.from ?? 0 }} to {{ logsMeta.to ?? 0 }} of {{ logsMeta.total }} logs
            </p>

            <LaravelPagination
                v-if="isPaginated"
                :links="(logs as PaginatedLogs).links"
            />
        </div>
    </TenantLayout>
</template>
