# Vergina Sharley MS Portfolio

Modern 3D portfolio for Vergina Sharley MS, focused on digital marketing strategy, case studies, and career journey storytelling.

## Live Domains

- Primary: [https://verginasharley.me](https://verginasharley.me)
- Alternate: [https://verginasharley.vercel.app](https://verginasharley.vercel.app)

## Highlights

- Interactive 3D experience built with React Three Fiber and GSAP.
- Responsive case-study system using MDX and slug routes.
- Clean SEO setup for production domain indexing.
- Career timeline and project cards tuned for readable typography across devices.

## Tech Stack

- Next.js 16.2.1
- React 19
- TypeScript
- @react-three/fiber + @react-three/drei
- GSAP
- Zustand
- Tailwind CSS
- MDX via @next/mdx

## Project Routes

- Home: `/`
- Case Studies Index: `/case-studies`
- Case Study Detail: `/case-studies/[slug]`

Example:

- `/case-studies/hospitality-creator-collab`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Case Study Authoring

- MDX content lives in `app/case-studies/content/*.mdx`
- Case-study metadata mapping lives in `app/case-studies/caseStudies.ts`
- Slug route rendering lives in `app/case-studies/[slug]/page.tsx`

## SEO Notes

- Primary canonical domain is `verginasharley.me`
- Sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt`

## About the Content

Case studies are written as practical execution notes focused on strategy, process, and outcomes. Confidential client data and inflated claims are intentionally excluded.

