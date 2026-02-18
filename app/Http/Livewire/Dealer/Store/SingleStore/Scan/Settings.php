<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store\SingleStore\Scan;

use App\Models\Dealer\Store;
use App\Support\FluxToast as Notification;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class Settings extends Component
{
    public Store $store;
    public $name;
    protected $rules = [
        'name' => 'string|max:255',
    ];

    public function mount(): void
    {
        $this->name = $this->store->scanSetting->name;
    }

    public function update()
    {
        $this->validate();

        $this->store->scanSetting()->update([
            'name' => $this->name,
        ]);

        Notification::make()
            ->title('Updated Successfully!')
            ->success()
            ->send();

        if (tenant('locations')) {
            return to_route('dealer.stores.scan.index', $this->store);
        }

        return to_route('dealer.scan.index');

    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.store.single-store.scan.settings');
    }
}
