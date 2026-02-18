<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Home;

use App\Models\Dealer\Store;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class StoreListItem extends Component
{
    public Store $store;

    public function render(): Factory|View
    {
        return view('livewire.dealer.home.store-list-item');
    }
}
