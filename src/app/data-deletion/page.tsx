import type { Metadata } from "next";
import { Header } from "@/views/Header";
import { Footer } from "@/views/Footer";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: `Data Deletion — ${siteConfig.name}`,
};

export default function DataDeletionPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold">Data Deletion</h1>
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Last updated: September 22, 2026</p>

            <div className="mt-10 flex flex-col gap-8 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold">1. How to request deletion</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  An authorized user or a representative of a Business Portfolio or advertising account may request
                  deletion of data stored by {siteConfig.name} at any time.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">To submit a deletion request, email:</p>
                <p className="mt-3">
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[color:var(--accent)]">
                    {siteConfig.contactEmail}
                  </a>
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">Please include:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>Your name.</li>
                  <li>The name or identifier of the relevant Business Portfolio or advertising account.</li>
                  <li>A brief description of the data you want deleted.</li>
                  <li>Information reasonably necessary for us to verify that you are authorized to make the request.</li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We may request additional information to verify the request and protect account security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. What may be deleted</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Depending on the scope of the request, {siteConfig.name} may delete:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>Stored Meta System User access tokens associated with the relevant Business Portfolio.</li>
                  <li>Campaign, Ad Set, Ad, and creative configuration data stored by {siteConfig.name} for the relevant account.</li>
                  <li>Account-level records connecting authorized users to the relevant advertising resources.</li>
                  <li>Other application data specifically associated with the requested account, where applicable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. Data controlled by Meta</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} does not control data that exists directly within Meta Ads Manager or other Meta
                  products.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Campaigns, Ad Sets, Ads, performance history, Business Portfolio records, and other data
                  maintained directly by Meta are managed through Meta{"'"}s own tools, systems, and policies.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  A deletion request submitted to {siteConfig.name} does not automatically delete data stored
                  directly by Meta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. Processing timeframe</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We process deletion requests within 30 days after confirming the request and verifying the
                  requester{"'"}s authorization.
                </p>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Certain information may be retained where required by law, necessary to resolve disputes, prevent
                  fraud, or maintain security records.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Contact</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Questions about a deletion request can be sent to:
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
