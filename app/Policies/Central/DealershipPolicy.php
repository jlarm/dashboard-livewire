<?php

declare(strict_types=1);

namespace App\Policies\Central;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DealershipPolicy
{
    use HandlesAuthorization;

    public function create(User $user): bool
    {
        return $user->hasRole('Consultant');
    }
}
