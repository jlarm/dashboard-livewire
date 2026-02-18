<?php

declare(strict_types=1);

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Http\Requests\Central\UserInviteRequest;
use App\Http\Resources\Central\DealershipResource;
use App\Http\Resources\Central\EmployeeResource;
use App\Mail\Central\EmployeeInviteMail;
use App\Models\Course;
use App\Models\CourseResults;
use App\Models\Dealership;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', User::class);

        return Inertia::render('central/user/Index', [
            'users' => EmployeeResource::collection(
                User::query()
                    ->with('roles')
                    ->whereNotNull('email_verified_at')
                    ->addSelect([
                        'passed_courses_count' => CourseResults::query()
                            ->selectRaw('COUNT(DISTINCT course_id)')
                            ->whereColumn('user_id', 'users.id')
                            ->where('passed', true),
                    ])
                    ->orderBy('name')
                    ->get(),
            )->resolve(),
            'totalCourseCount' => Course::query()->count(),
        ]);
    }

    public function show(User $user): Response
    {
        Gate::authorize('view', $user);

        return Inertia::render('central/user/Show', [
            'user' => new EmployeeResource($user->load('roles'))->resolve(),
            'currentDealerships' => DealershipResource::collection(
                $user->dealerships()->with('users')->get(),
            )->resolve(),
            'dealerships' => DealershipResource::collection(
                Dealership::query()
                    ->with('users')
                    ->orderBy('name')
                    ->get(),
            )->resolve(),
        ]);
    }

    public function toggleDealership(User $user, Dealership $dealership): void
    {
        Gate::authorize('update', $user);

        $user->dealerships()->toggle($dealership);
    }

    public function openInvites(): Response
    {
        Gate::authorize('viewAny', User::class);

        return Inertia::render('central/user/OpenInvites', [
            'users' => EmployeeResource::collection(
                User::query()
                    ->with('roles')
                    ->whereNull('email_verified_at')
                    ->orderBy('name')
                    ->get(),
            )->resolve(),
        ]);
    }

    public function deleted(): Response
    {
        Gate::authorize('viewAny', User::class);

        return Inertia::render('central/user/Deleted', [
            'users' => EmployeeResource::collection(
                User::query()
                    ->with('roles')
                    ->onlyTrashed()
                    ->orderBy('name')
                    ->get(),
            )->resolve(),
        ]);
    }

    public function restore(User $user): void
    {
        Gate::authorize('restore', $user);

        $user->restore();
    }

    public function store(UserInviteRequest $request): void
    {
        Gate::authorize('create', User::class);

        $validated = $request->validated();

        $user = User::query()->create([
            ...$validated,
            'password' => Hash::make(Str::password(16)),
        ]);

        $user->assignRole('Consultant');

        Mail::to($user)->send(new EmployeeInviteMail($user));
    }

    public function destroy(User $user): void
    {
        Gate::authorize('delete', $user);

        $user->delete();
    }
}
