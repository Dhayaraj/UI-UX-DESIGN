import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustBar } from "@/components/landing/TrustBar";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { CareerPathsSection } from "@/components/landing/CareerPathsSection";
import { CourseOverviewSection } from "@/components/landing/CourseOverviewSection";
import { HighlightsSection } from "@/components/landing/HighlightsSection";
import { CareerAssessmentSection } from "@/components/landing/CareerAssessmentSection";
import { SyllabusSection } from "@/components/landing/SyllabusSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { TrainingModesSection } from "@/components/landing/TrainingModesSection";
import { LearningJourneySection } from "@/components/landing/LearningJourneySection";
import { ChennaiSeoSection } from "@/components/landing/ChennaiSeoSection";
import { SuccessStoriesSection } from "@/components/landing/SuccessStoriesSection";
import { AlumniStrip } from "@/components/landing/AlumniStrip";
import { MentorSupportSection } from "@/components/landing/MentorSupportSection";
import { PlacementSection } from "@/components/landing/PlacementSection";
import { FeesSection } from "@/components/landing/FeesSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { PricingCtaSection } from "@/components/landing/PricingCtaSection";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { FAQS } from "@/components/landing/faq-data";

const CANONICAL = "https://www.jeeviacademy.com/ui-ux-design-course-in-chennai/";
const TITLE = "UI UX Design Course in Chennai";
const DESCRIPTION =
  "Jeevi Academy offers the best UI UX design course in Chennai. Learn Figma, wireframing, prototyping, user research, portfolio projects, certification, online/offline training, and placement assistance.";

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "UI UX Design Course in Chennai",
  description: DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "Jeevi Academy",
    sameAs: "https://www.jeeviacademy.com",
  },
  url: CANONICAL,
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Online"],
      location: { "@type": "Place", name: "Jeevi Academy, Chennai", address: "Chennai, Tamil Nadu, India" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jeeviacademy.com/" },
    { "@type": "ListItem", position: 2, name: "UI UX Design Course in Chennai", item: CANONICAL },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "UI UX Design Course in Chennai, UI UX Design Training in Chennai, UI UX Designer Course in Chennai, Figma UI UX Course in Chennai, UI UX Certification Course in Chennai, UI UX Course with Placement Assistance, Product Design Course in Chennai",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:site_name", content: "Jeevi Academy" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(courseSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <PainPointsSection />
        <CareerPathsSection />
        <CourseOverviewSection />
        <HighlightsSection />
        <CareerAssessmentSection />
        <SyllabusSection />
        <PortfolioSection />
        <TrainingModesSection />
        <LearningJourneySection />
        <ChennaiSeoSection />
        <SuccessStoriesSection />
        <AlumniStrip />
        <MentorSupportSection />
        <PlacementSection />
        <FeesSection />
        <FaqSection />
        <PricingCtaSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </div>
  );
}
