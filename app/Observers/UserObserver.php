<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\User;
use Illuminate\Support\Str;

class UserObserver
{
    public function creating(User $user): string
    {
        return $user->slug = (string) Str::slug($user->name);
    }
}
