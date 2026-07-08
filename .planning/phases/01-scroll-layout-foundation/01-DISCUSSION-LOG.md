# Phase 1: Scroll & Layout Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-07-08
**Phase:** 1-Scroll & Layout Foundation
**Areas discussed:** Theme Wipe Origin, Noise Overlay

---

## Theme Wipe Origin

| Option | Description | Selected |
|--------|-------------|----------|
| From Toggle Button coordinates | Capture click positions for a dynamic, premium transition | ✓ |
| From Viewport Center | Simpler transition that wipes outwards from the center | |

**User's choice:** From Toggle Button coordinates
**Notes:** Dynamic coordinate capturing creates a premium interactive experience.

---

## Noise Overlay

| Option | Description | Selected |
|--------|-------------|----------|
| Low-opacity tiling PNG overlay | High-performance, critical for maintaining 60fps scrolling | ✓ |
| Dynamic SVG noise filter | Realistic grain movement, but could cause scroll stuttering | |

**User's choice:** Low-opacity tiling PNG overlay
**Notes:** Maintaining 60fps performance on scroll is critical for this portfolio.

---

## the agent's Discretion

- Standard GSAP and Lenis syncing details were left to the agent's discretion since they are engineering details.
- Custom cursor styling and boundary fallbacks were deferred to the agent's discretion.

## Deferred Ideas

- None.
