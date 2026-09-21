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
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Last updated: [date]</p>

            <div className="mt-10 flex flex-col gap-8 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold">1. About {siteConfig.name}</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  {siteConfig.name} is operated by {siteConfig.legalEntityName} (
                  {siteConfig.legalAddress}) as an internal tool for generating, validating, and
                  publishing Facebook and Instagram advertising campaigns through the Meta
                  Marketing API. It is used exclusively by our own authorized team members and is
                  not offered as a public, self-serve service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. Authorized use only</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Access is granted only to team members explicitly authorized by us, and only for
                  the Business Portfolios and ad accounts they have been assigned. Each user is
                  responsible for the accuracy of the campaign data they enter and for reviewing
                  any campaign, ad set, or ad before activating it in Meta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. Compliance with Meta&apos;s policies</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Use of {siteConfig.name} is subject to, and must at all times comply with,
                  Meta&apos;s Platform Terms, Advertising Standards, and Developer Policies. Every
                  Campaign, Ad Set, and Ad created by this tool is created in a paused state — no
                  advertising goes live until a person reviews and activates it directly in Meta
                  Ads Manager.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. No warranty</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  The tool is provided on an &quot;as is&quot; basis. We do not guarantee that any
                  campaign created through it will be approved or perform in any particular way in
                  Meta Ads Manager — approval, delivery, and performance are entirely determined by
                  Meta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Limitation of liability</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  To the maximum extent permitted by law, {siteConfig.legalEntityName} is not
                  liable for indirect, incidental, or consequential damages arising from the use
                  of this tool, including advertising spend resulting from a campaign a user
                  chose to activate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">6. Changes to these terms</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We may update these terms from time to time. Material changes will be reflected
                  on this page with an updated date at the top.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">7. Contact</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Questions about these terms can be sent to{" "}
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
