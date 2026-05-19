import {
  ArrowRight,
  Bot,
  GitBranch,
  MessageSquare,
  Radio,
  Sparkles,
  Users,
} from 'lucide-react';
import { Section } from './section';

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
];

const CAPABILITIES = [
  { label: 'Shared WhatsApp inbox', icon: MessageSquare },
  { label: 'Contact profiles and tags', icon: Users },
  { label: 'Sales pipelines', icon: GitBranch },
  { label: 'Broadcast campaigns', icon: Radio },
  { label: 'No-code automation builder', icon: Bot },
];

export function FeaturesGrid() {
  return (
    <div className="border-y border-emerald-950/10 bg-white">
      <Section id="features" className="relative">
        <div
          aria-hidden
          className="absolute top-16 left-6 h-40 w-40 bg-emerald-400/12 blur-3xl"
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="relative">
            <p className="text-xs font-extrabold text-emerald-600 uppercase">
              Ticonnect WhatsApp CRM
            </p>
            <h2 className="font-heading mt-3 max-w-2xl text-3xl font-extrabold text-[#071538] sm:text-5xl">
              One workflow from first message to closed deal.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Clients do not care which tool your team is using. They care that
              someone answers fast, remembers the context, and follows up at the
              right time. Ticonnect WhatsApp CRM makes that the default
              operating rhythm.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
              {CAPABILITIES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 border-b border-emerald-950/10 px-1 py-3 text-sm font-semibold text-slate-700"
                  >
                    <Icon className="h-4 w-4 text-emerald-600" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-950/10 bg-[#f6fffb] p-3 shadow-2xl shadow-emerald-950/10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/70 to-transparent"
            />
            <div className="grid grid-cols-1 gap-3">
              {OUTCOMES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-emerald-950/10 bg-white p-5 shadow-sm transition-colors hover:border-emerald-400/50 hover:bg-emerald-50/50"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase">
                          <Sparkles className="h-3.5 w-3.5 text-emerald-500" />0
                          {index + 1}
                        </div>
                        <h3 className="font-heading mt-1 text-2xl font-bold text-[#071538]">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                          {item.body}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 ml-auto hidden h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-emerald-600 sm:block" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
