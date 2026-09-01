import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "authorName", title: "Author Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "authorContext",
      title: "Author Context",
      type: "string",
      description: "e.g. \"Returned to Ghana, 2025\" or \"Atlanta, GA\"",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Featured testimonials are shown larger/first.",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers show first.",
      initialValue: 0,
    }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "authorName", subtitle: "quote", media: "image" },
  },
});
