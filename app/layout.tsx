import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

import { PopupBannerHost } from "@/components/home/PopupBannerHost";
import { getPopupBanners } from "@/lib/sanity/popups";

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
  title: "The Real Return™ | Remember. Return. Rebuild.",
  description:
    "The Real Return™ is a heritage and legacy platform for the African diaspora, built for those returning to Ghana not as tourists, but as family coming home.",
};

export const revalidate = 60;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const popupBanners = await getPopupBanners();

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <PopupBannerHost banners={popupBanners} />
      </body>
    </html>
  );
}
