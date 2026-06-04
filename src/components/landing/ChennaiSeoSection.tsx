import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const areas = [
  "Anna Nagar", "T. Nagar", "Velachery", "Adyar", "OMR", "Tambaram",
  "Porur", "Guindy", "Chromepet", "Vadapalani", "Nungambakkam", "Perambur",
];

export function ChennaiSeoSection() {
  return (
    <Section id="chennai">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <SectionHeading
            align="left"
            eyebrow="UI/UX Training in Chennai"
            title="Chennai's practical UI UX design training, built for real jobs"
          />
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Looking for the best <strong className="text-foreground">UI UX Design Course in Chennai</strong>? Jeevi
              Academy offers hands-on <strong className="text-foreground">UI UX design training in Chennai</strong> for
              freshers and working professionals. Our <strong className="text-foreground">UI UX designer course in
              Chennai</strong> covers Figma, user research, wireframing and prototyping with real portfolio projects.
            </p>
            <p>
              Whether you prefer classroom learning at our Chennai centre or
              <strong className="text-foreground"> UI UX course online and offline</strong>, you get the same
              mentor-led curriculum, a <strong className="text-foreground">UI UX certification course in Chennai</strong>,
              and <strong className="text-foreground">UI UX course with placement assistance</strong>. It's an ideal
              <strong className="text-foreground"> Figma UI UX course in Chennai</strong> and a strong path into product
              design.
            </p>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="mb-4 text-base font-semibold text-foreground">
            We train learners across Chennai
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/50 px-3 py-1.5 text-sm text-muted-foreground"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" /> {a}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Online live batches are open to learners anywhere in India — same course, same mentors,
            fully interactive.
          </p>
        </div>
      </div>
    </Section>
  );
}
