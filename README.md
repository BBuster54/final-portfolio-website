This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Carbon Footprint Tracker demo

The build-free demo at `public/demos/carbon-footprint-tracker/` is generated from the canonical [Brandon-Projects calculator](https://github.com/BBuster54/Brandon-Projects-/tree/main/carbon-footprint-tracker).
Run `npm run sync` in that project's folder to update this copy. Its shared factors use a version, SHA-256 checksum and canonical commit recorded in `data/sync-manifest.json`.
Run `node scripts/check-carbon-sync.mjs` to verify the local copy against the exact canonical revision. GitHub Actions runs the same check.
The canonical repository contains Vitest, pytest, Lighthouse CI, methodology, source verification tasks and setup instructions. Security headers for the demo are defined in `next.config.ts`.
Review feature-branch Vercel previews before merging to main.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
