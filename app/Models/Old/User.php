<?php

declare(strict_types=1);

namespace App\Models\Old;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Certificate;
use App\Models\Contract;
use App\Models\CourseUser;
use App\Models\Dealer\Course;
use App\Models\Dealer\Department;
use App\Models\Dealer\Invite;
use App\Models\Dealer\PhishingCampaign;
use App\Models\Dealer\Store;
use App\Models\Dealer\Timeline;
use App\Models\Dealership;
use App\Models\FitTestDoc;
use App\Models\RemediationReminderPreference;
use App\Models\VideoProgress;
use App\Observers\UserObserver;
use App\Services\UserCourseService;
use App\Traits\HasAudits;
use App\Traits\HasCourses;
use App\Traits\HasManuals;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Override;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * @property int $id
 * @property string $name
 * @property string|null $email
 * @property-read int $total_user_courses
 * @property-read int $total_completed_courses
 * @property-read bool $user_has_not_completed_courses
 */
#[ObservedBy([UserObserver::class])]
class User extends Authenticatable
{
    use HasApiTokens,
        HasAudits,
        HasCourses,
        HasFactory,
        HasManuals,
        HasRoles,
        HasSlug,
        LogsActivity,
        Notifiable,
        SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'store_id',
        'department_id',
        'password',
        'current_store_id',
        'last_sent_course_reminder',
        'email_verified_at',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function initials(): string
    {
        return Str::of($this->name)
            ->explode(' ')
            ->take(2)
            ->map(fn ($word) => Str::substr($word, 0, 1))
            ->implode('');
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    /**
     * @return BelongsTo<Store, User>
     */
    public function currentStore(): BelongsTo
    {
        return $this->belongsTo(Store::class, 'current_store_id');
    }

    public function currentStoreName(): string
    {
        return $this->currentStore()->first()->name ?? tenant('name');
    }

    /**
     * @return HasMany<Contract>
     */
    public function contracts(): HasMany
    {
        return $this->hasMany(Contract::class);
    }

    /**
     * @return BelongsToMany<Dealership>
     */
    public function dealerships(): BelongsToMany
    {
        return $this->belongsToMany(Dealership::class, 'tenant_user', 'user_id', 'tenant_id');
    }

    /**
     * @return BelongsToMany<Store>
     */
    public function stores(): BelongsToMany
    {
        return $this->belongsToMany(Store::class);
    }

    /**
     * @return BelongsTo<Department, User>
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * @return HasMany<Invite>
     */
    public function invites(): HasMany
    {
        return $this->hasMany(Invite::class);
    }

    /**
     * @return HasMany<Certificate>
     */
    public function certificates(): HasMany
    {
        return $this->hasMany(Certificate::class);
    }

    /**
     * @return HasMany<PhishingCampaign>
     */
    public function phishingCampaigns(): HasMany
    {
        return $this->hasMany(PhishingCampaign::class);
    }

    /**
     * @return HasMany<Timeline>
     */
    public function timelines(): HasMany
    {
        return $this->hasMany(Timeline::class, 'email', 'email');
    }

    /**
     * @return HasMany<FitTestDoc>
     */
    public function fitTests(): HasMany
    {
        return $this->hasMany(FitTestDoc::class);
    }

    /**
     * @return HasMany<VideoProgress>
     */
    public function videoProgress(): HasMany
    {
        return $this->hasMany(VideoProgress::class);
    }

    /**
     * @return HasMany<RemediationReminderPreference>
     */
    public function remediationReminderPreferences(): HasMany
    {
        return $this->hasMany(RemediationReminderPreference::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logFillable();
    }

    public function courseOverrides(): HasMany
    {
        return $this->hasMany(CourseUser::class, 'user_id');
    }

    protected function getPhoneNumberAttribute(): string
    {
        if (! $this->phone) {
            return '';
        }

        $cleaned = preg_replace('/[^[:digit:]]/', '', (string) $this->phone);

        if (! is_string($cleaned) || ! preg_match('/(\d{3})(\d{3})(\d{4})/', $cleaned, $matches)) {
            return '';
        }

        return "{$matches[1]}-{$matches[2]}-{$matches[3]}";
    }

    protected function getInitialsAttribute(): string
    {
        $name = explode(' ', $this->name);
        $initials = '';

        foreach ($name as $n) {
            $initials .= mb_strtoupper($n[0]);
        }

        return $initials;
    }

    protected function getCurrentCoursesAttribute()
    {
        $service = resolve(UserCourseService::class);
        $courses = $service->getCoursesSimple($this);

        return $courses->map(fn ($course): array => [
            'id' => $course->id,
            'name' => $course->name,
        ]);
    }

    /**
     * @param  Builder<User>  $query
     * @return Builder<User>
     */
    #[Scope]
    protected function withoutSuperAdminsAndConsultants(Builder $query): Builder
    {
        return $query->whereDoesntHave('roles', function ($q): void {
            $q->whereIn('name', ['super-admin', 'Consultant']);
        });
    }

    /**
     * @param  Builder<User>  $query
     */
    #[Scope]
    protected function userStore(Builder $query, ?Store $store): void
    {
        if ($store instanceof Store) {
            $query->whereHas('stores', function ($q) use ($store): void {
                $q->where('store_id', $store->id);
            });
        }
    }

    /**
     * @param  Builder<User>  $query
     */
    #[Scope]
    protected function currentUserIsManager(Builder $query, self $currentUser): void
    {
        if ($currentUser->hasRole('Manager') && ! $currentUser->hasRole('Qualified Individual')) {
            $query->where('department_id', $currentUser->department_id);
        }
    }

    /**
     * @param  Builder<User>  $query
     */
    #[Scope]
    protected function usersNotCompletedCourses(Builder $query, bool $showNotCompleted): void
    {
        $query->when($showNotCompleted, fn ($query) => $query->where('user_has_not_completed_courses', true));
    }

    #[Override]
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'last_sent_course_reminder' => 'datetime',
        ];
    }

    private function calculateCourseStatus(Course $course): string
    {
        $lastPass = $course->results->firstWhere('passed', 1);

        if (! $lastPass) {
            return 'due';
        }

        if ($course->years_expires) {
            $expiry = $lastPass->created_at->addYears($course->years_expires);
            if (now()->greaterThan($expiry)) {
                return 'expired';
            }
        }

        return 'valid';
    }

    private function userHasNoCaliforniaStore(): bool
    {
        // Use loaded stores collection if available, otherwise query
        if ($this->relationLoaded('stores')) {
            return ! $this->stores->contains('state', 'California');
        }

        return ! $this->stores()->where('state', 'California')->exists();
    }
}
