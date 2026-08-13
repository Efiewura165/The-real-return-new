"use client";

import { useState, useTransition } from "react";

import { changeLeadStatus } from "@/app/admin/leads/actions";
import type { TravelLead } from "@/types/experience";

const STATUSES: TravelLead["status"][] = ["new", "contacted", "planning", "quoted", "booked", "completed", "lost"];

export function LeadStatusSelect({ id, status }: { id: string; status: TravelLead["status"] }) {
  const [value, setValue] = useState(status);
  const [pending, startTransition] = useTransition();

  return (
    <select
      value={value}
      disabled={pending}
      onChange={(e) => {
        const next = e.target.value as TravelLead["status"];
        setValue(next);
        startTransition(() => {
          changeLeadStatus(id, next);
        });
      }}
      className="h-9 rounded-sm border border-border bg-background px-2 text-xs uppercase tracking-[0.1em] text-foreground outline-none focus:border-gold disabled:opacity-60"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
