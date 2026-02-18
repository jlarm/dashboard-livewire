<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Audit\Individual;

use App\Models\Dealer\Audit\IndividualAudit;
use App\Models\Dealer\Store;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Livewire\Component;

class Index extends Component
{
    public Store $store;
    public $currentStore;
    protected $listeners = [
        'refreshIndividualAudits' => '$refresh',
    ];

    public function mount(Request $request): void
    {
        $this->currentStore = Store::query()->where('name', $request->get('store')?->name)->first();
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.audit.individual.index', [
            'audits' => IndividualAudit::query()->latest('audit_date')
                ->latest()->where('parent_id')
                ->with('store')
                ->where('store_id', $this->store->id)
                ->get(),
        ]);
    }
}
