<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store\Multi;

use App\Models\Dealer\Vendor;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class VendorIndexItem extends Component
{
    public Vendor $vendor;

    public function render(): Factory|View
    {
        return view('livewire.dealer.store.multi.vendor-index-item');
    }
}
