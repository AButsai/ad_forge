import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function SecuritySection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection title="Security & Access" />
      <div className="mx-auto mt-10 flex max-w-xl flex-col gap-8">
        <div>
          <h3 className="text-base font-semibold">Authorized access to advertising resources</h3>
          <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
            AdForge works with advertising resources that users are authorized to access through their connected
            business integration. Access is limited by the permissions and assets granted to the integration.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold">Credential protection</h3>
          <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
            Sensitive credentials are encrypted at rest and are not exposed in the user interface. AdForge does not
            claim ownership of connected advertising accounts or business assets.
          </p>
        </div>
      </div>
    </Section>
  );
}
