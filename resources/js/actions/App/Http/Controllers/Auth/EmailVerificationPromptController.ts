import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
const __invoke14124e27455883b43e05d8dfe183a90f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invoke14124e27455883b43e05d8dfe183a90f.url(options),
    method: 'get',
})

__invoke14124e27455883b43e05d8dfe183a90f.definition = {
    methods: ["get","head"],
    url: '//dashboard-vue.test/verify-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
__invoke14124e27455883b43e05d8dfe183a90f.url = (options?: RouteQueryOptions) => {
    return __invoke14124e27455883b43e05d8dfe183a90f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
__invoke14124e27455883b43e05d8dfe183a90f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invoke14124e27455883b43e05d8dfe183a90f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
__invoke14124e27455883b43e05d8dfe183a90f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: __invoke14124e27455883b43e05d8dfe183a90f.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
const __invoke14124e27455883b43e05d8dfe183a90fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke14124e27455883b43e05d8dfe183a90f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
__invoke14124e27455883b43e05d8dfe183a90fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke14124e27455883b43e05d8dfe183a90f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '//dashboard-vue.test/verify-email'
*/
__invoke14124e27455883b43e05d8dfe183a90fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke14124e27455883b43e05d8dfe183a90f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

__invoke14124e27455883b43e05d8dfe183a90f.form = __invoke14124e27455883b43e05d8dfe183a90fForm
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
const __invoke8c3ba70f7c164aec5ec59d449e581883 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invoke8c3ba70f7c164aec5ec59d449e581883.url(options),
    method: 'get',
})

__invoke8c3ba70f7c164aec5ec59d449e581883.definition = {
    methods: ["get","head"],
    url: '/verify-email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
__invoke8c3ba70f7c164aec5ec59d449e581883.url = (options?: RouteQueryOptions) => {
    return __invoke8c3ba70f7c164aec5ec59d449e581883.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
__invoke8c3ba70f7c164aec5ec59d449e581883.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: __invoke8c3ba70f7c164aec5ec59d449e581883.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
__invoke8c3ba70f7c164aec5ec59d449e581883.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: __invoke8c3ba70f7c164aec5ec59d449e581883.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
const __invoke8c3ba70f7c164aec5ec59d449e581883Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke8c3ba70f7c164aec5ec59d449e581883.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
__invoke8c3ba70f7c164aec5ec59d449e581883Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke8c3ba70f7c164aec5ec59d449e581883.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:18
* @route '/verify-email'
*/
__invoke8c3ba70f7c164aec5ec59d449e581883Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: __invoke8c3ba70f7c164aec5ec59d449e581883.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

__invoke8c3ba70f7c164aec5ec59d449e581883.form = __invoke8c3ba70f7c164aec5ec59d449e581883Form

export const __invoke = {
    '//dashboard-vue.test/verify-email': __invoke14124e27455883b43e05d8dfe183a90f,
    '/verify-email': __invoke8c3ba70f7c164aec5ec59d449e581883,
}

const EmailVerificationPromptController = { __invoke }

export default EmailVerificationPromptController