# TrustedBySection Specification

## Overview
- **Target file:** `src/components/TrustedBySection.tsx`
- **Interaction model:** static

## Layout
- Root `<section data-theme="light">`: `z-10 flex justify-center bg-white px-7 py-16 xl:px-0 xl:py-32`.
- Inner: `max-w-7xl w-full mx-auto`.
- Label: `Trusted and used by` — `font-sans`, ~24px, black, margin-bottom ~48px. Use `text-xl md:text-2xl mb-12`.
- Logo grid: 7 columns desktop. `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-x-8 gap-y-12 items-center`.
- Each logo: `next/image` (or `<img>`) from `/images/logos/<file>.svg`, rendered in grayscale/black, contained, height ~40px, centered. Use `className="h-10 w-auto object-contain mx-auto"`. Wrap each in a flex-center cell.
- Use plain `<img>` with width/height or `next/image` with fixed width={140} height={48} and `style={{objectFit:'contain'}}`. Simpler: `<img src=... alt=... className="max-h-10 w-auto object-contain" />`.

## Logos (in order) — file at `/images/logos/<file>`, alt = name
1. ahorra_mas.svg — Ahorramás
2. c_and_d_foods.svg — C&D Foods
3. campofrio.svg — Campofrío
4. carrefour.svg — Carrefour
5. cerealto.svg — Cerealto
6. cocacola.svg — Coca-Cola
7. dinosol.svg — DinoSol
8. elpozo.svg — ElPozo
9. eroski.svg — Eroski
10. europastry.svg — Europastry
11. familia_martinez.svg — Familia Martínez
12. iberian_premium_fruits.svg — Iberian Premium Fruits
13. ifa.svg — ifa
14. importaco.svg — Importaco
15. lindt.svg — Lindt
16. loreal.svg — L'Oréal
17. martinez_y_canto.svg — Martínez y Cantó
18. optimal_care.svg — Optimal Care
19. panamar.svg — Panamar
20. pascual.svg — Pascual
21. pepsico.svg — PepsiCo
22. tetra_pak.svg — Tetra Pak
23. uvesco.svg — Uvesco

## Responsive
- Desktop 7 cols; tablet 4; mobile 2-3. Logos maintain aspect, max height ~40px, generous vertical gap.

## Notes
- Logos are already grayscale/black SVGs. No filter needed.
- Verify `npx tsc --noEmit`.
