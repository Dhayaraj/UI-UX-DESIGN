import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const reviews = [
  {
    name: "Priya Subramanian",
    role: "UI Designer · Fresher → Hired",
    quote:
      "I joined with zero design background. The mentor feedback on my portfolio was the game-changer — I landed a UI role within weeks of finishing.",
    initials: "PS",
  },
  {
    name: "Arun Kumar",
    role: "UX Designer · Career switch",
    quote:
      "Switching from IT support to UX felt impossible. The structured UX process and real case studies gave me the confidence and the portfolio to make the jump.",
    initials: "AK",
  },
  {
    name: "Divya Ramesh",
    role: "Product Designer",
    quote:
      "The Figma and prototyping modules are seriously practical. I use exactly what I learned here every single day in my product design job.",
    initials: "DR",
  },
];

export function SuccessStoriesSection() {
  return (
    <Section id="reviews" className="accent-radial">
      <SectionHeading
        eyebrow="Student Success Stories"
        title="Real learners. Real career outcomes."
        subtitle="From freshers to career-switchers — here's what our learners say about the journey."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="glass flex flex-col gap-5 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <Quote className="h-7 w-7 text-primary/50" />
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground">“{r.quote}”</blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/30">
                {r.initials}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
