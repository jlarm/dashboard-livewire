<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Course;

use App\Models\Dealer\Course;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class All extends Component
{
    public function render(): Factory|View
    {
        return view('livewire.dealer.course.all', [
            'courses' => Course::all(),
        ]);
    }
}
