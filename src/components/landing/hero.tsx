import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { TiconnectLogo } from '@/components/brand/ticonnect-logo';
import { InboxMock } from './mock/inbox-mock';

const METRICS = [
  { value: '1 inbox', label: 'sales, support, and follow-up' },
  { value: '0 leaks', label: 'between chats, agents, and deals' },
  { value: '24/7', label: 'template-ready automated replies' },
];

const PROOF = [
  'Official WhatsApp Business API foundation',
  'Deal pipeline beside every conversation',
  'Broadcasts, templates, and automations together',
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-blue-950/10 bg-[#f7fbff]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 82% 18%, rgba(37,211,102,0.24), transparent 34%), linear-gradient(115deg, #ffffff 0%, #f7fffb 42%, #dcfce7 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(17,24,39,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.06) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 opacity-80"
        style={{
          background:
            'linear-gradient(90deg, rgba(37,211,102,0.16), rgba(14,165,233,0.08), rgba(7,21,56,0.08))',
        }}
      />
      <div
        aria-hidden
        className="absolute top-20 -right-40 h-[560px] w-[720px] rotate-[-18deg] bg-emerald-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-14">
        <div className="w-full max-w-[21.5rem] min-w-0 sm:max-w-3xl">
          <div>
            <TiconnectLogo
              showSubtitle
              className="gap-3"
              markClassName="h-7 w-8"
              textClassName="text-4xl text-[#071538] sm:text-5xl"
              subtitleClassName="text-blue-600"
            />
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3.5 py-1.5 text-xs font-bold text-blue-950 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            Built for WhatsApp-first sales teams
          </div>

          <h1 className="font-heading mt-5 max-w-[21.5rem] text-4xl leading-[1.02] font-extrabold text-[#071538] sm:max-w-4xl sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            Turn WhatsApp chats into a revenue command center.
          </h1>

          <p className="mt-6 max-w-[21.5rem] text-base leading-7 text-slate-700 sm:max-w-2xl sm:text-lg sm:leading-8">
            Ticonnect gives every lead an owner, every conversation a deal, and
            every follow-up a trigger, so your team can sell faster without
            losing the human touch.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/signup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 py-3 text-sm font-bold text-[#071538] shadow-xl shadow-emerald-900/20 transition-colors hover:bg-[#1fb85a]"
            >
              Start free with Ticonnect
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#inbox"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-emerald-300 bg-white/80 px-6 py-3 text-sm font-semibold text-blue-950 shadow-lg shadow-slate-950/5 transition-colors hover:border-emerald-500 hover:bg-white"
            >
              See the platform
            </Link>
          </div>

          <div className="mt-8 grid max-w-[21.5rem] grid-cols-1 overflow-hidden rounded-xl border border-emerald-200 bg-white/90 shadow-2xl shadow-emerald-950/10 backdrop-blur sm:max-w-2xl sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.value}
                className="border-b border-blue-950/10 p-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <div className="font-heading text-2xl font-extrabold text-[#071538]">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[540px] min-w-0 overflow-hidden lg:min-h-[620px] lg:overflow-visible">
          <div
            aria-hidden
            className="absolute inset-4 rounded-[2rem] border border-emerald-200 bg-white/65 shadow-2xl shadow-emerald-950/10"
          />

          <div className="absolute top-5 left-0 z-20 hidden w-52 rounded-xl border border-emerald-200 bg-white/95 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur lg:block">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-emerald-700">
                Lead captured
              </div>
              <MessageCircle className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="font-heading mt-3 text-3xl font-extrabold text-[#071538]">
              $4,800
            </div>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              quote request assigned to sales in real time
            </p>
          </div>

          <div className="absolute top-16 right-0 z-10 hidden w-48 rounded-xl border border-amber-200 bg-white/95 p-4 shadow-2xl shadow-amber-950/10 backdrop-blur xl:block">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
              <Clock3 className="h-4 w-4 text-amber-500" />
              Follow-up queued
            </div>
            <div className="mt-3 h-2 rounded-full bg-amber-100">
              <div className="h-2 w-4/5 rounded-full bg-amber-400" />
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-600">
              Template sends if no reply after 2 hours.
            </p>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[720px] pt-24 lg:pt-32">
            <div className="rounded-2xl border border-blue-950/10 bg-white p-2 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
              <InboxMock />
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-5 grid w-[92%] grid-cols-1 gap-3 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-xl border border-blue-200 bg-white/95 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-blue-700">
                    Pipeline velocity
                  </div>
                  <div className="font-heading mt-2 text-2xl font-extrabold text-[#071538]">
                    18 deals moving
                  </div>
                </div>
                <TrendingUp className="h-5 w-5 text-blue-500" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['New', 'Won', 'Follow'].map((stage, index) => (
                  <div key={stage} className="rounded-lg bg-blue-50 p-2">
                    <div className="h-1.5 rounded-full bg-blue-200">
                      <div
                        className="h-1.5 rounded-full bg-blue-500"
                        style={{ width: `${[72, 54, 86][index]}%` }}
                      />
                    </div>
                    <div className="mt-2 text-[10px] font-bold text-slate-600">
                      {stage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-200 bg-white/95 p-4 shadow-2xl shadow-blue-950/10 backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Zap className="h-4 w-4 text-emerald-500" />
                Automation live
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-700">
                <span className="rounded-md bg-emerald-50 px-2 py-1">
                  New WhatsApp lead
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-500" />
                <span className="rounded-md bg-emerald-50 px-2 py-1">
                  Assign owner
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-500" />
                <span className="rounded-md bg-emerald-500 px-2 py-1 text-white">
                  Create deal
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-4 grid w-[92%] grid-cols-1 gap-2 sm:grid-cols-3">
            {PROOF.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-lg border border-blue-950/10 bg-white/80 px-3 py-3 text-xs leading-5 text-slate-700 shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="absolute right-8 bottom-8 hidden rounded-full border border-blue-950/10 bg-white/80 px-4 py-2 text-xs font-bold text-blue-950 shadow-sm backdrop-blur lg:flex lg:items-center lg:gap-2">
            <Sparkles className="h-4 w-4 text-amber-500" />
            WhatsApp inbox + CRM + automation
          </div>
        </div>
      </div>
    </section>
  );
}
