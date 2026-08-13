import type { Metadata } from "next";

import { logout } from "@/app/admin/login/actions";
import { getLeads } from "@/lib/leads";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { experiencePackages, getExperienceBySlug } from "@/content/experiences";
import { LeadStatusSelect } from "@/components/admin/LeadStatusSelect";
import { LeadNotes } from "@/components/admin/LeadNotes";

export const metadata: Metadata = { title: "Leads | The Real Return™ Admin", robots: { index: false, follow: false } };

interface SearchParams {
  q?: string;
  status?: string;
  region?: string;
  package?: string;
  country?: string;
}

export default async function AdminLeadsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;

  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-gold">Admin</p>
        <h1 className="mt-4 font-serif text-2xl font-normal text-foreground">The dashboard isn&apos;t configured yet.</h1>
        <p className="mt-4 text-sm leading-6 text-foreground/65">
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code> in your environment, then run <code>supabase/schema.sql</code> in your Supabase project.
        </p>
      </div>
    );
  }

  const allLeads = await getLeads();

  const leadsWithRegion = allLeads.map((lead) => ({
    ...lead,
    region: getExperienceBySlug(lead.experienceId)?.region ?? "Unknown",
  }));

  const filtered = leadsWithRegion.filter((lead) => {
    if (params.q) {
      const q = params.q.toLowerCase();
      if (!lead.name.toLowerCase().includes(q) && !lead.email.toLowerCase().includes(q)) return false;
    }
    if (params.status && lead.status !== params.status) return false;
    if (params.region && lead.region !== params.region) return false;
    if (params.package && lead.experienceTitle !== params.package) return false;
    if (params.country && lead.country.toLowerCase() !== params.country.toLowerCase()) return false;
    return true;
  });

  const regions = Array.from(new Set(experiencePackages.map((p) => p.region))).sort();
  const packageTitles = Array.from(new Set(experiencePackages.map((p) => p.title))).sort();
  const countries = Array.from(new Set(allLeads.map((l) => l.country))).sort();

  const popularity = Object.entries(
    allLeads.reduce<Record<string, number>>((acc, lead) => {
      acc[lead.experienceTitle] = (acc[lead.experienceTitle] ?? 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="flex h-16 items-center justify-between border-b border-border px-6 sm:px-10">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">The Real Return™</p>
          <p className="font-serif text-lg leading-tight">Leads</p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground"
          >
            Sign Out
          </button>
        </form>
      </header>

      <div className="mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-10">
        {/* Package popularity */}
        {popularity.length > 0 ? (
          <div className="mb-10 flex flex-wrap gap-3">
            {popularity.slice(0, 6).map(([title, count]) => (
              <span key={title} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                {title} <span className="font-semibold text-gold">{count}</span>
              </span>
            ))}
          </div>
        ) : null}

        {/* Filters */}
        <form className="mb-8 flex flex-wrap items-end gap-4" method="get">
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/50">Search</label>
            <input
              type="text"
              name="q"
              defaultValue={params.q}
              placeholder="Name or email"
              className="h-10 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-gold"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/50">Status</label>
            <select name="status" defaultValue={params.status ?? ""} className="h-10 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-gold">
              <option value="">All</option>
              {["new", "contacted", "planning", "quoted", "booked", "completed", "lost"].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/50">Region</label>
            <select name="region" defaultValue={params.region ?? ""} className="h-10 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-gold">
              <option value="">All</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/50">Package</label>
            <select name="package" defaultValue={params.package ?? ""} className="h-10 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-gold">
              <option value="">All</option>
              {packageTitles.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-foreground/50">Country</label>
            <select name="country" defaultValue={params.country ?? ""} className="h-10 rounded-sm border border-border bg-background px-3 text-sm outline-none focus:border-gold">
              <option value="">All</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="h-10 rounded-sm border border-foreground/20 px-5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] hover:border-foreground"
          >
            Apply
          </button>
        </form>

        <p className="mb-4 text-xs text-foreground/50">
          {filtered.length} of {allLeads.length} leads
        </p>

        {/* Leads table */}
        <div className="overflow-x-auto rounded-sm border border-border">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted text-left text-[0.65rem] uppercase tracking-[0.1em] text-foreground/60">
                <th className="px-4 py-3">Traveler</th>
                <th className="px-4 py-3">Package</th>
                <th className="px-4 py-3">Dates</th>
                <th className="px-4 py-3">Travelers</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Notes</th>
                <th className="px-4 py-3">Received</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id} className="border-b border-border align-top last:border-b-0">
                  <td className="px-4 py-4">
                    <p className="font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-foreground/60">{lead.email}</p>
                    {lead.phone ? <p className="text-xs text-foreground/60">{lead.phone}</p> : null}
                    <p className="text-xs text-foreground/50">{lead.country}</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-foreground">{lead.experienceTitle}</p>
                    <p className="text-xs text-foreground/50">{lead.region}</p>
                  </td>
                  <td className="px-4 py-4 text-xs text-foreground/70">
                    {lead.preferredTravelDate ?? "—"}
                    {lead.flexibleDates ? " (flexible)" : ""}
                  </td>
                  <td className="px-4 py-4 text-xs text-foreground/70">
                    {lead.travellers.adults} adult{lead.travellers.adults === 1 ? "" : "s"}
                    {lead.travellers.children ? `, ${lead.travellers.children} child${lead.travellers.children === 1 ? "" : "ren"}` : ""}
                  </td>
                  <td className="px-4 py-4">
                    <LeadStatusSelect id={lead.id} status={lead.status} />
                  </td>
                  <td className="min-w-[220px] px-4 py-4">
                    <LeadNotes id={lead.id} notes={lead.notes} />
                  </td>
                  <td className="px-4 py-4 text-xs text-foreground/50">{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-sm text-foreground/50">
                    No leads match these filters.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
