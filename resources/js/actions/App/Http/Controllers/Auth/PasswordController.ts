import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '//dashboard-vue.test/password'
*/
const update387113448369fba917b56f924b88f9cc = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update387113448369fba917b56f924b88f9cc.url(options),
    method: 'put',
})

update387113448369fba917b56f924b88f9cc.definition = {
    methods: ["put"],
    url: '//dashboard-vue.test/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '//dashboard-vue.test/password'
*/
update387113448369fba917b56f924b88f9cc.url = (options?: RouteQueryOptions) => {
    return update387113448369fba917b56f924b88f9cc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '//dashboard-vue.test/password'
*/
update387113448369fba917b56f924b88f9cc.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update387113448369fba917b56f924b88f9cc.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '//dashboard-vue.test/password'
*/
const update387113448369fba917b56f924b88f9ccForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update387113448369fba917b56f924b88f9cc.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '//dashboard-vue.test/password'
*/
update387113448369fba917b56f924b88f9ccForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update387113448369fba917b56f924b88f9cc.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update387113448369fba917b56f924b88f9cc.form = update387113448369fba917b56f924b88f9ccForm
/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '/password'
*/
const update5af0ba2e650e72257a8422e4ac4b3620 = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5af0ba2e650e72257a8422e4ac4b3620.url(options),
    method: 'put',
})

update5af0ba2e650e72257a8422e4ac4b3620.definition = {
    methods: ["put"],
    url: '/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '/password'
*/
update5af0ba2e650e72257a8422e4ac4b3620.url = (options?: RouteQueryOptions) => {
    return update5af0ba2e650e72257a8422e4ac4b3620.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '/password'
*/
update5af0ba2e650e72257a8422e4ac4b3620.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5af0ba2e650e72257a8422e4ac4b3620.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '/password'
*/
const update5af0ba2e650e72257a8422e4ac4b3620Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update5af0ba2e650e72257a8422e4ac4b3620.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\PasswordController::update
* @see app/Http/Controllers/Auth/PasswordController.php:18
* @route '/password'
*/
update5af0ba2e650e72257a8422e4ac4b3620Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update5af0ba2e650e72257a8422e4ac4b3620.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update5af0ba2e650e72257a8422e4ac4b3620.form = update5af0ba2e650e72257a8422e4ac4b3620Form

export const update = {
    '//dashboard-vue.test/password': update387113448369fba917b56f924b88f9cc,
    '/password': update5af0ba2e650e72257a8422e4ac4b3620,
}

const PasswordController = { update }

export default PasswordController