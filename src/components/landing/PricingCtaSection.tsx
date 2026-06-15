import { ArrowRight, IndianRupee, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";

const nudges = [
  { icon: IndianRupee, label: "Course fees & EMI plans" },
  { icon: TrendingUp, label: "Instructor track record" },
  { icon: Sparkles, label: "Reviews from past learners" },
];

export function PricingCtaSection() {
  return (
    <Section id="pricing-cta" className="accent-radial">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/80 to-surface/60 p-8 sm:p-12">
        {/* Decorative blurs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary/15 blur-[80px]"
        />

        <div className="relative flex flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Most Viewed Next
          </span>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Ready to see the{" "}
            <span className="text-primary text-glow">course pricing</span>?
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Most learners check the pricing, instructor profile and reviews next.
            See what makes our course worth the investment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {nudges.map((n) => (
              <div
                key={n.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <n.icon className="h-4 w-4 text-primary" />
                {n.label}
              </div>
            ))}
          </div>

          <Link
            to="/instructor"
            id="view-pricing-cta"
            className="group inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
          >
            View Course Pricing & Instructor
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="text-xs text-muted-foreground">
            Based on what 87% of visitors view next
          </p>
        </div>
      </div>
    </Section>
  );
}
