# GranularDataSection Specification

## Overview
- **Target file:** `src/components/GranularDataSection.tsx`
- **Interaction model:** static/mock (dropdowns are visual; no real filtering needed)

## Layout
- Root `<section data-theme="light">`: `relative flex flex-col items-center bg-white py-12 xl:h-[90vh] xl:min-h-[690px] xl:py-0 xl:justify-center`.
- Inner `max-w-7xl w-full mx-auto px-7 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center`.

## LEFT column
- Label `Granular Data` — font-sans ~16px black, mb-4.
- Heading `Most popular SKU's in Spain` — `font-heading` (Archia), ~48px black weight 400, `text-3xl md:text-5xl` leading-tight. (breaks to 2 lines)
- Body `Top 10 SKU's ranking in selected categories and retailers for the last 6 weeks.` — font-sans ~18px, black, `max-w-[420px] mt-6`.
- Link `Interested? Let's talk.` with `<ArrowRightIcon/>` — underlined, black, `group inline-flex items-center gap-2 mt-8`; arrow `h-4 w-5 transition-transform group-hover:translate-x-1`.

## RIGHT column — filters + table
- Three dropdowns in a row (`grid grid-cols-3 gap-4`), each: small label above (text-sm gray) + a select-styled box.
  - Category → `Alimentación seca`
  - Retailer → `MERCADONA`
  - Period → `Todas`
  - Box style: white bg, `border border-black/15`, radius 0 (sharp) or small, px-4 py-3, black text ~16px, chevron-down (`<ChevronDownIcon/>`) at right. Use a real `<select>` OR a styled div; a `<select>` with those single options is fine.
- Table below (`mt-6`, bordered top `border-t`):
  - Header row: `Rank` (with small `<SortArrowIcon/>` caret, text-black/50), `Product`, right `% Baskets`. text-sm gray.
  - Rows (rank | product | baskets). Scrollable area `max-h-[300px] overflow-y-auto`. Row: `grid grid-cols-[40px_1fr_auto] gap-3 py-2 border-b border-black/5 text-sm`.
    1. Tomate frito sin gluten HACENDADO, pack, brik, 3x400 g — 2,4 %
    2. Patatas fritas clásicas con aceites vegetales HACENDADO, cartucho, bolsa, 2x150 g — 2,4 %
    3. Pipas de girasol con cáscaras tostadas gigante aguasal HACENDADO, bolsa, 200 g — 2,2 %
    4. Pan de molde blanco familiar 26-28 rebanadas HACENDADO, bolsa, 820 g — 2,2 %
    5. Azúcar blanco HACENDADO, bolsa, 1 kg — 2,0 %
    6. Pan de molde blanco sin corteza HACENDADO, bolsa, 450 g — 1,8 %
    7. Croissant relleno de crema al cacao HACENDADO, paquete, 9 ud., 375 g — 1,8 %
    8. Aceite de girasol refinado 0,2º HACENDADO, pet, 1 L — 1,8 %
    9. Pan maxi hamburguesa HACENDADO, paquete, 4 uds. (300 g) — 1,8 %
    10. Leche entera HACENDADO, brik, 1 L — 1,6 %
  - Footer note (text-black/40 text-xs mt-3): `* Text on the receipt in absence of identification of SKU level product`

## Responsive
- Desktop 2-col; mobile stacks (text top, filters+table below). Dropdowns stack to 1 col on mobile (`grid-cols-1 sm:grid-cols-3`).

## Imports
- `import { ArrowRightIcon, SortArrowIcon, ChevronDownIcon } from "@/components/icons";`
- Verify `npx tsc --noEmit`.
