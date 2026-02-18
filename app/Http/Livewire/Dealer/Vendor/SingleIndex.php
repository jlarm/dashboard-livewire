<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Vendor;

use App\Models\Dealer\Vendor;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class SingleIndex extends Component
{
    protected $listeners = ['refreshVendors' => '$refresh'];

    public function render(): Factory|View
    {
        return view('livewire.dealer.vendor.single-index', [
            'vendors' => Vendor::query()->orderBy('name')->get(),
        ]);
    }
}
