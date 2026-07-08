# Pitfalls Research

**Domain:** Highly animated, scroll-reactive developer portfolio website
**Researched:** 2026-07-08
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: React StrictMode Double Initialization

**What goes wrong:**
ScrollTriggers fire twice or double-bind, causing jumpy scrolls, broken markers, or animations that lock up.

**Why it happens:**
React 18's StrictMode mounts, unmounts, and re-mounts components in development to detect cleanup leaks. If GSAP triggers are created without a proper cleanup return, two instances will run simultaneously.

**How to avoid:**
Wrap GSAP initialization in the `@gsap/react` hook `useGSAP`, which handles automatic scoping and cleanup. Alternatively, always use `gsap.context()` inside `useLayoutEffect` and return `ctx.revert()` in the cleanup function.

**Warning signs:**
Scroll markers (when `markers: true`) appear twice on the screen for the same trigger.

**Phase to address:**
Phase 1 (GSAP Foundation setup).

---

### Pitfall 2: Inertial Smooth Scroll Sync Failure

**What goes wrong:**
GSAP ScrollTrigger markers drift or fire at incorrect offsets because the browser's scroll height calculation is out of sync with Lenis's smooth scroll position.

**Why it happens:**
Lenis overrides standard scroll physics. If GSAP doesn't listen to Lenis's scroll updates, it calculates offsets using the default scroll positions which update at different intervals.

**How to avoid:**
Sync Lenis directly to GSAP's ticker:
```javascript
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

**Warning signs:**
Scroll Trigger animations feel lagged, jumpy, or trigger too late.

**Phase to address:**
Phase 1 (Scroll Foundation).

---

### Pitfall 3: Split-Text Horizontal Layout Breaks

**What goes wrong:**
When splitting text in React, wrapping characters in individual `div` elements shifts layout, changes spacing, or wraps mid-word to a new line on smaller viewports.

**Why it happens:**
Wrapping words/characters in `display: inline-block` changes font tracking, and standard text wrappers don't account for whitespace correctly, or they cause premature line breaking.

**How to avoid:**
Write a robust, custom text-splitting utility that parses spaces, wraps words in overflow-hidden divs, and characters inside those, ensuring white-space is preserved (`&nbsp;` or CSS `white-space: pre-wrap`).

**Warning signs:**
Project titles on mobile have weird spacing or break one character per line.

**Phase to address:**
Phase 2 (Project Curtain Component).

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Skipping custom cursor on touch devices | Saves 20 lines of check code | Desktop cursor lags or gets stuck on tablet/mobile taps | Never. Touch checks should always turn off the custom cursor immediately. |
| Hardcoding project heights | Fast layout | Layout breaks when content, text size, or images change | Never. Dynamic ScrollTrigger pinning relies on dynamic bounding client rects. |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| React Bits components | Pasting TypeScript files directly from React Bits site without matching tailwind config or TS type definitions. | Modify the component to match local project tailwind theme settings and explicitly type props. |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Animating non-transform CSS | Scroll stutters, CPU usage spikes, fan runs loud. | Only animate `transform: translate3d / scale / rotate` and `opacity`. Avoid animating width, height, top, left, margin. | On load or first scroll |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Broken scroll on mobile | Mobile users can't navigate | Disable smooth scrolling on mobile or use Lenis mobile-specific options, and replace the curtain 3D split with a simple fade-in. |

---
*Pitfalls research for: portfolio-website*
*Researched: 2026-07-08*
