import { FileText, Handshake, Target, Users } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const items = [
  { icon: FileText, title: "Resume & LinkedIn", desc: "Craft a designer resume and profile that recruiters notice." },
  { icon: Target, title: "Portfolio readiness", desc: "Polish case studies until they're interview-ready." },
  { icon: Users, title: "Mock interviews", desc: "Practice real design interviews with structured feedback." },
  { icon: Handshake, title: "Hiring partner referrals", desc: "Get introduced to companies actively hiring designers." },
];

export function PlacementSection() {
  return (
    <Section id="placement" className="accent-radial">
      <SectionHeading
        eyebrow="Placement Assistance"
        title="Support that goes beyond the syllabus"
        subtitle="We help you become hireable and connect you with opportunities. Your effort and skill drive the result."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="glass flex flex-col gap-3 rounded-2xl p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
              <i.icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold text-foreground">{i.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
        Note: We provide placement assistance and interview support. We do not promise or guarantee
        jobs — outcomes depend on your skills, effort and performance.
      </p>
    </Section>
  );
}
