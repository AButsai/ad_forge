import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function CatalogsSection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection
        eyebrow="Product Catalogs"
        title="Use existing Product Catalogs available to your authorized advertising resources when configuring supported advertising campaigns."
        description="The platform does not create or manage product catalogs. Catalogs remain managed through Meta's business tools."
      />
    </Section>
  );
}
