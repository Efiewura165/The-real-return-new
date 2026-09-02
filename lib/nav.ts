export interface HeaderNavChild {
  label: string;
  href: string;
}

export interface HeaderNavParent {
  label: string;
  /** Empty array = placeholder shell, content TBD (Academy, Explore). */
  items: HeaderNavChild[];
}

/**
 * Primary header nav, per the client's exact information architecture.
 * "Begin Your Journey" is deliberately not included here — it's the
 * primary CTA button (see headerCtas), not a nav dropdown.
 *
 * Routes are invented slugs except where noted — the brief specified
 * labels and ™ placement only, not URLs.
 */
export const headerNav: HeaderNavParent[] = [
  { label: "Academy", items: [] },
  { label: "Explore", items: [] },
  {
    label: "Journeys",
    items: [
      { label: "The Ghana Journey™", href: "/journeys/the-ghana-journey" },
      { label: "The Ghana Legacy Journey™", href: "/journeys/the-ghana-legacy-journey" },
      { label: "Family Return", href: "/journeys/family-return" },
      { label: "Ancestral Return", href: "/journeys/ancestral-return" },
      { label: "Business Return", href: "/journeys/business-return" },
      { label: "Luxury Return", href: "/journeys/luxury-return" },
      { label: "Women's Return", href: "/journeys/womens-return" },
      { label: "Entrepreneur Return", href: "/journeys/entrepreneur-return" },
      { label: "Legacy Return", href: "/journeys/legacy-return" },
    ],
  },
  {
    label: "For Businesses",
    items: [
      { label: "Become a Return Partner™", href: "/for-businesses/become-a-return-partner" },
      { label: "Real Return Verified™", href: "/for-businesses/real-return-verified" },
      { label: "Real Return Preferred™", href: "/for-businesses/real-return-preferred" },
      { label: "Real Return Partner™", href: "/for-businesses/real-return-partner" },
      { label: "Sponsorships & Partnerships", href: "/for-businesses/sponsorships-and-partnerships" },
    ],
  },
  {
    label: "About",
    items: [
      // Reuses the homepage's existing founder-story section rather than inventing a duplicate page.
      { label: "Our Story", href: "/#story" },
      { label: "Why The Real Return™", href: "/about/why-the-real-return" },
      { label: "Our Mission", href: "/about/our-mission" },
      { label: "The Team", href: "/about/the-team" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
];

/**
 * Three-tier header CTA cluster. "Begin Your Journey" → /reserve matches
 * the label/destination already used on the homepage hero, so that one
 * isn't a guess. "Join The Return" reuses the existing homepage community
 * section (its own CTA there was never wired to a real href). "Returner
 * Login" has no backing feature yet — there's no customer account system
 * in this codebase today, only the /admin login for staff.
 */
export const headerCtas = {
  primary: { label: "Begin Your Journey", href: "/reserve" },
  secondary: { label: "Join The Return", href: "/#community" },
  account: { label: "Returner Login", href: "/login" },
} as const;
