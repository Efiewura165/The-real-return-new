"use server";

import { revalidatePath } from "next/cache";

import { updateLeadNotes, updateLeadStatus } from "@/lib/leads";
import type { TravelLead } from "@/types/experience";

export async function changeLeadStatus(id: string, status: TravelLead["status"]): Promise<void> {
  await updateLeadStatus(id, status);
  revalidatePath("/admin/leads");
}

export async function saveLeadNotes(id: string, notes: string): Promise<void> {
  await updateLeadNotes(id, notes);
  revalidatePath("/admin/leads");
}
