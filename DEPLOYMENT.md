# Deployment configuration

## Vercel project settings

Import this repository with the repository root as Vercel's **Root Directory**.
Vercel detects the exported Express application in `app.js`. The root `build`
script builds the Vite frontend into `public/`, which Vercel serves as static
assets. Do not set a separate frontend root or output directory.

No `vercel.json` is needed: `app.js` is a recognized Express entry point, the
Express routes handle `/api/*`, and the non-API fallback serves the React SPA
for direct browser requests.

Configure these server-side environment variables in Vercel:

- `MONGODB_URI` (required): MongoDB Atlas connection string. In Atlas, allow
  connections from Vercel's runtime or use an appropriate secure networking
  option.
- `JWT_SECRET` (required): long, random secret used to sign admin sessions.
- `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_TO` (required only for contact and
  serve-form email delivery).
- `SMTP_HOST` and `SMTP_PORT` (optional): default to `smtp.mail.me.com` and
  `587`.
- `VITE_PUBLIC_POSTHOG_KEY` and `VITE_PUBLIC_POSTHOG_HOST` (optional): public
  analytics settings embedded in the frontend build.

Do not configure `API_BASE_URL`, `VITE_API_BASE_URL`, or
`REACT_APP_API_BASE_URL`. The browser uses same-origin `/api/*` URLs, so each
Vercel deployment talks to its own backend and does not depend on
`fellowshiprc.com` or the home server.

`MONGO_URI` remains a deprecated server-side compatibility alias so an existing
self-hosted environment does not break immediately. Rename it to
`MONGODB_URI`; if both exist, `MONGODB_URI` is used. Never prefix a MongoDB URI
with `VITE_` or `REACT_APP_`, because those prefixes expose values to browser
code.

## Self-hosted operation

Build and start the combined app from the repository root:

```sh
npm run build
npm start
```

`PORT` defaults to `3001`. The self-hosted process also schedules the Sunday
sermon import. That job uses `ADMIN_USERNAME` and `ADMIN_PASSWORD` and calls the
same Express process over loopback; it does not use the public domain.

The in-process `node-cron` schedule intentionally runs only for the long-lived
self-hosted server. Importing `app.js` on Vercel neither opens a port nor starts
a background scheduler.
