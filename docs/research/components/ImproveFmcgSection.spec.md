# ImproveFmcgSection Specification

## Overview
- **Target file:** `src/components/ImproveFmcgSection.tsx`
- **Interaction model:** static

## Layout
- Root `<section data-theme="light">`: `bg-algori flex justify-center md:h-[800px] md:items-center py-16 md:py-0` (bg #00DEAA, black text).
- Inner `max-w-7xl w-full mx-auto px-7 xl:px-0`.
- Label `Improve FMCG Growth` — font-sans ~16px black, mb-8.
- 3-column grid inside a bordered box:
  - Outer: `border border-black` (thin ~1px black). `grid grid-cols-1 md:grid-cols-3`.
  - Columns separated by thin black borders: each column `border-black md:border-l first:border-l-0` (vertical dividers between). Column padding `p-8 md:p-10`, min-height ~460px (`md:min-h-[460px]`).
  - Each column: heading (font-heading Archia, ~40px weight 400, `text-3xl md:text-[40px]` leading-tight) + description (font-sans ~16px, mt-8, max-w ~280px).

## Columns
1. Heading `Custom Answers` (2 lines: "Custom" / "Answers"), desc `Tailored answers to custom business questions delivered by our skilled industry team`
2. Heading `Insights Solutions` (2 lines: "Insights" / "Solutions"), desc `Access SKU-level insights to relevant business questions online at any time via Algori's Insights Platform together with expert support`
3. Heading `Self-Service platform` (2 lines: "Self-Service" / "platform"), desc `Fully automated Software- as-a-Service solution, delivering answers to your business questions faster than ever before`
   - **Dimmed:** column 3 text uses `text-black/40` (both heading and desc).
   - **"Coming soon" badge:** a small pill straddling the TOP border of column 3. Position it absolutely at the top edge, horizontally offset ~24px from the column's left. Pill style: `bg-algori` (mint, same as section so it "cuts" the border), `border border-black`, `rounded-full px-4 py-1 text-sm text-black`, text `Coming soon`. Use relative positioning on col 3 and `absolute -top-3 left-6`.

## Responsive
- Desktop: 3 columns with vertical dividers.
- Mobile: stack to 1 column; dividers become horizontal (top borders between). "Coming soon" badge stays on the (now top) border of col 3.

## Imports
- none. Verify `npx tsc --noEmit`.
