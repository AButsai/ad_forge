import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { workflowSteps } from "@/data/data";

export function WorkflowSection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection
        title="Structured Campaign Configuration"
        description="Prepare campaign configurations using Excel or Google Sheets templates. Import structured campaign data, validate configuration fields, review campaign settings, and publish approved campaigns through authorized Meta advertising resources."
      />
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {workflowSteps.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium">
              {step}
            </span>
            {index < workflowSteps.length - 1 && (
              <span className="text-[color:var(--ink-soft)]" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
