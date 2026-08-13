"use client";

import { useState, useTransition } from "react";

import { saveLeadNotes } from "@/app/admin/leads/actions";

export function LeadNotes({ id, notes }: { id: string; notes?: string }) {
  const [value, setValue] = useState(notes ?? "");
  const [saved, setSaved] = useState(true);
  const [pending, startTransition] = useTransition();

  return (
    <div className="space-y-2">
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSaved(false);
        }}
        rows={2}
        placeholder="Internal notes…"
        className="w-full rounded-sm border border-border bg-background px-3 py-2 text-xs leading-5 text-foreground outline-none focus:border-gold"
      />
      <button
        type="button"
        disabled={pending || saved}
        onClick={() =>
          startTransition(async () => {
            await saveLeadNotes(id, value);
            setSaved(true);
          })
        }
        className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold disabled:text-foreground/30"
      >
        {pending ? "Saving…" : saved ? "Saved" : "Save note"}
      </button>
    </div>
  );
}
