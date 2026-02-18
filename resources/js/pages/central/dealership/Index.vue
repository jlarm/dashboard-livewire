<script setup lang="ts">
import {BreadcrumbItem} from "@/index";
import dealershipRoutes from "@/routes/dealerships";
import {Head} from "@inertiajs/vue3";
import AppLayout from "@/layouts/AppLayout.vue";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {ArrowUpRight, Copy, Check} from "lucide-vue-next";
import {computed, ref} from "vue";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {usePage} from "@inertiajs/vue3";
import CreateDialog from "@/pages/central/dealership/partials/CreateDialog.vue";

interface Dealership {
    id: string;
    name: string;
    url: string;
}

interface DealershipCollection {
    data: Dealership[];
}

const props = defineProps<{
    dealerships: Dealership[] | DealershipCollection;
}>();

const copiedId = ref<string | null>(null);
const page = usePage();
const isSuperAdmin = computed(() => page.props.auth.abilities?.isSuperAdmin);

function copyUuid(dealership: Dealership) {
    navigator.clipboard.writeText(dealership.id);
    copiedId.value = dealership.id;
    setTimeout(() => copiedId.value = null, 2000);
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dealerships',
        href: dealershipRoutes.index.url(),
    }
]
</script>

<template>
    <Head title="Dealerships" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <template #header-actions>
            <CreateDialog />
        </template>

        <div class="overflow-hidden rounded-lg border">
        <Table class="text-sm">
            <TableHeader class="[&_tr]:border-b bg-muted sticky top-0 z-10">
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead v-if="isSuperAdmin">UUID</TableHead>
                    <TableHead>Consultants</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="dealership in dealerships" :key="dealership.id">
                    <TableCell>{{ dealership.name }}</TableCell>
                    <TableCell v-if="isSuperAdmin">
                        <button
                            class="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            @click="copyUuid(dealership)"
                        >
                            <span>{{ dealership.id }}</span>
                            <Check v-if="copiedId === dealership.id" class="size-3.5 text-green-500" />
                            <Copy v-else class="size-3.5" />
                        </button>
                    </TableCell>
                    <TableCell>
                        <div class="flex -space-x-2">
                            <TooltipProvider v-for="user in dealership.users" :key="user.id">
                                <Tooltip>
                                    <TooltipTrigger as-child>
                                        <Avatar class="ring-2 ring-background">
                                            <AvatarFallback class="bg-arm-blue-700 text-white">{{ user.initials }}</AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {{ user.name }}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </TableCell>
                    <TableCell class="text-right">
                        <Button size="sm" variant="outline" as-child>
                            <a :href="dealership.url" target="_blank">View <ArrowUpRight /></a>
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    </AppLayout>
</template>
