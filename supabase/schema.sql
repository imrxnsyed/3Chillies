-- ============================================================
-- 3 Chillies — Supabase schema
-- Run in Supabase → SQL Editor → New query → Run.
-- Then run seed.sql to load the 80 menu items.
-- ============================================================

create table if not exists public.menu_items (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  price      integer not null check (price >= 0),
  type       text not null check (type in ('veg','nonveg')),
  category   text not null,
  "desc"     text default '',
  img        text default '',
  created_at timestamptz default now()
);

create table if not exists public.reservations (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  phone      text not null,
  date       date,
  time       text,
  guests     text,
  occasion   text,
  notes      text,
  status     text default 'new',
  created_at timestamptz default now()
);

-- ------------------------------------------------------------
-- Row Level Security
-- For a quick launch: public read of the menu + public insert of
-- reservations, and (DEMO) public menu writes so the CRM works out
-- of the box. TIGHTEN before production: put the CRM behind Supabase
-- Auth and remove the public "menu_write" policy.
-- ------------------------------------------------------------
alter table public.menu_items   enable row level security;
alter table public.reservations enable row level security;

create policy "menu_read"  on public.menu_items   for select using (true);
create policy "menu_write" on public.menu_items   for all    using (true) with check (true);
create policy "res_insert" on public.reservations for insert with check (true);
-- create policy "res_read" on public.reservations for select using (auth.role() = 'authenticated');

-- If you created the table before the img column existed, run:
-- alter table public.menu_items add column if not exists img text default '';
