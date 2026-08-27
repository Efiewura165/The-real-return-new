import { defineField, defineType } from "sanity";

export const itinerarySection = defineType({
  name: "itinerarySection",
  title: "Itinerary Preview Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "object",
          name: "highlight",
          fields: [
            defineField({ name: "day", title: "Day Label", type: "string", description: "e.g. \"Day 1\"", validation: (Rule) => Rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "location", title: "Location", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "title", subtitle: "day" },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "cta",
      title: "Call To Action",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "href", title: "Link", type: "string", validation: (Rule) => Rule.required() }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Itinerary Preview Section" };
    },
  },
});
