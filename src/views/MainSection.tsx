import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/data";

export function MainSection() {
  return (
    <section className="border-b border-[color:var(--line)] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-[color:var(--accent)] uppercase">
            {siteConfig.tagline}
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
            Build one catalog campaign. Launch it everywhere it needs to run.
          </h1>
          <p className="mt-6 text-pretty text-base text-[color:var(--ink-soft)] sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${siteConfig.contactEmail}`}>Get in touch</Button>
            <Button href="/#how-it-works" variant="ghost">
              How it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
