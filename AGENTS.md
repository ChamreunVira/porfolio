# AGENTS.md

## 1. Core Principles

- Follow best practices for Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
- Prioritize maintainability, readability, reusability, accessibility, and performance.
- Write clean, production-quality code appropriate for a real project.
- Prefer simple, well-structured solutions over unnecessary abstractions.
- Do not overengineer simple features or introduce unnecessary dependencies.
- Preserve the existing project concept, requirements, functionality, and design direction.
- Make changes only when they contribute to the requested task.

## 2. Inspect Existing Code Before Making Changes

Before implementing any feature or modifying existing code:

1. Inspect the project structure and relevant source files.
2. Read the existing `AGENTS.md`, `README.md`, and `docs/AI_CONTEXT.md` if present.
3. Check existing components, utilities, hooks, types, and configuration before creating new ones.
4. Inspect `src/app/globals.css` and any other global styles or theme configuration.
5. Understand existing component APIs, naming conventions, import aliases, and styling patterns.
6. Identify reusable code that can be extended instead of duplicated.

Do not assume a component, utility, or configuration does not exist without checking.

Do not rewrite unrelated files, replace established patterns without a reason, or create duplicate implementations.

For larger tasks, provide a short implementation plan before making changes.

## 3. Reusable Components

- Build reusable components when the same UI pattern appears in multiple places or when reuse meaningfully improves maintainability.
- Keep components focused on a clear responsibility.
- Extract repeated UI patterns into shared components rather than duplicating markup and styles.
- Use props and explicit TypeScript types to make component behavior clear.
- Keep component APIs small, predictable, and easy to understand.
- Avoid unnecessary prop drilling; use appropriate composition or existing state-management patterns when needed.
- Avoid creating abstractions for one-off UI elements unless there is a clear benefit.
- Reuse existing shadcn/ui primitives and project utilities when appropriate.
- Do not duplicate components that already provide the required functionality.
- Keep business logic separate from presentation when doing so improves clarity and testability.

## 4. Project Structure and Naming

Follow the existing project structure. Do not impose a different architecture unnecessarily.

- Place application components directly inside `src/components/`.
- Use PascalCase for application component filenames and component names, such as `Navbar.tsx`, `HeroSection.tsx`, and `ProjectCard.tsx`.
- Keep shadcn/ui primitives inside `src/components/ui/` when that matches the existing configuration.
- Preserve the existing root-level `utils/` directory. Do not move it into `src/lib/` or create a duplicate utilities directory.
- Keep shared data in `src/data/` and shared types in `src/types/` when appropriate.
- Follow existing export conventions and TypeScript import aliases.
- Use descriptive, consistent names. Avoid vague names and unnecessary abbreviations.
- Match filename casing exactly in imports, especially for Linux and Vercel deployments.

Treat example structures as guidance, not a requirement to create every possible file.

## 5. Global Styles and Design Tokens

**Always inspect the existing global styles before changing UI styling.**

Before adding or modifying colors, typography, spacing, borders, radii, shadows, or theme behavior:

1. Read `src/app/globals.css`.
2. Inspect the existing Tailwind CSS configuration and theme setup, if present.
3. Check shadcn/ui CSS variables and component styling conventions.
4. Reuse existing design tokens whenever possible.
5. Extend the existing design system instead of introducing conflicting values.

Rules:

- Do not duplicate global CSS variables or create competing color systems.
- Do not add arbitrary CSS overrides when existing theme tokens can solve the problem.
- Keep shared design decisions centralized.
- Avoid unnecessary global selectors that unintentionally affect unrelated components.
- Preserve light/dark theme support if the project already implements it.
- Keep typography and spacing consistent across the application.
- If a global style change is necessary, assess its impact on existing components before applying it.

## 6. Border Radius and Shadow Limits

These limits are mandatory for all newly written or modified UI components unless the user explicitly requests an exception.

### Border radius

- Never use a border radius larger than `md`.
- With the default Tailwind scale, `rounded-md` is the maximum permitted utility.
- Allowed examples: `rounded-none`, `rounded-sm`, `rounded`, and `rounded-md`.
- Do not use `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, or `rounded-full`.
- Avoid equivalent oversized radii in custom CSS or inline styles.
- Check the actual Tailwind theme if the project customizes radius tokens.

### Box shadows

- Never use a shadow larger than `sm`.
- With the default Tailwind scale, `shadow-sm` is the maximum permitted utility.
- Allowed examples: `shadow-none` and `shadow-sm`.
- Do not use `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, or `shadow-2xl`.
- Avoid equivalent large blurred shadows in custom CSS or inline styles.

### Neo-brutalist design exception

For the Neo-brutalist visual style, hard-edged offset shadows may be used without violating the shadow limit, provided they are intentional and visually restrained.

Examples:

- `shadow-[2px_2px_0_#171717]`
- `shadow-[3px_3px_0_#171717]`
- `shadow-[4px_4px_0_#171717]`

These are crisp, unblurred offset shadows, not large blurred elevation shadows. Prefer smaller offsets for compact controls and larger offsets only for prominent elements.

Do not apply shadows to every element. Use them selectively to establish visual hierarchy.

## 7. Tailwind CSS and shadcn/ui

- Use the project's existing Tailwind CSS version and supported syntax.
- Prefer existing theme tokens and semantic utility classes.
- Use shadcn/ui components where they provide accessible, reusable functionality.
- Customize existing components rather than replacing them without a clear reason.
- Preserve keyboard navigation, focus management, semantic HTML, and accessible labels.
- Avoid conflicting utility classes and repeated styling logic.
- Use `cn()` or the project's existing class-merging utility when appropriate.
- Avoid excessive arbitrary values when an existing design token is suitable.
- Do not modify generated shadcn/ui primitives unnecessarily.

## 8. TypeScript and React

- Use TypeScript strict mode and maintain type safety.
- Do not use `any` to bypass type errors.
- Avoid unnecessary type assertions and non-null assertions.
- Reuse existing interfaces and types when appropriate.
- Keep props explicitly typed and avoid overly complex component APIs.
- Use React Server Components by default in Next.js App Router.
- Add `"use client"` only when client-side features require it.
- Do not introduce client-side state or effects when server rendering or simple composition is sufficient.
- Use stable keys when rendering lists.
- Avoid unnecessary re-renders, effects, and duplicated state.
- Clean up event listeners and subscriptions when necessary.

## 9. Next.js Best Practices

- Follow the existing App Router structure.
- Use appropriate Server and Client Components.
- Use `next/link` for internal navigation.
- Use `next/image` when appropriate for optimized images.
- Define page metadata using the supported Next.js metadata APIs.
- Handle loading, error, empty, and not-found states where relevant.
- Keep secrets and server-only logic out of client bundles.
- Avoid unnecessary API routes or backend services when existing functionality is sufficient.
- Follow the project's existing data-fetching and caching conventions.
- Do not introduce deprecated APIs when supported alternatives are available.

## 10. Accessibility and Responsive Design

- Use semantic HTML and meaningful heading hierarchy.
- Ensure sufficient text contrast and visible focus states.
- Support keyboard navigation.
- Provide accessible names for icon-only buttons.
- Associate form fields with their labels and provide useful validation messages.
- Respect `prefers-reduced-motion`.
- Design for mobile, tablet, and desktop breakpoints.
- Prevent horizontal overflow and preserve readable layouts on smaller screens.
- Do not sacrifice usability for decorative effects.

## 11. Dependencies and Configuration

- Inspect `package.json` before adding a dependency.
- Prefer existing libraries and built-in framework capabilities.
- Add dependencies only when they provide meaningful value.
- Do not replace project configuration without a clear requirement.
- Preserve existing environment variable conventions.
- Never hardcode credentials, API keys, or secrets.
- Do not modify unrelated configuration files.

## 12. Implementation Workflow

For each task:

1. Understand the requested outcome.
2. Inspect relevant existing files and global styles.
3. Identify reusable components, utilities, types, and design tokens.
4. Make a concise plan for changes involving multiple files.
5. Implement the smallest complete solution.
6. Check consistency with existing conventions and design tokens.
7. Verify that border radii and shadows respect the mandatory limits.
8. Run the available type checker, linter, tests, and production build when appropriate.
9. Fix regressions introduced by the changes.
10. Summarize what changed and disclose any checks that could not be completed.

Do not claim that tests, linting, or builds passed unless they were actually run successfully.

## 13. Post-Task Context Update

After completing any implementation, debugging, configuration, or dependency task:

1. Update `docs/AI_CONTEXT.md` with durable project knowledge discovered or changed during the task.
2. Record changed architecture, conventions, commands, dependencies, validation results, and known follow-up work when applicable.
3. Keep entries concise and current. Replace stale guidance instead of appending a chronological task log.
4. Do not record secrets, credentials, generated noise, or details that are already obvious from the source code.
5. Treat the context update as part of task completion and verify that it matches the final repository state.

## 14. Final Quality Checklist

Before finishing, verify:

- [ ] Existing code was inspected before implementation.
- [ ] Existing components and utilities were reused where appropriate.
- [ ] No unnecessary duplicate components or utilities were created.
- [ ] Global styles and theme tokens were inspected before styling changes.
- [ ] No border radius exceeds `md`.
- [ ] No blurred box shadow exceeds `sm`.
- [ ] Neo-brutalist offset shadows, if used, remain crisp and restrained.
- [ ] Components use PascalCase filenames according to project conventions.
- [ ] The root-level `utils/` directory remains intact.
- [ ] TypeScript types are explicit and no unnecessary `any` was introduced.
- [ ] Responsive behavior and accessibility were considered.
- [ ] No unrelated features or files were changed.
- [ ] Relevant validation checks were run and their results reported.

**Highest priority:** Inspect before implementing, reuse before duplicating, follow existing project conventions, and keep the code maintainable.
