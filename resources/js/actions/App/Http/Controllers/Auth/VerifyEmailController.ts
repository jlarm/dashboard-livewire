import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
const __invokecafb9c7c6b173c5498b7191159833f9b = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invokecafb9c7c6b173c5498b7191159833f9b.url(args, options),
    method: 'get',
})

__invokecafb9c7c6b173c5498b7191159833f9b.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
__invokecafb9c7c6b173c5498b7191159833f9b.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return __invokecafb9c7c6b173c5498b7191159833f9b.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
__invokecafb9c7c6b173c5498b7191159833f9b.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invokecafb9c7c6b173c5498b7191159833f9b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
__invokecafb9c7c6b173c5498b7191159833f9b.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: __invokecafb9c7c6b173c5498b7191159833f9b.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
const __invokecafb9c7c6b173c5498b7191159833f9bForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invokecafb9c7c6b173c5498b7191159833f9b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
__invokecafb9c7c6b173c5498b7191159833f9bForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invokecafb9c7c6b173c5498b7191159833f9b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '//dashboard-vue.test/verify-email/{id}/{hash}'
*/
__invokecafb9c7c6b173c5498b7191159833f9bForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invokecafb9c7c6b173c5498b7191159833f9b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

__invokecafb9c7c6b173c5498b7191159833f9b.form = __invokecafb9c7c6b173c5498b7191159833f9bForm
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
const __invoke0737cec4d01bad06db09a8f347b80636 = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invoke0737cec4d01bad06db09a8f347b80636.url(args, options),
    method: 'get',
})

__invoke0737cec4d01bad06db09a8f347b80636.definition = {
    methods: ["get","head"],
    url: '/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
__invoke0737cec4d01bad06db09a8f347b80636.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return __invoke0737cec4d01bad06db09a8f347b80636.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
__invoke0737cec4d01bad06db09a8f347b80636.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invoke0737cec4d01bad06db09a8f347b80636.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
__invoke0737cec4d01bad06db09a8f347b80636.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: __invoke0737cec4d01bad06db09a8f347b80636.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
const __invoke0737cec4d01bad06db09a8f347b80636Form = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke0737cec4d01bad06db09a8f347b80636.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
__invoke0737cec4d01bad06db09a8f347b80636Form.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke0737cec4d01bad06db09a8f347b80636.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:18
* @route '/verify-email/{id}/{hash}'
*/
__invoke0737cec4d01bad06db09a8f347b80636Form.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke0737cec4d01bad06db09a8f347b80636.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

__invoke0737cec4d01bad06db09a8f347b80636.form = __invoke0737cec4d01bad06db09a8f347b80636Form

export const __invoke = {
    '//dashboard-vue.test/verify-email/{id}/{hash}': __invokecafb9c7c6b173c5498b7191159833f9b,
    '/verify-email/{id}/{hash}': __invoke0737cec4d01bad06db09a8f347b80636,
}

const VerifyEmailController = { __invoke }

export default VerifyEmailController