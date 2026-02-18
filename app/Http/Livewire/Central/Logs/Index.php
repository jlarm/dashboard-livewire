<?php

declare(strict_types=1);

namespace App\Http\Livewire\Central\Logs;

use Illuminate\View\View;
use Livewire\Attributes\Computed;
use Livewire\Component;
use Livewire\WithPagination;
use Spatie\Activitylog\Models\Activity;

class Index extends Component
{
    use WithPagination;

    #[Computed]
    public function logs()
    {
        return Activity::query()->latest()->paginate(25);
    }

    public function badgeColor(string $event): string
    {
        return match ($event) {
            'created' => 'green',
            'updated' => 'yellow',
            'deleted' => 'red',
            default => 'gray',
        };
    }

    public function render(): View
    {
        return view('livewire.central.logs.index');
    }
}
