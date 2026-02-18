<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class Show extends Component
{
    public function render(): Factory|View
    {
        return view('livewire.dealer.store.show');
    }
}
