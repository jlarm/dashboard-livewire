<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store;

use App\Models\Dealer\Store;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class StoreSelector extends Component
{
    public function render(): Factory|View
    {
        if (auth()->user()->can('create-stores')) {
            return view('livewire.dealer.store.store-selector', [
                'stores' => Store::query()->orderBy('name')
                    ->skip(1)->get(),
            ]);
        }

        return view('livewire.dealer.store.store-selector', [
            'stores' => auth()->user()->stores,
        ]);

    }
}
