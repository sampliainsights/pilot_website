# SolutionsSection (+ Final CTA + Footer) Specification

## Overview
- **Target file:** `src/components/SolutionsSection.tsx`
- **Interaction model:** static

## Layout
- Root `<section data-theme="light">`: `flex flex-col items-center bg-algori-gray py-12 xl:pt-24` (bg #F1F1F1, black text).
- Inner `max-w-6xl w-full mx-auto px-7 xl:px-0`.

## Part A — Solutions cards
- Label `Most popular solutions` — font-sans, `my-4 text-base md:text-xl xl:mb-10 xl:text-2xl`.
- Cards grid: `flex flex-col md:flex-row md:flex-wrap` OR `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8`. 4 cards.
  - Each card: `flex flex-col`. Top: white panel with centered graphic — `flex items-center justify-center bg-white py-14` containing the 148×148 SVG graphic. Below (in a slightly different light panel or transparent): title + description with `pt-6`.
  - Title: font-heading (Archia) ~24px black weight 400.
  - Description: font-sans ~16px black `text-black/80 mt-3`.
- Cards:
  1. graphic `<SolutionInnovation/>`, title `The Innovation`, desc `Get the fastest insights about what works and what doesn't`
  2. graphic `<SolutionSwitch/>`, title `The Switch`, desc `Increase your distribution by helping retailers grow`
  3. graphic `<SolutionShop/>`, title `The Shop`, desc `Access in detail all baskets in your category`
  4. graphic `<SolutionSurvey/>`, title `The Survey`, desc `Connect shoppers opinions to real purchase behavior`
  - Graphic wrapper: `w-[148px] h-[148px]` centered. The white bg panel fills the card top; the card sits on the #F1F1F1 section so the white panel is visible.

## Part B — Final CTA
- Big heading (mt-16 / pt-16, font-heading Archia, ~48px black weight 400, `text-4xl md:text-5xl` leading-tight), two lines:
  - `Know your consumers`
  - `better than everyone else`
- CTA `Get in touch` button below (mt-8): underlined black link `text-lg` with optional arrow, OR a bordered button. Match header style: underlined text link `Get in touch`. href="#".

## Part C — Footer
- Bottom area (mt-24 / pt-24): centered or left copyright `© 2026 All Rights Reserved` — font-sans ~16px black.
- Keep within the same #F1F1F1 section. `flex flex-col items-center` for the outer per original (`flex flex-col items-center bg-[#f1f1f1] py-12 xl:pt-24`). Final CTA and copyright centered.

NOTE: In the original the final CTA heading is left-aligned within max-w-6xl while copyright is centered at the very bottom. Keep heading left-aligned, copyright at bottom.

## Responsive
- Desktop: 4 cards in a row. Tablet: 2×2. Mobile: 1 column. CTA heading ~32px mobile.

## Imports
- `import { SolutionInnovation, SolutionSwitch, SolutionShop, SolutionSurvey } from "@/components/icons";`
- Verify `npx tsc --noEmit`.
