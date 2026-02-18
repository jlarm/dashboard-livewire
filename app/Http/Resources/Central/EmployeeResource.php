<?php

declare(strict_types=1);

namespace App\Http\Resources\Central;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Override;

class EmployeeResource extends JsonResource
{
    #[Override]
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'slug' => $this->slug,
            'role' => $this->primaryRoleName(),
            'passed_courses_count' => $this->whenHas('passed_courses_count'),
            'createdAt' => $this->created_at->format('m-d-Y'),
            'deletedAt' => $this->deleted_at?->format('m-d-Y'),
            'email_verified_at' => $this->email_verified_at,
        ];
    }
}
