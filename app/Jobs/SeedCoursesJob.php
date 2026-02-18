<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Dealer\Course;
use Illuminate\Support\Facades\File;
use Stancl\Tenancy\Contracts\Tenant;

class SeedCoursesJob
{
    public function __construct(protected Tenant $tenant) {}

    public function handle(): void
    {
        $this->tenant->run(function (): void {
            $path = app_path('courses');
            $files = File::allFiles($path);
            sort($files, SORT_NATURAL);

            foreach ($files as $file) {
                $course = File::get($file);
                $json = json_decode($course);
                foreach ($json as $value) {
                    $course = Course::query()->create([
                        'slug' => $value->slug,
                        'name' => $value->name,
                        'slides' => $value->slides,
                        'questions' => $value->questions,
                        'optional' => $value->optional ?? false,
                    ]);
                    if ($value->department !== null) {
                        $course->departments()->attach($value->department);
                    }
                    if ($value->roles !== null) {
                        $course->roles()->attach($value->roles);
                    }
                }
            }
        });
    }
}
