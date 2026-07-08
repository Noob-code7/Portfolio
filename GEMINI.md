<!-- GSD:project-start source:PROJECT.md -->
## Project

**Justin Gomes Portfolio Website**

A highly animated, scroll-reactive developer portfolio website for Justin Gomes, a full-stack software engineer. Every section feels intentional, kinetic, and slightly experimental (modeled after premier agency sites like Locomotive or Resend marketing pages) while maintaining 60fps smoothness and clear, scroll-driven storytelling.

**Core Value:** The site must deliver a flawless, high-performance, scroll-reactive visual experience (60fps) that showcases Justin's engineering skills through custom animation integrations (GSAP, Lenis, React Bits).

### Constraints

- **Tech Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, GSAP, Lenis, React Bits.
- **Performance**: Must hit 60fps on modern desktop/mobile devices; animations must degrade gracefully on mobile and low-performance devices.
- **Accessibility**: Must support `prefers-reduced-motion` settings.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core Technologies
| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js | 14.x | App Router Framework | Offers excellent SEO, routing, dynamic imports, and optimized asset delivery out-of-the-box. |
| React | 18.x | Frontend Library | Component-based UI rendering, state management, and lifecycle hooks. |
| TypeScript | 5.x | Static Typing | Prevents runtime bugs, makes animation payloads/options type-safe. |
| Tailwind CSS | 3.x | Styling | Utility-first styling for quick, responsive UI building. |
### Supporting Libraries
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| GSAP | 3.12.x | Animation Core | Standard engine for complex timelines, splits, and custom properties. |
| @studio-freight/lenis | 1.x | Smooth Scrolling | Provides inertial scrolling, required for ScrollTrigger performance. |
| Lucide React | Latest | Icons | Clean SVG icons for social/link buttons. |
| Zustand | 4.x | State Management | Optional. Use only if global animation or theme state needs optimization. |
### Development Tools
| Tool | Purpose | Notes |
|------|---------|-------|
| ESLint | Code Linting | Catch react hook array dependencies issues early. |
| Prettier | Formatting | Uniform formatting across files. |
## Installation
# Core
# Dev dependencies
## Alternatives Considered
| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| GSAP | Framer Motion | Good for simple spring transitions, but lacks advanced scroll-scrubbing orchestration and performance at 60fps for heavy custom canvas/DOM splits. |
| Lenis | Locomotive Scroll | Locomotive Scroll v4 had complex CSS overrides; v5 is comparable to Lenis but Lenis is smaller and integrates better with GSAP tickers. |
## What NOT to Use
| Avoid | Why | Use Instead |
|-------|-----|-------------|
| React-Scroll | Legacy library, uses outdated scroll listeners causing jank. | Lenis + GSAP ScrollTrigger |
| CSS transitions on scroll | Difficult to synchronize with physical scroll position, leading to frame drops. | GSAP dynamic ticker interpolation |
## Stack Patterns by Variant
- Use CSS transitions for mobile and reduce GSAP timeline complexity.
- Disable 3D transforms (`rotateX`) on mobile.
## Version Compatibility
| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| gsap@3.12.x | @studio-freight/lenis@1.x | Fully compatible; tick syncing requires manual registration in `requestAnimationFrame`. |
## Sources
- Next.js Documentation — official routing and image optimization guidelines
- GSAP / GreenSock official docs — ScrollTrigger + React guidelines
- Lenis GitHub repository — ticker-sync documentation
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
