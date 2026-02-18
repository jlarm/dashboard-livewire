import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
const showdadb33354d137d336fa58c9809ba2b5d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showdadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'get',
})

showdadb33354d137d336fa58c9809ba2b5d.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/confirm-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
showdadb33354d137d336fa58c9809ba2b5d.url = (options?: RouteQueryOptions) => {
    return showdadb33354d137d336fa58c9809ba2b5d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
showdadb33354d137d336fa58c9809ba2b5d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showdadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
showdadb33354d137d336fa58c9809ba2b5d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showdadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
const showdadb33354d137d336fa58c9809ba2b5dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showdadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
showdadb33354d137d336fa58c9809ba2b5dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showdadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '//dashboard-vue.test/confirm-password'
*/
showdadb33354d137d336fa58c9809ba2b5dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showdadb33354d137d336fa58c9809ba2b5d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showdadb33354d137d336fa58c9809ba2b5d.form = showdadb33354d137d336fa58c9809ba2b5dForm
/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
const show80954449d08918a64e010cb0312cc579 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show80954449d08918a64e010cb0312cc579.url(options),
    method: 'get',
})

show80954449d08918a64e010cb0312cc579.definition = {
    methods: ["get","head"],
    url: '/confirm-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
show80954449d08918a64e010cb0312cc579.url = (options?: RouteQueryOptions) => {
    return show80954449d08918a64e010cb0312cc579.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
show80954449d08918a64e010cb0312cc579.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show80954449d08918a64e010cb0312cc579.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
show80954449d08918a64e010cb0312cc579.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show80954449d08918a64e010cb0312cc579.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
const show80954449d08918a64e010cb0312cc579Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show80954449d08918a64e010cb0312cc579.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
show80954449d08918a64e010cb0312cc579Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show80954449d08918a64e010cb0312cc579.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::show
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:21
* @route '/confirm-password'
*/
show80954449d08918a64e010cb0312cc579Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show80954449d08918a64e010cb0312cc579.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show80954449d08918a64e010cb0312cc579.form = show80954449d08918a64e010cb0312cc579Form

export const show = {
    '//dashboard-vue.test/confirm-password': showdadb33354d137d336fa58c9809ba2b5d,
    '/confirm-password': show80954449d08918a64e010cb0312cc579,
}

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '//dashboard-vue.test/confirm-password'
*/
const storedadb33354d137d336fa58c9809ba2b5d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storedadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'post',
})

storedadb33354d137d336fa58c9809ba2b5d.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/confirm-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '//dashboard-vue.test/confirm-password'
*/
storedadb33354d137d336fa58c9809ba2b5d.url = (options?: RouteQueryOptions) => {
    return storedadb33354d137d336fa58c9809ba2b5d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '//dashboard-vue.test/confirm-password'
*/
storedadb33354d137d336fa58c9809ba2b5d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storedadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '//dashboard-vue.test/confirm-password'
*/
const storedadb33354d137d336fa58c9809ba2b5dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storedadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '//dashboard-vue.test/confirm-password'
*/
storedadb33354d137d336fa58c9809ba2b5dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storedadb33354d137d336fa58c9809ba2b5d.url(options),
    method: 'post',
})

storedadb33354d137d336fa58c9809ba2b5d.form = storedadb33354d137d336fa58c9809ba2b5dForm
/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '/confirm-password'
*/
const store80954449d08918a64e010cb0312cc579 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store80954449d08918a64e010cb0312cc579.url(options),
    method: 'post',
})

store80954449d08918a64e010cb0312cc579.definition = {
    methods: ["post"],
    url: '/confirm-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '/confirm-password'
*/
store80954449d08918a64e010cb0312cc579.url = (options?: RouteQueryOptions) => {
    return store80954449d08918a64e010cb0312cc579.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '/confirm-password'
*/
store80954449d08918a64e010cb0312cc579.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store80954449d08918a64e010cb0312cc579.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '/confirm-password'
*/
const store80954449d08918a64e010cb0312cc579Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store80954449d08918a64e010cb0312cc579.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::store
* @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:29
* @route '/confirm-password'
*/
store80954449d08918a64e010cb0312cc579Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store80954449d08918a64e010cb0312cc579.url(options),
    method: 'post',
})

store80954449d08918a64e010cb0312cc579.form = store80954449d08918a64e010cb0312cc579Form

export const store = {
    '//dashboard-vue.test/confirm-password': storedadb33354d137d336fa58c9809ba2b5d,
    '/confirm-password': store80954449d08918a64e010cb0312cc579,
}

const ConfirmablePasswordController = { show, store }

export default ConfirmablePasswordController