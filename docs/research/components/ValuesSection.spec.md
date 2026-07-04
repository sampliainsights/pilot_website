# ValuesSection Specification

## Overview
- **Target file:** `src/components/ValuesSection.tsx`
- **Interaction model:** static

## Layout
- Root `<section data-theme="dark">`: `relative flex flex-col items-center bg-black py-12 text-white overflow-hidden md:h-[90vh] md:min-h-[600px] md:justify-center`.
- Decorative background: `/images/gradient-bg.png` — absolutely positioned blurred green glow. `<img src="/images/gradient-bg.png" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 blur-2xl" alt="" />`. Keep behind content (`z-0`); content `relative z-10`.
- Inner `max-w-7xl w-full mx-auto px-7 xl:px-0`.

## Content
- Label `Algori` — font-sans ~16px white, mb-4.
- Heading (font-heading Archia, white, ~48px weight 400, leading-tight), two lines:
  - `Consumer panel,`
  - `reimagined.`
  - `text-3xl md:text-5xl`.
- Values grid (mt-16): `grid grid-cols-2 md:grid-cols-4 gap-8`.
  - Each item: bold term (font-heading ~28px white, `text-2xl md:text-[28px]`) + description below (font-sans ~16px `text-white/70` mt-4, max-w ~200px).
  - Items:
    1. `Size` — `45.000 weekly active shoppers.`
    2. `Depth` — `Granular stock-keeping-unit (SKU) basket data.`
    3. `Speed` — `Near real-time data.`
    4. `Transparency` — `Fully transparent commercial engagement model.`

## Notes
- Original shows the 4 columns lower-middle of the section with lots of space above (heading upper-left, values row around 55% down). Use `justify-center` + large `mt` on the grid to approximate, or place heading block then big gap then grid.
- A thin mint (#00DEAA) strip appears at the very bottom edge in the original (transition to next section) — this is actually the top of the next (ImproveFMCG) section peeking; do NOT add it here.

## Responsive
- Desktop 4-col; tablet/mobile 2-col. Heading ~32px mobile.

## Imports
- none. Verify `npx tsc --noEmit`.
