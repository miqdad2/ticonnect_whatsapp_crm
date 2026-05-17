import Image from "next/image";
import { cn } from "@/lib/utils";

export function TiconnectMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={48}
      height={48}
      className={cn("h-8 w-8 object-contain", className)}
    />
  );
}

export function TiconnectLogo({
  className,
  markClassName,
  textClassName,
  subtitleClassName,
  showSubtitle = false,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  subtitleClassName?: string;
  showSubtitle?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/70">
        <TiconnectMark className={cn("h-6 w-7", markClassName)} />
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block text-base font-bold leading-none text-white",
            textClassName,
          )}
        >
          Ticonnect
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "mt-1 block text-[10px] font-semibold uppercase leading-none tracking-[0.28em] text-sky-300",
              subtitleClassName,
            )}
          >
            WhatsApp CRM
          </span>
        )}
      </span>
    </span>
  );
}
