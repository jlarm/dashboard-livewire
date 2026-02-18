<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Store\SingleStore\Docs;

use App\Models\DealerDoc;
use App\Support\FluxToast as Notification;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use WireElements\Pro\Components\Modal\Modal;

class Delete extends Modal
{
    public $doc;

    public function mount(DealerDoc $doc): void
    {
        $this->doc = $doc;
    }

    public function delete(): void
    {
        try {
            Storage::disk('dealer-docs')->delete($this->doc->file_path);

            $this->doc->delete();

            $this->emit('saved');

            $this->close();

            Notification::make()
                ->title('Document Deleted Successfully!')
                ->success()
                ->send();
        } catch (Exception $e) {
            Log::error($e);
            $this->addError('file', 'An error occurred while deleting the file.');
        }
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.store.single-store.docs.delete');
    }
}
