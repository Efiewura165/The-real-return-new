import { defineField, defineType } from "sanity";

export const founderSection = defineType({
  name: "founderSection",
  title: "Founder Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "pullQuote", title: "Pull Quote", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "image",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
