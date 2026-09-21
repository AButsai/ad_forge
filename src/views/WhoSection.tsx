import { Section } from "@/components/Section";
import { TitleSection } from "@/components/TitleSection";

export function WhoSection() {
  return (
    <Section className="border-t border-[color:var(--line)]">
      <TitleSection eyebrow="Who it's for" title="An internal tool for agencies and in-house media buying teams" />
      <div className="mx-auto mt-10 max-w-2xl text-center text-[color:var(--ink-soft)]">
        <p>
          {"AdForge is used by our own team to manage catalog advertising campaigns across the Business Portfolios and ad accounts we're responsible for. It is not a public, self-serve product — access is granted per team member, and every action it takes in Meta is scoped to the ad accounts that team member has been explicitly assigned."}
        </p>
      </div>
    </Section>
  );
}
