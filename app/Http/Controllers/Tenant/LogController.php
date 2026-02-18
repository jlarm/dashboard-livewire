<?php

declare(strict_types=1);

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Http\Resources\Tenant\LogResource;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;

class LogController extends Controller
{
    public function index(Request $request): View
    {
        $search = trim((string) $request->string('search'));
        $activityType = trim((string) $request->string('activity_type'));
        $modelType = trim((string) $request->string('model_type'));
        $userId = trim((string) $request->string('user_id'));

        $paginator = Activity::query()
            ->with('causer')
            ->when($activityType !== '', fn (Builder $query): Builder => $query->where('event', $activityType))
            ->when($modelType !== '', fn (Builder $query): Builder => $query->where('subject_type', $modelType))
            ->when($userId !== '', fn (Builder $query): Builder => $query->where('causer_id', (int) $userId))
            ->when($search !== '', function (Builder $query) use ($search): void {
                $query->where(function (Builder $nestedQuery) use ($search): void {
                    $nestedQuery
                        ->where('event', 'like', '%' . $search . '%')
                        ->orWhere('subject_type', 'like', '%' . $search . '%')
                        ->orWhere('description', 'like', '%' . $search . '%')
                        ->orWhereHas('causer', function (Builder $causerQuery) use ($search): void {
                            $causerQuery->where('name', 'like', '%' . $search . '%');
                        });
                });
            })
            ->latest()
            ->paginate(15)
            ->withQueryString();

        $activityTypes = Activity::query()
            ->whereNotNull('event')
            ->select('event')
            ->distinct()
            ->orderBy('event')
            ->pluck('event')
            ->values();

        $modelTypes = Activity::query()
            ->whereNotNull('subject_type')
            ->select('subject_type')
            ->distinct()
            ->orderBy('subject_type')
            ->pluck('subject_type')
            ->map(fn (string $subjectType): array => [
                'value' => $subjectType,
                'label' => class_basename($subjectType),
            ])
            ->values();

        $users = Activity::query()
            ->whereNotNull('causer_id')
            ->with('causer:id,name')
            ->latest()
            ->get()
            ->unique('causer_id')
            ->map(fn (Activity $activity): array => [
                'value' => (string) $activity->causer_id,
                'label' => $activity->causer->name ?? 'Unknown',
            ])
            ->sortBy('label')
            ->values();

        return view('tenant.logs.index', [
            'logs' => [
                'data' => $paginator->getCollection()
                    ->map(fn (Activity $activity) => LogResource::make($activity)->resolve())
                    ->values(),
                'links' => $paginator->linkCollection()
                    ->map(fn (array $link): array => [
                        'url' => $link['url'],
                        'label' => $link['label'],
                        'active' => $link['active'],
                    ])
                    ->values(),
                'meta' => [
                    'from' => $paginator->firstItem(),
                    'to' => $paginator->lastItem(),
                    'total' => $paginator->total(),
                ],
            ],
            'filters' => [
                'search' => $search,
                'activity_type' => $activityType,
                'model_type' => $modelType,
                'user_id' => $userId,
            ],
            'activityTypes' => $activityTypes,
            'modelTypes' => $modelTypes,
            'users' => $users,
        ]);
    }
}
