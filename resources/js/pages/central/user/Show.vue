<script setup lang="ts">
import {BreadcrumbItemType} from "@/index";
import employees, {show} from "@/routes/employees";
import {Head, router} from "@inertiajs/vue3";
import AppLayout from "@/layouts/AppLayout.vue";
import CreateDialog from "@/pages/central/user/partials/CreateDialog.vue";
import Navigation from "@/pages/central/user/partials/Navigation.vue";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Switch} from "@/components/ui/switch";
import {ref} from "vue";
import {toggleDealership} from "@/actions/App/Http/Controllers/Central/UserController";

interface User {
    id: number;
    name: string;
    slug: string;
    email: string;
    role: string;
    passed_courses_count: number;
}

interface Dealership {
    id: string;
    name: string;
}

const props = defineProps<{
    user: User,
    dealerships: Dealership[],
    currentDealerships: Dealership[],
}>();

const activeDealershipIds = ref(
    new Set(props.currentDealerships.map(d => d.id))
)

function toggle(dealership: Dealership) {
    const isActive = activeDealershipIds.value.has(dealership.id);

    if (isActive) {
        activeDealershipIds.value.delete(dealership.id);
    } else {
        activeDealershipIds.value.add(dealership.id);
    }

    router.post(toggleDealership.url({user: props.user.slug, dealership: dealership.id}), {}, {
        preserveScroll: true,
        onError: () => {
            if (isActive) {
                activeDealershipIds.value.add(dealership.id);
            } else {
                activeDealershipIds.value.delete(dealership.id);
            }
        }
    })
}

const breadcrumbs: BreadcrumbItemType[] = [
    {
        title: 'Employees',
        href: employees.index().url

    },
    {
        title: props.user.name,
        href: show(props.user.slug).url,
    }
]
</script>

<template>
    <Head :title="user.name" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <template #header-actions>
            <div class="flex items-center gap-4">
                <Navigation />
                <CreateDialog />
            </div>
        </template>
        <Tabs default-value="dealerships" class="w-full">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <h1 class="flex items-center gap-2 text-2xl font-bold">
                        {{ user.name }}
                        <Badge variant="secondary">{{ user.role }}</Badge>
                    </h1>
                    <p class="text-sm text-gray-500">{{ user.email }}</p>
                </div>
                <TabsList>
                    <TabsTrigger value="dealerships">Dealerships</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="dealerships" class="w-full rounded-lg border p-4">
                <label v-for="dealership in dealerships" :key="dealership.id" class="flex items-center gap-2">
                    <Switch
                        :model-value="activeDealershipIds.has(dealership.id)"
                        @update:model-value="toggle(dealership)"
                    />
                    {{ dealership.name }}
                </label>
            </TabsContent>

            <TabsContent value="courses" class="w-full rounded-lg border p-4">
                Completed courses: {{ user.passed_courses_count }}
            </TabsContent>
        </Tabs>
    </AppLayout>
</template>
