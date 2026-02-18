<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store\Multi;

use App\Models\Dealer\Store;
use App\Models\Dealer\Vendor;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class VendorIndex extends Component
{
    public Store $store;
    public $sid = '';

    public function mount(): void
    {
        $this->sid = $this->store->id;
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.store.multi.vendor-index', [
            'vendors' => Vendor::query()->latest()->get(),
        ]);
    }
}
