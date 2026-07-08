# Phase 1: Scroll & Layout Foundation - Context

**Gathered:** 2026-07-08
**Status:** Ready for planning

<domain>
## Phase Boundary

This phase establishes the global application layout, installs core dependencies, configures the Lenis smooth scrolling engine synced to the GSAP ticker, builds the magnetic trailing custom cursor, implements the circular clip-path wipe theme toggle, and applies a low-opacity tiling noise overlay.

</domain>

<decisions>
## Implementation Decisions

### Lenis & GSAP Scroll Sync
- **D-01:** Sync Lenis scroll updates directly to the GSAP ticker (requestAnimationFrame) to prevent ScrollTrigger alignment drift and ensure a smooth 60fps experience.
- **D-02:** Disable default browser scrolling behavior in favor of Lenis inertial scrolling on desktop.

### Custom Cursor
- **D-03:** Hide the native browser cursor completely on desktop screen widths using CSS `cursor: none`.
- **D-04:** Provide automatic fallback/disable checks for touch-based devices (mobile/tablets) to prevent stuck cursor rings.

### Theme Wipe Origin
- **D-05:** Implement the circular clip-path wipe transition originating from the click coordinates of the theme toggle button (premium feel) rather than the center of the viewport.

### Noise Overlay
- **D-06:** Implement the background grain overlay using a low-opacity tiling PNG background image via CSS. This avoids the CPU/GPU overhead of dynamic SVG noise filters and maintains a solid 60fps scroll.

### the agent's Discretion
- The exact scale, spring coefficients for the magnetic cursor, and pixel density of the PNG grain tiling can be configured by the agent to maximize visual quality.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope & Guidelines
- `portfolio-website-antigravity-prompt.md` — Project PRD including stack, layout, and visual interactions.
- `.planning/PROJECT.md` — Active project description, constraints, and scope boundaries.
- `.planning/REQUIREMENTS.md` — Defined v1 checkable requirements mapping.
- `.planning/research/SUMMARY.md` §Key Findings — Stack and pitfall findings for Next.js 18 + GSAP.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None (brand new project setup).

### Established Patterns
- Next.js 14+ App Router project structure with dynamic client-side layout providers.

### Integration Points
- `/app/layout.tsx` -> Entry point layout wrapping providers (Lenis, Cursor).
- `/lib/gsap.ts` -> Centralized GSAP plugin registration and ticker configuration.
- `/lib/lenis.ts` -> Centralized Lenis setup.

</code_context>

<specifics>
## Specific Ideas

- The theme toggle clip-path wipe should dynamically read cursor coordinates from the event click and animate a `circle(0% at x y)` to `circle(150% at x y)` clip-path clip.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 1-Scroll & Layout Foundation*
*Context gathered: 2026-07-08*
