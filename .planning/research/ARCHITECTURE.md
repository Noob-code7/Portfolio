# Architecture Research

**Domain:** Highly animated, scroll-reactive developer portfolio website
**Researched:** 2026-07-08
**Confidence:** HIGH

## System Overview

```
                       [Viewport / Scroll Input]
                                   │
                                   ▼
                            [Lenis Engine]
                                   │
                         (RequestAnimationFrame)
                                   │
                                   ▼
                             [GSAP Ticker]
                                   │
                        (Timeline / Scrub: true)
                                   │
          ┌────────────────────────┼────────────────────────┐
          ▼                        ▼                        ▼
[InitialsReveal]            [ProjectCurtain]        [TimelineSection]
  (GSAP Timeline)            (ScrollTrigger)          (Draw SVG Path)
```

## Project Structure

```
/app
  /layout.tsx              -> Root layout containing Lenis provider and Cursor wrapper
  /page.tsx                -> Aggregates all section containers
/components
  /hero
    /InitialsReveal.tsx    -> Monogram to full name reveal + backdrop
  /projects
    /ProjectCurtain.tsx    -> Split text / image reveal component
    /ProjectsSection.tsx   -> Map wrapper for projects
  /about
    /AboutSection.tsx      -> Text mask reveal + count-up stats
  /skills
    /SkillsMarquee.tsx     -> Velocity-aware logo marquee
  /experience
    /TimelineSection.tsx   -> Draw-on-scroll vertical path
  /contact
    /ContactSection.tsx    -> Closing headline + magnetic links
  /ui
    /CustomCursor.tsx      -> Mouse-follower cursor component
    /MagneticButton.tsx    -> Magnet hover spring effect
    /ScrollProgressBar.tsx -> Viewport top progress bar
    /ThemeToggle.tsx       -> Theme switch with circular transition
/lib
  /gsap.ts                 -> Register plugins, export configuration
  /lenis.ts                -> Instantiate Lenis, expose initialization hooks
/data
  /projects.ts             -> Projects data array
```

## Data Flow

### Request Flow

```
[User Scroll Action]
    ↓
[Lenis Scroll Event] → [GSAP Ticker Sync] → [ScrollTrigger Calculations]
    ↓
[Timeline Progress] → [DOM Transform Update] → [Viewport Render]
```

### State Management

Global state is not heavily needed. Local React states and refs are preferred to avoid triggering unnecessary React renders while GSAP manipulates the DOM directly:

```
[ScrollTrigger / Refs] ──► Direct DOM transformations (No React state re-renders)
```

## Scaling Considerations

For a static portfolio site, scaling targets load speed and client runtime performance:

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 1 User (Local) | Development optimizations (avoiding double triggers in React StrictMode). |
| 10k Users / month | Static builds, dynamic import of heavy animation files, layout shift optimization. |

## Anti-Patterns

### Anti-Pattern 1: React State updates on Scroll Listener

**What people do:** Update React state on scroll (e.g., `setScrollY(window.scrollY)`) to drive animations in render.
**Why it's wrong:** Triggers React re-renders 60+ times per second, dropping frames.
**Do this instead:** Use `gsap` references and allow GSAP's engine to edit style properties directly in the DOM.

### Anti-Pattern 2: Infinite ScrollTrigger instances not cleaned up

**What people do:** Initialize ScrollTriggers inside standard `useEffect` hooks without cleanup arrays.
**Why it's wrong:** Multiple instances stack on route changes, leading to memory leaks and erratic positions.
**Do this instead:** Wrap GSAP initializations inside `useGSAP()` or return a cleanup function that runs `gsap.context.revert()`.

---
*Architecture research for: portfolio-website*
*Researched: 2026-07-08*
