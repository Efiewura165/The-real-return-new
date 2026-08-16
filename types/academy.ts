export interface AcademyImage {
  src: string;
  alt: string;
}

export interface AcademyCourse {
  id: string;
  slug: string;

  title: string;
  tagline: string;
  description: string;

  image: AcademyImage;

  price: number;
  currency: string;
  format: string;
  lessonCount: number;

  curriculum: string[];

  featured: boolean;
}

export interface AcademyPhase {
  phase: string;
  title: string;
  description: string;
  unlocked: boolean;
}
