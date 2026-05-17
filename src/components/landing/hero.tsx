import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { TiconnectLogo } from '@/components/brand/ticonnect-logo'
import { InboxMock } from './mock/inbox-mock'

const METRICS = [
  { value: '1 inbox', label: 'for sales, support, and follow-up' },
  { value: '0 lost', label: 'handoffs between agents and deals' },
  { value: '24/7', label: 'automations for routine replies' },
]

const PROOF = [
  'Official WhatsApp Business API foundation',
  'Pipeline built into every conversation',
  'Broadcasts, templates, and automations in one workspace',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/70 bg-[#06111f]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'linear-gradient(135deg, rgba(2,6,23,0.96) 0%, rgba(7,22,38,0.92) 44%, rgba(11,56,91,0.78) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(125,211,252,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.22) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
        <div>
          <TiconnectLogo showSubtitle textClassName="text-3xl sm:text-4xl" />

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-sky-100">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
            WhatsApp CRM for teams that cannot miss a lead
          </div>

          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Close more deals from WhatsApp conversations.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Ticonnect WhatsApp CRM turns chats into assigned inbox threads,
            contact records, pipeline deals, broadcasts, and automated
            follow-ups without forcing your team to jump between tools.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-950/30 transition-colors hover:bg-sky-300"
            >
              Start Ticonnect WhatsApp CRM
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-slate-600 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-300 hover:text-white"
            >
              See the workflow
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div key={metric.value} className="border-l border-sky-300/30 pl-4">
                <div className="text-xl font-bold text-white">{metric.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 hidden w-44 rounded-lg border border-slate-700/80 bg-slate-950/90 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur lg:block">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Live handoff
            </div>
            <div className="mt-3 text-2xl font-bold text-white">4m 12s</div>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              average first response after assignment
            </p>
          </div>

          <div className="rounded-xl border border-slate-700/70 bg-slate-900/45 p-2 shadow-2xl shadow-slate-950/60 backdrop-blur">
            <InboxMock />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {PROOF.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-3 text-xs leading-5 text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
