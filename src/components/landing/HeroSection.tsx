import { Download, MessageCircle, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/landing-config";
import heroImg from "@/assets/hero-dashboard.png";

const badges = [
  { icon: Star, label: "4.9/5 learner rating" },
  { icon: Users, label: "3,500+ trained" },
  { icon: ShieldCheck, label: "Certification included" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden accent-radial pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Chennai • Online & Offline
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            UI UX Design Course in Chennai with{" "}
            <span className="text-primary text-glow">Practical Portfolio Training</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Become a job-ready UI/UX designer through mentor-led training in Figma, user research,
            wireframing and prototyping. Build a real portfolio, earn certification, and get
            placement assistance — online or at our Chennai centre.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button id="book-free-counselling" asChild variant="hero" size="xl">
              <a href="#enquiry">
                <MessageCircle /> Book Free Counselling
              </a>
            </Button>
            <Button id="download-syllabus" asChild variant="heroOutline" size="xl">
              <a href="#enquiry">
                <Download /> Download Syllabus
              </a>
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
            {badges.map((b) => (
              <li key={b.label} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon className="h-4 w-4 text-primary" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-2xl"
          />
          <div className="overflow-hidden rounded-2xl border border-border glass shadow-card animate-float">
            <img
              src={heroImg}
              width={1280}
              height={1024}
              alt="UI/UX learning dashboard showing wireframes, Figma screens, user journey maps, portfolio cards and mentor support"
              className="h-auto w-full"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
