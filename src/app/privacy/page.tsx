import type { Metadata } from "next";
import { Header } from "@/views/Header";
import { Footer } from "@/views/Footer";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold">Privacy Policy</h1>
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Last updated: [date]</p>

            <div className="prose-invert mt-10 flex flex-col gap-8 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold">1. Who we are</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is an internal advertising-automation tool operated by{" "}
                  {siteConfig.legalEntityName}, {siteConfig.legalAddress}. It is used by our own
                  team to create and manage Facebook and Instagram advertising campaigns on
                  behalf of the Business Portfolios and ad accounts we are authorized to act for.
                  It is not a public, self-serve product, and it does not offer a Facebook Login
                  flow for the general public.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. What data we process</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>
                    Meta System User access tokens, issued per Business Portfolio, stored
                    encrypted at rest, and used only to call the Meta Marketing API on that
                    Portfolio&apos;s behalf.
                  </li>
                  <li>
                    Ad account, Page, Instagram account, catalog, pixel, and campaign
                    configuration data read from or written to Meta&apos;s Marketing API — objective,
                    budget, targeting, creative fields, and the resulting Campaign/Ad Set/Ad
                    identifiers.
                  </li>
                  <li>
                    Basic account details of our own team members who use the tool (name, email,
                    role, which ad accounts they are assigned to).
                  </li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We do not collect data about the end consumers reached by the ads themselves —
                  this tool only manages the advertising configuration, not audience-level personal
                  data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. How we use this data</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Solely to generate, validate, publish, and monitor advertising campaigns in Meta
                  Ads Manager on behalf of the Business Portfolios we are authorized to act for.
                  We do not sell, rent, or share this data with third parties, and we do not use
                  it for any purpose unrelated to operating the advertising accounts we manage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. Data retention and deletion</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We retain access tokens and campaign data for as long as we continue managing
                  the corresponding ad account. A Business Portfolio or ad account owner may
                  request deletion of their data at any time by contacting us at{" "}
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[color:var(--accent)]">
                    {siteConfig.contactEmail}
                  </a>
                  ; we will remove the corresponding stored tokens and configuration data once
                  our access to that account ends.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Security</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access tokens are stored encrypted, scoped per Business Portfolio, and never
                  shared between unrelated accounts. Access to the tool itself is restricted to
                  our own authorized team members, each limited to the ad accounts they have been
                  explicitly assigned.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">6. Changes to this policy</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We may update this policy from time to time. Material changes will be reflected
                  on this page with an updated date at the top.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">7. Contact</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Questions about this policy or a data deletion request can be sent to{" "}
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[color:var(--accent)]">
                    {siteConfig.contactEmail}
                  </a>
                  .
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
