<?php

declare(strict_types=1);

namespace App\Livewire;

use Illuminate\Contracts\View\View;
use Livewire\Attributes\On;
use Livewire\Component;

class ModalPro extends Component
{
    public ?string $component = null;
    public array $arguments = [];
    public int $instance = 0;

    #[On('modal.open')]
    public function open(string|array|null $component = null, array $arguments = []): void
    {
        if (is_array($component)) {
            $arguments = $component['arguments'] ?? [];
            $component = $component['component'] ?? null;
        }

        if (! is_string($component) || $component === '') {
            return;
        }

        $this->component = $component;
        $this->arguments = $arguments;
        $this->instance++;
    }

    #[On('modal.close')]
    public function close(): void
    {
        $this->reset(['component', 'arguments']);
    }

    public function render(): View
    {
        return view('livewire.modal-pro');
    }
}
