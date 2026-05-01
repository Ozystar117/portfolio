# Emmanuel Ozioma — Developer Portfolio

Personal portfolio built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**, and **Vercel Analytics**. Content is typed and lives under [`data/`](data/) for easy updates.

## Prerequisites

- Node.js 22+ (CI uses 22; 20+ should work)
- npm

## Local development

```bash
npm install
cp .env.example .env.local
# Edit NEXT_PUBLIC_SITE_URL and optional Resend keys — see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Dev server                           |
| `npm run build`  | Production build                     |
| `npm run start`  | Run production build locally         |
| `npm run lint`   | ESLint                               |
| `npm run typecheck` | TypeScript (`tsc --noEmit`)      |
| `npm run format` | Prettier (Tailwind class sorting)    |

## Updating content

Edit the files in [`data/`](data/):

| File                 | Purpose                          |
| -------------------- | -------------------------------- |
| `data/profile.ts`    | Name, headline, links, summary   |
| `data/experience.ts` | Roles and bullets                |
| `data/projects.ts`   | Featured projects & placeholders   |
| `data/skills.ts`     | Skill groups                     |
| `data/certifications.ts` | Certificates               |
| `data/awards.ts`     | Awards                           |
| `data/testimonials.ts` | Quotes & LinkedIn links       |

Replace `public/cv/emmanuel-ozioma-cv.pdf` when your CV changes. Optional headshot: add `public/images/avatar.jpg` and swap the initials block in [`components/sections/Hero.tsx`](components/sections/Hero.tsx).

## Environment variables

See [`.env.example`](.env.example).

| Variable                 | Required | Description                                      |
| ------------------------ | -------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`   | Yes\*    | Canonical URL for metadata, sitemap, OG (\*defaults to `https://emmanuelozioma.dev`) |
| `RESEND_API_KEY`         | No       | Enables email sending from the contact form      |
| `RESEND_FROM_EMAIL`      | No       | Verified sender in Resend (test: onboarding address) |
| `CONTACT_TO_EMAIL`       | No       | Inbox for contact submissions (defaults to profile email) |

Without `RESEND_API_KEY`, the contact API returns a **mailto fallback** so visitors can still reach you.

## Deploy to GitHub + Vercel

1. **Create a GitHub repository** (e.g. `emmanuel-ozioma/portfolio`).
2. **Push this project** (remote `origin` → your repo):

   ```bash
   git remote add origin git@github.com:YOUR_USER/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Import the repo in Vercel**: [vercel.com/new](https://vercel.com/new) → select the repo → Framework Preset: Next.js → Deploy.

4. **Environment variables** in Vercel → Project → Settings → Environment Variables: copy from `.env.example` (at minimum `NEXT_PUBLIC_SITE_URL` with your production domain).

5. **Custom domain**: add your domain in Vercel → Domains, then set DNS as instructed (often `A`/`CNAME` to Vercel).

GitHub Actions runs **lint**, **typecheck**, and **build** on pushes and PRs to `main` (see [`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

## Licence

MIT © Emmanuel Ozioma
