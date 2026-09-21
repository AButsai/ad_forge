import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function PageIdentitySection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection
        eyebrow="Facebook Page Identity"
        title="Select an authorized Facebook Page as the identity associated with your advertising campaigns."
        description="The platform does not provide general Facebook Page content management functionality."
      />
    </Section>
  );
}
