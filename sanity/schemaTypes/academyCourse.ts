import { defineField, defineType } from "sanity";

export const academyCourse = defineType({
  name: "academyCourse",
  title: "Academy Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short line shown on the course card.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Full description shown in the hover popup on the course card.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "USD",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      description: "e.g. \"Self-Paced Online\" or \"Self-Paced + 1:1 Concierge\"",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lessonCount",
      title: "Lesson Count",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "curriculum",
      title: "Curriculum",
      type: "array",
      of: [
        {
          type: "object",
          name: "lesson",
          fields: [
            defineField({ name: "title", title: "Lesson Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Lesson Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured (\"Best Value\")",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers show first.",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "tagline", media: "image" },
  },
});
