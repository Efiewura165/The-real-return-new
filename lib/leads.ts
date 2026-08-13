import type { TravelLead } from "@/types/experience";
import { createServiceClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";

interface LeadRow {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  whatsapp: string | null;
  country: string;
  experience_id: string;
  experience_title: string;
  preferred_travel_date: string | null;
  flexible_dates: boolean;
  adults: number;
  children: number;
  interests: string[];
  travel_style: string[];
  message: string | null;
  notes: string | null;
  status: TravelLead["status"];
  created_at: string;
  updated_at: string;
}

function rowToLead(row: LeadRow): TravelLead & { notes?: string } {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone ?? undefined,
    whatsapp: row.whatsapp ?? undefined,
    country: row.country,
    experienceId: row.experience_id,
    experienceTitle: row.experience_title,
    preferredTravelDate: row.preferred_travel_date ?? undefined,
    flexibleDates: row.flexible_dates,
    travellers: { adults: row.adults, children: row.children, total: row.adults + row.children },
    interests: row.interests,
    travelStyle: row.travel_style,
    message: row.message ?? undefined,
    notes: row.notes ?? undefined,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/**
 * Phase 1 fallback: without Supabase configured, a lead is simply logged in a
 * structured, greppable form so nothing is silently lost. Once
 * NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are set,
 * leads persist for real and the admin dashboard can read them.
 */
export async function saveLead(lead: TravelLead): Promise<void> {
  if (!isSupabaseConfigured()) {
    console.log("[lead:new]", JSON.stringify(lead));
    return;
  }

  const supabase = createServiceClient();
  const { error } = await supabase.from("leads").insert({
    id: lead.id,
    name: lead.name,
    email: lead.email,
    phone: lead.phone ?? null,
    whatsapp: lead.whatsapp ?? null,
    country: lead.country,
    experience_id: lead.experienceId,
    experience_title: lead.experienceTitle,
    preferred_travel_date: lead.preferredTravelDate ?? null,
    flexible_dates: lead.flexibleDates ?? false,
    adults: lead.travellers.adults,
    children: lead.travellers.children,
    interests: lead.interests,
    travel_style: lead.travelStyle,
    message: lead.message ?? null,
    status: lead.status,
    created_at: lead.createdAt,
    updated_at: lead.updatedAt,
  });

  if (error) {
    console.error("[lead:save] Failed to persist lead to Supabase, falling back to log", error);
    console.log("[lead:new]", JSON.stringify(lead));
  }
}

export async function getLeads(): Promise<(TravelLead & { notes?: string })[]> {
  if (!isSupabaseConfigured()) return [];

  const supabase = createServiceClient();
  const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("[lead:list] Failed to fetch leads from Supabase", error);
    return [];
  }

  return (data as LeadRow[]).map(rowToLead);
}

export async function updateLeadStatus(id: string, status: TravelLead["status"]): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;

  const supabase = createServiceClient();
  const { error } = await supabase.from("leads").update({ status }).eq("id", id);

  if (error) {
    console.error("[lead:update-status] Failed", error);
    return false;
  }
  return true;
}

export async function updateLeadNotes(id: string, notes: string): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;

  const supabase = createServiceClient();
  const { error } = await supabase.from("leads").update({ notes }).eq("id", id);

  if (error) {
    console.error("[lead:update-notes] Failed", error);
    return false;
  }
  return true;
}
