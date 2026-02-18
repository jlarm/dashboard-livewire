<?php

declare(strict_types=1);

namespace App\Http\Resources\Central;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Override;

class DealershipResource extends JsonResource
{
    #[Override]
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'url' => 'https://'.$this->domain().'/dashboard',
            'users' => $this->users->map(fn ($user): array => [
                'id' => $user->id,
                'name' => $user->name,
                'initials' => $user->initials,
            ]),
        ];
    }
}
