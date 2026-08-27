import { defineField, defineType } from "sanity";

export const investmentSection = defineType({
  name: "investmentSection",
  title: "Investment Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({
      name: "tiers",
      title: "Tiers",
      type: "array",
      of: [
        {
          type: "object",
          name: "tier",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
            defineField({ name: "accommodation", title: "Accommodation", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
            defineField({
              name: "inclusions",
              title: "Inclusions",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.min(1),
            }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string", validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "name" },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Investment Section" };
    },
  },
});
