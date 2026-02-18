<?php

declare(strict_types=1);

namespace App\Http\Livewire\Central\CourseManagement;

use App\Models\Course;
use App\Models\Dealership;
use App\Support\FluxToast as Notification;
use Illuminate\View\View;
use Livewire\Component;

class Edit extends Component
{
    public Course $course;
    public string $name = '';
    public ?string $video_id = null;
    public string $slides_json = '[]';
    protected $rules = [
        'name' => 'required',
        'slides_json' => 'required|json',
    ];

    public function mount(): void
    {
        $this->name = (string) $this->course->name;
        $this->video_id = $this->course->video_id;
        $this->slides_json = json_encode($this->course->slides ?? [], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) ?: '[]';
    }

    public function update(): void
    {
        $this->validate();

        $slides = json_decode($this->slides_json, true);

        if (! is_array($slides)) {
            $this->addError('slides_json', 'Slides must be valid JSON.');

            return;
        }

        $state = [
            'name' => $this->name,
            'video_id' => $this->video_id,
            'slides' => $slides,
        ];

        // Update central course
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
            ->title('Course updated')
            ->success()
            ->send();
    }

    public function render(): View
    {
        return view('livewire.central.course-management.edit');
    }
}
