import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-6 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© 2026 The Real Return™. Reconnect with intention.</p>
        <nav className="flex gap-5">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
