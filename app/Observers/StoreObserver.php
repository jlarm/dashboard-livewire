<?php

declare(strict_types=1);

namespace App\Observers;

use App\Models\Dealer\Store;
use Illuminate\Support\Str;

class StoreObserver
{
    public function creating(Store $store): string
    {
        return $store->slug = (string) Str::slug($store->name);
    }
}
