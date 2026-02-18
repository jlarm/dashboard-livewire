<?php

declare(strict_types=1);

namespace App\Livewire\Forms\Central;

use Livewire\Attributes\Validate;
use Livewire\Form;

class EmployeeInviteForm extends Form
{
    #[Validate('required|string|min:2|max:255')]
    public string $name = '';

    #[Validate('required|email|unique:users')]
    public string $email = '';

    #[Validate('required|regex:/^\d{3}-\d{3}-\d{4}$/')]
    public string $phone = '';
}
