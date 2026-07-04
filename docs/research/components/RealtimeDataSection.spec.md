# RealtimeDataSection Specification

## Overview
- **Target file:** `src/components/RealtimeDataSection.tsx` ("use client" for optional counter animation)
- **Interaction model:** live-feel mock (static data acceptable; optional gentle counter increment)

## Layout
- Root `<section data-theme="dark">`: `relative flex justify-center overflow-hidden bg-black md:h-[90vh] md:min-h-[600px] py-16 md:py-0` text-white.
- Two-column on desktop: LEFT ~ 45% (text + counters + table), RIGHT ~55% (map with bar chart overlay). Use `max-w-7xl w-full mx-auto px-7 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center`.
- On mobile: stack — text/counters/table first, map below (or hide map, show a dark placeholder).

## LEFT column
- Label `Realtime Data` — font-sans ~16px, white, mb-4.
- Heading `Live data from our shoppers in Spain` — `font-heading` (Archia), ~48px, white, line-height ~1.1, weight 400. `text-3xl md:text-5xl`. max-w ~440px.
- Counters row (4 items, `grid grid-cols-4 gap-4 mt-10`):
  - `34 009 763` / label `All-time`
  - `105 870` / label `This week`
  - `12 558` / label `This day`
  - `324` / label `This hour`
  - Number style: font-heading ~28px white; label: text-sm gray (`text-white/50`) below.
  - Numbers use space as thousands separator. (Optional: increment "This hour"/"This day" every few seconds with setInterval; static is fine.)
- Live table (mt-8), `max-w-[420px]`:
  - Column headers (text-white/40, text-xs): `Date`  `Retailer`  (right) `Products Count`.
  - Rows (time, retailer, count). Row height ~44px. First row highlighted: **white bg, black text**, with a small **mint (#00DEAA) dot** at the right. Other rows: subtle dark gray bg (`bg-white/5`), white text.
  - Rows data:
    - 17:24:57 | MERCADONA | 8  (highlighted top row + mint dot)
    - 17:24:50 | MERCADONA | 15
    - 17:24:48 | MERCADONA | 16
    - 17:24:34 | MERCADONA | 2
    - 17:24:21 | MERCADONA | 5
  - Layout each row: `flex justify-between px-4 py-2 items-center`, time and retailer on left (gap), count on right.

## RIGHT column — Map + bar chart
- Do NOT integrate Mapbox. Use a dark static backdrop: a `div` with `bg-[#0a0a0a]` and subtle radial dots, OR just a very dark panel. Optionally place a faint map-of-Spain feel via scattered blurred white dots (decorative, low opacity). Keep it simple and dark.
- Overlay horizontal bar chart (bottom-left of map area), list of retailers each with a label + horizontal bar:
  - EROSKI, AHORRAMAS, ALCAMPO, ALDI, CONSUM, CARREFOUR, GRUPO DIA, LIDL, **MERCADONA**, OTHER
  - Bars gray (`bg-white/30`) except **MERCADONA = mint #00DEAA** and it's the longest. Widths (relative %): EROSKI 10, AHORRAMAS 8, ALCAMPO 6, ALDI 9, CONSUM 12, CARREFOUR 11, GRUPO DIA 10, LIDL 22, MERCADONA 60, OTHER 30.
  - Labels: text-white/70 text-xs, right-aligned in a fixed-width column; bar to the right.
- Small "© Mapbox © OpenStreetMap" credit text bottom-right, text-white/30 text-[10px].

## Responsive
- Desktop: 2-col, map fills right, height 90vh.
- Tablet/Mobile: stack; map becomes a shorter dark panel (~300px) below the table, or hidden with just the bar chart shown.

## Imports
- none required beyond React. Verify `npx tsc --noEmit`.
