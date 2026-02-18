import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Tenant\StoreController::store
* @see app/Http/Controllers/Tenant/StoreController.php:14
* @route '/stores'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/stores',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Tenant\StoreController::store
* @see app/Http/Controllers/Tenant/StoreController.php:14
* @route '/stores'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Tenant\StoreController::store
* @see app/Http/Controllers/Tenant/StoreController.php:14
* @route '/stores'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\StoreController::store
* @see app/Http/Controllers/Tenant/StoreController.php:14
* @route '/stores'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Tenant\StoreController::store
* @see app/Http/Controllers/Tenant/StoreController.php:14
* @route '/stores'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const StoreController = { store }

export default StoreController