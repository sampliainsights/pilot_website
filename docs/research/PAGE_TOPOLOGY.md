# Algori.ai — Page Topology

Single long-scroll landing page. Native scroll (no Lenis/smooth-scroll lib). `scroll-behavior: auto`.

## Global layout
- Body bg black (#000). Content sits in full-width colored blocks stacked vertically.
- **Announcement bar** (static, top): black bg, 48px tall, centered white text "Algori secures €3.6M to scale its AI-driven, high-granularity shopper insights platform across Europe and Latin America" + underlined "Read more".
- **Header** (sticky top-0, z-50, mt-6, h-80px, bg-transparent): inner row `max-w-7xl` with `transition-colors duration-150`. Left = ALGORI logo SVG (152×28). Right = "Get in touch" underlined link. Text color toggles: **black** over light sections, **white** over dark sections.
- Hero uses `-mt-[104px]` to pull up under the header/announcement.
- Section content containers: `max-w-7xl` (1280px) or `max-w-6xl` (1152px), horizontal padding `px-7` (28px) mobile, `xl:px-0`.

## Sections (top → bottom)
| # | Name | bg | height | interaction |
|---|------|----|--------|-------------|
| 1 | Hero | #00DEAA mint | ~800px | static; large stroked "G" outline SVG (516×516) bleeding off right |
| 2 | TrustedBy | white | ~692px | static; "Trusted and used by" + 7-col grid of 23 grayscale brand logos |
| 3 | RealtimeData | black | ~760px (md:90vh) | live/animated; heading + 4 counters + live table (left) + Mapbox map w/ retailer bar chart (right) |
| 4 | GranularData | white | ~743px (xl:90vh) | static/mock; heading + "Interested? Let's talk →" (left) + 3 dropdowns + ranked SKU table (right) |
| 5 | LiveMarketPulse | #232A2D dark gradient | ~776px | static; heading + body + mint CTA "Secure your spot for next webinar →" + note; right = YouTube embed (nxNcjxcir3w) + "Watch Replay / Download Slide Deck" |
| 6 | AlgoriNews | #F1F1F1 gray | ~824px | carousel (Swiper-like); "Algori in the news" + prev/next circular arrows + horizontally-scrolling white cards |
| 7 | Values | black + gradient-bg.png blur | ~800px | static; "Algori" label + "Consumer panel, reimagined." + 4 cols (Size/Depth/Speed/Transparency) |
| 8 | ImproveFMCG | #00DEAA mint | ~800px | static; "Improve FMCG Growth" + 3-col bordered grid (Custom Answers / Insights Solutions / Self-Service platform [grayed + "Coming soon" badge]) |
| 9 | Solutions + FinalCTA + Footer | #F1F1F1 gray | ~1096px | static; "Most popular solutions" + 4 white cards w/ gradient graphics (Innovation/Switch/Shop/Survey) + big CTA "Know your consumers better than everyone else" + "Get in touch" + "© 2026 All Rights Reserved" |

## Assets
- `/public/images/logos/*.svg` — 23 brand logos (TrustedBy)
- `/public/images/news/logos/*` — 29 publisher logos
- `/public/images/news/photos/*` + `/news/stock/Bitmap*.jpg` — news card images
- `/public/images/gradient-bg.png` — blurred green gradient (Values bg)
- Inline SVGs → `src/components/icons.tsx`: LogoIcon(152×28), HeroGIcon(516×516), ArrowRightIcon(36×22), ChevronLeftIcon/ChevronRightIcon(24×24), SortArrowIcon(14×22), 4 solution graphics (148×148).

## Fonts
- **Archia** (self-hosted woff2, weight 400) → display/headings. Distinctive geometric sans.
- **Inter** (variable 100–900) → body/UI text, labels, tables.
