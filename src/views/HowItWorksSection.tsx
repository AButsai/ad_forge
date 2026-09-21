import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { StepCard } from "@/components/StepCard";
import { howItWorks } from "@/data/data";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="border-t border-[color:var(--line)]">
      <TitleSection eyebrow="How It Works" title="From connecting your resources to monitoring results." />
      <div className="mx-auto mt-12 grid max-w-2xl gap-8">
        {howItWorks.map((step, index) => (
          <StepCard key={step.title} index={index + 1} title={step.title} description={step.description} />
        ))}
      </div>
    </Section>
  );
}
