import { Check, CalendarClock } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/landing-config";

const includes = [
  "Full UI/UX curriculum & live mentor sessions",
  "5 portfolio projects with reviews",
  "Industry certification",
  "Placement assistance & interview prep",
  "Lifetime access to learning material",
  "EMI / flexible payment options",
];

export function FeesSection() {
  return (
    <Section id="fees">
      <div className="relative overflow-hidden rounded-3xl border border-border glass-strong p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary/15 blur-[100px]"
        />
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Fees & Batches"
              title="Transparent fees. Flexible batches."
              subtitle="Pricing varies by mode (online / offline) and batch. Talk to an advisor for the latest fee structure, offers and EMI options — no obligation."
            />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
                <CalendarClock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Next batch starting soon</p>
                <p className="text-sm text-muted-foreground">Limited seats per batch for quality mentoring</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button id="check-next-batch" asChild variant="hero" size="xl">
                <a href="#enquiry">Check Next Batch & Fees</a>
              </Button>
              <Button id="call-now" asChild variant="heroOutline" size="xl">
                <a href={CONTACT.phoneHref}>Call {CONTACT.phoneDisplay}</a>
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Free counselling • Fee details shared on call
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
