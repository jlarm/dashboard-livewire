<?php

declare(strict_types=1);

namespace App\Http\Livewire\Central\CourseManagement;

use App\Models\Course;
use App\Models\Dealership;
use App\Support\FluxToast as Notification;
use Illuminate\View\View;
use Livewire\Component;

class EditQuiz extends Component
{
    public Course $course;
    public string $name = '';
    public string $questions_json = '[]';
    protected $rules = [
        'questions_json' => 'required|json',
    ];

    public function mount(): void
    {
        $this->name = (string) $this->course->name;
        $this->questions_json = json_encode($this->course->questions ?? [], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) ?: '[]';
    }

    public function update(): void
    {
        $this->validate();

        $questions = json_decode($this->questions_json, true);

        if (! is_array($questions)) {
            $this->addError('questions_json', 'Questions must be valid JSON.');

            return;
        }

        $state = [
            'questions' => $questions,
        ];

        $this->course->update($state);

        // Update matching courses across all tenants
        tenancy()->central(function (): void {
            foreach (Dealership::all() as $tenant) {
                tenancy()->initialize($tenant);

                if ($tenantCourse = Course::query()->where('slug', $this->course->slug)->first()) {
                    $tenantCourse->update($state);
                }
            }
        });

        Notification::make()
            ->title('Course quiz updated')
            ->success()
            ->send();
    }

    public function render(): View
    {
        return view('livewire.central.course-management.edit-quiz');
    }
}
