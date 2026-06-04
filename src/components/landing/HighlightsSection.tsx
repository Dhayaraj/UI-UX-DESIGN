import {
  BadgeCheck,
  BookOpenCheck,
  Figma,
  GraduationCap,
  LayoutGrid,
  LifeBuoy,
  Repeat,
  Rocket,
  Users,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";

const highlights = [
  { icon: Figma, title: "Figma-first curriculum", desc: "Master the industry-standard tool used by 90% of design teams." },
  { icon: LayoutGrid, title: "5 portfolio projects", desc: "Graduate with case studies recruiters actually want to see." },
  { icon: Users, title: "1:1 mentor support", desc: "Personal feedback from working product designers." },
  { icon: BookOpenCheck, title: "Real UX process", desc: "Research, wireframing, prototyping and usability testing." },
  { icon: BadgeCheck, title: "Industry certification", desc: "A recognised certificate to validate your skills." },
  { icon: Rocket, title: "Placement assistance", desc: "Resume, mock interviews and referrals to hiring partners." },
  { icon: Repeat, title: "Lifetime content access", desc: "Revisit recordings and resources whenever you need." },
  { icon: LifeBuoy, title: "Doubt-clearing support", desc: "Dedicated channels so you're never stuck for long." },
  { icon: GraduationCap, title: "Beginner to job-ready", desc: "Structured path from fundamentals to a hireable portfolio." },
];

export function HighlightsSection() {
  return (
    <Section id="highlights" className="accent-radial">
      <SectionHeading
        eyebrow="Course Highlights"
        title="Everything you need to get hired as a designer"
        subtitle="A practical, mentor-led program engineered around real outcomes — not just lectures."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="glass flex flex-col gap-3 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
              <h.icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold text-foreground">{h.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
