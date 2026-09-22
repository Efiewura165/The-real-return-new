"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { updateLeadNotes, updateLeadStatus } from "@/lib/leads";
import { createClient } from "@/lib/supabase/server";
import type { TravelLead } from "@/types/experience";

/** Server Actions are independently callable POST endpoints — never rely solely on the page around them for auth. */
async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
}

export async function changeLeadStatus(id: string, status: TravelLead["status"]): Promise<void> {
  await requireAdmin();
  await updateLeadStatus(id, status);
  revalidatePath("/admin/leads");
}

export async function saveLeadNotes(id: string, notes: string): Promise<void> {
  await requireAdmin();
  await updateLeadNotes(id, notes);
  revalidatePath("/admin/leads");
}
