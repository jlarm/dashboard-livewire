<?php

declare(strict_types=1);

namespace App\Http\Livewire\Dealer\Audit\BodyShop;

use App\Models\Dealer\Audit\BodyShopViolationAudit;
use App\Support\FluxToast as Notification;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use WireElements\Pro\Components\Modal\Modal;

class Delete extends Modal
{
    public $bodyShopAudit;

    public function mount(BodyShopViolationAudit $bodyShopAudit): void
    {
        $this->bodyShopAudit = $bodyShopAudit;
    }

    public function delete(): void
    {
        $this->bodyShopAudit->delete();

        $this->emitTo('dealer.audit.body-shop.index', 'refreshAudits');

        $this->close();

        Notification::make()
            ->title('Body Shop Audit Deleted Successfully!')
            ->success()
            ->send();
    }

    public function render(): Factory|View
    {
        return view('livewire.dealer.audit.body-shop.delete');
    }

    protected function deleteViolationPhotos(): void
    {
        $this->bodyShopAudit->violations->each(function ($violation): void {
            $violation->clearMediaCollection('violations_files_0');
            $violation->clearMediaCollection('violations_files_1');
            $violation->clearMediaCollection('violations_files_2');
        });
    }
}
