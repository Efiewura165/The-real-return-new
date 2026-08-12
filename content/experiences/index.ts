import type { ExperiencePackage } from "@/types/experience";
import { enterTheKingdom } from "./enter-the-kingdom";

export const experiencePackages: ExperiencePackage[] = [enterTheKingdom];

export function getExperienceBySlug(slug: string): ExperiencePackage | undefined {
  return experiencePackages.find((pkg) => pkg.slug === slug);
}

export function getRelatedExperiences(pkg: ExperiencePackage): ExperiencePackage[] {
  return pkg.relatedExperiences
    .map((slug) => getExperienceBySlug(slug))
    .filter((related): related is ExperiencePackage => Boolean(related));
}
