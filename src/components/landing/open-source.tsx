import { Clock3, Headphones, ShieldCheck } from 'lucide-react';
import { Section } from './section';

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
];

export function OpenSource() {
  return (
    <Section id="operations" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-[#071538] p-6 shadow-2xl shadow-emerald-950/20 sm:p-8 lg:p-10">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent"
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-64 w-64 bg-emerald-300/10 blur-3xl"
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold text-emerald-300 uppercase">
              Client confidence
            </p>
            <h2 className="font-heading mt-3 text-3xl font-extrabold text-white sm:text-5xl">
              Looks professional because the workflow is professional.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A polished website gets attention. A polished operating system
              wins trust after the first conversation. Ticonnect WhatsApp CRM is
              built around speed, ownership, and follow-through.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ['API', 'official foundation'],
                ['Owners', 'for every lead'],
                ['Logs', 'for every action'],
              ].map(([value, label]) => (
                <div key={value} className="rounded-xl bg-white/10 p-3">
                  <div className="font-heading text-xl font-extrabold text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-[11px] leading-4 text-slate-300">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {TRUST.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-white/10 bg-slate-950/45 p-4"
                >
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <h3 className="font-heading font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
