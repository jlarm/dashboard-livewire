<?php

declare(strict_types=1);

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Date;

class CourseFactory extends Factory
{
    public function definition(): array
    {
        return [
            'created_at' => Date::now(),
            'updated_at' => Date::now(),
        ];
    }
}
