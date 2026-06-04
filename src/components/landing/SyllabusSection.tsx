import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section, SectionHeading } from "./Section";

const modules = [
  {
    id: "foundations",
    label: "Design Foundations",
    topics: [
      "Design thinking & the role of a UI/UX designer",
      "Colour theory, typography & visual hierarchy",
      "Layout, grids, spacing & Gestalt principles",
      "Accessibility & inclusive design basics",
    ],
  },
  {
    id: "ui",
    label: "UI Design",
    topics: [
      "Components, design systems & atomic design",
      "Mobile-first & responsive interface design",
      "Iconography, imagery & micro-visual details",
      "Building reusable UI kits in Figma",
    ],
  },
  {
    id: "ux",
    label: "UX Process",
    topics: [
      "User research, interviews & surveys",
      "Personas, empathy maps & user journeys",
      "Information architecture & user flows",
      "Wireframing low to high fidelity",
    ],
  },
  {
    id: "figma",
    label: "Figma & Prototyping",
    topics: [
      "Figma mastery: auto-layout, variants, variables",
      "Interactive prototyping & smart animate",
      "Usability testing & iteration",
      "Developer handoff & design specs",
    ],
  },
  {
    id: "product",
    label: "Product Thinking",
    topics: [
      "Product strategy & problem framing",
      "Metrics, A/B testing & data-informed design",
      "Designing for conversion & retention",
      "Collaboration with PMs & engineers",
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio & Career",
    topics: [
      "Building standout case studies",
      "Portfolio website & presentation skills",
      "Resume, LinkedIn & personal branding",
      "Mock interviews & placement preparation",
    ],
  },
];

export function SyllabusSection() {
  return (
    <Section id="syllabus">
      <SectionHeading
        eyebrow="Syllabus"
        title="A structured path from fundamentals to portfolio"
        subtitle="Six progressive modules — each one ends with hands-on work reviewed by your mentor."
      />

      <Tabs defaultValue="foundations" className="mt-12">
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {modules.map((m, i) => (
            <TabsTrigger
              key={m.id}
              value={m.id}
              className="rounded-xl border border-border bg-surface/50 px-4 py-2.5 text-sm data-[state=active]:border-primary/60 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
            >
              <span className="mr-2 text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
              {m.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {modules.map((m) => (
          <TabsContent key={m.id} value={m.id} className="mt-6">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="mb-5 font-display text-xl font-semibold text-foreground">{m.label}</h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-primary/12 text-xs text-primary ring-1 ring-primary/30">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
