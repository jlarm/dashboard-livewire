<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Vendor;

use App\Models\Dealer\Vendor;
use App\Support\FluxToast as Notification;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Log;
use WireElements\Pro\Components\Modal\Modal;

class Delete extends Modal
{
    public $vendor;

    public function mount(Vendor $vendor): void
    {
        $this->vendor = $vendor;
    }

    public function delete(): void
    {
        try {
            $vendorId = $this->vendor->id;
            $this->vendor->delete();

            $this->close();

            $this->emit('refreshVendors');
            $this->emit('vendorDeleted', $vendorId);

            Notification::make()
                ->title('Vendor Deleted Successfully')
                ->success()
                ->send();
        } catch (Exception $e) {
            Log::error($e);

            $this->addError('vendor', 'An error occurred while deleting the vendor.');

            Notification::make()
                ->title('There was an issue deleting the vendor.')
                ->danger()
                ->send();
        }
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.vendor.delete');
    }
}
