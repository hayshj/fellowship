# Fellowship Church — Next.js Vercel deployment

This is an isolated Next.js 16 App Router migration of the existing Fellowship
Church MERN application. It preserves the existing public routes, styling,
assets, same-origin API paths, MongoDB models, admin bearer-token behavior,
ChurchTeams scraping, email forms, and sermon management.

## Local development

1. Copy `.env.example` to `.env.local` and fill in the required server values.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

The MongoDB URI and all credentials must remain server-only. Only the optional
PostHog variables use the `NEXT_PUBLIC_` prefix.

## Vercel

Import the repository and use these project settings:

- Framework Preset: **Next.js**
- Root Directory: **next-vercel**
- Build Command: default
- Output Directory: default

Add the variables from `.env.example` in Vercel Project Settings. At minimum,
the complete application needs `MONGODB_URI`, `JWT_SECRET`, and `CRON_SECRET`.
Email variables are needed for form delivery; PostHog variables are optional.

The included `vercel.json` exists only to preserve the original Sunday sermon
schedule. Vercel cron uses UTC, so it invokes the protected route at both
possible daylight-saving offsets; the route performs work only at 1 PM in
America/Chicago and refuses duplicate sermon dates.

## MongoDB Atlas

Use the same database name in `MONGODB_URI` as the self-hosted application.
Atlas must permit connections from Vercel. A broad Atlas network access rule is
the simplest setup but has a larger security surface; Vercel Secure Compute or
another controlled egress option is preferable when available.

## Platform notes

- The application never calls the home server or `fellowshiprc.com` for its own
  APIs. All frontend requests remain relative `/api/*` requests.
- The original admin flow stores a one-day JWT in browser `localStorage`; this
  behavior is intentionally preserved rather than replaced with cookies.
- ChurchTeams, YouTube, bulletin scraping, and SMTP remain external
  dependencies and can fail independently of Vercel.
- The original maintenance scripts that read downloaded HTML files remain in
  the MERN project. They are manual utilities and are not run during Next.js
  builds or requests.
- No runtime upload or persistent local-file write path exists in the current
  request handlers.
