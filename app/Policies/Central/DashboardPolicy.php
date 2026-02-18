<?php

declare(strict_types=1);

namespace App\Policies\Central;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DashboardPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasAnyRole('super-admin|Consultant');
    }
}
