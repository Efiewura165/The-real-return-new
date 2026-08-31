import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { BookingCTAPopup } from "@/components/home/BookingCTAPopup";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-real-return-new.vercel.app";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Real Return™ | Remember. Return. Rebuild.",
    template: "%s | The Real Return™",
  },
  description:
    "The Real Return™ is a heritage and legacy platform for the African diaspora, built for those returning to Ghana not as tourists, but as family coming home.",
  openGraph: {
    type: "website",
    siteName: "The Real Return™",
    title: "The Real Return™ | Remember. Return. Rebuild.",
    description:
      "The Real Return™ is a heritage and legacy platform for the African diaspora, built for those returning to Ghana not as tourists, but as family coming home.",
    images: [{ url: "/images/stock/h1.jpg", width: 1200, height: 630, alt: "The illuminated entrance of a grand resort at dusk, framed by palm trees" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Real Return™ | Remember. Return. Rebuild.",
    description:
      "The Real Return™ is a heritage and legacy platform for the African diaspora, built for those returning to Ghana not as tourists, but as family coming home.",
    images: ["/images/stock/h1.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <BookingCTAPopup />
        <Analytics />
      </body>
    </html>
  );
}
