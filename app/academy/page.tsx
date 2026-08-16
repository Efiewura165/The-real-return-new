import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";

import { SiteHeader } from "@/components/home/SiteHeader";
import { CourseCard } from "@/components/academy/CourseCard";
import { EnrollmentForm } from "@/components/academy/EnrollmentForm";
import { academyHero, academyPhases, academyCourses } from "@/content/academy";

export const metadata: Metadata = {
  title: "Academy | The Real Return™",
  description: "Arrive prepared. Learn before you land. Self-paced courses in Ghanaian culture, language, and documentation, taught by Tarsha Lewis.",
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[560px] w-full items-end overflow-hidden sm:min-h-[640px]">
        <Image src={academyHero.image.src} alt={academyHero.image.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/15" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 sm:px-10 sm:pb-28">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">{academyHero.eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">{academyHero.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-background/80">{academyHero.description}</p>
          <p className="mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-background/60">{academyHero.facilitator}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold-luxury px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
            >
              Browse Courses
            </a>
            <a
              href="#enroll"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-background/40 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:border-background"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Courses</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">Start with Foundation & Orientation.</h2>
            <p className="mt-6 text-base leading-8 text-foreground/70">
              Take a single course, or enroll in the Full Academy Membership for the complete path: every phase, plus ongoing 1:1 guidance.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {academyCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Phases roadmap */}
      <section className="border-b border-border bg-ink py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold-luxury">The Full Path</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-background sm:text-5xl">Six phases. One return.</h2>
            <p className="mt-6 text-base leading-8 text-background/70">
              Foundation & Orientation is where every member begins. The Full Academy Membership unlocks everything after it.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
            {academyPhases.map((phase) => (
              <div key={phase.phase} className="flex flex-col bg-ink p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-luxury">{phase.phase}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${
                      phase.unlocked ? "bg-gold-luxury text-ink" : "border border-background/20 text-background/50"
                    }`}
                  >
                    {phase.unlocked ? "Available Now" : "Full Membership"}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-normal text-background">{phase.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-background/65">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment */}
      <section id="enroll" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[900px] px-6 sm:px-10">
          <div className="text-center">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Enroll</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">Begin your Academy path.</h2>
            <p className="mt-6 text-base leading-8 text-foreground/70">Choose a course below and a member of our team will confirm your enrollment within 48 hours.</p>
          </div>
          <div className="mt-12">
            <Suspense fallback={null}>
              <EnrollmentForm courses={academyCourses} />
            </Suspense>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto w-full max-w-[1400px] px-6 text-sm text-foreground/60 sm:px-10">© 2026 The Real Return™. Reconnect with intention.</div>
      </footer>
    </div>
  );
}
