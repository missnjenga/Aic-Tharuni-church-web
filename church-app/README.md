# Church Website & App

A multi-page church website with a TypeScript React frontend and a
TypeScript Express backend. Includes M-Pesa (Daraja STK push) giving,
a categorized photo gallery, and content sections for service times,
weekly fellowships, and church leadership.

## Structure

```
church-app/
  frontend/   Vite + React + TypeScript + Tailwind CSS (multi-page, react-router)
  backend/    Node + Express + TypeScript API (M-Pesa, gallery, content)
```

## Pages

- **Home** — hero banner, order of service, weekly fellowships, about-us
  preview, "new to church" info, map.
- **Give** — M-Pesa giving form (STK push prompt to the giver's phone).
- **Gallery** — general church photos plus filterable sections for
  Leaders, Women, Men, Youth, and Church School, grouped by event.
- **Who We Are** — mission, story, leadership, and app download links.

Navbar (Home / Give / Gallery / Who We Are) and footer (social links,
"what to expect" link) appear on every page.

## Getting started

### 1. Backend

```bash
cd backend
cp .env.example .env   # then fill in your Daraja (M-Pesa) credentials
npm install
npm run dev             # http://localhost:4000
```

M-Pesa credentials come from the [Safaricom Daraja developer portal](https://developer.safaricom.co.ke).
Use the sandbox shortcode/passkey while testing, and set `MPESA_CALLBACK_URL`
to a publicly reachable URL (e.g. via ngrok in development) so Safaricom can
notify your backend when a payment completes.

### 2. Frontend

```bash
cd frontend
cp .env.example .env    # defaults to the dev proxy, no changes needed locally
npm install
npm run dev              # http://localhost:5173
```

The Vite dev server proxies `/api/*` to the backend on port 4000 (see
`vite.config.ts`), so both can run side by side during development.

## Replacing placeholders

- **Images**: every photo slot (logo, hero background, gallery photos,
  leader portraits) currently renders as a labeled placeholder box via
  `frontend/src/components/ImagePlaceholder.tsx`. Once you have real
  images, either pass a `src` prop through, or swap the component usage
  for a plain `<img>` tag.
- **Map**: `frontend/src/components/MapSection.tsx` has a commented-out
  Google Maps `<iframe>` — paste in your church's real "Embed a map" URL.
- **Content**: service times, weekly fellowships, leadership bios, and
  the mission/story text live in `backend/src/data/content.ts` and
  `backend/src/data/gallery.ts` — edit these directly, or wire them up
  to a database/CMS later without changing the API shape.
- **App download links**: update the two `href="#"` buttons in
  `frontend/src/pages/WhoWeAre.tsx` with real App Store / Play Store URLs.
- **Social links**: update the URLs in `frontend/src/components/Footer.tsx`.

## Notes on the M-Pesa integration

The backend wraps Safaricom's Daraja **Lipa Na M-Pesa Online (STK Push)**
API: `backend/src/services/mpesaService.ts` handles OAuth token caching
and building the STK push request; `backend/src/controllers/mpesaController.ts`
validates input and exposes `POST /api/mpesa/stkpush`. Safaricom calls
`POST /api/mpesa/callback` once the user approves or cancels the prompt —
that handler currently just logs the payload; persist it (e.g. to a
database) if you want the frontend to poll for payment status.
