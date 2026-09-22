import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function CatalogsSection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection
        title="Product Catalogs"
        description="Use existing Product Catalogs available to your authorized advertising resources when configuring supported advertising campaigns. AdForge does not create or manage Product Catalogs. Catalogs remain managed through Meta's business tools."
      />
    </Section>
  );
}
