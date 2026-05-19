import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/**
 * Shared section wrapper — consistent horizontal padding, max-width,
 * and vertical rhythm across every landing section. Keeping it in one
 * place means tweaking spacing once vs. in every section component.
 */
export function Section({
  id,
  className,
  children,
  tight,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  /** Compact vertical padding — useful for nav strips / dense sections. */
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto w-full max-w-7xl px-6',
        tight ? 'py-6' : 'py-20 sm:py-24',
        className
      )}
    >
      {children}
    </section>
  );
}

/**
 * Pair of small label + big headline used atop every section. The
 * eyebrow establishes context in 1-2 words before the user commits
 * to reading the headline.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) {
  const base = align === 'center' ? 'text-center' : 'text-left';
  const max = align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl';
  return (
    <div className={cn(base, max, 'mb-12')}>
      {eyebrow && (
        <p className="mb-3 text-xs font-extrabold text-emerald-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-extrabold text-[#071538] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
