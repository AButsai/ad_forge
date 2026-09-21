import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/data/data";

export function Header() {
  return (
    <header className="border-b border-[color:var(--line)]">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
            A
          </span>
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[color:var(--ink-soft)]">
          <Link href="/#how-it-works" className="hover:text-[color:var(--foreground)]">
            How it works
          </Link>
          <Link href="/privacy" className="hover:text-[color:var(--foreground)]">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[color:var(--foreground)]">
            Terms
          </Link>
        </nav>
      </Container>
    </header>
  );
}
