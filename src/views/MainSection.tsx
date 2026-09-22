import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/data";

export function MainSection() {
  return (
    <section className="border-b border-[color:var(--line)] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl">{siteConfig.tagline}</h1>
          <p className="mt-6 text-pretty text-base text-[color:var(--ink-soft)] sm:text-lg">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-pretty text-base text-[color:var(--ink-soft)] sm:text-lg">
            {siteConfig.subDescription}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/#how-it-works">Get Started</Button>
            <Button href={`mailto:${siteConfig.contactEmail}`} variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
