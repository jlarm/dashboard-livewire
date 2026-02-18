<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store\SingleStore\Settings;

use App\Models\Dealer\Store;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class StoreDetails extends Component
{
    public Store $store;

    public function render(): Factory|View
    {
        return view('livewire.dealer.store.single-store.settings.store-details');
    }
}
