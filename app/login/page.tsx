import type { Metadata } from "next";

import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata: Metadata = { title: "Returner Login | The Real Return™" };

export default function LoginPage() {
  return (
    <ComingSoonPage
      eyebrow="Returner Login"
      title="Accounts Are On Their Way"
      body="A dedicated Returner account, to track your journey, documents, and itinerary, is coming soon. For now, a steward can help you directly."
      ctaLabel="Begin Your Journey"
      ctaHref="/reserve"
    />
  );
}
