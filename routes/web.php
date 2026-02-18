<?php

declare(strict_types=1);

use App\Http\Controllers\Central\AcceptInviteController;
use App\Http\Controllers\Central\DealershipController;
use App\Http\Controllers\Central\UserController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('welcome');

Route::middleware('signed')->group(function (): void {
    Route::get('invite/{user}', [AcceptInviteController::class, 'show'])->name('invite.show');
});
Route::post('invite/{user}', [AcceptInviteController::class, 'store'])->name('invite.store');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', [DashboardController::class, 'index'])
        ->middleware('role:super-admin|Consultant')
        ->name('dashboard');

    Route::middleware('can:viewAny,App\Models\User')->group(function (): void {
        Route::get('employees', [UserController::class, 'index'])->name('employees.index');
        Route::get('employees/open-invites', [UserController::class, 'openInvites'])->name('employees.open-invites');
        Route::get('employees/deleted', [UserController::class, 'deleted'])->name('employees.deleted');
        Route::get('employees/{user:slug}', [UserController::class, 'show'])->name('employees.show');
        Route::post('employees', [UserController::class, 'store'])->name('employees.store');
        Route::patch('employees/{user}/restore', [UserController::class, 'restore'])->name('employees.restore')->withTrashed();
        Route::delete('employees/{user}', [UserController::class, 'destroy'])->name('employees.destroy');
        Route::post('employees/{user:slug}/dealerships/{dealership}', [UserController::class, 'toggleDealership']);
    });

    Route::get('dealerships', [DealershipController::class, 'index'])->name('dealerships.index');
    Route::post('dealerships', [DealershipController::class, 'store'])->name('dealerships.store');
});

require __DIR__.'/auth.php';
require __DIR__.'/settings.php';
