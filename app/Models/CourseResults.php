<?php

declare(strict_types=1);

namespace App\Models;

use App\Observers\old\CourseResultsObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ObservedBy([CourseResultsObserver::class])]
class CourseResults extends Model
{
    protected $fillable = [
        'percentage',
        'passed',
        'course_id',
        'user_id',
    ];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
