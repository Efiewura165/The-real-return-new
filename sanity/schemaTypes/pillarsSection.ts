import { defineField, defineType } from "sanity";

export const pillarsSection = defineType({
  name: "pillarsSection",
  title: "Pillars Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          name: "pillar",
          fields: [
            defineField({ name: "key", title: "Key", type: "string", description: "e.g. \"remember\"", validation: (Rule) => Rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "title", subtitle: "key", media: "image" },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Pillars Section" };
    },
  },
});
