import type { ExperiencePackage } from "@/types/experience";
import { enterTheKingdom } from "./enter-the-kingdom";
import { theSoulOfGhana } from "./the-soul-of-ghana";
import { aboveTheCity } from "./above-the-city";
import { meetTheForestGuardians } from "./meet-the-forest-guardians";
import { returnToTheBeginning } from "./return-to-the-beginning";
import { intoTheMountains } from "./into-the-mountains";
import { theAtlanticEscape } from "./the-atlantic-escape";
import { theGhanaSafari } from "./the-ghana-safari";
import { fromSavannahToShea } from "./from-savannah-to-shea";
import { whereTheRiverMeetsTheSea } from "./where-the-river-meets-the-sea";
import { fromBeanToChocolate } from "./from-bean-to-chocolate";
import { threadsOfAKingdom } from "./threads-of-a-kingdom";
import { theSymbolsThatSpeak } from "./the-symbols-that-speak";
import { fromEarthToArt } from "./from-earth-to-art";
import { theSacredWaters } from "./the-sacred-waters";
import { wingsOfGhana } from "./wings-of-ghana";
import { whereHistoryMeetsTheAtlantic } from "./where-history-meets-the-atlantic";
import { aboveTheRainforest } from "./above-the-rainforest";
import { theAncientNorth } from "./the-ancient-north";
import { ghanasHiddenWaterWorld } from "./ghanas-hidden-water-world";
import { fromCoconutToGoldenOil } from "./from-coconut-to-golden-oil";
import { rememberReturnRebuild } from "./remember-return-rebuild";
import { theKingdomAndTheGoldCoast } from "./the-kingdom-and-the-gold-coast";
import { ghanaWildAndBeautiful } from "./ghana-wild-and-beautiful";
import { theGhanaianCraftsman } from "./the-ghanaian-craftsman";
import { theRealReturnDettyDecember } from "./the-real-return-detty-december";
import { theSignatureDecemberHomecoming } from "./the-signature-december-homecoming";
import { theCrownDecemberExperience } from "./the-crown-december-experience";

export const FLAGSHIP_REGION = "Multi-Region Journey";

export const experiencePackages: ExperiencePackage[] = [
  theRealReturnDettyDecember,
  theSignatureDecemberHomecoming,
  theCrownDecemberExperience,
  enterTheKingdom,
  theSoulOfGhana,
  aboveTheCity,
  meetTheForestGuardians,
  returnToTheBeginning,
  intoTheMountains,
  theAtlanticEscape,
  theGhanaSafari,
  fromSavannahToShea,
  whereTheRiverMeetsTheSea,
  fromBeanToChocolate,
  threadsOfAKingdom,
  theSymbolsThatSpeak,
  fromEarthToArt,
  theSacredWaters,
  wingsOfGhana,
  whereHistoryMeetsTheAtlantic,
  aboveTheRainforest,
  theAncientNorth,
  ghanasHiddenWaterWorld,
  fromCoconutToGoldenOil,
  rememberReturnRebuild,
  theKingdomAndTheGoldCoast,
  ghanaWildAndBeautiful,
  theGhanaianCraftsman,
];

export function getExperienceBySlug(slug: string): ExperiencePackage | undefined {
  return experiencePackages.find((pkg) => pkg.slug === slug);
}

export function getRelatedExperiences(pkg: ExperiencePackage): ExperiencePackage[] {
  return pkg.relatedExperiences
    .map((slug) => getExperienceBySlug(slug))
    .filter((related): related is ExperiencePackage => Boolean(related));
}

export function getFlagshipJourneys(): ExperiencePackage[] {
  return experiencePackages.filter((pkg) => pkg.region === FLAGSHIP_REGION);
}

export function getRegionalPackages(): ExperiencePackage[] {
  return experiencePackages.filter((pkg) => pkg.region !== FLAGSHIP_REGION);
}

/** Regions in the client's specified display order (spec section 6). */
export const REGION_ORDER = [
  "Greater Accra",
  "Eastern Region",
  "Ashanti Region",
  "Bono East Region",
  "Central Region",
  "Volta Region",
  "Western Region",
  "Savannah Region",
  "Northern Region",
];

export function getPackagesByRegion(): { region: string; packages: ExperiencePackage[] }[] {
  const regional = getRegionalPackages();
  return REGION_ORDER.map((region) => ({
    region,
    packages: regional.filter((pkg) => pkg.region === region),
  })).filter((group) => group.packages.length > 0);
}
