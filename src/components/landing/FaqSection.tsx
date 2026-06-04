import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";
import { FAQS } from "./faq-data";

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about the UI UX Design Course in Chennai."
      />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass overflow-hidden rounded-2xl border-0 px-5"
            >
              <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
