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

export const experiencePackages: ExperiencePackage[] = [
  enterTheKingdom,
  theSoulOfGhana,
  aboveTheCity,
  meetTheForestGuardians,
  returnToTheBeginning,
  intoTheMountains,
  theAtlanticEscape,
  theGhanaSafari,
  fromSavannahToShea,
];

export function getExperienceBySlug(slug: string): ExperiencePackage | undefined {
  return experiencePackages.find((pkg) => pkg.slug === slug);
}

export function getRelatedExperiences(pkg: ExperiencePackage): ExperiencePackage[] {
  return pkg.relatedExperiences
    .map((slug) => getExperienceBySlug(slug))
    .filter((related): related is ExperiencePackage => Boolean(related));
}
