<?php

declare(strict_types=1);

namespace App\Models;

use App\Observers\UserObserver;
use Carbon\CarbonInterface;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Override;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Traits\HasRoles;

/**
 * @property-read int $id
 * @property-read string $name
 * @property string $slug
 * @property-read string $email
 * @property-read string $phone
 * @property-read CarbonInterface $created_at
 * @property-read CarbonInterface $updated_at
 * @property-read CarbonInterface|null $deleted_at
 */
#[ObservedBy([UserObserver::class])]
class User extends Authenticatable
{
    use HasFactory,
        LogsActivity,
        HasRoles,
        Notifiable,
        SoftDeletes;

    protected $hidden = [
        'password',
        'remember_token',
    ];

    #[Override]
    public function casts(): array
    {
        return [
            'id' => 'integer',
            'name' => 'string',
            'slug' => 'string',
            'email' => 'string',
            'phone' => 'string',
            'email_verified_at' => 'datetime',
            'password' => 'string',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'deleted_at' => 'datetime',
        ];
    }

    public function primaryRoleName(): ?string
    {
        return $this->roles()->value('name');
    }

    /**
     * @return BelongsToMany<Dealership>
     */
    public function dealerships(): BelongsToMany
    {
        return $this->belongsToMany(Dealership::class, 'tenant_user', 'user_id', 'tenant_id');
    }

    /**
     * Send the password reset notification using a URL relative to the current domain.
     */
    #[Override]
    public function sendPasswordResetNotification($token): void
    {
        ResetPassword::createUrlUsing(fn ($notifiable, string $token): string => url("/reset-password/{$token}?email=".urlencode((string) $notifiable->getEmailForPasswordReset())));

        $this->notify(new ResetPassword($token));
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logFillable();
    }

    /** @return Attribute<string, never> */
    protected function initials(): Attribute
    {
        return Attribute::get(fn (): string => Str::of($this->name)
            ->explode(' ')
            ->take(2)
            ->map(fn ($word) => Str::substr($word, 0, 1))
            ->implode(''));
    }
}
