import Image from "next/image";

import type { Testimonial } from "@/lib/sanity/testimonials";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="bg-muted py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Voices Of The Return</p>
          <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">Stories from those who've made the journey.</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className={`flex flex-col rounded-sm border border-border bg-background p-8 ${
                testimonial.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <blockquote className="flex-1 font-serif text-lg font-normal italic leading-snug text-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {testimonial.image ? (
                  <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={testimonial.image.src} alt={testimonial.image.alt} fill sizes="44px" className="object-cover" />
                  </div>
                ) : null}
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.authorName}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-foreground/55">{testimonial.authorContext}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
