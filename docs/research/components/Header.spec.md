# Header + AnnouncementBar Specification

## Overview
- **Target file:** `src/components/Header.tsx` (exports `AnnouncementBar` and `Header`)
- **Interaction model:** scroll-driven text-color inversion (client component, "use client")

## AnnouncementBar
- Full width, bg black `#000`, height 48px, flex center, white text 14px.
- Text: `Algori secures €3.6M to scale its AI-driven, high-granularity shopper insights platform across Europe and Latin America` then an underlined link `Read more` (href="#", ml-2, whitespace-nowrap). font-sans (Inter).
- Static (scrolls away). On mobile, text sits with px-7 and may wrap/truncate — keep single line with truncate on very small if needed, otherwise allow wrap and center.

## Header
- Wrapper: `sticky top-0 z-50 mt-6 flex h-[80px] w-full justify-center px-7 bg-transparent`.
- Inner row: `flex w-full max-w-7xl flex-row items-center justify-between transition-colors duration-150`. This inner div gets the dynamic text color.
- Left: `<LogoIcon />` from `@/components/icons` (152×28, uses currentColor).
- Right: `<a href="#">Get in touch</a>` — underline, text-base (16px), inherits color, `font-sans`.

### Scroll-driven color (behavior)
- The header text color is BLACK over light sections and WHITE over dark sections.
- Implementation: give the header a prop `theme: "light" | "dark"` OR self-manage. RECOMMENDED: self-manage with a scroll listener that reads `document.elementsFromPoint(centerX, 40)` for the nearest element with a `data-theme` attribute, OR simpler: accept the page passes theme. **Use this approach:** listen to scroll, and for each registered section boundary decide. Simplest robust version: on scroll, check all elements with `[data-theme]`; find the one whose bounding rect spans y=40 (header line); set color accordingly.
- Apply: inner div className toggles `text-black` (light) or `text-white` (dark) with the existing `transition-colors duration-150`.
- Default before mount: `text-black` (hero is light mint).

```tsx
"use client";
import { useEffect, useState } from "react";
// on scroll: const els=[...document.querySelectorAll('[data-theme]')];
// find one where rect.top<=48 && rect.bottom>48 ; setTheme(el.dataset.theme)
```

## Responsive
- Desktop & mobile identical structure; px-7 padding. Logo scales down slightly on mobile is NOT needed (keep 152×28, maybe `h-6 w-auto` on mobile). AnnouncementBar text-sm on mobile.

## Notes
- Do NOT import next/font here. Fonts come from layout via CSS vars.
- Verify `npx tsc --noEmit` passes.
