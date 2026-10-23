# Build a New Neo-Brutalist Developer Portfolio from Scratch

## Project Overview

Build a brand-new developer portfolio website inspired by my existing portfolio:

Reference website: https://vira-web-dev.vercel.app/

The reference website represents my personal brand, developer background, technical skills, experience, and projects. Use it to understand the existing concept and the type of content I want to showcase.

**Important:** This is a new project, not a redesign of the existing website. Do not modify the original project. Create a new application with its own structure, implementation, and visual identity.

The new website should preserve the core concept of my portfolio while introducing a distinctive Neo-brutalist design.

## 1. Inspect the Reference and Understand the Concept

Before implementation:

1. Visit and inspect the reference website.
2. Identify its purpose, content sections, navigation, personal branding, projects, skills, experience, and contact information.
3. Use accessible source code or existing project files if provided. Do not assume information that cannot be verified.
4. If the website cannot be accessed, ask me to provide screenshots or relevant source files before inventing personal content.
5. Create a short implementation plan before writing substantial code.

Use the reference for its content and purpose, not as a template to copy visually.

Preserve verified personal information, project descriptions, actual technologies, and working external links. Do not invent work experience, achievements, testimonials, metrics, or project details.

## 2. Technology Stack

Use the following stack for the new application:

- **Next.js** — App Router
- **TypeScript** — strict type safety
- **Tailwind CSS** — styling and responsive layouts
- **shadcn/ui** — reusable, accessible UI components
- **Lucide React** — consistent iconography
- **Motion for React** — subtle, purposeful animations when needed

Use the versions compatible with the current project environment and official documentation.

Do not introduce a backend, database, authentication system, or unnecessary state-management library unless a real requirement justifies it.

## 3. Design Direction: Neo-Brutalism

Create a bold, modern, expressive developer portfolio with a clear visual identity.

The design should combine:

- Neo-brutalist visual elements
- Strong typography and editorial layouts
- Bright colors against a warm neutral background
- Thick black borders and hard offset shadows
- Playful details balanced with professional presentation
- Interactive elements that feel responsive and intentional

The result should look like a carefully designed developer portfolio, not a generic AI-generated landing page.

### Color palette

Use these design tokens as the starting point:

- Cream background: `#FFF8E7`
- Near-black foreground: `#171717`
- Bright yellow: `#FFD84D`
- Pink: `#FF8FAB`
- Sky blue: `#7DD3FC`
- Lime green: `#B7F397`
- White: `#FFFFFF`

Use cream and black as the foundation. Apply yellow, pink, blue, and green selectively to project cards, badges, buttons, highlighted text, and decorative elements.

Maintain sufficient text contrast and visual hierarchy.

### Borders, shadows, and shapes

- Use approximately 2px solid black borders.
- Use hard-edged offset shadows on important cards and buttons.
- Prefer small corner radii, generally no more than `6px`.
- Use simple geometric decorations, stickers, stars, and outlined shapes sparingly.
- Avoid excessive gradients, glassmorphism, soft blurry shadows, and unnecessary rounded-pill components.

### Typography

Use bold, expressive headlines paired with readable body text.

- Establish a strong heading hierarchy.
- Make the hero headline visually distinctive.
- Use consistent typography across all sections.
- Keep paragraphs and technical information easy to scan.
- Choose fonts that support all languages used by the site.

## 4. Portfolio Sections

Build the sections that are appropriate to the verified reference content.

### A. Navigation

Create a compact, responsive navigation bar with links to the main sections.

Include a recognizable personal brand, smooth section navigation, and a clear contact action.

Use a mobile-friendly navigation menu.

### B. Hero Section

Create a memorable first impression.

Include verified personal information such as:

- My name
- Professional role or developer identity
- A concise introduction
- Primary action to explore my projects
- Secondary action to contact me or view my résumé
- Relevant social links

Use oversized typography, bold color blocks, and carefully positioned geometric decorations.

Do not use generic marketing copy that misrepresents my experience.
o website inspired by my existing portfolio:

Reference website: https://vira-web-dev.vercel.app/

The reference website represents my personal brand, developer background, technical skills, experience, and projects. Use it to understand the existing concept and the type of content I want to showcase.

**Important:** This is a new project, not a redesign of the existing website. Do not modify the original project. Create a new application with its own structure, implementation, and visual identity.

The new website should preserve the core concept of my portfolio while introducing a distinctive Neo-brutalist design.

## 1. Inspect the Reference and Understand the Concept

Before implementation:

### C. About Me

Present my background, interests, development approach, and professional goals using the available reference content.

Use an editorial layout with strong headings and concise paragraphs.

### D. Technical Skills

Organize my verified skills into meaningful groups, such as:

- Programming languages
- Frontend development
- Backend development
- Databases
- Developer tools and infrastructure

Use compact, reusable skill components. Avoid arbitrary proficiency percentages or unsupported skill ratings.

### E. Projects

Make the project showcase one of the strongest sections.

Each project card should support:

- Project title
- Short, accurate description
- Relevant technology badges
- Project image or screenshot when available
- Live demo link when available
- Source repository link when available

Use a visually varied grid with selected cards featuring yellow, pink, or blue backgrounds, black outlines, and hard shadows.

Ensure project cards remain readable and consistent even when descriptions vary in length.

Do not invent project URLs, screenshots, or repository links.

### F. Experience and Education

Present verified professional experience, education, and relevant achievements in a clean timeline or structured layout.

Emphasize responsibilities and meaningful contributions without exaggerating them.

### G. Contact Section

Create a bold closing section with a clear invitation to connect.

Include verified contact details and social links where available.

If a contact form is included, implement appropriate validation and a real submission mechanism. Do not present a nonfunctional form as working.

### H. Footer

Include my personal brand, relevant navigation, social links, and a dynamically calculated copyright year.

## 5. Interactions and Motion

Implement purposeful interactions throughout the website:

- Smooth navigation between sections
- Subtle entrance animations
- Small hover translations on cards
- Pressed states for buttons with offset shadows
- Interactive project links and technology badges
- Accessible focus and keyboard states

Respect `prefers-reduced-motion`.

Avoid excessive animation, distracting parallax, unnecessary cursor effects, and animations that reduce readability or performance.

## 6. Architecture and Code Quality

Use a clean, reusable project structure appropriate for Next.js App Router.

Suggested structure:

```text
src/
├── app/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ContactSection.tsx
│   ├── ProjectCard.tsx
│   └── ui/
├── data/
└── context/
└── types/
└── lib/
└── utils/
└── constant/
```

Adapt this structure when necessary. Do not create empty files or unnecessary abstractions.

Implementation rules:

- Keep reusable content separate from presentation where appropriate.
- Define explicit TypeScript types for project and portfolio data.
- Avoid `any`.
- Reuse shadcn/ui components when they provide value.
- Centralize design tokens instead of duplicating styling.
- Use semantic HTML and accessible components.
- Prefer Server Components unless client-side interaction is required.
- Use optimized images and avoid layout shifts.
- Keep dependencies minimal.

## 7. Responsive Design

Support mobile, tablet, laptop, and desktop screens.

Ensure:

- No horizontal overflow
- Responsive navigation
- Readable hero typography at every viewport size
- Adaptable project grids
- Proper spacing and text wrapping
- Usable buttons and links on touch devices
- Accessible interactions and sufficient contrast

The mobile experience must be deliberately designed rather than merely shrinking the desktop layout.

## 8. SEO and Performance

Implement:

- Appropriate page metadata and title
- A meaningful meta description
- Open Graph metadata
- A favicon or personal brand mark when assets are available
- Semantic heading structure
- Descriptive link text
- Optimized images
- Good loading performance

Do not add unsupported structured data or fabricated personal claims.

## 9. Implementation Workflow

1. Inspect the reference website and gather verified content.
2. Confirm the available content and assets.
3. Establish the visual direction and shared design tokens.
4. Initialize the new Next.js project if it does not already exist.
5. Configure Tailwind CSS, shadcn/ui, and the required dependencies.
6. Build the shared layout and navigation.
7. Implement the portfolio sections and reusable project components.
8. Apply the Neo-brutalist visual system consistently.
9. Add responsive behavior and accessible interactions.
10. Run type checking, linting, and available production-build checks.
11. Fix issues introduced during implementation.

## Acceptance Criteria

The finished website must:

- Be a new application, independent of the original website.
- Preserve the verified personal brand and portfolio concept.
- Use Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
- Have a distinctive Neo-brutalist design.
- Include functional navigation, project links, and relevant contact actions.
- Be responsive and accessible.
- Use real, verified portfolio content instead of fabricated details.
- Have a clean, maintainable component architecture.
- Pass available type checks, linting, and production-build checks.

**Final instruction:** Implement the complete website in the project files. Do not stop after producing a plan or a static design mockup. Make creative design decisions where appropriate, while keeping the content accurate and the implementation production-ready.

add real project card webiste Journal Academic Platform, Ecommerce, Khmer Social, BACII Calculator
