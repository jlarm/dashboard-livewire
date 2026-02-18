import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '//dashboard-vue.test/email/verification-notification'
*/
const stored35a4ac510d032d273122ebe969b9801 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stored35a4ac510d032d273122ebe969b9801.url(options),
    method: 'post',
})

stored35a4ac510d032d273122ebe969b9801.definition = {
    methods: ["post"],
    url: '//dashboard-vue.test/email/verification-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '//dashboard-vue.test/email/verification-notification'
*/
stored35a4ac510d032d273122ebe969b9801.url = (options?: RouteQueryOptions) => {
    return stored35a4ac510d032d273122ebe969b9801.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '//dashboard-vue.test/email/verification-notification'
*/
stored35a4ac510d032d273122ebe969b9801.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stored35a4ac510d032d273122ebe969b9801.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '//dashboard-vue.test/email/verification-notification'
*/
const stored35a4ac510d032d273122ebe969b9801Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: stored35a4ac510d032d273122ebe969b9801.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '//dashboard-vue.test/email/verification-notification'
*/
stored35a4ac510d032d273122ebe969b9801Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: stored35a4ac510d032d273122ebe969b9801.url(options),
    method: 'post',
})

stored35a4ac510d032d273122ebe969b9801.form = stored35a4ac510d032d273122ebe969b9801Form
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '/email/verification-notification'
*/
const store10b7e8be0fee974c2d8dce56ab18d864 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store10b7e8be0fee974c2d8dce56ab18d864.url(options),
    method: 'post',
})

store10b7e8be0fee974c2d8dce56ab18d864.definition = {
    methods: ["post"],
    url: '/email/verification-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '/email/verification-notification'
*/
store10b7e8be0fee974c2d8dce56ab18d864.url = (options?: RouteQueryOptions) => {
    return store10b7e8be0fee974c2d8dce56ab18d864.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '/email/verification-notification'
*/
store10b7e8be0fee974c2d8dce56ab18d864.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store10b7e8be0fee974c2d8dce56ab18d864.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '/email/verification-notification'
*/
const store10b7e8be0fee974c2d8dce56ab18d864Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store10b7e8be0fee974c2d8dce56ab18d864.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:17
* @route '/email/verification-notification'
*/
store10b7e8be0fee974c2d8dce56ab18d864Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store10b7e8be0fee974c2d8dce56ab18d864.url(options),
    method: 'post',
})

store10b7e8be0fee974c2d8dce56ab18d864.form = store10b7e8be0fee974c2d8dce56ab18d864Form

export const store = {
    '//dashboard-vue.test/email/verification-notification': stored35a4ac510d032d273122ebe969b9801,
    '/email/verification-notification': store10b7e8be0fee974c2d8dce56ab18d864,
}

const EmailVerificationNotificationController = { store }

export default EmailVerificationNotificationController