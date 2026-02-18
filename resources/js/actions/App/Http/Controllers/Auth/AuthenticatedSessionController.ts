import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
const create35b88a7ec09488bcb5edcffa3e0ef257 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'get',
})

create35b88a7ec09488bcb5edcffa3e0ef257.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
create35b88a7ec09488bcb5edcffa3e0ef257.url = (options?: RouteQueryOptions) => {
    return create35b88a7ec09488bcb5edcffa3e0ef257.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
create35b88a7ec09488bcb5edcffa3e0ef257.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
create35b88a7ec09488bcb5edcffa3e0ef257.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
const create35b88a7ec09488bcb5edcffa3e0ef257Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
create35b88a7ec09488bcb5edcffa3e0ef257Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '//dashboard-vue.test/login'
*/
create35b88a7ec09488bcb5edcffa3e0ef257Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create35b88a7ec09488bcb5edcffa3e0ef257.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create35b88a7ec09488bcb5edcffa3e0ef257.form = create35b88a7ec09488bcb5edcffa3e0ef257Form
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
const createb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

createb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
createb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return createb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
createb6041c76e8e1cd791f8f89d035d48611.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
createb6041c76e8e1cd791f8f89d035d48611.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
const createb6041c76e8e1cd791f8f89d035d48611Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
createb6041c76e8e1cd791f8f89d035d48611Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:22
* @route '/login'
*/
createb6041c76e8e1cd791f8f89d035d48611Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createb6041c76e8e1cd791f8f89d035d48611.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createb6041c76e8e1cd791f8f89d035d48611.form = createb6041c76e8e1cd791f8f89d035d48611Form

export const create = {
    '//dashboard-vue.test/login': create35b88a7ec09488bcb5edcffa3e0ef257,
    '/login': createb6041c76e8e1cd791f8f89d035d48611,
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '//dashboard-vue.test/login'
*/
const store35b88a7ec09488bcb5edcffa3e0ef257 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'post',
})

store35b88a7ec09488bcb5edcffa3e0ef257.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '//dashboard-vue.test/login'
*/
store35b88a7ec09488bcb5edcffa3e0ef257.url = (options?: RouteQueryOptions) => {
    return store35b88a7ec09488bcb5edcffa3e0ef257.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '//dashboard-vue.test/login'
*/
store35b88a7ec09488bcb5edcffa3e0ef257.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '//dashboard-vue.test/login'
*/
const store35b88a7ec09488bcb5edcffa3e0ef257Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '//dashboard-vue.test/login'
*/
store35b88a7ec09488bcb5edcffa3e0ef257Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store35b88a7ec09488bcb5edcffa3e0ef257.url(options),
    method: 'post',
})

store35b88a7ec09488bcb5edcffa3e0ef257.form = store35b88a7ec09488bcb5edcffa3e0ef257Form
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login'
*/
const storeb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

storeb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login'
*/
storeb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return storeb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login'
*/
storeb6041c76e8e1cd791f8f89d035d48611.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login'
*/
const storeb6041c76e8e1cd791f8f89d035d48611Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:34
* @route '/login'
*/
storeb6041c76e8e1cd791f8f89d035d48611Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

storeb6041c76e8e1cd791f8f89d035d48611.form = storeb6041c76e8e1cd791f8f89d035d48611Form

export const store = {
    '//dashboard-vue.test/login': store35b88a7ec09488bcb5edcffa3e0ef257,
    '/login': storeb6041c76e8e1cd791f8f89d035d48611,
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '//dashboard-vue.test/logout'
*/
const destroyad4486da7f167bd187a3de530feba8e8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroyad4486da7f167bd187a3de530feba8e8.url(options),
    method: 'post',
})

destroyad4486da7f167bd187a3de530feba8e8.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '//dashboard-vue.test/logout'
*/
destroyad4486da7f167bd187a3de530feba8e8.url = (options?: RouteQueryOptions) => {
    return destroyad4486da7f167bd187a3de530feba8e8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '//dashboard-vue.test/logout'
*/
destroyad4486da7f167bd187a3de530feba8e8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroyad4486da7f167bd187a3de530feba8e8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '//dashboard-vue.test/logout'
*/
const destroyad4486da7f167bd187a3de530feba8e8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyad4486da7f167bd187a3de530feba8e8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '//dashboard-vue.test/logout'
*/
destroyad4486da7f167bd187a3de530feba8e8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyad4486da7f167bd187a3de530feba8e8.url(options),
    method: 'post',
})

destroyad4486da7f167bd187a3de530feba8e8.form = destroyad4486da7f167bd187a3de530feba8e8Form
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '/logout'
*/
const destroyf732b903d9f8919b4c24bef1f8bb897a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroyf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

destroyf732b903d9f8919b4c24bef1f8bb897a.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '/logout'
*/
destroyf732b903d9f8919b4c24bef1f8bb897a.url = (options?: RouteQueryOptions) => {
    return destroyf732b903d9f8919b4c24bef1f8bb897a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '/logout'
*/
destroyf732b903d9f8919b4c24bef1f8bb897a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroyf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '/logout'
*/
const destroyf732b903d9f8919b4c24bef1f8bb897aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:46
* @route '/logout'
*/
destroyf732b903d9f8919b4c24bef1f8bb897aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

destroyf732b903d9f8919b4c24bef1f8bb897a.form = destroyf732b903d9f8919b4c24bef1f8bb897aForm

export const destroy = {
    '//dashboard-vue.test/logout': destroyad4486da7f167bd187a3de530feba8e8,
    '/logout': destroyf732b903d9f8919b4c24bef1f8bb897a,
}

const AuthenticatedSessionController = { create, store, destroy }

export default AuthenticatedSessionController