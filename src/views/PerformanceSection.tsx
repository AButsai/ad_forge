import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { performanceItems } from "@/data/data";

export function PerformanceSection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection
        eyebrow="Campaign Performance"
        title="Review advertising performance and campaign insights from your connected advertising resources."
      />
      <ul className="mx-auto mt-10 flex max-w-md flex-col gap-3">
        {performanceItems.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-md text-center text-sm text-[color:var(--ink-soft)]">
        Make campaign information easier to review from one centralized workspace.
      </p>
    </Section>
  );
}
