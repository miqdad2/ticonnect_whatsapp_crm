import Link from 'next/link'
import { TiconnectLogo } from '@/components/brand/ticonnect-logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-5">
        <div className="col-span-2 sm:col-span-2">
          <Link href="/" aria-label="Ticonnect WhatsApp CRM home">
            <TiconnectLogo showSubtitle textClassName="text-base" />
          </Link>
          <p className="mt-3 max-w-sm text-sm text-slate-500">
            Ticonnect WhatsApp CRM is a Ticode Technologies product for teams
            running customer conversations, sales pipelines, broadcasts, and
            automations.
          </p>
        </div>

        <FooterColumn
          title="Product"
          links={[
            { href: '#features', label: 'Platform' },
            { href: '#inbox', label: 'Inbox' },
            { href: '#automations', label: 'Automations' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <FooterColumn
          title="Resources"
          links={[
            { href: '#operations', label: 'Operations' },
            { href: '#how-it-works', label: 'Setup' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <FooterColumn
          title="Account"
          links={[
            { href: '/signup', label: 'Start free' },
            { href: '/login', label: 'Sign in' },
            { href: '/forgot-password', label: 'Forgot password' },
          ]}
        />
      </div>

      <div className="border-t border-slate-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center">
          <span>&copy; {year} Ticode Technologies. All rights reserved.</span>
          <span>Built for the official WhatsApp Business API.</span>
        </div>
        <div className="mx-auto w-full max-w-7xl px-6 pb-5 text-xs leading-relaxed text-slate-600">
          WhatsApp is a registered trademark of Meta Platforms, Inc. Ticode is
          not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) =>
          l.external ? (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
