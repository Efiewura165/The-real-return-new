import Image from "next/image";
import Link from "next/link";

import type { AcademyCourse } from "@/types/academy";

interface CourseCardProps {
  course: AcademyCourse;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      className={`group relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-sm ${course.featured ? "sm:aspect-[16/10] lg:col-span-2" : ""}`}
    >
      <Image
        src={course.image.src}
        alt={course.image.alt}
        fill
        sizes="(min-width:1024px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
      {course.featured ? (
        <span className="absolute right-5 top-5 rounded-full bg-gold-luxury px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink">
          Best Value
        </span>
      ) : null}
      <div className="relative mt-auto p-6 sm:p-7">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-luxury">
          {course.format} · {course.lessonCount} Lessons
        </p>
        <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-background">{course.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-background/80">{course.tagline}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-serif text-2xl font-normal text-background">
            ${course.price} <span className="text-sm text-background/60">{course.currency}</span>
          </p>
          <Link
            href={`/academy?course=${course.slug}#enroll`}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-sm bg-gold-luxury px-5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-[1.02]"
          >
            Enroll Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
