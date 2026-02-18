<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store;

use App\Models\Dealer\Store;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    protected $listeners = ['refreshStores' => '$refresh'];

    public function render(): Factory|View
    {
        return view('livewire.dealer.store.index', [
            'stores' => Store::query()->orderBy('name')
                ->whereNot('id', 1)
                ->paginate(10),
        ]);
    }
}
