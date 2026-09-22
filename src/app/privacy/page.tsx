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
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Last updated: September 22, 2026</p>

            <div className="mt-10 flex flex-col gap-8 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold">1. Who we are</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is a private software application operated by {siteConfig.legalEntityName}.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is used by authorized users and advertising teams to create, configure, review,
                  publish, and monitor Facebook advertising campaigns through Meta&apos;s Marketing API.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access to {siteConfig.name} is restricted to authorized users. {siteConfig.name} does not provide a
                  public Facebook Login flow for general users.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. What data we process</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Depending on the functionality used and the permissions granted, {siteConfig.name} may process the
                  following information:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>
                    Meta System User access tokens issued for authorized Business Portfolios and used to make
                    authorized requests to Meta&apos;s Marketing API.
                  </li>
                  <li>
                    Advertising resource information, including ad accounts, Facebook Pages, Product Catalogs,
                    campaigns, ad sets, ads, creatives, and related configuration data accessed through the Meta
                    Marketing API.
                  </li>
                  <li>
                    Campaign configuration information, such as objectives, budgets, schedules, targeting settings,
                    creative fields, and Campaign, Ad Set, and Ad identifiers.
                  </li>
                  <li>
                    Basic application account information of authorized {siteConfig.name} users, such as name, email
                    address, role, and assigned advertising resources.
                  </li>
                  <li>Technical information required to operate, secure, troubleshoot, and maintain the application.</li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} does not intentionally collect or store personal data of people reached by
                  advertisements. The application is designed to manage advertising configuration and performance
                  information rather than audience-level consumer profiles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. How we use this data</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We use the information described above only for purposes necessary to operate {siteConfig.name},
                  including:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>Creating and configuring Facebook advertising campaigns.</li>
                  <li>Validating campaign configuration data.</li>
                  <li>Reviewing and publishing campaigns through authorized Meta advertising resources.</li>
                  <li>Monitoring campaign status and performance where the required permissions are available.</li>
                  <li>Managing access to connected Business Portfolios and advertising accounts.</li>
                  <li>Maintaining application security, troubleshooting, and preventing unauthorized access.</li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">We do not sell or rent Meta Platform data.</p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We do not use Meta Platform data for advertising to {siteConfig.name} users or for purposes
                  unrelated to providing the application&apos;s advertising management functionality.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Meta Platform data is handled in accordance with applicable Meta platform requirements and
                  policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. Data sharing</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We do not sell, rent, or share personal information or Meta Platform data with third parties except
                  where necessary to:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>Provide the functionality of {siteConfig.name}.</li>
                  <li>
                    Use infrastructure and service providers that process data on our behalf under appropriate
                    confidentiality and security obligations.
                  </li>
                  <li>Comply with applicable law, legal process, or valid governmental requests.</li>
                  <li>Protect the security, rights, and integrity of {siteConfig.name} and its users.</li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Data retention and deletion</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We retain application data and access credentials only for as long as reasonably necessary to
                  provide {siteConfig.name} functionality, maintain authorized access, comply with legal obligations,
                  resolve disputes, and enforce agreements.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  A Business Portfolio or advertising account representative may request deletion of data stored by{" "}
                  {siteConfig.name} by contacting:
                </p>
                <p className="mt-3">
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[color:var(--accent)]">
                    {siteConfig.contactEmail}
                  </a>
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  When access to a connected Business Portfolio or advertising account is no longer required, the
                  corresponding stored credentials and application records may be deleted in accordance with our
                  retention practices and applicable requirements.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Deletion of data stored directly within Meta Ads Manager is controlled by Meta and is subject to
                  Meta&apos;s own tools and policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">6. Security</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} uses reasonable technical and organizational measures designed to protect
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access credentials are stored encrypted at rest, scoped according to the connected Business
                  Portfolio, and are not exposed in the user interface.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access to {siteConfig.name} is restricted to authorized users and is limited according to assigned
                  roles and advertising resources.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">7. Changes to this policy</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We may update this Privacy Policy from time to time. Material changes will be reflected on this
                  page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">8. Contact</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Questions about this Privacy Policy or a data deletion request can be sent to:
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
