import Image from 'next/image';
import { cn } from '@/lib/utils';

export function TiconnectMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={48}
      height={48}
      className={cn('h-8 w-8 object-contain', className)}
    />
  );
}

export function TiconnectLogo({
  className,
  markClassName,
  textClassName,
  subtitleClassName,
  showSubtitle = false,
  showMark = true,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  subtitleClassName?: string;
  showSubtitle?: boolean;
  showMark?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      {showMark && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/70">
          <TiconnectMark className={cn('h-6 w-7', markClassName)} />
        </span>
      )}
      <span className="min-w-0">
        <span
          className={cn(
            'font-brand block text-base leading-none font-bold text-white',
            textClassName
          )}
        >
          Ticonnect
        </span>
        {showSubtitle && (
          <span
            className={cn(
              'mt-1.5 block text-[9px] leading-none font-extrabold tracking-[0.42em] text-blue-500',
              subtitleClassName
            )}
          >
            WHATSAPP CRM
          </span>
        )}
      </span>
    </span>
  );
}
