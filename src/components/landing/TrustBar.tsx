const stats = [
  { value: "3,500+", label: "Learners trained" },
  { value: "120+", label: "Portfolio projects shipped" },
  { value: "4.8/5", label: "Average learner rating" },
  { value: "30+", label: "Hiring partners" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 py-7 text-center">
            <span className="font-display text-2xl font-bold text-primary sm:text-3xl">{s.value}</span>
            <span className="text-xs text-muted-foreground sm:text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
