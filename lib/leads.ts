import type { TravelLead } from "@/types/experience";

/**
 * Phase 1: no database is configured yet, so a lead is simply logged in a
 * structured, greppable form. This is the only function a future database
 * integration needs to touch — nothing else in the registration flow
 * depends on how a lead is persisted.
 */
export async function saveLead(lead: TravelLead): Promise<void> {
  // TODO: swap this for a real database write (e.g. Supabase/Postgres) once one is configured.
  console.log("[lead:new]", JSON.stringify(lead));
}
