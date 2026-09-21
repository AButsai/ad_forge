import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { StepCard } from "@/components/StepCard";
import { steps } from "@/data/data";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="border-t border-[color:var(--line)]">
      <TitleSection
        eyebrow="How it works"
        title="Configure once. Generate many. Validate. Publish in bulk."
      />
      <div className="mx-auto mt-12 grid max-w-2xl gap-8">
        {steps.map((step, index) => (
          <StepCard key={step.title} index={index + 1} title={step.title} description={step.description} />
        ))}
      </div>
    </Section>
  );
}
