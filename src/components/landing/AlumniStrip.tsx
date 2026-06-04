const companies = ["TCS", "Cognizant", "Deloitte", "PickYourTrail", "RAX Tech International"];

export function AlumniStrip() {
  return (
    <div className="border-y border-border bg-surface/40 py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Our learners have worked with teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((c) => (
            <span
              key={c}
              className="font-display text-lg font-bold tracking-tight text-foreground/70 transition-colors hover:text-foreground sm:text-xl"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
