import { defineField, defineType } from "sanity";

export const academySettings = defineType({
  name: "academySettings",
  title: "Academy Settings",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "The Real Return™ Academy",
    }),
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Hero Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facilitator",
      title: "Facilitator Line",
      type: "string",
      description: "e.g. \"Taught by Tarsha Lewis, Founder of The Real Return™\"",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phases",
      title: "Academy Phases",
      description: "The six-phase roadmap shown below the courses.",
      type: "array",
      of: [
        {
          type: "object",
          name: "phase",
          fields: [
            defineField({ name: "phase", title: "Phase Label", type: "string", description: "e.g. \"Phase 1\"", validation: (Rule) => Rule.required() }),
            defineField({ name: "title", title: "Phase Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Phase Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
            defineField({ name: "unlocked", title: "Available Now (not full-membership-only)", type: "boolean", initialValue: false }),
          ],
          preview: {
            select: { title: "title", subtitle: "phase" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title ?? "Academy Settings" };
    },
  },
});
