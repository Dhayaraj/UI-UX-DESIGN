import { Award, Clock, Globe, MapPin } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";

const facts = [
  { icon: Clock, label: "Duration", value: "3–4 months" },
  { icon: MapPin, label: "Location", value: "Chennai centre + Online" },
  { icon: Globe, label: "Mode", value: "Online live & Offline" },
  { icon: Award, label: "Outcome", value: "Certificate + Portfolio" },
];

export function CourseOverviewSection() {
  return (
    <Section id="overview">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Course Overview"
            title="A complete, practical UI/UX program built for hiring"
            subtitle="The Jeevi Academy UI UX Design Course in Chennai blends design fundamentals, real UX process and hands-on Figma practice. You learn by building — every module ends with portfolio-worthy work reviewed by mentors."
          />
          <ul className="flex flex-col gap-3">
            {[
              "Beginner-friendly — no design background required",
              "Live mentor sessions with industry designers",
              "Real client-style briefs and case studies",
              "Interview prep, resume and portfolio review",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div>
            <Button id="enquire-now" asChild variant="hero" size="xl">
              <a href="#enquiry">Talk to a Course Advisor</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {facts.map((f) => (
            <div key={f.label} className="glass flex flex-col gap-3 rounded-2xl p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
                <f.icon className="h-5 w-5" />
              </span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</span>
              <span className="font-display text-lg font-semibold text-foreground">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
