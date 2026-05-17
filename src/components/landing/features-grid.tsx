import {
  ArrowRight,
  Bot,
  GitBranch,
  MessageSquare,
  Radio,
  Users,
} from 'lucide-react'
import { Section } from './section'

const OUTCOMES = [
  {
    title: 'Capture demand',
    body: 'Every inbound WhatsApp chat becomes a searchable contact record with owner, tags, notes, and next step.',
    icon: MessageSquare,
  },
  {
    title: 'Route work',
    body: 'Assign conversations, move deals through stages, and keep the customer context attached to the revenue opportunity.',
    icon: GitBranch,
  },
  {
    title: 'Follow up',
    body: 'Use approved templates, segmented broadcasts, and no-code automations to keep leads warm after the first reply.',
    icon: Bot,
  },
]

const CAPABILITIES = [
  { label: 'Shared WhatsApp inbox', icon: MessageSquare },
  { label: 'Contact profiles and tags', icon: Users },
  { label: 'Sales pipelines', icon: GitBranch },
  { label: 'Broadcast campaigns', icon: Radio },
  { label: 'No-code automation builder', icon: Bot },
]

export function FeaturesGrid() {
  return (
    <Section id="features" className="border-b border-slate-900">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Ticonnect WhatsApp CRM
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            One workflow from first message to closed deal.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            Clients do not care which tool your team is using. They care that
            someone answers fast, remembers the context, and follows up at the
            right time. Ticonnect WhatsApp CRM makes that the default operating rhythm.
          </p>

          <div className="mt-8 flex flex-col gap-2">
            {CAPABILITIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border-b border-slate-800/70 py-3 text-sm text-slate-300"
                >
                  <Icon className="h-4 w-4 text-sky-300" />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {OUTCOMES.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group rounded-lg border border-slate-800 bg-slate-900/45 p-6 transition-colors hover:border-sky-400/40 hover:bg-slate-900/70"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      0{index + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.body}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-sky-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
