# LiveMarketPulseSection Specification

## Overview
- **Target file:** `src/components/LiveMarketPulseSection.tsx`
- **Interaction model:** static (YouTube embed on right)

## Layout
- Root `<section data-theme="dark">`: `relative flex justify-center overflow-hidden px-7 py-16 xl:px-0 xl:py-32` with bg `#232A2D`. Add a subtle darker gradient (`bg-gradient-to-b from-black to-[#232A2D]`) — original is dark with slight gradient. Use `bg-[#232A2D]`. text-white.
- Inner `max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center`.

## LEFT column
- Label `Live market pulse` — font-sans ~16px white, mb-4.
- Heading (font-heading Archia, white, ~56px, weight 400, line-height ~1.05), three lines:
  - `From period close`
  - `to insights`
  - `in 4 days`
  - `text-4xl md:text-5xl xl:text-[56px]`.
- Body (font-sans ~18px, `text-white/80`, max-w-[520px], mt-8): `Join hundreds of FMCG companies participating live. We analyze the period just 4 days after it closes—free insights, first in the market. Engage, interact, and adapt faster.`
- CTA button (mt-10): `Secure your spot for next webinar` + `<ArrowRightIcon/>`.
  - Style: **mint bg #00DEAA**, black text, `px-5 py-4`, sharp corners (rounded-none), font-sans ~16px, inline-flex items-center gap-3, `group`; arrow `h-4 w-5 transition-transform group-hover:translate-x-1 text-black`.
- Note below (text-white/60 text-sm mt-4): `Join 100+ peers from Danone, Nestle, etc.`

## RIGHT column — webinar video
- 16:9 embed. Use an `<iframe>` `https://www.youtube.com/embed/nxNcjxcir3w` with `className="w-full aspect-video"` title="Algori webinar", `allowFullScreen`, loading="lazy".
- Below the video (mt-4, text-white/70 text-sm): `Missed the last one? ` + underlined link `Watch Replay` + ` or ` + underlined link `Download Slide Deck`.

## Responsive
- Desktop 2-col; mobile stacks (text top, video below). Heading ~36px mobile.

## Imports
- `import { ArrowRightIcon } from "@/components/icons";`
- Verify `npx tsc --noEmit`.
