<?php

declare(strict_types=1);

namespace App\Http\Controllers\Central\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserInviteRequest;
use App\Repositories\CentralUserInviteRepository;
use App\Support\FluxToast as Notification;

class StoreController extends Controller
{
    public function __invoke(StoreUserInviteRequest $request, CentralUserInviteRepository $repository)
    {
        $repository->create($request->validated());

        Notification::make()
            ->title('Employee Invited')
            ->body('Employee has been successfully invited.')
            ->success()
            ->send();

        return to_route('employees.index');
    }
}
