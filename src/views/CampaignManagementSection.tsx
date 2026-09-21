import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { Card } from "@/components/Card";
import { campaignManagementCards } from "@/data/data";

export function CampaignManagementSection() {
  return (
    <Section>
      <TitleSection
        eyebrow="Campaign Management"
        title="Manage your Facebook advertising workflow from campaign setup to publication."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {campaignManagementCards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
    </Section>
  );
}
