import { CheckCircle2, Phone } from "lucide-react";
import { Section } from "./Section";
import { LeadForm } from "./LeadForm";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/landing-config";

const perks = [
  "Free 1:1 counselling with a course advisor",
  "Personalised learning roadmap",
  "Latest batch dates, fees & offers",
  "Answers to all your career questions",
];

export function FinalCtaSection() {
  return (
    <Section id="enquiry" className="accent-radial">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Start today
          </span>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Book your free counselling and take the first step into UI/UX
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us a little about yourself and we'll help you choose the right track, mode and batch.
            No pressure, no commitment — just clear guidance for your design career.
          </p>
          <ul className="flex flex-col gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button id="call-now" asChild variant="heroOutline" size="xl">
              <a href={CONTACT.phoneHref}>
                <Phone /> Call {CONTACT.phoneDisplay}
              </a>
            </Button>
            <Button id="whatsapp-us" asChild variant="success" size="xl">
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <LeadForm />
      </div>
    </Section>
  );
}
