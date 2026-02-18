<?php

declare(strict_types=1);

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AcceptInviteController extends Controller
{
    public function show(Request $request, ?User $user = null): View|RedirectResponse
    {
        if (! $user instanceof User) {
            return to_route('login');
        }

        if ($user->email_verified_at) {
            return to_route('login')->with('status', 'already-verified');
        }

        $request->session()->put('invite.accept_user_id', $user->id);
        $request->session()->put('invite.accept_expires_at', (int) $request->query('expires', 0));

        return view('auth.accept-invite', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
    }

    public function store(Request $request, User $user): RedirectResponse
    {
        $allowedUserId = (int) $request->session()->get('invite.accept_user_id', 0);
        $expiresAt = (int) $request->session()->get('invite.accept_expires_at', 0);

        abort_if($allowedUserId !== $user->id || ($expiresAt > 0 && now()->timestamp > $expiresAt), 403, 'Invalid or expired invite session.');

        if ($user->email_verified_at) {
            return to_route('login')->with('status', 'This invite has already been accepted.');
        }

        $request->validate([
            'phone' => ['required', 'regex:/^\d{3}-\d{3}-\d{4}$/'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
            ],
        ]);

        $user->update([
            'phone' => $request->string('phone')->toString(),
            'password' => Hash::make($request->password),
            'email_verified_at' => now(),
        ]);

        $request->session()->forget(['invite.accept_user_id', 'invite.accept_expires_at']);
        Auth::login($user);
        $request->session()->regenerate();

        return to_route('dashboard');
    }
}
