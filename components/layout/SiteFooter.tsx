import Link from "next/link";

const ECOSYSTEM_LINKS = [
  { href: "/reserve", label: "Ghana Journeys" },
  { href: "/return-guide", label: "Return Guide" },
  { href: "/return-network", label: "Return Network" },
  { href: "/experiences", label: "Return Experiences" },
  { href: "/return-community", label: "Return Community" },
  { href: "/return-invest", label: "Return Invest" },
  { href: "/return-market", label: "Return Market" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <p className="font-serif text-lg font-normal text-foreground">The Real Return™</p>
        <p className="mt-2 text-sm text-foreground/65">Remember. Return. Rebuild.™</p>
        <p className="text-sm text-foreground/50">The Future Africa Experience™</p>

        <nav aria-label="Ecosystem" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {ECOSYSTEM_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              <Link href={link.href} className="text-sm text-foreground/60 transition-colors hover:text-gold">
                {link.label}
              </Link>
              {i < ECOSYSTEM_LINKS.length - 1 ? <span className="hidden text-foreground/25 sm:inline">|</span> : null}
            </span>
          ))}
        </nav>

        <p className="mt-8 text-sm text-foreground/50">© {new Date().getFullYear()} The Real Return™.</p>
      </div>
    </footer>
  );
}
