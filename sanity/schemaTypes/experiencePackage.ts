import { defineField, defineType } from "sanity";

const CATEGORIES = [
  "HERITAGE",
  "CULTURE",
  "DIASPORA",
  "NATURE",
  "WILDLIFE",
  "LUXURY",
  "WELLNESS",
  "ADVENTURE",
  "FOOD",
  "CRAFT",
  "FAMILY",
  "BEACH",
  "AGRICULTURE",
  "ROYAL HERITAGE",
];

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })],
  });

export const experiencePackage = defineType({
  name: "experiencePackage",
  title: "Experience Package",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: "longDescription", title: "Long Description", type: "text", rows: 4, validation: (Rule) => Rule.required() }),

    defineField({ name: "region", title: "Region", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "country", title: "Country", type: "string", initialValue: "Ghana" }),
    defineField({ name: "locations", title: "Locations", type: "array", of: [{ type: "string" }] }),

    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: { list: CATEGORIES },
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "object",
      fields: [
        defineField({ name: "days", title: "Days", type: "number", validation: (Rule) => Rule.required().positive() }),
        defineField({ name: "nights", title: "Nights", type: "number" }),
      ],
    }),

    imageField("heroImage", "Hero Image"),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", fields: [{ name: "alt", title: "Alt text", type: "string" }], options: { hotspot: true } }] }),

    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "whyThisExperience", title: "Why This Experience", type: "text", rows: 3 }),

    defineField({
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          name: "itineraryDay",
          fields: [
            defineField({ name: "day", title: "Day", type: "number", validation: (Rule) => Rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
            defineField({ name: "location", title: "Location", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "day" }, prepare: ({ title, subtitle }) => ({ title, subtitle: `Day ${subtitle}` }) },
        },
      ],
    }),

    defineField({ name: "culturalContext", title: "Cultural Context", type: "text", rows: 3 }),

    defineField({ name: "included", title: "Included", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "excluded", title: "Excluded", type: "array", of: [{ type: "string" }] }),

    defineField({
      name: "practicalInformation",
      title: "Practical Information",
      type: "object",
      fields: [
        defineField({ name: "bestTime", title: "Best Time", type: "string" }),
        defineField({ name: "difficulty", title: "Difficulty", type: "string" }),
        defineField({ name: "groupSize", title: "Group Size", type: "string" }),
        defineField({ name: "recommendedFor", title: "Recommended For", type: "array", of: [{ type: "string" }] }),
      ],
    }),

    defineField({ name: "startingPrice", title: "Starting Price", type: "number" }),
    defineField({ name: "currency", title: "Currency", type: "string", initialValue: "USD" }),

    defineField({ name: "featured", title: "Featured (Flagship Journey)", type: "boolean", initialValue: false }),

    defineField({
      name: "registration",
      title: "Registration",
      type: "object",
      fields: [
        defineField({ name: "enabled", title: "Enabled", type: "boolean", initialValue: true }),
        defineField({ name: "cta", title: "CTA Label", type: "string" }),
      ],
    }),

    defineField({
      name: "relatedExperiences",
      title: "Related Experiences",
      description: "Slugs of related packages (matches the `slug` field of another Experience Package).",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "region", media: "heroImage" },
  },
});
