<?php

declare(strict_types=1);

namespace App\Models\Dealer;

use App\Enums\Frequency;
use App\Enums\State;
use App\Models\RemediationSetting;
use App\Models\User;
use App\Observers\StoreObserver;
use App\Policies\Tenant\StorePolicy;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Override;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * @property-read RemediationSetting|null $remediationSettings
 */
#[UsePolicy(StorePolicy::class)]
#[ObservedBy(StoreObserver::class)]
class Store extends Model
{
    use LogsActivity;

    public function users(): BelongsToMany
    {
        return $this->BelongsToMany(User::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logFillable();
    }

    #[Override]
    protected function casts(): array
    {
        return [
            'id' => 'integer',
            'slug' => 'string',
            'name' => 'string',
            'address' => 'string',
            'city' => 'string',
            'state' => State::class,
            'postal_code' => 'string',
            'phone' => 'string',
            'website' => 'string',
            'logo' => 'string',
            'ip_addresses' => 'array',
            'website_urls' => 'array',
            'monitoring_start_date' => 'date:Y-m-d',
            'currently_monitoring' => 'boolean',
            'service_contracts' => 'array',
            'tire_wheel' => 'array',
            'other_fi' => 'array',
            'reinsurance' => 'boolean',
            'user_submitted' => 'array',
            'courses_not_taken_notification' => 'boolean',
            'frequency' => Frequency::class,
            'remediation_notifications_last_sent' => 'datetime',
            'videos' => 'boolean',
        ];
    }
}
