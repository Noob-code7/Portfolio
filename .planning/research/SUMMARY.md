# Project Research Summary

**Project:** Justin Gomes Portfolio Website
**Domain:** Highly animated, scroll-reactive developer portfolio website
**Researched:** 2026-07-08
**Confidence:** HIGH

## Executive Summary

This project focuses on building a state-of-the-art interactive developer portfolio for Justin Gomes. The site's primary appeal lies in its dynamic, scroll-driven visual transitions, particularly the "Project Curtain Split" effect and the name-reveal hero animation. 

To achieve 60fps performance without frame drops, the application relies on syncing Lenis smooth scrolling with the GSAP ticker. The layout and components are designed to degrade gracefully on mobile screens and support users who have requested reduced motion options.

## Key Findings

### Recommended Stack

- **Framework**: Next.js 14+ (App Router) for SEO, dynamic imports, and static generation.
- **Styling**: Tailwind CSS for responsive utility styling.
- **Animation**: GSAP + ScrollTrigger + Custom Text Splitting.
- **Smooth Scroll**: Lenis synced to the GSAP ticker.

### Expected Features

**Must have (table stakes):**
- Monogram to full name unfold hero animation.
- Projects section displaying static/video mockups.
- About section with mask-revealed bio text and counting stats.
- Infinite skills marquee that reacts to scroll velocity.
- Vertical drawing timeline for professional experience.
- Contact section with magnetic elements.

**Should have (competitive):**
- Circular clip-path wipe theme switcher.
- Magnetic trailing cursor with hover labels.
- Grain overlay for premium texture.

### Architecture Approach

A single page template (`page.tsx`) that mounts layout-scoped components. Custom animation hooks and configuration states are centralized inside `/lib/gsap.ts` and `/lib/lenis.ts` to ensure consistent execution.

### Critical Pitfalls

1. **React StrictMode Double Initialization**: Prevent duplicate ScrollTriggers by using scoped contexts (`gsap.context()` or `useGSAP`).
2. **Smooth Scroll Sync Drift**: Ticker sync is required to keep GSAP ScrollTrigger alignment perfectly matching Lenis output.
3. **Split Text Spacing Issues**: Custom splitter must correctly handle whitespace and prevent characters from breaking onto newline bounds.

## Implications for Roadmap

### Phase 1: Scroll & Layout Foundation
- **Rationale**: Establishes the global layout, cursor, themes, and smooth-scroll ticker foundation.
- **Delivers**: Base Next.js app with working custom cursor, circular theme switch, and Lenis/GSAP sync.

### Phase 2: Unfolding Hero Section
- **Rationale**: Focuses on the first impression screen before scroll interactions.
- **Delivers**: Initials reveal, subtitle fade-ins, dynamic ambient backdrop, and scroll-to-nav logo transition.

### Phase 3: Project Curtain Component
- **Rationale**: Implements the core complex interaction of the website.
- **Delivers**: `<ProjectCurtain />` template component with 3D split transformation.

### Phase 4: About & Skills Marquee
- **Rationale**: Adds information sections requiring scroll reveals and velocity manipulation.
- **Delivers**: Scroll-drawing bio text, stat counters, and velocity-linked skills marquee.

### Phase 5: Timeline & Contact Footer
- **Rationale**: Completes the page structure and adds contact options.
- **Delivers**: Vertical scroll-drawn path experience tracker, closing headline, and magnetic links.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Recommended tools are production-tested and standard. |
| Features | HIGH | Detailed visual states are explicitly scoped. |
| Architecture | HIGH | Clean division of client vs server components. |
| Pitfalls | HIGH | Specific mitigations are documented for React 18. |

**Overall confidence:** HIGH

---
*Research completed: 2026-07-08*
*Ready for roadmap: yes*
```
