import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  CalendarClock,
  Check,
  CheckCircle2,
  GraduationCap,
  IndianRupee,
  MessageCircle,
  Phone,
  Quote,
  Rocket,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/landing-config";

const TITLE = "Instructor & Course Pricing | Jeevi Academy";
const DESCRIPTION =
  "Meet the instructor behind Jeevi Academy's UI/UX Design Course in Chennai. View course pricing, EMI options, learner reviews, and trainer experience.";

/* ─── Instructor data ─── */
const instructor = {
  name: "Jeevi",
  role: "Lead Instructor & Founder",
  tagline: "From corporate UX lead to full-time design educator",
  bio: [
    "With over 12 years of hands-on experience in UI/UX design across fintech, ed-tech, and SaaS products, Jeevi founded Jeevi Academy with a simple mission: make world-class design education accessible to everyone in Chennai and beyond.",
    "Having worked with product teams at leading companies and trained 3,500+ students, Jeevi brings a rare combination of industry expertise and teaching excellence. Every lesson is built from real project experience — not textbook theory.",
    "Jeevi personally mentors every cohort, reviews portfolios, and conducts mock interviews to ensure each student leaves job-ready.",
  ],
  stats: [
    { icon: Briefcase, value: "12+", label: "Years in UI/UX" },
    { icon: Users, value: "3,500+", label: "Students trained" },
    { icon: Trophy, value: "92%", label: "Placement rate" },
    { icon: Target, value: "50+", label: "Real projects delivered" },
  ],
  highlights: [
    { icon: GraduationCap, title: "Certified Design Professional", desc: "Google UX Design, IDF, NNg certified." },
    { icon: Briefcase, title: "Industry Practitioner", desc: "Active freelance consultant for startups and agencies." },
    { icon: Award, title: "Recognised Educator", desc: "Featured speaker at design meetups and college workshops." },
    { icon: BookOpen, title: "Curriculum Designer", desc: "Designed the 6-module portfolio-first curriculum from scratch." },
  ],
};

/* ─── Reviews ─── */
const reviews = [
  {
    name: "Priya Subramanian",
    role: "UI Designer · Fresher → Hired",
    quote:
      "I joined with zero design background. The mentor feedback on my portfolio was the game-changer — I landed a UI role within weeks of finishing.",
    initials: "PS",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "UX Designer · Career switch",
    quote:
      "Switching from IT support to UX felt impossible. The structured UX process and real case studies gave me the confidence and the portfolio to make the jump.",
    initials: "AK",
    rating: 5,
  },
  {
    name: "Divya Ramesh",
    role: "Product Designer",
    quote:
      "The Figma and prototyping modules are seriously practical. I use exactly what I learned here every single day in my product design job.",
    initials: "DR",
    rating: 5,
  },
  {
    name: "Karthik Narayan",
    role: "UX Researcher · MBA grad",
    quote:
      "The user research module was eye-opening. Jeevi's personal mentorship made all the difference — he genuinely cares about every student's growth.",
    initials: "KN",
    rating: 5,
  },
  {
    name: "Sneha Murthy",
    role: "Visual Designer · Career switch",
    quote:
      "I was a graphic designer wanting to transition into UI/UX. This course gave me the structured thinking and Figma skills I was missing. Hired within 6 weeks!",
    initials: "SM",
    rating: 5,
  },
  {
    name: "Rahul Venkatesh",
    role: "Junior UX Designer · Fresher",
    quote:
      "The portfolio projects alone are worth it. I walked into interviews with real case studies and companies noticed. Thank you Jeevi Academy!",
    initials: "RV",
    rating: 5,
  },
];

/* ─── Pricing plans ─── */
const plans = [
  {
    name: "Online Live",
    price: "₹15,000",
    emiNote: "EMI from ₹2,500/month",
    duration: "3 months · Weekend batches",
    popular: false,
    includes: [
      "Full 6-module curriculum",
      "Live sessions via Zoom/Google Meet",
      "5 portfolio projects with mentor review",
      "Industry certification",
      "Placement assistance",
      "Lifetime access to recordings",
    ],
  },
  {
    name: "Offline — Chennai",
    price: "₹25,000",
    emiNote: "EMI from ₹4,200/month",
    duration: "3 months · Weekday & Weekend options",
    popular: true,
    includes: [
      "Full 6-module curriculum",
      "In-person training at Chennai centre",
      "5 portfolio projects with mentor review",
      "Industry certification",
      "Placement assistance & interview prep",
      "Dedicated mentor access throughout",
      "Free access to online recordings",
    ],
  },
  {
    name: "Corporate / Team",
    price: "Custom",
    emiNote: "Tailored for teams",
    duration: "Flexible schedule",
    popular: false,
    includes: [
      "Customised curriculum per team needs",
      "On-site or virtual delivery",
      "Real project integration",
      "Team certification",
      "Dedicated account manager",
      "Post-training support",
    ],
  },
];

/* ─── Experience timeline ─── */
const timeline = [
  {
    year: "2012 – 2016",
    title: "UI/UX Designer at FinTech Corp",
    desc: "Designed banking and payments interfaces used by millions. Built the foundation of user-centered design practice.",
  },
  {
    year: "2016 – 2019",
    title: "Senior UX Lead at SaaS Product Co",
    desc: "Led a 6-person design team. Shipped 3 B2B products from 0→1. Introduced design systems and usability testing.",
  },
  {
    year: "2019 – 2021",
    title: "Freelance UX Consultant",
    desc: "Worked with 15+ startups on product design, design audits, and design hiring. Started mentoring aspiring designers on the side.",
  },
  {
    year: "2021 – Present",
    title: "Founded Jeevi Academy",
    desc: "Turned part-time mentoring into a full-scale design school. 3,500+ students trained. Expanded to online + offline modes.",
  },
];

export const Route = createFileRoute("/instructor")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: InstructorPage,
});

function InstructorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── Sticky back nav ─── */}
      <nav className="sticky top-0 z-50 border-b border-border glass-strong">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Course
          </Link>
          <span className="ml-auto text-sm font-semibold text-foreground">
            {CONTACT.brand}
          </span>
        </div>
      </nav>

      <main>
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative overflow-hidden accent-radial pt-20 pb-16 sm:pt-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
          />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <Rocket className="h-3.5 w-3.5" /> Instructor Profile
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                Meet{" "}
                <span className="text-primary text-glow">
                  {instructor.name}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {instructor.tagline}
              </p>
              <p className="max-w-xl text-sm text-muted-foreground">{instructor.role}</p>

              {/* Stats strip */}
              <div className="mt-4 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {instructor.stats.map((s) => (
                  <div
                    key={s.label}
                    className="glass flex flex-col items-center gap-2 rounded-2xl p-5"
                  >
                    <s.icon className="h-6 w-6 text-primary" />
                    <span className="text-2xl font-bold text-foreground">
                      {s.value}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ STORY / BIO ═══════════════════ */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr]">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  The Story
                </span>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Why I started Jeevi Academy
                </h2>
                <div className="flex flex-col gap-4">
                  {instructor.bio.map((p, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {instructor.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="glass flex flex-col gap-3 rounded-2xl p-6"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {h.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ EXPERIENCE TIMELINE ═══════════════════ */}
        <section className="py-16 sm:py-24 accent-radial">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Career Timeline
              </span>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                12+ years of design experience
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A career built on shipping real products and mentoring the next
                generation of designers.
              </p>
            </div>

            <div className="relative mt-14">
              {/* Vertical line */}
              <div
                aria-hidden="true"
                className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:block"
              />
              <div className="flex flex-col gap-8">
                {timeline.map((t, i) => (
                  <div
                    key={t.year}
                    className="relative flex flex-col gap-2 md:ml-16"
                  >
                    {/* Dot on timeline */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-[2.625rem] top-1.5 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block"
                    />
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {t.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ REVIEWS ═══════════════════ */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Learner Reviews
              </span>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                What our students say
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Honest feedback from real learners who've completed the program.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="glass flex flex-col gap-5 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-primary/50" />
                    <div
                      className="flex gap-0.5"
                      aria-label={`${r.rating} out of 5 stars`}
                    >
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/30">
                      {r.initials}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {r.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {r.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PRICING ═══════════════════ */}
        <section id="pricing" className="py-16 sm:py-24 accent-radial">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <IndianRupee className="h-3.5 w-3.5" /> Course Pricing
              </span>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                Transparent pricing, real value
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Choose the plan that fits your learning style. All plans include
                certification, portfolio projects, and placement assistance.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col gap-6 rounded-2xl p-7 ${
                    plan.popular
                      ? "border-2 border-primary/60 glass-strong shadow-glow"
                      : "glass"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  )}

                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {plan.duration}
                    </p>
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    {plan.emiNote && (
                      <span className="mb-1 text-sm text-muted-foreground">
                        {plan.emiNote}
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-3">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3">
                    <Button
                      id={`enroll-${plan.name.toLowerCase().replace(/\s/g, "-")}`}
                      asChild
                      variant={plan.popular ? "hero" : "heroOutline"}
                      size="xl"
                    >
                      <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" /> Enquire Now
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" /> 100% money-back
                guarantee (7 days)
              </span>
              <span className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-primary" /> Flexible EMI
                options
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" /> No hidden
                fees
              </span>
            </div>
          </div>
        </section>

        {/* ═══════════════════ BOTTOM CTA ═══════════════════ */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-strong flex flex-col items-center gap-6 rounded-3xl p-8 text-center sm:p-14">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Ready to start your UI/UX journey?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Book a free counselling session with us. We'll help you pick the
                right batch, mode, and payment plan — zero pressure.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button id="instructor-book-counselling" asChild variant="hero" size="xl">
                  <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Book Free Counselling
                  </a>
                </Button>
                <Button id="instructor-call" asChild variant="heroOutline" size="xl">
                  <a href={CONTACT.phoneHref}>
                    <Phone /> Call {CONTACT.phoneDisplay}
                  </a>
                </Button>
              </div>
              <Link
                to="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Back to course overview
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border bg-surface/40 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <p className="text-center text-xs text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {CONTACT.brand}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://www.jeeviacademy.com/privacy-policy/"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.jeeviacademy.com/terms-and-conditions/"
              className="transition-colors hover:text-foreground"
            >
              Terms and Condition
            </a>
            <a
              href="https://www.jeeviacademy.com/refund-policy/"
              className="transition-colors hover:text-foreground"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
