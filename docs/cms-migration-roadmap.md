# Sanity CMS Migration Roadmap

Goal: let Tarsha edit site content herself at `/studio`, with no code changes or deploys required per edit.

## Phase 1 — Academy (done)

- Sanity Studio embedded at `/studio`, schema for `academyCourse` (4 courses) and `academySettings` (hero + the 6-phase roadmap).
- `lib/sanity/academy.ts` fetches from Sanity, falling back to the existing static `content/academy.ts` data whenever Sanity isn't configured or a query fails, so the site never breaks.
- `scripts/migrate-academy-to-sanity.js` seeds Sanity with the current Academy content (courses, images, phases) in one run.
- Wired into: `/academy`, the homepage's Academy teaser, the enrollment API route, and the admin leads dashboard's package filter.

**Still needed to activate:** a Sanity project (Tarsha or Alfred creates the account — see "Account setup" below), then run the migration script once.

## Phase 2 — Experience Packages (not started)

The largest phase: 30 files in `content/experiences/*.ts`, each with hero image, gallery, highlights, a multi-day itinerary, cultural context, included/excluded lists, and practical info.

- Schema: `experiencePackage` document type mirroring `types/experience.ts`'s `ExperiencePackage` interface, with itinerary days as an array-of-objects field.
- Migration script seeding all 30 packages + their images (gallery images too, not just hero).
- Rewire: `app/experiences/page.tsx`, `app/experiences/[slug]/page.tsx`, `app/reserve/page.tsx`'s featured cards, `components/experiences/PackageCard.tsx` / `PackageBanner.tsx`, and the `getExperienceBySlug` / `getPackagesByRegion` / `getFlagshipJourneys` helpers in `content/experiences/index.ts`.
- Also touches the admin leads dashboard's region/package filters (same pattern as the Phase 1 fix for Academy leads).

## Phase 3 — Homepage & Site-Wide Content (not started)

Everything left in `content/site.ts`: hero slides + captions, pillars, founder story, itinerary preview, investment tiers, community section. Plus `lib/luxury-videos.ts` captions if Tarsha wants to swap ambience videos herself.

- Schema: a `siteSettings` singleton (or a few smaller singletons — pillars, founder, investment tiers as their own types since they're logically separate).
- Rewire: `app/page.tsx` for the remaining static sections.

## Phase 4 — Email Copy (optional, lower priority)

The confirmation/notification/follow-up email templates in `lib/*-emails.ts` are currently hardcoded strings. Could move to Sanity as editable templates with merge fields, but this is genuinely optional — email copy changes far less often than page content, and templating email bodies safely (avoiding injection, keeping the merge-field syntax simple for a non-technical editor) is its own scoped effort. Recommend revisiting only if Tarsha specifically asks for it.

## Account setup (needed before Phase 1 goes live)

Sanity requires its own account — this can't be done on your behalf, same reason GitHub/Vercel needed you to log in yourself:

1. Go to [sanity.io](https://www.sanity.io) and sign up (GitHub/Google login both work).
2. Create a new project from the dashboard. Name it "The Real Return" or similar.
3. In the project's **API** settings, copy the **Project ID**.
4. Still in **API**, create a new **dataset** named `production` (usually created by default).
5. Under **API → Tokens**, create a token with **Editor** permissions (needed once, for the migration script) — copy it somewhere safe, it's only shown once.
6. Send me the Project ID and that token (privately, not in a public place) and I'll add them to `.env.local`, run the migration script, and Tarsha will have a working `/studio` to edit Academy content in.
