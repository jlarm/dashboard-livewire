import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
const create594fa0ffaf4c1dbfb1d9fb2f761c80f4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'get',
})

create594fa0ffaf4c1dbfb1d9fb2f761c80f4.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/forgot-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url = (options?: RouteQueryOptions) => {
    return create594fa0ffaf4c1dbfb1d9fb2f761c80f4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
create594fa0ffaf4c1dbfb1d9fb2f761c80f4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
create594fa0ffaf4c1dbfb1d9fb2f761c80f4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
const create594fa0ffaf4c1dbfb1d9fb2f761c80f4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
create594fa0ffaf4c1dbfb1d9fb2f761c80f4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '//dashboard-vue.test/forgot-password'
*/
create594fa0ffaf4c1dbfb1d9fb2f761c80f4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create594fa0ffaf4c1dbfb1d9fb2f761c80f4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create594fa0ffaf4c1dbfb1d9fb2f761c80f4.form = create594fa0ffaf4c1dbfb1d9fb2f761c80f4Form
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
const create19019de5652af051dc199e877d041d33 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create19019de5652af051dc199e877d041d33.url(options),
    method: 'get',
})

create19019de5652af051dc199e877d041d33.definition = {
    methods: ["get","head"],
    url: '/forgot-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
create19019de5652af051dc199e877d041d33.url = (options?: RouteQueryOptions) => {
    return create19019de5652af051dc199e877d041d33.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
create19019de5652af051dc199e877d041d33.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create19019de5652af051dc199e877d041d33.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
create19019de5652af051dc199e877d041d33.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create19019de5652af051dc199e877d041d33.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
const create19019de5652af051dc199e877d041d33Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create19019de5652af051dc199e877d041d33.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
create19019de5652af051dc199e877d041d33Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create19019de5652af051dc199e877d041d33.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:20
* @route '/forgot-password'
*/
create19019de5652af051dc199e877d041d33Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create19019de5652af051dc199e877d041d33.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create19019de5652af051dc199e877d041d33.form = create19019de5652af051dc199e877d041d33Form

export const create = {
    '//dashboard-vue.test/forgot-password': create594fa0ffaf4c1dbfb1d9fb2f761c80f4,
    '/forgot-password': create19019de5652af051dc199e877d041d33,
}

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '//dashboard-vue.test/forgot-password'
*/
const store594fa0ffaf4c1dbfb1d9fb2f761c80f4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'post',
})

store594fa0ffaf4c1dbfb1d9fb2f761c80f4.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '//dashboard-vue.test/forgot-password'
*/
store594fa0ffaf4c1dbfb1d9fb2f761c80f4.url = (options?: RouteQueryOptions) => {
    return store594fa0ffaf4c1dbfb1d9fb2f761c80f4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '//dashboard-vue.test/forgot-password'
*/
store594fa0ffaf4c1dbfb1d9fb2f761c80f4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '//dashboard-vue.test/forgot-password'
*/
const store594fa0ffaf4c1dbfb1d9fb2f761c80f4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '//dashboard-vue.test/forgot-password'
*/
store594fa0ffaf4c1dbfb1d9fb2f761c80f4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store594fa0ffaf4c1dbfb1d9fb2f761c80f4.url(options),
    method: 'post',
})

store594fa0ffaf4c1dbfb1d9fb2f761c80f4.form = store594fa0ffaf4c1dbfb1d9fb2f761c80f4Form
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '/forgot-password'
*/
const store19019de5652af051dc199e877d041d33 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store19019de5652af051dc199e877d041d33.url(options),
    method: 'post',
})

store19019de5652af051dc199e877d041d33.definition = {
    methods: ["post"],
    url: '/forgot-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '/forgot-password'
*/
store19019de5652af051dc199e877d041d33.url = (options?: RouteQueryOptions) => {
    return store19019de5652af051dc199e877d041d33.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '/forgot-password'
*/
store19019de5652af051dc199e877d041d33.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store19019de5652af051dc199e877d041d33.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '/forgot-password'
*/
const store19019de5652af051dc199e877d041d33Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store19019de5652af051dc199e877d041d33.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:32
* @route '/forgot-password'
*/
store19019de5652af051dc199e877d041d33Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store19019de5652af051dc199e877d041d33.url(options),
    method: 'post',
})

store19019de5652af051dc199e877d041d33.form = store19019de5652af051dc199e877d041d33Form

export const store = {
    '//dashboard-vue.test/forgot-password': store594fa0ffaf4c1dbfb1d9fb2f761c80f4,
    '/forgot-password': store19019de5652af051dc199e877d041d33,
}

const PasswordResetLinkController = { create, store }

export default PasswordResetLinkController