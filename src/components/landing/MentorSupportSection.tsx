import { MessagesSquare, UserCheck, Video } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const supports = [
  { icon: UserCheck, title: "Dedicated mentors", desc: "Learn from working UI/UX professionals who review your designs and guide your growth." },
  { icon: MessagesSquare, title: "Always-on doubt support", desc: "Get answers through dedicated channels so you never stay stuck on a problem." },
  { icon: Video, title: "Live review sessions", desc: "Regular portfolio critiques and Q&A to keep your work interview-ready." },
];

export function MentorSupportSection() {
  return (
    <Section id="mentors">
      <SectionHeading
        eyebrow="Mentor Support"
        title="You're never learning alone"
        subtitle="Personal guidance is built into every stage of the course — from first sketch to final portfolio."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {supports.map((s) => (
          <div key={s.title} className="glass flex flex-col gap-4 rounded-2xl p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
