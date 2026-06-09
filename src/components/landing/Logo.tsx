import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("inline-flex items-center gap-2.5", className)} aria-label="Jeevi Academy home">
      <span className="relative grid h-9 w-9 place-items-center rounded-none bg-white overflow-hidden">
        <img
          src="/favicon.ico"
          alt="Jeevi Academy Logo"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          Jeevi <span className="text-primary">Academy</span>
        </span>
      </span>
    </a>
  );
}
