import { Section } from "@/components/Section";
import { siteConfig } from "@/data/data";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-[color:var(--line)]">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-[color:var(--ink-soft)]">
          For support, account questions or privacy requests, please contact our support team.
        </p>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="mt-4 inline-block text-lg font-medium text-[color:var(--accent)] hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
      </div>
    </Section>
  );
}
