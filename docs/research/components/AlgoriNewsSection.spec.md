# AlgoriNewsSection Specification

## Overview
- **Target file:** `src/components/AlgoriNewsSection.tsx` ("use client" — carousel)
- **Interaction model:** click-driven horizontal carousel (prev/next circular arrow buttons)

## Layout
- Root `<section data-theme="light">`: `z-10 flex flex-col bg-algori-gray py-16 lg:py-24 xl:py-32` (bg #F1F1F1).
- Inner `max-w-7xl w-full mx-auto px-7 xl:px-0`.
- Header row: `flex items-center justify-between mb-10`.
  - Left: `Algori in the news` — font-sans ~24px black.
  - Right: two circular buttons (prev, next). Each `h-11 w-11 rounded-full border border-black/30 flex items-center justify-center`. Prev uses `<ChevronLeftIcon/>`, next `<ChevronRightIcon/>`. Prev disabled at start (opacity-40, cursor-default). Hover: bg-black/5.

## Carousel
- Horizontal scroll track: `flex gap-5 overflow-x-auto scroll-smooth snap-x` (hide scrollbar). Prev/next buttons scroll the track by ~1 card width (`ref.scrollBy({left: ±340, behavior:'smooth'})`). Update prev/next disabled state on scroll.
- Card width: `w-[300px] shrink-0 snap-start`. Card: white bg (`bg-white`), flex-col.
  - Image: top, `aspect-[16/10] w-full object-cover` from `/images/news/photos/<file>` or `/images/news/stock/<file>`.
  - Body padding `p-5`:
    - Publisher logo: `<img>` from `/images/news/logos/<file>`, `h-6 w-auto object-contain mb-4` (max-w ~120px).
    - Headline: font-sans ~16px black, ~3 lines, mb-3.
    - Date: text-black/40 text-sm.
    - `Read more` link (mt-6) with `<ArrowRightIcon/>`: underlined black, `group inline-flex items-center gap-2`; arrow `h-3.5 w-5 transition-transform group-hover:translate-x-1`.

## Cards data (in order)
1. photo `photos/ain-founders.png`, logo `logos/expansion.svg` (Expansión), headline `Algori raises €3.6 million to grow in Europe and Latin America`, date `December 10, 2025`
2. photo `stock/Bitmap-5.jpg`, logo `logos/axios.svg` (Axios), headline `Axios Pro Rata`, date `December 9, 2025`
3. photo `photos/ain-founders.png`, logo `logos/logo-cinco-dias.svg` (CincoDías), headline `Startup Algori raises €3.6 million to bring its purchase data platform to Europe and Latin America`, date `December 9, 2025`
4. photo `photos/tech-eu-algori.png`, logo `logos/tech-eu.svg` (tech.eu), headline `Algori raises €3.6M to scale its AI shopper insights platform globally`, date `December 9, 2025`
5. photo `photos/el-referente-founders.jpg`, logo `logos/el-referente.svg` (El Referente), headline `Algori closes a €3.6 million funding round`, date `December 9, 2025`
6. photo `photos/ain-founders.png`, logo `logos/alimarket.svg` (Alimarket), headline `Algori's consumer data and behavior platform absorbs €7.5M in funding`, date `December 9, 2025`
7. photo `photos/inforetail-brand-evolution-2025.jpg`, logo `logos/inforetail.svg` (infoRETAIL), headline `Analysis of brand evolution in Mercadona, Carrefour, Lidl, DIA and Aldi`, date `October 8, 2025`
8. photo `photos/financialfood-consumo-oct2025.jpg`, logo `logos/financialfood.svg` (Financial Food), headline `Consumer goods market grows 4.5% in volume over the last four months`, date `October 8, 2025`

All `Read more` href="#".

## Responsive
- Desktop: ~4 cards visible. Tablet: ~2-3. Mobile: ~1.2 cards (w-[300px] fixed, horizontal scroll). Arrows always visible.
- Hide native scrollbar: add inline style `scrollbarWidth:'none'` and a `[&::-webkit-scrollbar]:hidden` utility.

## Imports
- `import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from "@/components/icons";`
- Verify `npx tsc --noEmit`.
