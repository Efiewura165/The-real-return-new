import { defineField, defineType } from "sanity";

export const emailTemplate = defineType({
  name: "emailTemplate",
  title: "Email Template",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Template Key",
      type: "string",
      description: "Do not change this — it's how the website finds this template. Ask a developer before editing it.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Template Name",
      type: "string",
      description: "A friendly name so you can tell templates apart in this list.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subject",
      title: "Subject Line",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Email Body",
      type: "text",
      rows: 12,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mergeFieldsHelp",
      title: "Available Merge Fields",
      type: "text",
      rows: 3,
      readOnly: true,
      description: "The {{fields}} you can use in the subject and body above for this template. Informational only.",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "key" },
  },
});
