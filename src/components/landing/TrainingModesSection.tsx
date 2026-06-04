import { Building2, Check, Minus, MonitorPlay, Users } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";

const modes = [
  {
    icon: Building2,
    title: "Offline — Chennai",
    subtitle: "In-person at our centre",
    featured: false,
    features: ["Classroom mentor access", "Peer learning & networking", "Hands-on lab sessions", "Weekend & weekday batches"],
  },
  {
    icon: MonitorPlay,
    title: "Online Live",
    subtitle: "Learn from anywhere",
    featured: true,
    features: ["Live interactive classes", "Session recordings", "Same mentors & curriculum", "Flexible batch timings"],
  },
  {
    icon: Users,
    title: "Corporate Training",
    subtitle: "For teams & organisations",
    featured: false,
    features: ["Custom curriculum", "On-site or remote", "Team progress tracking", "Flexible scheduling"],
  },
];

const comparison = [
  { label: "Live mentor sessions", values: [true, true, true] },
  { label: "Portfolio projects", values: [true, true, true] },
  { label: "Certification", values: [true, true, true] },
  { label: "In-person labs", values: [true, false, true] },
  { label: "Session recordings", values: [false, true, true] },
  { label: "Custom curriculum", values: [false, false, true] },
];

export function TrainingModesSection() {
  return (
    <Section id="training">
      <SectionHeading
        eyebrow="Training Options"
        title="Choose the learning mode that fits your life"
        subtitle="Same expert mentors and curriculum across every mode — pick what works for you."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {modes.map((m) => (
          <div
            key={m.title}
            className={`relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
              m.featured
                ? "glass-strong border-primary/50 glow"
                : "glass hover:border-primary/40"
            }`}
          >
            {m.featured ? (
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                Most Popular
              </span>
            ) : null}
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
              <m.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.subtitle}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {m.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="h-4 w-4 text-success" /> {f}
                </li>
              ))}
            </ul>
            <Button id="enquire-now" asChild variant={m.featured ? "hero" : "heroOutline"} className="mt-auto">
              <a href="#enquiry">Enquire about this mode</a>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl glass text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="p-4 font-semibold text-muted-foreground">Feature</th>
              <th className="p-4 text-center font-semibold text-foreground">Offline</th>
              <th className="p-4 text-center font-semibold text-foreground">Online Live</th>
              <th className="p-4 text-center font-semibold text-foreground">Corporate</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.label} className="border-b border-border/60 last:border-0">
                <td className="p-4 text-foreground">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="p-4 text-center">
                    {v ? (
                      <Check className="mx-auto h-4 w-4 text-success" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
