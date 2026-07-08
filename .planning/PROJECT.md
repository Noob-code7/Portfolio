# Justin Gomes Portfolio Website

## What This Is

A highly animated, scroll-reactive developer portfolio website for Justin Gomes, a full-stack software engineer. Every section feels intentional, kinetic, and slightly experimental (modeled after premier agency sites like Locomotive or Resend marketing pages) while maintaining 60fps smoothness and clear, scroll-driven storytelling.

## Core Value

The site must deliver a flawless, high-performance, scroll-reactive visual experience (60fps) that showcases Justin's engineering skills through custom animation integrations (GSAP, Lenis, React Bits).

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **CORE-01**: Initialize Next.js 14+ App Router, Tailwind CSS, TypeScript, and install animation dependencies (GSAP, Lenis)
- [ ] **CORE-02**: Set up global smooth scroll foundation using Lenis synced to the GSAP ticker
- [ ] **UI-01**: Implement global UI enhancements: Custom cursor (dot + ring, hover labels), scroll progress bar, dark/light theme toggle (clip-path wipe), and subtle noise overlay
- [ ] **HERO-01**: Build Hero Section with "JG" initials to "Justin Gomes" letters unfolding animation, subtitle reveal, and background mouse-reactive backdrop
- [ ] **HERO-02**: Build hero logo-transition on first scroll input (logo shrinks/pins to top-left corner)
- [ ] **PROJ-01**: Implement `<ProjectCurtain />` component with the horizontal text curtain-split reveal effect, using scroll-driven 3D `rotateX` transforms and vertical splits
- [ ] **PROJ-02**: Assemble Projects Section with multiple project entries, description cards, tags, and magnetic links
- [ ] **ABOUT-01**: Build About Section with a line-by-line mask scroll reveal and animated stat count-ups
- [ ] **SKILL-01**: Build Skills Section with a scroll-velocity-linked infinite marquee (speeds up on scroll) and category filter cards
- [ ] **EXP-01**: Build Experience Section with a vertical timeline that draws its line stroke dynamically on scroll, with alternating entry slides
- [ ] **CONT-01**: Build Contact & Footer Section with magnetic links, large closing headline split-reveal, and monogram footer
- [ ] **ACC-01**: Ensure responsive design fallback and `prefers-reduced-motion` compatibility (no split/rotate transforms) across all sections

### Out of Scope

- **BACK-01**: Dynamic backend database or dashboard — content will be statically managed in `/data/projects.ts` for ease of Vercel deployment and maximum performance.
- **OAUTH-01**: OAuth authentication or complicated contact forms — standard email links and social media buttons with magnetic hover are sufficient.

## Context

- **Client Profile**: Justin Gomes, a full-stack software engineer.
- **Inspiration**: High-end interactive agency sites (Locomotive, Lusion, Resend).
- **Assets**: Visuals/mockups for projects, standard text content.
- **Deployment**: Vercel-ready static/edge deployment.

## Constraints

- **Tech Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, GSAP, Lenis, React Bits.
- **Performance**: Must hit 60fps on modern desktop/mobile devices; animations must degrade gracefully on mobile and low-performance devices.
- **Accessibility**: Must support `prefers-reduced-motion` settings.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router | Offers excellent SEO, optimized image loading, and static exports suitable for Vercel. | — Pending |
| GSAP + Lenis integration | Lenis provides smooth inertia, and syncing to the GSAP ticker ensures ScrollTrigger matches scroll position perfectly. | — Pending |
| React Bits component usage | Reusing existing high-quality components (Aurora, Threads, spotlight cards) avoids reinventing common patterns. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-08 after initialization*
