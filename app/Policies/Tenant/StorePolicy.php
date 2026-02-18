<?php

declare(strict_types=1);

namespace App\Policies\Tenant;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StorePolicy
{
    use HandlesAuthorization;

    public function create(User $user): bool
    {
        return $user->hasRole('Consultant');
    }
}
