'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';
import { TiconnectLogo } from '@/components/brand/ticonnect-logo';

/**
 * Landing-page top nav. Client component because we need to flip the
 * primary CTA depending on whether the visitor is already signed in.
 * The signed-out CTA renders immediately for marketing clarity. If an
 * authenticated session is found, it is replaced with the dashboard action.
 */
type AuthState = 'pending' | 'signed-in' | 'signed-out';

const LINKS = [
  { href: '#features', label: 'Platform' },
  { href: '#inbox', label: 'Inbox' },
  { href: '#automations', label: 'Automations' },
  { href: '#operations', label: 'Trust' },
  { href: '#faq', label: 'FAQ' },
];

export function LandingNav() {
  const [auth, setAuth] = useState<AuthState>('signed-out');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Quick auth check — no realtime needed, just the initial state.
    const supabase = createClient();
    let cancelled = false;
    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) return;
      setAuth(data.session?.user ? 'signed-in' : 'signed-out');
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-colors',
        scrolled
          ? 'border-blue-950/10 bg-white/88 shadow-sm shadow-blue-950/5 backdrop-blur'
          : 'border-transparent bg-white/60 backdrop-blur'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Ticonnect WhatsApp CRM home"
        >
          <TiconnectLogo
            textClassName="text-sm text-[#071538]"
            markClassName="h-5 w-6"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <NavCtas auth={auth} />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-blue-950/10 bg-white/95 shadow-xl shadow-blue-950/10 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-blue-950/10 pt-3">
              <NavCtas auth={auth} mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavCtas({
  auth,
  mobile = false,
}: {
  auth: AuthState;
  mobile?: boolean;
}) {
  const btnBase =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors';
  const secondary = cn(
    btnBase,
    'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700',
    mobile && 'justify-center'
  );
  const primary = cn(
    btnBase,
    'bg-[#25d366] text-[#071538] shadow-sm shadow-emerald-900/15 hover:bg-[#1fb85a]',
    mobile && 'justify-center'
  );

  if (auth === 'pending') {
    // Neutral placeholder that matches the eventual button sizes so
    // nothing shifts once auth resolves.
    return (
      <>
        <span className={cn(btnBase, 'w-20 bg-blue-100 text-transparent')}>
          ·
        </span>
        <span className={cn(btnBase, 'w-28 bg-blue-100 text-transparent')}>
          ·
        </span>
      </>
    );
  }

  if (auth === 'signed-in') {
    return (
      <Link href="/dashboard" className={primary}>
        Open dashboard
      </Link>
    );
  }

  return (
    <>
      <Link href="/login" className={secondary}>
        Sign in
      </Link>
      <Link href="/signup" className={primary}>
        Start free
      </Link>
    </>
  );
}
