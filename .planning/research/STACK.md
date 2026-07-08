# Stack Research

**Domain:** Highly animated, scroll-reactive developer portfolio website
**Researched:** 2026-07-08
**Confidence:** HIGH

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

```bash
# Core
npm install gsap @studio-freight/lenis lucide-react

# Dev dependencies
npm install -D typescript @types/react @types/node tailwindcss postcss autoprefixer
```

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

**If performance is constrained:**
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

---
*Stack research for: portfolio-website*
*Researched: 2026-07-08*
