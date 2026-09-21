import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";
import { FeatureCard } from "@/components/FeatureCard";
import { features } from "@/data/data";

export function FeaturesSection() {
  return (
    <Section>
      <TitleSection
        eyebrow="What it does"
        title="Everything a media buying team needs to run catalog ads at scale"
        description="Built for teams managing several ad accounts and Business Portfolios at once — not a one-off campaign builder."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </div>
    </Section>
  );
}
