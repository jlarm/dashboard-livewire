<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Employee;

use App\Models\User;
use App\Support\FluxToast as Notification;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class Restore extends Component
{
    public User $user;

    public function restoreEmployee(): void
    {
        $this->user->restore();

        $this->emit('refresh-deleted');

        Notification::make()
            ->title('Employee Restored Successfully!')
            ->success()
            ->send();
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.employee.restore');
    }
}
