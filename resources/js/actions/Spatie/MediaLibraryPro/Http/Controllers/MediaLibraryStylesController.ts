import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
const MediaLibraryStylesController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MediaLibraryStylesController.url(options),
    method: 'get',
})

MediaLibraryStylesController.definition = {
    methods: ["get","head"],
    url: '/media-library-pro/styles.css',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
MediaLibraryStylesController.url = (options?: RouteQueryOptions) => {
    return MediaLibraryStylesController.definition.url + queryParams(options)
}

/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
MediaLibraryStylesController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MediaLibraryStylesController.url(options),
    method: 'get',
})

/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
MediaLibraryStylesController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MediaLibraryStylesController.url(options),
    method: 'head',
})

/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
const MediaLibraryStylesControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MediaLibraryStylesController.url(options),
    method: 'get',
})

/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
MediaLibraryStylesControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MediaLibraryStylesController.url(options),
    method: 'get',
})

/**
* @see \Spatie\MediaLibraryPro\Http\Controllers\MediaLibraryStylesController::__invoke
* @see vendor/spatie/laravel-medialibrary-pro/src/Http/Controllers/MediaLibraryStylesController.php:9
* @route '/media-library-pro/styles.css'
*/
MediaLibraryStylesControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MediaLibraryStylesController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MediaLibraryStylesController.form = MediaLibraryStylesControllerForm

export default MediaLibraryStylesController