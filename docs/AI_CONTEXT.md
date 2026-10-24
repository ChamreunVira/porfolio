## Project Context

- This is a Next.js App Router portfolio project using React 19, TypeScript, Tailwind CSS 4, and shadcn/ui conventions.
- The package manager is Bun (`bun.lock` and `packageManager: bun@1.3.14`).
- Application code lives in `app/`; reusable UI lives in `components/`; portfolio content and types live in `data/portfolio.ts` and `types/index.ts`; shared utilities and assets live in `utils/` and `public/assets/`.
- Global styling and design tokens are defined in `app/globals.css`.
- Use the root `utils/` directory for utilities and preserve the current project structure.
- The homepage is an editorial neo-brutalist single-page portfolio composed from `Navbar`, `SectionHeading`, and `ProjectCard`. It uses the supplied profile photos, the controlled `MobileNav`, CSS-only motion with reduced-motion support, and no external font/network dependency.
- Project content is centralized in `data/portfolio.ts` with four IDs: `journal-academic-platform`, `ecommerce`, `khmer-social`, and `bacii-calculator`. Each project owns its cover image and complete local gallery from `public/assets/projects/`; optional `sourceUrl` values render verified GitHub source actions.
- The Journal Academic Platform uses `journal_preview.png`, `journal_01.png`, `journal_03.png`, and `journal_04.png`; its configured live URL is `https://journal-academic.vercel.app` and is shown on both the project card and detail page.
- `/projects/[id]` renders static project detail pages with shared metadata, previous/next project links, and the client-side `ProjectGallery`. Galleries support horizontal wheel/trackpad scrolling, pointer dragging, touch swiping, and accessible previous/next controls.
- `public/assets/cv/Chamreun_Vira_Backend_Developer_Intern_CV.pdf` is the source of truth for the About section: Backend Developer Intern role, RUPP Computer Science studies, Academic Journal Teaching Assistant experience, skills, certifications, contact details, and Phnom Penh location. Keep portfolio copy aligned with that CV unless a newer source is supplied.
- The homepage keeps only a concise About preview and links to `/about`. The full CV content is rendered by `components/AboutTimeline.tsx` on that route: experience and education are separate vertical timeline sections, and the detailed role description is behind a native accessible `<details>` disclosure.
- `SectionHeading` accepts an optional `titleId` so homepage section landmarks reference their actual `h2` elements. The desktop project grid keeps the “more work” note as a full-width final row.
- The homepage toolkit is a compact responsive category grid rendered by `components/SkillsPanel.tsx`; `portfolio.skillGroups` separates Programming, Backend, Databases, and Tools & DevOps, with local skill-specific SVG brand marks and wrapped skill cards. Keep this section concise without category descriptions.
- The homepage ticker uses two identical visual sequences and animates from `translateX(0)` to `translateX(-50%)` for a seamless loop. The moving track is `aria-hidden`, while one screen-reader-only sentence describes the themes; the wrapper pauses the track on hover and keyboard focus.
- UI component styling is Tailwind utility-first: homepage, navigation, project cards/details/gallery, About timeline, certificate viewer, and skills use JSX utility classes for layout, responsive behavior, interaction states, and motion. `Reveal` uses `IntersectionObserver` to animate selected content once on viewport entry while remaining visible if JavaScript or motion initialization fails. `app/globals.css` remains limited to imports, theme variables, base browser behavior, and the `nudge`, `intro-in`, and `ticker` keyframes.
- The hero image's vertical `01 / hello` label preserves the original `rotate(-90deg) translateX(-100%)` transform order through a Tailwind arbitrary transform; project card content uses vertical auto margins only so title/description sizing is not horizontally constrained.
- Project detail headings constrain long or unbroken titles to their copy column so they cannot be covered by the adjacent preview image. The Ecommerce detail links to `https://github.com/ChamreunVira/ecommerce-web` as its source repository.
- Interactive motion is CSS-based and reduced-motion safe: staggered hero entrance motion, one-time `Reveal` transitions, ticker pause on hover/focus, skill-card lift states, image hover scale, heading movement, animated mobile navigation, and pressed button feedback. Project cards use `:focus-within` so keyboard focus receives the same lift treatment as pointer hover.
- `/about` also renders `components/CertificateViewer.tsx` from `data/portfolio.ts` certificate assets. Certificates display as a normal grid; clicking one opens a zoom modal with zoom controls, backdrop/Escape close behavior, and responsive mobile layout.
- Verified profile content is intentionally limited to the supplied name/images, the CV, the reference site URL, the public `ChamreunVira` GitHub handle, the named projects, and local project assets.
- Root metadata uses `https://virachamreun.vercel.app` as its valid `metadataBase`, with the portfolio title `Chamreun Vira | Backend Developer Portfolio`; `app/icon.svg` provides the App Router favicon.
- SEO also includes Person/WebSite JSON-LD in the root layout, explicit canonicals for `/about` and project pages, and generated `robots.txt` plus a sitemap covering every portfolio route.
- `next.config.ts` uses the webpack type-check path (`experimental.useTypeScriptCli: false`) because this environment cannot parse the TypeScript CLI output during `next build`; keep the explicit `rtk proxy npm run build -- --webpack` verification path documented below.
- `vercel.json` declares the deployment as Next.js and uses Bun install/build commands; do not configure Vercel's Output Directory as `dist`.

## Validation

- Development server: `bun run dev`
- Lint: `bun run lint`
- TypeScript: `bunx tsc --noEmit`
- Production build: `bun run build`
- Verified production build in this environment: `rtk proxy npm run build -- --webpack`
- Verified lint, TypeScript, diff check, and webpack production build after the motion update; the build generated all static portfolio routes successfully.
- The default Turbopack build is currently blocked by an environment permission error while CSS processing tries to bind to a port.

## Maintenance Rules

- Update this file after each completed task when durable project knowledge, conventions, validation results, or follow-up work changes.
- Keep this document concise and current; do not use it as a chronological change log.
- Never add secrets or credentials.
