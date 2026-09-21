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
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Last updated: [date]</p>

            <div className="mt-10 flex flex-col gap-8 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold">How to request deletion</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  A Business Portfolio or ad account owner can request that we delete all data we
                  hold about their account at any time, by emailing{" "}
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-[color:var(--accent)]">
                    {siteConfig.contactEmail}
                  </a>{" "}
                  with the name of the Business Portfolio or ad account and a brief confirmation
                  of the request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">What gets deleted</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
                  <li>The stored Meta System User access token for that Business Portfolio.</li>
                  <li>
                    Campaign, Ad Set and Ad configuration data we generated or stored for that
                    account.
                  </li>
                  <li>Any account-level records tying our team members&apos; access to that account.</li>
                </ul>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We do not control data that already exists directly in Meta Ads Manager (real
                  Campaigns, Ad Sets, Ads and their performance history) — that data is managed
                  through Meta&apos;s own tools and policies, independently of our platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Timeframe</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We process deletion requests within 30 days of confirming the request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  Questions about a deletion request can be sent to{" "}
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
