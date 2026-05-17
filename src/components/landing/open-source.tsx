import { Clock3, Headphones, ShieldCheck } from 'lucide-react'
import { Section } from './section'

const TRUST = [
  {
    title: 'Built on the official API',
    body: 'Use Meta WhatsApp Business API credentials, approved templates, webhooks, and clear delivery states.',
    icon: ShieldCheck,
  },
  {
    title: 'Made for daily operators',
    body: 'Agents get assignment, notes, tags, contact history, and a clear next action instead of a noisy chat list.',
    icon: Headphones,
  },
  {
    title: 'Faster response loops',
    body: 'The CRM keeps leads moving with reminders, automations, broadcasts, and pipeline visibility.',
    icon: Clock3,
  },
]

export function OpenSource() {
  return (
    <Section id="operations" className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-8 rounded-xl border border-slate-800 bg-slate-900/35 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Client confidence
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looks professional because the workflow is professional.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            A polished website gets attention. A polished operating system wins
            trust after the first conversation. Ticonnect WhatsApp CRM is built
            around speed, ownership, and follow-through.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {TRUST.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex gap-4 border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
