import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("inline-flex items-center gap-2.5", className)} aria-label="Jeevi Academy home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2 3 7l9 5 9-5-9-5Z"
            fill="var(--primary)"
          />
          <path
            d="M3 12l9 5 9-5M3 17l9 5 9-5"
            stroke="var(--primary)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.65"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          Jeevi <span className="text-primary">Academy</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          UI / UX Design School
        </span>
      </span>
    </a>
  );
}
