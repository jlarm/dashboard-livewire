<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\User;
use App\Policies\Central\UserPolicy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Override;

class AppServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/dashboard';

    /**
     * Register any application services.
     */
    #[Override]
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();

        $this->configureModels();

        View::addNamespace('layouts', resource_path('views/components/layouts'));

        $this->bootAuth();
    }

    public function bootAuth(): void
    {

        Gate::policy(User::class, UserPolicy::class);
        Gate::define('superAdmin', fn (User $user): bool => $user->hasRole('super-admin'));
        Gate::before(fn ($user, $ability): ?true => $user->hasRole('super-admin') ? true : null);

        Password::defaults(fn () => Password::min(8)->uncompromised());
    }

    private function configureModels(): void
    {
        Model::shouldBeStrict(! $this->app->isProduction());
        Model::unguard();
    }
}
