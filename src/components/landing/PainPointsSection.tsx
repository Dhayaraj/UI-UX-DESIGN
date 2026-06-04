import { CircleHelp, Compass, FileWarning, Hourglass } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const pains = [
  {
    icon: CircleHelp,
    title: "“Where do I even start?”",
    desc: "Endless YouTube tutorials, no structure, and no idea what skills employers actually want.",
  },
  {
    icon: FileWarning,
    title: "No real portfolio",
    desc: "Recruiters ask for case studies and Figma files — theory-only courses leave you empty-handed.",
  },
  {
    icon: Compass,
    title: "Tools without process",
    desc: "Knowing Figma isn't enough. Without UX process and product thinking, designs don't get hired.",
  },
  {
    icon: Hourglass,
    title: "No guidance or feedback",
    desc: "Stuck without a mentor to review your work and push you toward interview-ready quality.",
  },
];

export function PainPointsSection() {
  return (
    <Section id="pain-points">
      <SectionHeading
        eyebrow="Why most learners get stuck"
        title="Learning UI/UX alone is harder than it should be"
        subtitle="We designed this course to remove every common roadblock between you and your first design role."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pains.map((p) => (
          <div
            key={p.title}
            className="glass flex flex-col gap-4 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
