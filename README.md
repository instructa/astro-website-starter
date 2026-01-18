# astro-website-starter

Astro starter template for shadcn/ui Base, Tailwind CSS v4, and Alchemy on Cloudflare Workers.

## Features
- Astro SSR + Cloudflare Workers via Alchemy
- Tailwind CSS v4 with Vite plugin + tokenized theme
- shadcn/ui Base (Nova) components wired for Astro + React
- Clean aliasing + utils (`@/components`, `@/lib`)
- Production-first defaults, minimal moving parts

## Quickstart
- pnpm install
- cp .env.example .env
- set `ALCHEMY_PASSWORD`
- pnpm exec alchemy login
- pnpm run dev

## Deploy
- pnpm run deploy
- pnpm run destroy

## shadcn/ui
- config: components.json
- add components: pnpm dlx shadcn@latest add button

## Notes
- Astro adapter: alchemy/cloudflare/astro
- `alchemy.run.ts` provisions worker and prints URL
