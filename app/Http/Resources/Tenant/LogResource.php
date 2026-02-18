<?php

declare(strict_types=1);

namespace App\Http\Resources\Tenant;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Override;

class LogResource extends JsonResource
{
    #[Override]
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'event' => $this->event,
            'date' => $this->created_at->format('Y-m-d H:i:s'),
            'model' => $this->subject_type ? class_basename($this->subject_type) : 'N/A',
            'causer' => $this->causer->name ?? 'N/A',
        ];
    }
}
