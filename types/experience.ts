export type ExperienceCategory =
  | "HERITAGE"
  | "CULTURE"
  | "DIASPORA"
  | "NATURE"
  | "WILDLIFE"
  | "LUXURY"
  | "WELLNESS"
  | "ADVENTURE"
  | "FOOD"
  | "CRAFT"
  | "FAMILY"
  | "BEACH"
  | "AGRICULTURE"
  | "ROYAL HERITAGE";

export interface ExperienceImage {
  src: string;
  alt: string;
}

export interface ExperienceItineraryDay {
  day: number;
  title: string;
  description: string;
  location?: string;
}

export interface ExperiencePracticalInformation {
  bestTime?: string;
  difficulty?: string;
  groupSize?: string;
  recommendedFor?: string[];
}

export interface ExperiencePackage {
  id: string;
  slug: string;

  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;

  region: string;
  country: string;
  locations: string[];

  category: ExperienceCategory[];

  duration: {
    days: number;
    nights?: number;
  };

  heroImage: ExperienceImage;
  gallery: ExperienceImage[];

  highlights: string[];

  whyThisExperience: string;

  itinerary: ExperienceItineraryDay[];

  culturalContext?: string;

  included: string[];
  excluded: string[];

  practicalInformation: ExperiencePracticalInformation;

  startingPrice?: number;
  currency?: string;

  featured: boolean;

  registration: {
    enabled: boolean;
    cta: string;
  };

  relatedExperiences: string[];
}

export interface TravelLead {
  id: string;

  name: string;
  email: string;
  phone?: string;
  whatsapp?: string;

  country: string;

  experienceId: string;
  experienceTitle: string;

  preferredTravelDate?: string;
  flexibleDates?: boolean;

  travellers: {
    adults: number;
    children: number;
    total: number;
  };

  interests: string[];
  travelStyle: string[];

  message?: string;

  status: "new" | "contacted" | "planning" | "quoted" | "booked" | "completed" | "lost";

  createdAt: string;
  updatedAt: string;
}
