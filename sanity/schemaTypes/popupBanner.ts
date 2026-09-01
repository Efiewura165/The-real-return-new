import { defineField, defineType } from "sanity";

export const popupBanner = defineType({
  name: "popupBanner",
  title: "Pop-Up Banner",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      description: "For telling banners apart in this list — visitors never see this.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
      description: "Turn off to hide this banner everywhere without deleting it.",
    }),
    defineField({
      name: "pages",
      title: "Show On Pages",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Which pages this should appear on, e.g. \"/\" for the homepage, \"/academy\", \"/experiences\". Leave empty to show on every page. (It never shows on /reserve or the admin dashboard, regardless of what's listed here.) If more than one banner matches the same page, only the first one in this list is shown.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string", validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "message", title: "Message", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: "buttonLabel", title: "Button Label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "Where the button goes, e.g. /reserve",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "firstShowDelaySeconds",
      title: "Delay Before First Showing (seconds)",
      type: "number",
      initialValue: 6,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "visibleDurationSeconds",
      title: "How Long It Stays Visible (seconds)",
      type: "number",
      initialValue: 18,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "reappearIntervalSeconds",
      title: "Time Between Reappearances (seconds)",
      type: "number",
      initialValue: 45,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "internalName", subtitle: "message", media: "image", enabled: "enabled" },
    prepare({ title, subtitle, media, enabled }) {
      return { title: enabled === false ? `${title} (off)` : title, subtitle, media };
    },
  },
});
