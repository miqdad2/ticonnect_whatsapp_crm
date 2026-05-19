import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { Section } from './section';

export function CtaBanner() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-[#071538] p-6 shadow-2xl shadow-emerald-950/20 sm:p-10">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'linear-gradient(120deg, rgba(37,211,102,0.28), rgba(14,165,233,0.12), rgba(7,21,56,0.22))',
          }}
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-20 h-72 w-72 bg-emerald-300/20 blur-3xl"
        />
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-white/10 px-3 py-1 text-xs font-bold text-emerald-50">
              <MessageSquare className="h-3.5 w-3.5 text-emerald-200" />
              WhatsApp CRM built for growth teams
            </div>
            <h2 className="font-heading mt-5 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">
              Give clients the fastest path from message to answer.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50/80">
              Start with the shared inbox, then add pipelines, broadcasts, and
              automations as the team scales.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-blue-50/85">
              {['Launch fast', 'Own every lead', 'Automate follow-up'].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:justify-end">
            <Link
              href="/signup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 py-3 text-sm font-bold text-[#071538] shadow-xl shadow-emerald-950/30 transition-colors hover:bg-[#1fb85a]"
            >
              Start Ticonnect WhatsApp CRM
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-slate-950/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
