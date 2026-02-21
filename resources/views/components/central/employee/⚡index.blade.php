<?php

use App\Models\Course;
use App\Models\CourseResults;
use App\Models\User;
use Livewire\Attributes\Computed;
use Livewire\Component;
use Livewire\WithPagination;

new class extends Component {
    use WithPagination;

    #[Computed]
    public function employees()
    {
        return User::query()
            ->with('roles')
            ->whereNotNull('email_verified_at')
            ->addSelect([
                'passed_courses_count' => CourseResults::query()
                    ->selectRaw('COUNT(DISTINCT course_id)')
                    ->whereColumn('user_id', 'users.id')
                    ->where('passed', true),
            ])
            ->orderBy('name')
            ->paginate(10);
    }

    #[Computed]
    public function totalCourseCount(): int
    {
        return Course::query()->count();
    }
};
?>

<div>
    <flux:table :paginate="$this->employees">
        <flux:table.columns>
            <flux:table.column>Name</flux:table.column>
            <flux:table.column>Email</flux:table.column>
            <flux:table.column>Role</flux:table.column>
            <flux:table.column>Courses</flux:table.column>
            <flux:table.column></flux:table.column>
        </flux:table.columns>

        <flux:table.rows>
            @foreach ($this->employees as $employee)
                <flux:table.row>
                    <flux:table.cell>{{ $employee->name }}</flux:table.cell>
                    <flux:table.cell>{{ $employee->email }}</flux:table.cell>
                    <flux:table.cell>
                        <flux:badge size="sm" inset="top bottom">{{ $employee->primaryRoleName() }}</flux:badge>
                    </flux:table.cell>
                    <flux:table.cell>{{ $employee->passed_courses_count }} of {{ $this->totalCourseCount }}</flux:table.cell>
                    <flux:table.cell align="end">
                        <flux:button wire:navigate href="#" size="xs">View</flux:button>
                    </flux:table.cell>
                </flux:table.row>
            @endforeach
        </flux:table.rows>
    </flux:table>
</div>
