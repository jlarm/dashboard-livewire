<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Dealer\Department;
use Stancl\Tenancy\Contracts\Tenant;

class SeedDepartmentsJob
{
    public function __construct(protected Tenant $tenant) {}

    public function handle(): void
    {
        $this->tenant->run(function (): void {
            Department::query()->create([
                'name' => 'Sales',
                'slug' => 'sales',
            ]);

            Department::query()->create([
                'name' => 'Accounting',
                'slug' => 'accounting',
            ]);

            Department::query()->create([
                'name' => 'Service',
                'slug' => 'service',
            ]);

            Department::query()->create([
                'name' => 'Parts',
                'slug' => 'parts',
            ]);

            Department::query()->create([
                'name' => 'Body Shop',
                'slug' => 'body-shop',
            ]);

            Department::query()->create([
                'name' => 'Finance',
                'slug' => 'finance',
            ]);

            Department::query()->create([
                'name' => 'Porter/Driver',
                'slug' => 'porter-driver',
            ]);
        });
    }
}
