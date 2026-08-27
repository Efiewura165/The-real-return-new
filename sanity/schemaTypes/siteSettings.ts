import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroSlides",
      title: "Homepage Hero Slides",
      description: "Full-screen photo slideshow shown after the intro video on the homepage.",
      type: "array",
      of: [
        {
          type: "object",
          name: "heroSlide",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
            defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "caption", title: "Caption", type: "string", validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "caption", media: "image" },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "community",
      title: "Community Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
        defineField({ name: "buttonLabel", title: "Button Label", type: "string", validation: (Rule) => Rule.required() }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
