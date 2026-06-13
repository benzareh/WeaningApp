# Going public — Supabase setup

Little Spoons now supports private family accounts (email + password) with a
shared access code to gate sign-ups. The frontend stays on Vercel; Supabase
provides authentication and stores each family's data. Free tier easily covers
a few dozen families.

Follow these one-time steps.

## 1. Create a Supabase project

1. Go to https://supabase.com and sign in (free).
2. **New project** → give it a name (e.g. `little-spoons`), set a database
   password (save it somewhere), pick a region near your users, **Create**.
3. Wait ~2 minutes for it to provision.

## 2. Create the database table

1. In the project, open **SQL Editor** → **New query**.
2. Paste the contents of [`supabase/schema.sql`](supabase/schema.sql) and click
   **Run**. This creates the `family_data` table and the Row Level Security
   policies that keep each family's data private.

## 3. Configure auth

1. Go to **Authentication → Providers → Email** and make sure it's enabled.
2. **Email confirmation:** under **Authentication → Sign In / Providers** (or
   **Settings**), decide whether to require email confirmation:
   - **On** (default, recommended) — users click a link in their email before
     they can log in. More secure, prevents typo'd emails.
   - **Off** — users are logged in immediately after signing up. Smoother for a
     small trial, but make sure SMTP/email isn't needed.
   The app handles both cases automatically.

## 4. Get your API keys

1. **Project Settings → API**.
2. Copy the **Project URL** and the **anon public** key.

## 5. Add environment variables in Vercel

In your Vercel project → **Settings → Environment Variables**, add (for all
environments):

| Name | Value |
| --- | --- |
| `VITE_SUPABASE_URL` | your Project URL |
| `VITE_SUPABASE_ANON_KEY` | your anon public key |
| `VITE_SIGNUP_ACCESS_CODE` | a secret code you share with families |

Then **redeploy** (Deployments → ⋯ → Redeploy) so the build picks them up.

## 6. (Local dev) Add a `.env.local`

Copy `.env.example` to `.env.local` and fill in the same three values to run
`npm run dev` against your Supabase project.

## How it works

- Visitors land on the marketing page. **Get started** → `/login`.
- New families sign up with email, password, and the access code.
- On login the app loads that family's saved document; changes auto-save
  (debounced) back to Supabase.
- **Settings → Account** shows the signed-in email and a **Log out** button.
- If the Supabase env vars are absent, the app silently falls back to the
  old single-device localStorage mode, so local development still works
  without any backend.

## Notes & future hardening

- The access code is a client-side gate — good enough to keep strangers out of
  a private trial, but not a hard secret. The real protection is Row Level
  Security: even if someone signs up, they can only see their own data.
- When you outgrow the single-JSON-document model (e.g. you want shared recipes
  across families, or admin dashboards), the `family_data.data` JSON can be
  migrated into normalised tables without changing the app's store shape.
