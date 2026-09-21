import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/data";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <Container className="flex flex-col items-center gap-4 text-sm text-[color:var(--ink-soft)]">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:self-stretch">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalEntityName}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy" className="hover:text-[color:var(--foreground)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[color:var(--foreground)]">
              Terms of Service
            </Link>
            <Link href="/data-deletion" className="hover:text-[color:var(--foreground)]">
              Data Deletion
            </Link>
            <Link href="/#contact" className="hover:text-[color:var(--foreground)]">
              Contact
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-[color:var(--ink-soft)]">
          This product is not affiliated with or endorsed by Meta Platforms, Inc.
        </p>
      </Container>
    </footer>
  );
}
