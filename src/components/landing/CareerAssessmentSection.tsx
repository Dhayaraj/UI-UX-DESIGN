import { ClipboardCheck, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

export function CareerAssessmentSection() {
  return (
    <Section id="assessment">
      <div className="relative overflow-hidden rounded-3xl border border-border glass-strong p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[90px]"
        />
        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Free 2-minute assessment
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Not sure if UI/UX design is right for you?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Take our free career assessment. Answer a few questions and get a personalised
              roadmap, recommended track and a clear view of your design-career fit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Button id="take-free-assessment" asChild variant="hero" size="xl">
              <a href="#enquiry">
                <ClipboardCheck /> Take Free Assessment
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">No payment • No commitment</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
