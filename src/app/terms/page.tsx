import type { Metadata } from "next";
import { Header } from "@/views/Header";
import { Footer } from "@/views/Footer";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: `Terms of Service — ${siteConfig.name}`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold">Terms of Service</h1>
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Last updated: September 22, 2026</p>

            <div className="mt-10 flex flex-col gap-8 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold">1. About {siteConfig.name}</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is a private software application operated by {siteConfig.legalEntityName}.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is designed to help authorized users and advertising teams generate, configure,
                  validate, review, publish, and monitor Facebook advertising campaigns through Meta&apos;s Marketing
                  API.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access to {siteConfig.name} is restricted to authorized users. {siteConfig.name} is not offered as
                  a public, self-service advertising platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. Authorized use only</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access to {siteConfig.name} is granted only to users explicitly authorized by the operator.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Users may access only the Business Portfolios, advertising accounts, Pages, catalogs, and other
                  resources for which they have appropriate authorization.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">Users are responsible for:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>Providing accurate campaign configuration data.</li>
                  <li>Maintaining the confidentiality of their application credentials.</li>
                  <li>Reviewing campaign, ad set, and ad settings before publication or activation.</li>
                  <li>
                    Ensuring that their use of connected advertising resources complies with applicable laws and
                    platform policies.
                  </li>
                  <li>Ensuring that they have the necessary permissions to manage connected resources.</li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Users must not use {siteConfig.name} to access, modify, or manage advertising resources without
                  authorization.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. Compliance with Meta policies</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Use of {siteConfig.name} must comply at all times with applicable Meta policies and requirements,
                  including Meta&apos;s Platform Terms, Advertising Standards, and Developer Policies.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} does not guarantee that a campaign will be approved, delivered, or achieve any
                  particular performance in Meta Ads Manager.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Advertising approval, delivery, account status, and performance are determined by Meta and may
                  depend on factors outside {siteConfig.name}&apos;s control.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. Campaign review and publication</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} provides tools for campaign configuration, validation, review, and publication
                  through authorized Meta advertising resources.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Users are responsible for reviewing campaign settings and confirming that the campaign information
                  is accurate and compliant before publication or activation.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  If a campaign is created in a paused state, it will remain paused until an authorized user
                  activates it through the applicable workflow.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Prohibited use</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">Users must not use {siteConfig.name} to:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>Violate Meta policies or applicable law.</li>
                  <li>Access advertising accounts or Business Portfolios without authorization.</li>
                  <li>Circumvent account restrictions, platform safeguards, or security controls.</li>
                  <li>Distribute malware, harmful code, or unauthorized access credentials.</li>
                  <li>Upload content that infringes third-party rights.</li>
                  <li>Use the application for fraudulent, deceptive, or abusive advertising activity.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">6. No warranty</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  To the maximum extent permitted by law, we do not guarantee uninterrupted availability,
                  error-free operation, campaign approval, advertising delivery, account availability, or any
                  particular advertising result.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">7. Limitation of liability</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  To the maximum extent permitted by applicable law, the operator of {siteConfig.name} is not liable
                  for indirect, incidental, special, consequential, or exemplary damages arising from the use of the
                  application.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  This includes losses related to advertising spend, campaign rejection, account restrictions,
                  service interruptions, or decisions made by Meta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">8. Changes to these terms</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We may update these Terms of Service from time to time. Material changes will be reflected on this
                  page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">9. Contact</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Questions about these Terms of Service can be sent to:
                </p>
                <p className="mt-3">
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[color:var(--accent)]">
                    {siteConfig.contactEmail}
                  </a>
                </p>
              </section>

              <section className="border-t border-[color:var(--line)] pt-6 text-sm">
                <p className="font-semibold text-[color:var(--foreground)]">{siteConfig.name}</p>
                <p className="mt-1 text-[color:var(--ink-soft)]">Operated by {siteConfig.legalEntityName}.</p>
                <p className="mt-1 text-[color:var(--ink-soft)]">© {new Date().getFullYear()} {siteConfig.name}</p>
                <p className="mt-1 text-[color:var(--ink-soft)]">
                  This product is not affiliated with or endorsed by Meta Platforms, Inc.
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
