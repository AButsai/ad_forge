import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function SecuritySection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection eyebrow="Security & Access" title="Access is controlled and credentials stay protected." />
      <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-center text-sm text-[color:var(--ink-soft)]">
        <p>Access to advertising resources is controlled through authorized Meta Business assets and permissions.</p>
        <p>Sensitive credentials are securely stored on our backend and are not exposed to end users.</p>
        <p>
          The platform is designed to work only with advertising resources that the connected business integration
          is authorized to access.
        </p>
      </div>
    </Section>
  );
}
