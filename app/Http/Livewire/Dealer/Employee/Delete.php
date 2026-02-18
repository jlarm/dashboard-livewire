<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Employee;

use App\Models\Dealer\Store;
use App\Models\User;
use App\Support\FluxToast as Notification;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Log;
use WireElements\Pro\Components\Modal\Modal;

class Delete extends Modal
{
    public Store $store;
    public $user;

    public function mount(User $user): void
    {
        $this->store = Store::query()->find(resolve('currentStore'));
        $this->user = $user;
    }

    public function delete()
    {
        try {
            $this->user->delete();

            Notification::make()
                ->title('Employee Deleted Successfully!')
                ->success()
                ->send();

            return tenant('locations') ? to_route('dealer.stores.employees', $this->store) : to_route('dealer.employees.index');
        } catch (Exception $e) {
            Log::error($e);
            $this->addError('file', 'An error occurred while deleting the user.');
        }

        return null;
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.employee.delete');
    }
}
