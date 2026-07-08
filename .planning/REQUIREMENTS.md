# Requirements: Justin Gomes Portfolio Website

**Defined:** 2026-07-08
**Core Value:** A flawless, high-performance, scroll-reactive visual experience (60fps) showcasing Justin's engineering skills through custom animation integrations.

## v1 Requirements

### Core Foundation

- [ ] **CORE-01**: Initialize Next.js 14+ App Router, Tailwind CSS, TypeScript, and install animation dependencies (GSAP, Lenis)
- [ ] **CORE-02**: Set up global smooth scroll foundation using Lenis synced to the GSAP ticker

### Global UI Polish

- [ ] **UI-01**: Implement trailing custom cursor with hover scaling and labels
- [ ] **UI-02**: Implement top viewport scroll-progress bar
- [ ] **UI-03**: Implement dark/light theme toggle with circular clip-path wipe transition
- [ ] **UI-04**: Implement subtle noise/grain overlay site-wide

### Hero Section

- [ ] **HERO-01**: Implement monogram "JG" to full name "Justin Gomes" unfolding staggered character text reveal
- [ ] **HERO-02**: Implement mouse-reactive low-opacity ambient backdrop (particles/aurora)
- [ ] **HERO-03**: Implement scroll-driven logo shrink/pin transition to top-left corner navigation state

### Projects Section

- [ ] **PROJ-01**: Implement reusable `<ProjectCurtain />` component with 3D horizontal curtain split-text fold transformation
- [ ] **PROJ-02**: Integrate project mockups/gifs inside splits revealed by scrolling
- [ ] **PROJ-03**: Add title cards, tech badges, and magnetic links surrounding the split reveal

### About Section

- [ ] **ABOUT-01**: Implement scroll-reveal bio paragraph with line-by-line masked slide-up text reveal
- [ ] **ABOUT-02**: Implement animated counting stats (years coding, languages, stacks) that count up on scroll into view

### Skills Section

- [ ] **SKILL-01**: Implement infinite horizontal skills marquee that accelerates/speeds up based on scroll velocity
- [ ] **SKILL-02**: Implement filterable/categorized spotlight skill cards grid

### Experience Section

- [ ] **EXP-01**: Implement vertical timeline where the connecting line draws itself dynamically on scroll
- [ ] **EXP-02**: Implement alternating side slide-reveal items on scroll

### Contact & Footer

- [ ] **CONT-01**: Implement large split-text closing headline mask reveal
- [ ] **CONT-02**: Implement magnetic social/email link buttons and small JG monogram footer

### Accessibility

- [ ] **ACC-01**: Implement fallback fades/slides (no split/rotate transforms) on mobile and for users with `prefers-reduced-motion`

## v2 Requirements

### Navigation & Extras

- **NAV-01**: Command-K style quick navigation command palette
- **NAV-02**: Easter egg interactive trigger (e.g. typing "sudo" or clicking monogram 5 times)

## Out of Scope

| Feature | Reason |
|---------|--------|
| CMS Backend | Static JSON data management in `/data/projects.ts` is enough and ensures maximum performance. |
| Complex Forms | Standard email/social magnetic links are sufficient for contact actions. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CORE-01 | Phase 1 | Pending |
| CORE-02 | Phase 1 | Pending |
| UI-01 | Phase 1 | Pending |
| UI-02 | Phase 1 | Pending |
| UI-03 | Phase 1 | Pending |
| UI-04 | Phase 1 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| HERO-03 | Phase 2 | Pending |
| PROJ-01 | Phase 3 | Pending |
| PROJ-02 | Phase 3 | Pending |
| PROJ-03 | Phase 3 | Pending |
| ABOUT-01 | Phase 4 | Pending |
| ABOUT-02 | Phase 4 | Pending |
| SKILL-01 | Phase 4 | Pending |
| SKILL-02 | Phase 4 | Pending |
| EXP-01 | Phase 5 | Pending |
| EXP-02 | Phase 5 | Pending |
| CONT-01 | Phase 5 | Pending |
| CONT-02 | Phase 5 | Pending |
| ACC-01 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 21 total
- Mapped to phases: 21
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-08*
*Last updated: 2026-07-08 after initial definition*
