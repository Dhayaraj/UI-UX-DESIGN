import { Section, SectionHeading } from "./Section";

const steps = [
  { step: "01", title: "Free Counselling", desc: "Talk to an advisor, assess your goals and pick the right batch & mode." },
  { step: "02", title: "Design Foundations", desc: "Build core UI/UX skills with guided practice and quick wins." },
  { step: "03", title: "UX Process & Research", desc: "Run research, map journeys and wireframe real problems." },
  { step: "04", title: "Figma & Prototyping", desc: "Turn ideas into interactive, high-fidelity prototypes." },
  { step: "05", title: "Portfolio Projects", desc: "Ship 5 case studies with mentor reviews at every stage." },
  { step: "06", title: "Placement Prep", desc: "Resume, mock interviews and referrals to hiring partners." },
];

export function LearningJourneySection() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="Learning Journey"
        title="Your step-by-step path to a design career"
        subtitle="A clear, supported journey from your first counselling call to your first design role."
      />
      <ol className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <li key={s.step} className="glass relative flex flex-col gap-3 rounded-2xl p-6">
            <span className="font-display text-3xl font-bold text-primary/40">{s.step}</span>
            <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
