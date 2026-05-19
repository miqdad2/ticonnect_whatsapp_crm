'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  AuthShell,
  AuthSuccessIcon,
  authErrorClass,
  authInputClass,
  authLabelClass,
  authLinkClass,
  authOutlineButtonClass,
  authPrimaryButtonClass,
} from '@/components/auth/auth-shell';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const supabase = createClient();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <AuthShell
        title="Check your email"
        description={
          <>
            We&apos;ve sent a password reset link to{' '}
            <span className="font-bold text-[#071538]">{email}</span>. Please
            check your inbox.
          </>
        }
      >
        <AuthSuccessIcon />
        <Link href="/login">
          <Button variant="outline" className={authOutlineButtonClass}>
            Back to sign in
          </Button>
        </Link>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Reset password"
      description="Enter your email and we'll send you a reset link."
    >
      <form onSubmit={handleReset} className="flex flex-col gap-4">
        {error && <div className={authErrorClass}>{error}</div>}

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className={authLabelClass}>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={authInputClass}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className={authPrimaryButtonClass}
        >
          {loading ? 'Sending...' : 'Send reset link'}
        </Button>
      </form>

      <Link
        href="/login"
        className={`mt-6 flex items-center justify-center gap-2 text-sm ${authLinkClass}`}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to sign in
      </Link>
    </AuthShell>
  );
}
