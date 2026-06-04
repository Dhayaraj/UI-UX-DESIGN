import {
  Briefcase,
  Layers,
  LayoutDashboard,
  MousePointerClick,
  PenTool,
  Search,
  Users,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";

const roles = [
  { icon: PenTool, title: "UI Designer", desc: "Craft pixel-perfect interfaces, design systems and visual hierarchy." },
  { icon: Layers, title: "UX Designer", desc: "Map user flows, run research and solve real product problems." },
  { icon: LayoutDashboard, title: "Product Designer", desc: "Own design end-to-end from discovery to shipped product." },
  { icon: Briefcase, title: "Visual Designer", desc: "Build brand-aligned, high-impact visual experiences." },
  { icon: MousePointerClick, title: "Interaction Designer", desc: "Design micro-interactions, motion and intuitive behaviour." },
  { icon: Search, title: "UX Research Assistant", desc: "Plan studies, run usability tests and synthesise insights." },
  { icon: Users, title: "Freelance UI/UX Designer", desc: "Work with global clients on your own terms and rates." },
];

export function CareerPathsSection() {
  return (
    <Section id="careers" className="accent-radial">
      <SectionHeading
        eyebrow="Career Paths"
        title="One course, multiple career directions"
        subtitle="UI/UX skills open doors across product, design and research roles. Here's where our learners land."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <div
            key={r.title}
            className="group glass flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <r.icon className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
