import { Plug, Users, Zap } from 'lucide-react'
import { Section, SectionHeader } from './section'

const STEPS = [
  {
    num: '01',
    icon: Plug,
    title: 'Connect the channel',
    body:
      'Add the WhatsApp Business credentials, verify the webhook, and keep the configuration visible from Settings.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Organize the team',
    body:
      'Import contacts, invite agents, define tags, and give every lead a clear owner before volume grows.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Run the workflow',
    body:
      'Reply from the inbox, convert chats into deals, send campaigns, and automate the follow-up work.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        eyebrow="Launch path"
        title="A clean first mile for teams moving fast"
        description="Ticonnect WhatsApp CRM is designed so a business can connect WhatsApp, bring in contacts, and start operating from one workspace without a long implementation project."
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-5 top-8 hidden h-px w-[calc(100%-2.5rem)] bg-slate-800 md:block"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.num} className="relative bg-slate-950 pt-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-sky-400/30 bg-slate-900 text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Step {s.num}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {s.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
