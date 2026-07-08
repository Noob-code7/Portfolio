# Roadmap: Justin Gomes Portfolio Website

## Phases

### Phase 1: Scroll & Layout Foundation
**Goal**: Establish global layout, trailing custom cursor, circular theme switch, and Lenis smooth scroll synced to the GSAP ticker.
**Depends on**: None
**Requirements**: [CORE-01, CORE-02, UI-01, UI-02, UI-03, UI-04, ACC-01]
**Success Criteria** (what must be TRUE):
  1. Scrolling has a smooth inertial behavior site-wide.
  2. The custom cursor scales up on hover elements and displays labels correctly.
  3. The theme toggle triggers a circular clip-path wipe transition.
**Plans**: 3 plans

Plans:
- [ ] 01-01: Install dependencies and configure global Next.js layout with Lenis smooth scrolling.
- [ ] 01-02: Build the custom trailing cursor and top viewport scroll progress bar.
- [ ] 01-03: Implement the dark/light theme toggle with circular clip-path wipe animation and global noise overlay.

---

### Phase 2: Unfolding Hero Section
**Goal**: Build the first-impression hero section with the initials name unfolding animation and the scroll logo-shrink transition.
**Depends on**: Phase 1
**Requirements**: [HERO-01, HERO-02, HERO-03]
**Success Criteria** (what must be TRUE):
  1. Monogram "JG" unfolds staggered letter-by-letter to "Justin Gomes" on load.
  2. Hero backdrop reacts faintly to mouse movement.
  3. On scroll input, the main hero text pins/shrinks to the top-left corner logo.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Create Hero layout with name reveal timeline and interactive background backdrop.
- [ ] 02-02: Implement ScrollTrigger logo shrink and pin transition.

---

### Phase 3: Project Curtain Component
**Goal**: Implement the core horizontal 3D curtain-split text scroll interaction.
**Depends on**: Phase 2
**Requirements**: [PROJ-01, PROJ-02, PROJ-03]
**Success Criteria** (what must be TRUE):
  1. Project titles separate into top/bottom halves on scroll using 3D `rotateX` transforms.
  2. Splitting the title reveals a mockup image exactly in between the halves.
  3. Associated tags and links fade/slide in around the active project mockups.
**Plans**: 3 plans

Plans:
- [ ] 03-01: Create custom character/line splitting utility and initial 3D transform layout.
- [ ] 03-02: Build the core `<ProjectCurtain />` component with ScrollTrigger scrub synchronization.
- [ ] 03-03: Build the `<ProjectsSection />` wrapper to map multiple projects from `/data/projects.ts`.

---

### Phase 4: About & Skills Marquee
**Goal**: Build the about description text-mask reveal and the velocity-aware skills marquee.
**Depends on**: Phase 3
**Requirements**: [ABOUT-01, ABOUT-02, SKILL-01, SKILL-02]
**Success Criteria** (what must be TRUE):
  1. About paragraphs animate line-by-line using overflow-hidden masks on scroll.
  2. Skills marquee speeds up in the direction of scroll velocity.
  3. Skill grids highlight items on hover.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Build About section with line masked transitions and count-up stats.
- [ ] 04-02: Build infinite skills marquee with velocity-linked scroll trigger and spotlight cards.

---

### Phase 5: Timeline & Contact Footer
**Goal**: Complete the portfolio with the draw-on-scroll vertical timeline and magnetic contact footer.
**Depends on**: Phase 4
**Requirements**: [EXP-01, EXP-02, CONT-01, CONT-02]
**Success Criteria** (what must be TRUE):
  1. Timeline SVG connector line draws itself dynamically as the user scrolls.
  2. Experience items slide in from alternating sides as they cross viewport thresholds.
  3. Footer links trigger a magnetic snap-to-cursor effect.
**Plans**: 3 plans

Plans:
- [ ] 05-01: Build vertical scroll-drawn SVG timeline path and alternating experience cards.
- [ ] 05-02: Build Contact footer section with split-text title reveal.
- [ ] 05-03: Implement GSAP magnetic quickTo utility for interactive buttons and links.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Scroll & Layout Foundation | 0/3 | Not started | - |
| 2. Unfolding Hero Section | 0/2 | Not started | - |
| 3. Project Curtain Component | 0/3 | Not started | - |
| 4. About & Skills Marquee | 0/2 | Not started | - |
| 5. Timeline & Contact Footer | 0/3 | Not started | - |
