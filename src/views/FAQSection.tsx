import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { faqs } from "@/data/data";

export function FAQSection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-[color:var(--line)] pb-6 last:border-b-0">
            <h3 className="text-base font-semibold">{faq.question}</h3>
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
