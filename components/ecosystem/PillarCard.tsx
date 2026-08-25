import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PillarCardProps {
  name: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
}

export function PillarCard({ name, tagline, description, cta, href }: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-border bg-background p-7 transition-colors hover:border-gold sm:p-8"
    >
      <h3 className="font-serif text-2xl font-normal text-foreground">{name}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold">{tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-foreground/65">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground transition-transform group-hover:translate-x-1">
        {cta} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
