import type { ReactNode } from 'react';
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { TiconnectLogo } from '@/components/brand/ticonnect-logo';

export const authLabelClass = 'text-sm font-bold text-[#071538]';

export const authInputClass =
  'h-11 border-emerald-200 bg-white text-[#071538] placeholder:text-slate-400 shadow-sm focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20';

export const authPrimaryButtonClass =
  'mt-2 h-11 w-full bg-[#25d366] font-bold text-[#071538] shadow-lg shadow-emerald-900/15 hover:bg-[#1fb85a] disabled:opacity-60';

export const authOutlineButtonClass =
  'h-11 w-full border-emerald-200 bg-white font-bold text-[#071538] hover:bg-emerald-50 hover:text-[#071538]';

export const authLinkClass =
  'font-bold text-emerald-700 transition-colors hover:text-emerald-600';

export const authErrorClass =
  'rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700';

export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f7fffb] text-[#071538]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 78% 16%, rgba(37,211,102,0.24), transparent 34%), linear-gradient(115deg, #ffffff 0%, #f7fffb 44%, #dcfce7 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(7,21,56,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,56,0.06) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <main className="relative mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-8 overflow-hidden px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <section className="hidden lg:block">
          <TiconnectLogo
            showSubtitle
            textClassName="text-5xl text-[#071538]"
            subtitleClassName="text-blue-600"
          />
          <h1 className="font-heading mt-8 max-w-xl text-5xl leading-[1.02] font-extrabold text-[#071538]">
            Your WhatsApp sales workspace starts here.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-700">
            Sign in to manage the shared inbox, route leads, automate follow-up,
            and keep every customer conversation connected to revenue.
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-1 gap-3">
            {[
              {
                icon: MessageCircle,
                title: 'Shared WhatsApp inbox',
                body: 'Every chat stays visible, assigned, and ready for action.',
              },
              {
                icon: Workflow,
                title: 'Pipelines and automations',
                body: 'Move deals forward and trigger follow-ups from one CRM.',
              },
              {
                icon: ShieldCheck,
                title: 'Official API foundation',
                body: 'Built around templates, webhooks, and clear delivery states.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-emerald-200 bg-white/80 p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-sm font-bold text-[#071538]">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="mx-auto min-w-0"
          style={{ width: 'calc(100vw - 2rem)', maxWidth: '28rem' }}
        >
          <div className="w-full min-w-0 rounded-2xl border border-emerald-200 bg-white/95 p-5 shadow-2xl shadow-emerald-950/10 backdrop-blur sm:p-6">
            <div className="mb-6">
              <TiconnectLogo
                showSubtitle
                textClassName="text-xl text-[#071538]"
                subtitleClassName="text-blue-600"
                markClassName="h-5 w-6"
              />
              <div className="mt-6 text-center">
                <h1 className="font-heading text-2xl font-extrabold text-[#071538]">
                  {title}
                </h1>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            </div>
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}

export function AuthSuccessIcon() {
  return (
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
      <CheckCircle2 className="h-7 w-7" />
    </div>
  );
}
