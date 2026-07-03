# 3 Chillies — Restaurant Website (Next.js)

A modern, animated, **multi-page** website for **3 Chillies**, an Indo-Chinese restaurant in Banjara Hills, Hyderabad. Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Menu and reservations are backed by **Supabase**, with a full offline fallback.

## Pages

Each area of the site is its own route:

- `/` — home: cinematic hero + highlights + call-to-action
- `/menu` — full menu with veg/non-veg filter, search, and quick-add cart
- `/about` — the story & ambience
- `/gallery` — food & dining-room photos
- `/reservations` — table booking (Supabase + WhatsApp)
- `/reviews` — guest reviews
- `/contact` — address, hours, map
- `/admin` — hidden CRM (login-gated, not linked publicly)

## Features

- **Warm, inviting design** — ivory & cream palette with terracotta-red accents, serif display type, and a photographic hero with a warm espresso overlay.
- **Motion throughout** — scroll reveals, pointer-tilt cards with a warm glare, rising steam over dishes, animated nav underline, and a running dish marquee (Framer Motion).
- **Photo menu** — every dish card has a food photo (per-dish `img` from the CRM/Supabase, else an automatic Unsplash photo by dish/category, with an emoji fallback if offline), plus sticky category nav, veg / non-veg filter, live search and quick-add.
- **Cart drawer** — animated, with a **live running total** and one-tap **WhatsApp checkout**.
- **Reservations** — booking form saved to Supabase, plus instant WhatsApp booking.
- **Reviews & gallery**, hours and an embedded map.
- **Hidden admin CRM** at `/admin` — behind a **login gate**, not linked anywhere public. Add / edit / remove dishes and prices; changes go live instantly.

## Run it

Requires Node 18+.

```bash
cd 3Chillies
npm install
npm run dev
# open http://localhost:3000
```

Build for production: `npm run build` then `npm start`.

## The admin CRM

Go to **http://localhost:3000/admin** (there is intentionally **no link** to it from the public site). You'll get a login screen. Default credentials:

```
username: admin
password: 3chillies
```

Change these in `.env.local` (`NEXT_PUBLIC_ADMIN_USER` / `NEXT_PUBLIC_ADMIN_PASS`). The session lasts until you close the tab or hit **Logout**.

> ⚠️ **Security note:** this is a **client-side gate** — good enough for a private demo, but the password ships in the browser bundle. For real staff access, upgrade to **Supabase Auth** (email + password) so the credential is verified on the server. The data layer is already structured to make that swap straightforward.

## Connect Supabase (live, multi-device)

Without keys the app runs in **demo mode**: the 80-dish menu loads from `lib/menuData.js` and cart/menu/reservation changes save to the browser. To go live:

1. Create a project at <https://supabase.com>.
2. **SQL Editor → New query** → run `supabase/schema.sql`, then run `supabase/seed.sql`.
3. **Project Settings → API** → copy the **Project URL** and **anon public** key.
4. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://YOURPROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
   ```
5. Restart `npm run dev`. The CRM badge turns green (**Supabase**) and everything syncs to the cloud.

## Add your photos

The gallery uses emoji placeholders until you add images. Drop files into **`/public`** with these names and they appear automatically:

```
public/food-1.jpg … food-6.jpg
public/dining.jpg
```

Replace `public/logo.svg` with your official artwork if you have it.

## Project structure

```
3Chillies/
├── app/
│   ├── layout.jsx         Root layout + fonts
│   ├── page.jsx           Home (all customer sections)
│   ├── globals.css        Tailwind + custom animations
│   └── admin/page.jsx     Hidden CRM route (/admin)
├── components/
│   ├── Navbar, Footer, Logo, CartDrawer, Toaster
│   ├── three/ChiliScene.jsx      3D hero (R3F)
│   ├── motion/                   Reveal, TiltCard, Steam
│   ├── sections/                 Hero, Marquee, Menu, About, Reservation, Reviews, Gallery, Contact
│   └── admin/AdminApp.jsx        Login gate + CRM dashboard
├── lib/
│   ├── menuData.js        80-dish seed + restaurant details
│   ├── supabaseClient.js  Client (only when configured)
│   ├── store.js           Data layer (Supabase ↔ localStorage)
│   ├── cartStore.js       Cart state (Zustand, persisted)
│   └── toastStore.js
├── supabase/
│   ├── schema.sql         Tables + RLS policies
│   └── seed.sql           80 menu items
├── public/logo.svg
└── .env.local.example
```

## Customising

- **Menu & prices:** use the CRM at `/admin` — no code needed. Or edit `lib/menuData.js` for defaults.
- **Restaurant details / WhatsApp number:** `RESTAURANT` in `lib/menuData.js`.
- **Colours, fonts, animations:** `tailwind.config.js` and `app/globals.css`.
