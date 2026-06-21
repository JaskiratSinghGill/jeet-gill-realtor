# Jeet Gill Real Estate

Luxury real estate website for Jeet Gill, an Ontario realtor with HomeLife Miracle Realty in Brampton.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn-style UI components
- Framer Motion
- Resend-ready contact API

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Contact Form

The contact endpoint is `app/api/contact/route.ts`.

Set these environment variables in production:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=jeet11gill@gmail.com
CONTACT_FROM_EMAIL=Jeet Gill Website <noreply@yourdomain.com>
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Without `RESEND_API_KEY`, the form validates and returns a mock success response.
