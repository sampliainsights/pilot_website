# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static

## Layout
- Root `<section data-theme="light">` : `bg-algori` (#00DEAA), `relative -mt-[104px] flex w-full flex-col justify-between overflow-hidden`, min-height ~ `min-h-[100svh]` (original ~800px incl. header space). Use `pt-[152px]` top padding to clear announcement(48)+header so content starts below.
- Inner content container: `max-w-7xl mx-auto w-full px-7 xl:px-0`, positioned above the G graphic (`relative z-10`).

## Content (verbatim)
- Heading (Archia via `font-heading`): three lines
  - `We are Algori,`
  - `Consumer panel,`
  - `reimagined.`
  - Style: `text-black`, font-size **72px**, line-height **90px**, font-weight 400. Use `text-5xl md:text-6xl xl:text-[72px] xl:leading-[90px]`. Render with `<br/>` or block spans so it breaks exactly into 3 lines.
- Subtitle (`font-sans`, Inter): `Improving FMCG growth with the fastest and most granular insights from 45,000 shoppers in Spain.`
  - Style: font-size 24px, line-height 32px, black, `max-w-[672px]`, margin-top ~24px. Use `text-lg md:text-2xl md:leading-8 max-w-[672px] mt-6`.

## Background "G" graphic
- `<HeroGIcon />` from `@/components/icons`. Absolutely positioned, bleeding off the right edge and bottom.
- Style: `absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-black/40` — width ~ `w-[70vw] max-w-[900px] h-auto`, positioned so roughly half the G is clipped off the right. It sits BEHIND text (`z-0`). The stroke uses currentColor; set a subtle color like `text-black/30` (original stroke is white@0.5 over mint, reading as lighter mint — approximate with `text-white/40` OR `text-black/20`; prefer `text-white/50` to match original which used white stroke). Use `text-white/50`.
- On mobile: shrink/hide or push further right so it doesn't overwhelm — keep partially visible, `opacity-60`.

## Vertical spacing
- Content vertically: heading block sits around 25-30% down; subtitle below. Section tall (`min-h-[100svh]`). Bottom has empty space (justify-between pushes content toward upper-middle). Match screenshot: heading starts ~200px from top of colored area, big gap below subtitle.

## Responsive
- Desktop (1440): heading 72px, G graphic large on right.
- Tablet (768): heading ~56px, G smaller.
- Mobile (390): heading ~40-44px (`text-5xl`), subtitle 18px, full-width text, G graphic reduced/faded behind.

## Imports
- `import { HeroGIcon } from "@/components/icons";`
- Verify `npx tsc --noEmit`.
