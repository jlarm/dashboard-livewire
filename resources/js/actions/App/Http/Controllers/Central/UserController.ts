import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/employees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::index
* @see app/Http/Controllers/Central/UserController.php:25
* @route '//dashboard-vue.test/employees'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
export const openInvites = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: openInvites.url(options),
    method: 'get',
})

openInvites.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/employees/open-invites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
openInvites.url = (options?: RouteQueryOptions) => {
    return openInvites.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
openInvites.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: openInvites.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
openInvites.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: openInvites.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
const openInvitesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: openInvites.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
openInvitesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: openInvites.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::openInvites
* @see app/Http/Controllers/Central/UserController.php:72
* @route '//dashboard-vue.test/employees/open-invites'
*/
openInvitesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: openInvites.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

openInvites.form = openInvitesForm

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
export const deleted = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

deleted.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/employees/deleted',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
deleted.url = (options?: RouteQueryOptions) => {
    return deleted.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
deleted.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
deleted.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleted.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
const deletedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
deletedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::deleted
* @see app/Http/Controllers/Central/UserController.php:87
* @route '//dashboard-vue.test/employees/deleted'
*/
deletedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleted.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleted.form = deletedForm

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
export const show = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/employees/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
show.url = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { user: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.slug
        : args.user,
    }

    return show.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
show.get = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
show.head = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
const showForm = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
showForm.get = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Central\UserController::show
* @see app/Http/Controllers/Central/UserController.php:47
* @route '//dashboard-vue.test/employees/{user}'
*/
showForm.head = (args: { user: string | { slug: string } } | [user: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Central\UserController::store
* @see app/Http/Controllers/Central/UserController.php:109
* @route '//dashboard-vue.test/employees'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/employees',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Central\UserController::store
* @see app/Http/Controllers/Central/UserController.php:109
* @route '//dashboard-vue.test/employees'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::store
* @see app/Http/Controllers/Central/UserController.php:109
* @route '//dashboard-vue.test/employees'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Central\UserController::store
* @see app/Http/Controllers/Central/UserController.php:109
* @route '//dashboard-vue.test/employees'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Central\UserController::store
* @see app/Http/Controllers/Central/UserController.php:109
* @route '//dashboard-vue.test/employees'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Central\UserController::restore
* @see app/Http/Controllers/Central/UserController.php:102
* @route '//dashboard-vue.test/employees/{user}/restore'
*/
export const restore = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: restore.url(args, options),
    method: 'patch',
})

restore.definition = {
    methods: ["patch"],
    url: '//dashboard-vue.test/employees/{user}/restore',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Central\UserController::restore
* @see app/Http/Controllers/Central/UserController.php:102
* @route '//dashboard-vue.test/employees/{user}/restore'
*/
restore.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return restore.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::restore
* @see app/Http/Controllers/Central/UserController.php:102
* @route '//dashboard-vue.test/employees/{user}/restore'
*/
restore.patch = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: restore.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Central\UserController::restore
* @see app/Http/Controllers/Central/UserController.php:102
* @route '//dashboard-vue.test/employees/{user}/restore'
*/
const restoreForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Central\UserController::restore
* @see app/Http/Controllers/Central/UserController.php:102
* @route '//dashboard-vue.test/employees/{user}/restore'
*/
restoreForm.patch = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \App\Http\Controllers\Central\UserController::destroy
* @see app/Http/Controllers/Central/UserController.php:125
* @route '//dashboard-vue.test/employees/{user}'
*/
export const destroy = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '//dashboard-vue.test/employees/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Central\UserController::destroy
* @see app/Http/Controllers/Central/UserController.php:125
* @route '//dashboard-vue.test/employees/{user}'
*/
destroy.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return destroy.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::destroy
* @see app/Http/Controllers/Central/UserController.php:125
* @route '//dashboard-vue.test/employees/{user}'
*/
destroy.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Central\UserController::destroy
* @see app/Http/Controllers/Central/UserController.php:125
* @route '//dashboard-vue.test/employees/{user}'
*/
const destroyForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Central\UserController::destroy
* @see app/Http/Controllers/Central/UserController.php:125
* @route '//dashboard-vue.test/employees/{user}'
*/
destroyForm.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Central\UserController::toggleDealership
* @see app/Http/Controllers/Central/UserController.php:65
* @route '//dashboard-vue.test/employees/{user}/dealerships/{dealership}'
*/
export const toggleDealership = (args: { user: string | { slug: string }, dealership: string | { id: string } } | [user: string | { slug: string }, dealership: string | { id: string } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleDealership.url(args, options),
    method: 'post',
})

toggleDealership.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/employees/{user}/dealerships/{dealership}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Central\UserController::toggleDealership
* @see app/Http/Controllers/Central/UserController.php:65
* @route '//dashboard-vue.test/employees/{user}/dealerships/{dealership}'
*/
toggleDealership.url = (args: { user: string | { slug: string }, dealership: string | { id: string } } | [user: string | { slug: string }, dealership: string | { id: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            user: args[0],
            dealership: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.slug
        : args.user,
        dealership: typeof args.dealership === 'object'
        ? args.dealership.id
        : args.dealership,
    }

    return toggleDealership.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace('{dealership}', parsedArgs.dealership.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Central\UserController::toggleDealership
* @see app/Http/Controllers/Central/UserController.php:65
* @route '//dashboard-vue.test/employees/{user}/dealerships/{dealership}'
*/
toggleDealership.post = (args: { user: string | { slug: string }, dealership: string | { id: string } } | [user: string | { slug: string }, dealership: string | { id: string } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleDealership.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Central\UserController::toggleDealership
* @see app/Http/Controllers/Central/UserController.php:65
* @route '//dashboard-vue.test/employees/{user}/dealerships/{dealership}'
*/
const toggleDealershipForm = (args: { user: string | { slug: string }, dealership: string | { id: string } } | [user: string | { slug: string }, dealership: string | { id: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleDealership.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Central\UserController::toggleDealership
* @see app/Http/Controllers/Central/UserController.php:65
* @route '//dashboard-vue.test/employees/{user}/dealerships/{dealership}'
*/
toggleDealershipForm.post = (args: { user: string | { slug: string }, dealership: string | { id: string } } | [user: string | { slug: string }, dealership: string | { id: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleDealership.url(args, options),
    method: 'post',
})

toggleDealership.form = toggleDealershipForm

const UserController = { index, openInvites, deleted, show, store, restore, destroy, toggleDealership }

export default UserController