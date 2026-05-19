'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from './section';
import { FAQ_ITEMS } from '@/lib/seo/faq-data';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="bg-[#071538]">
      <Section id="faq">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-extrabold text-emerald-300 uppercase">
              FAQ
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-5xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Straight answers for teams deciding whether Ticonnect fits their
              WhatsApp sales and support workflow.
            </p>
          </div>

          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-slate-950/20">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.06] sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 flex-shrink-0 text-slate-400 transition-transform',
                        isOpen && 'rotate-180 text-emerald-300'
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:px-6">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
