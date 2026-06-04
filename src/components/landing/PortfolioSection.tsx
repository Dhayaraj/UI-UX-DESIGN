import { Smartphone, Globe, LayoutDashboard, ShoppingCart } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const projects = [
  {
    icon: Smartphone,
    tag: "Mobile App UX",
    title: "Mobile App UX Case Study",
    desc: "End-to-end UX for a consumer app — research, flows, wireframes and a polished prototype.",
    skills: ["User Research", "User Flows", "Prototyping"],
  },
  {
    icon: Globe,
    tag: "Web",
    title: "Website Redesign",
    desc: "Redesign a real-world website with improved IA, conversion and accessibility.",
    skills: ["IA", "UI Design", "Responsive"],
  },
  {
    icon: LayoutDashboard,
    tag: "SaaS",
    title: "SaaS Dashboard",
    desc: "Design a data-rich dashboard with clear hierarchy, components and a design system.",
    skills: ["Design System", "Data Viz", "Components"],
  },
  {
    icon: ShoppingCart,
    tag: "E-commerce",
    title: "E-commerce Checkout Flow",
    desc: "Optimise a checkout experience to reduce friction and increase completion.",
    skills: ["Conversion", "Usability", "Flows"],
  },
];

export function PortfolioSection() {
  return (
    <Section id="projects" className="accent-radial">
      <SectionHeading
        eyebrow="Portfolio Projects"
        title="Graduate with real projects, not just certificates"
        subtitle="You'll build four recruiter-ready case studies that prove you can solve real design problems."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
                <p.icon className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                {p.tag}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
