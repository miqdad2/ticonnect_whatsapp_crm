import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Section } from './section'

export function CtaBanner() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-xl border border-sky-400/25 bg-[#071827] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100">
            <MessageSquare className="h-3.5 w-3.5 text-sky-300" />
            WhatsApp CRM built for growth teams
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Give clients the fastest path from message to answer.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Start with the shared inbox, then add pipelines, broadcasts, and
            automations as the team scales.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link
            href="/signup"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
          >
            Start Ticonnect WhatsApp CRM
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-slate-600 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-300"
          >
            Sign in
          </Link>
        </div>
      </div>
    </Section>
  )
}
