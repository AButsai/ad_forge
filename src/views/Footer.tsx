import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/data";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <Container className="flex flex-col items-center gap-4 text-sm text-[color:var(--ink-soft)] sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalEntityName}
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-[color:var(--foreground)]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[color:var(--foreground)]">
            Terms of Service
          </Link>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-[color:var(--foreground)]">
            {siteConfig.contactEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}
