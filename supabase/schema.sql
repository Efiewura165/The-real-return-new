-- The Real Return™ — leads table
-- Run this once in your Supabase project's SQL editor (Project → SQL Editor → New query).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  email text not null,
  phone text,
  whatsapp text,
  country text not null,

  experience_id text not null,
  experience_title text not null,

  preferred_travel_date text,
  flexible_dates boolean default false,

  adults integer not null default 1,
  children integer not null default 0,

  interests text[] not null default '{}',
  travel_style text[] not null default '{}',

  message text,
  notes text,

  status text not null default 'new' check (status in ('new', 'contacted', 'planning', 'quoted', 'booked', 'completed', 'lost')),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_experience_id_idx on public.leads (experience_id);

-- Row Level Security: no public policies. All reads/writes go through server-side
-- code using the service role key (see lib/supabase/server.ts createServiceClient()),
-- which bypasses RLS entirely. This keeps lead PII unreachable from the browser
-- even if the anon key were ever exposed.
alter table public.leads enable row level security;

-- Keep updated_at current on every row change.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row
  execute function public.set_updated_at();
