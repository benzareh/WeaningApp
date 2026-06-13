-- Little Spoons — database schema
-- Run this once in your Supabase project: SQL Editor → New query → paste → Run.
--
-- One row per family. The whole app state (profile, plan, shopping ticks,
-- food diary, custom recipes, favourites) is stored as a single JSON document.
-- Row Level Security guarantees each family can only ever touch their own row.

create table if not exists public.family_data (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.family_data enable row level security;

-- A user may read only their own row.
create policy "read own family data"
  on public.family_data for select
  using (auth.uid() = user_id);

-- A user may create only their own row.
create policy "insert own family data"
  on public.family_data for insert
  with check (auth.uid() = user_id);

-- A user may update only their own row.
create policy "update own family data"
  on public.family_data for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
