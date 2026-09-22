import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/data";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <Container className="flex flex-col items-center gap-6 text-center text-sm text-[color:var(--ink-soft)]">
        <div>
          <p className="text-base font-semibold text-[color:var(--foreground)]">{siteConfig.name}</p>
          <p className="mt-1">Independent software for authorized advertising teams.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/privacy" className="hover:text-[color:var(--foreground)]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[color:var(--foreground)]">
            Terms of Service
          </Link>
          <Link href="/data-deletion" className="hover:text-[color:var(--foreground)]">
            Data Deletion Instructions
          </Link>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-[color:var(--foreground)]">
            Contact Support
          </a>
        </div>

        <p className="text-xs">AdForge is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc.</p>

        <p className="text-xs">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
