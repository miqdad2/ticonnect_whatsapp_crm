import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { Section } from './section';
import { cn } from '@/lib/utils';

interface FeatureSpotlightProps {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  /** Right-side by default; flip to put the visual on the left. */
  reverse?: boolean;
  visual: ReactNode;
  anchorId?: string;
}

/**
 * Reusable alternating feature section (copy on one side, product
 * miniature on the other). Three instances on the page so we use the
 * same component to keep spacing + typography consistent.
 */
export function FeatureSpotlight({
  eyebrow,
  title,
  body,
  bullets,
  reverse,
  visual,
  anchorId,
}: FeatureSpotlightProps) {
  return (
    <Section id={anchorId} className="py-14 sm:py-18">
      <div
        className={cn(
          'relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-2xl shadow-emerald-950/10 sm:p-8 lg:grid-cols-2 lg:gap-14',
          reverse && 'lg:[&>*:first-child]:order-2'
        )}
      >
        <div
          aria-hidden
          className={cn(
            'absolute top-0 h-full w-1/2 bg-gradient-to-br from-emerald-300/10 via-sky-300/5 to-transparent blur-3xl',
            reverse ? 'left-0' : 'right-0'
          )}
        />
        <div className="relative z-10">
          <p className="text-xs font-extrabold text-emerald-600 uppercase">
            {eyebrow}
          </p>
          <h3 className="font-heading mt-3 text-2xl font-extrabold text-[#071538] sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative z-10 rounded-xl border border-emerald-950/10 bg-slate-950 p-2 shadow-[0_20px_70px_rgba(6,95,70,0.18)]">
          {visual}
        </div>
      </div>
    </Section>
  );
}
