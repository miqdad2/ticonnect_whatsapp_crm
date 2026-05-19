import { Plug, Users, Zap } from 'lucide-react';
import { Section, SectionHeader } from './section';

const STEPS = [
  {
    num: '01',
    icon: Plug,
    title: 'Connect the channel',
    body: 'Add the WhatsApp Business credentials, verify the webhook, and keep the configuration visible from Settings.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Organize the team',
    body: 'Import contacts, invite agents, define tags, and give every lead a clear owner before volume grows.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Run the workflow',
    body: 'Reply from the inbox, convert chats into deals, send campaigns, and automate the follow-up work.',
  },
];

export function HowItWorks() {
  return (
    <div className="border-y border-emerald-950/10 bg-[#ecfdf5]">
      <Section id="how-it-works">
        <SectionHeader
          eyebrow="Launch path"
          title="A clean first mile for teams moving fast"
          description="Ticonnect WhatsApp CRM is designed so a business can connect WhatsApp, bring in contacts, and start operating from one workspace without a long implementation project."
        />

        <div className="relative rounded-2xl border border-emerald-950/10 bg-white/85 p-4 shadow-2xl shadow-emerald-950/10 sm:p-6">
          <div
            aria-hidden
            className="absolute top-14 left-12 hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-emerald-500/70 via-[#25d366]/70 to-blue-500/40 md:block"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="relative rounded-xl border border-emerald-950/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-xs font-extrabold text-slate-400 uppercase">
                    Step {s.num}
                  </div>
                  <h3 className="font-heading mt-2 text-xl font-bold text-[#071538]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
