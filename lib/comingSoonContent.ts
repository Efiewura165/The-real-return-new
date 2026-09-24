export interface ComingSoonContent {
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: { src: string; alt: string };
}

/** Journeys nav items — keyed by the slug in /journeys/[slug]. */
export const journeyContent: Record<string, ComingSoonContent> = {
  "the-ghana-journey": {
    body: "The complete Real Return™ experience: seven days moving through Accra's energy, Cape Coast's history, Kakum's rainforest canopy, and Kumasi's living craft traditions. Every step is held by a dedicated steward, so you arrive as a guest and leave as family.",
    ctaLabel: "Reserve The Ghana Journey",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/accra-skyline.jpg", alt: "Accra's skyline at golden hour" },
  },
  "the-ghana-legacy-journey": {
    body: "A deeper four-stage path through remembrance, homecoming, identity, and rebuilding, built for travelers ready to do more than visit. Walk the Door of No Return at Cape Coast Castle, sit with master weavers in Kumasi, and leave with a legacy plan, not just a passport stamp.",
    ctaLabel: "Begin The Legacy Journey",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/cape-coast-castle.jpg", alt: "Cape Coast Castle overlooking the Atlantic" },
  },
  "family-return": {
    body: "Bring the whole family home, together. From airport pickup to a private welcome ritual, every detail is shaped around multigenerational travel, so grandparents, parents, and children each find their own way back.",
    ctaLabel: "Plan Your Family's Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/ghana-water-welcome-smile.jpg", alt: "A warm welcome smile at the water's edge" },
  },
  "ancestral-return": {
    body: "For those tracing bloodlines back to Ghana's shores, this journey pairs guided time at Cape Coast and Elmina Castles with genealogy support and naming ceremonies, turning history into something you can stand inside.",
    ctaLabel: "Start Your Ancestral Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/elmina-castle.jpg", alt: "Elmina Castle's weathered walls" },
  },
  "business-return": {
    body: "Explore Ghana's investment climate, land ownership pathways, and business formation process, guided by stewards who've done it themselves. Built for diaspora entrepreneurs weighing a real, permanent return.",
    ctaLabel: "Discuss Your Business Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/diaspora-lounge-portrait.jpg", alt: "A diaspora traveler considering a business return to Ghana" },
  },
  "luxury-return": {
    body: "Private villas, five-star suites, and a fully custom itinerary — Ghana at its most refined. Every cultural touchpoint The Real Return™ is known for, delivered with uncompromising comfort.",
    ctaLabel: "Reserve Your Luxury Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/grand-resort-aerial.jpg", alt: "Aerial view of a grand luxury resort along Ghana's coast" },
  },
  "womens-return": {
    body: "A journey shaped for women reconnecting with heritage, sisterhood, and self: small-group departures, women-led cultural sessions, and time with the artisans keeping Ghana's craft traditions alive.",
    ctaLabel: "Join The Women's Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/krobo-bead-making.jpg", alt: "Krobo women hand-crafting traditional beads" },
  },
  "entrepreneur-return": {
    body: "Meet the makers behind Ghana's cocoa, shea, and textile economies, and explore what it takes to build alongside them. Part cultural immersion, part hands-on masterclass in diaspora-led business.",
    ctaLabel: "Explore The Entrepreneur Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/cocoa-harvest-processing.jpg", alt: "Cocoa harvest processing, a cornerstone of Ghana's economy" },
  },
  "legacy-return": {
    body: "Built for those ready to leave something behind: a scholarship, a business, a homestead. This journey pairs cultural immersion with legacy planning support, so your return outlasts your trip.",
    ctaLabel: "Build Your Legacy Return",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/adinkra-stamping.jpg", alt: "Traditional Adinkra symbol stamping" },
  },
};

/** For Businesses nav items — keyed by the slug in /for-businesses/[slug]. */
export const forBusinessContent: Record<string, ComingSoonContent> = {
  "become-a-return-partner": {
    body: "Partner your hotel, tour company, or venue with The Real Return™ and reach a growing community of diaspora travelers actively planning trips home. We handle the matchmaking, you deliver the experience.",
    ctaLabel: "Apply To Partner",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/resort-pool-aerial.jpg", alt: "Aerial view of a partner resort pool" },
  },
  "real-return-verified": {
    body: "Our highest trust mark: a rigorous review of safety, hospitality, and cultural authenticity, so every traveler we send your way books with confidence. Verified partners appear first across our journeys and packages.",
    ctaLabel: "Get Verified",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/poolside-cabana-ocean-view.jpg", alt: "A poolside cabana with an ocean view" },
  },
  "real-return-preferred": {
    body: "Priority placement across our itineraries and community recommendations, for partners who consistently deliver the standard our travelers expect. A faster path to visibility without a formal audit.",
    ctaLabel: "Apply For Preferred Status",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/beachfront-lodge-thatched-roofs.jpg", alt: "A beachfront lodge with traditional thatched roofs" },
  },
  "real-return-partner": {
    body: "The starting point for any Ghanaian business ready to serve the diaspora travel market: listing across our platform, warm introductions, and a direct line to our stewardship team.",
    ctaLabel: "Become A Partner",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/busua-beach-lounge.jpg", alt: "A beach lounge at Busua" },
  },
  "sponsorships-and-partnerships": {
    body: "Align your brand with a movement bringing thousands of diaspora travelers home to Ghana. From event sponsorships to co-branded journeys, we build partnerships that mean something beyond a logo placement.",
    ctaLabel: "Discuss A Partnership",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/aburi-botanical-gardens.jpg", alt: "Aburi Botanical Gardens, a setting for community gatherings" },
  },
};

/** About nav items — keyed by the slug in /about/[slug]. */
export const aboutContent: Record<string, ComingSoonContent> = {
  "why-the-real-return": {
    body: "Most travel companies sell Ghana as a destination. We treat it as a homecoming. Every itinerary, every steward, every detail exists to turn a trip into the return you didn't know you were looking for.",
    ctaLabel: "Speak With A Steward",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/wli-waterfalls.jpg", alt: "Wli Waterfalls cascading through the Ghanaian rainforest" },
  },
  "our-mission": {
    body: "To make the return home accessible, dignified, and transformative for every member of the African diaspora, whether that return lasts seven days or becomes permanent.",
    ctaLabel: "Speak With A Steward",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/kakum-canopy-walk.jpg", alt: "The Kakum Canopy Walk rising above the rainforest" },
  },
  "the-team": {
    body: "Led by founder Tarsha Lewis and a network of Ghana-based stewards, guides, and cultural historians, our team exists to make sure no one makes this return alone.",
    ctaLabel: "Speak With A Steward",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/academy-heritage-lesson.jpg", alt: "A Real Return™ Academy heritage session" },
  },
  contact: {
    body: "Have a question before you commit? A steward is ready to talk through dates, tiers, or anything else standing between you and your return.",
    ctaLabel: "Contact A Steward",
    ctaHref: "/reserve#inquire",
    image: { src: "/images/stock/ghana-flag.jpg", alt: "The Ghanaian flag" },
  },
};
