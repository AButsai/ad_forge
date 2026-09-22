import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { Card } from "@/components/Card";
import { campaignManagementCards } from "@/data/data";

export function CampaignManagementSection() {
  return (
    <Section>
      <TitleSection
        title="Manage campaigns with a structured review workflow"
        description="Create and configure advertising campaigns, review settings, and publish them through authorized Meta advertising resources."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {campaignManagementCards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </Section>
  );
}
