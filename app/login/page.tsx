import type { Metadata } from "next";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";
import { pageMetadata } from "@/lib/seo";

// Placeholder until Returner accounts exist, so keep it out of search results.
export const metadata: Metadata = pageMetadata({
  title: "Returner Login",
  description: "Returner accounts are coming soon. For now, a steward can help you directly.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <ComingSoonPage
      eyebrow="Returner Login"
      title="Accounts Are On Their Way"
      body="A dedicated Returner account, to track your journey, documents, and itinerary, is coming soon. For now, a steward can help you directly."
      ctaLabel="Begin Your Journey"
      ctaHref="/reserve#inquire"
      image={{ src: "/images/stock/villa-pool-reflection.jpg", alt: "A private villa pool reflecting the Ghanaian sky" }}
    />
  );
}
