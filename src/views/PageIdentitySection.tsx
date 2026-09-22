import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function PageIdentitySection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection
        title="Facebook Page Identity"
        description="Select an authorized Facebook Page as the identity for your advertising campaigns. AdForge does not provide Facebook Page publishing or general content management tools."
      />
    </Section>
  );
}
