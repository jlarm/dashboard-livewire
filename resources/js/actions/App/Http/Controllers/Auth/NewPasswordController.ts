import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
const create1a049817eb86ed6906fe2be6def179f0 = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1a049817eb86ed6906fe2be6def179f0.url(args, options),
    method: 'get',
})

create1a049817eb86ed6906fe2be6def179f0.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/reset-password/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
create1a049817eb86ed6906fe2be6def179f0.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return create1a049817eb86ed6906fe2be6def179f0.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
create1a049817eb86ed6906fe2be6def179f0.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1a049817eb86ed6906fe2be6def179f0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
create1a049817eb86ed6906fe2be6def179f0.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create1a049817eb86ed6906fe2be6def179f0.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
const create1a049817eb86ed6906fe2be6def179f0Form = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1a049817eb86ed6906fe2be6def179f0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
create1a049817eb86ed6906fe2be6def179f0Form.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1a049817eb86ed6906fe2be6def179f0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '//dashboard-vue.test/reset-password/{token}'
*/
create1a049817eb86ed6906fe2be6def179f0Form.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1a049817eb86ed6906fe2be6def179f0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create1a049817eb86ed6906fe2be6def179f0.form = create1a049817eb86ed6906fe2be6def179f0Form
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
const create784bb30b123acd5cf553758712ebb4d6 = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create784bb30b123acd5cf553758712ebb4d6.url(args, options),
    method: 'get',
})

create784bb30b123acd5cf553758712ebb4d6.definition = {
    methods: ["get","head"],
    url: '/reset-password/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
create784bb30b123acd5cf553758712ebb4d6.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return create784bb30b123acd5cf553758712ebb4d6.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
create784bb30b123acd5cf553758712ebb4d6.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create784bb30b123acd5cf553758712ebb4d6.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
create784bb30b123acd5cf553758712ebb4d6.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create784bb30b123acd5cf553758712ebb4d6.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
const create784bb30b123acd5cf553758712ebb4d6Form = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create784bb30b123acd5cf553758712ebb4d6.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
create784bb30b123acd5cf553758712ebb4d6Form.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create784bb30b123acd5cf553758712ebb4d6.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:24
* @route '/reset-password/{token}'
*/
create784bb30b123acd5cf553758712ebb4d6Form.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create784bb30b123acd5cf553758712ebb4d6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create784bb30b123acd5cf553758712ebb4d6.form = create784bb30b123acd5cf553758712ebb4d6Form

export const create = {
    '//dashboard-vue.test/reset-password/{token}': create1a049817eb86ed6906fe2be6def179f0,
    '/reset-password/{token}': create784bb30b123acd5cf553758712ebb4d6,
}

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '//dashboard-vue.test/reset-password'
*/
const store87911db994af628a18c3e32774fa0f2f = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store87911db994af628a18c3e32774fa0f2f.url(options),
    method: 'post',
})

store87911db994af628a18c3e32774fa0f2f.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '//dashboard-vue.test/reset-password'
*/
store87911db994af628a18c3e32774fa0f2f.url = (options?: RouteQueryOptions) => {
    return store87911db994af628a18c3e32774fa0f2f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '//dashboard-vue.test/reset-password'
*/
store87911db994af628a18c3e32774fa0f2f.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store87911db994af628a18c3e32774fa0f2f.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '//dashboard-vue.test/reset-password'
*/
const store87911db994af628a18c3e32774fa0f2fForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store87911db994af628a18c3e32774fa0f2f.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '//dashboard-vue.test/reset-password'
*/
store87911db994af628a18c3e32774fa0f2fForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store87911db994af628a18c3e32774fa0f2f.url(options),
    method: 'post',
})

store87911db994af628a18c3e32774fa0f2f.form = store87911db994af628a18c3e32774fa0f2fForm
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '/reset-password'
*/
const store6cb1fe2b419b1b954ae186154f9a5fe8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6cb1fe2b419b1b954ae186154f9a5fe8.url(options),
    method: 'post',
})

store6cb1fe2b419b1b954ae186154f9a5fe8.definition = {
    methods: ["post"],
    url: '/reset-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '/reset-password'
*/
store6cb1fe2b419b1b954ae186154f9a5fe8.url = (options?: RouteQueryOptions) => {
    return store6cb1fe2b419b1b954ae186154f9a5fe8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '/reset-password'
*/
store6cb1fe2b419b1b954ae186154f9a5fe8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6cb1fe2b419b1b954ae186154f9a5fe8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '/reset-password'
*/
const store6cb1fe2b419b1b954ae186154f9a5fe8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store6cb1fe2b419b1b954ae186154f9a5fe8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:37
* @route '/reset-password'
*/
store6cb1fe2b419b1b954ae186154f9a5fe8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store6cb1fe2b419b1b954ae186154f9a5fe8.url(options),
    method: 'post',
})

store6cb1fe2b419b1b954ae186154f9a5fe8.form = store6cb1fe2b419b1b954ae186154f9a5fe8Form

export const store = {
    '//dashboard-vue.test/reset-password': store87911db994af628a18c3e32774fa0f2f,
    '/reset-password': store6cb1fe2b419b1b954ae186154f9a5fe8,
}

const NewPasswordController = { create, store }

export default NewPasswordController