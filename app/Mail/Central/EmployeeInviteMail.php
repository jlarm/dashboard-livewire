<?php

declare(strict_types=1);

namespace App\Mail\Central;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class EmployeeInviteMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(public User $user) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'You\'ve been invited to join '.tenant('name'),
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.central.employee-invite',
            with: [
                'name' => $this->user->name,
                'url' => URL::temporarySignedRoute(
                    'invite.show',
                    now()->addHours(72),
                    ['user' => $this->user],
                ),
            ],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
