# Algori.ai — Behavior Bible

## Global
- Native browser scroll. No smooth-scroll library. No scroll-snap.
- No dark/light toggle. Sections have fixed themes.

## Header (sticky)
- **INTERACTION MODEL: scroll-driven color inversion.**
- Sticky `top-0`, transparent bg, `mt-6`. Inner row has `transition-colors duration-150`.
- Text/logo color = **black** while a light section (mint, white, gray) is behind the header; **white** while a dark section (RealtimeData black, LiveMarketPulse #232A2D, Values black) is behind it.
- Implement via IntersectionObserver on each section (sentinel at header line) OR scroll listener mapping scrollY ranges → theme. Each section declares `data-theme="dark|light"`; header reads the section currently under it.
- "Get in touch" link: underlined (text-decoration: underline), font-size 16px, inherits current color.

## Announcement bar
- Static (scrolls away with page). Not sticky.

## Hero
- Static. Big "G" stroked outline SVG positioned absolute right, partially clipped (overflow-hidden). stroke=white at ~0.5 opacity over mint bg (reads as slightly-lighter mint lines).
- Heading `We are Algori, Consumer panel, reimagined.` — Archia, 72px / line-height 90px, weight 400, black. (three lines via `<br>` or block spans).
- Subtitle — 24px / 32px, black, max-width 672px.

## RealtimeData (mock the live feel)
- Counters (34M all-time, 105k week, 12k day, 324 hour) — original increments live. Clone: static values OR a lightweight setInterval incrementing them. Acceptable to keep static.
- Live table: rows of time / retailer / count; top row highlighted white with a mint dot. Original prepends rows over time. Clone: static list, top row highlighted styling.
- Map: original is Mapbox GL (heatmap of Spain). Clone: use a static dark map image OR a styled dark placeholder; NOT critical to be interactive. Retailer horizontal bar chart with MERCADONA bar in mint (#00DEAA), others gray.

## GranularData
- 3 dropdowns (Category / Retailer / Period) — styled selects, white bg, thin border, chevron-down. Static (mock, no real filtering needed).
- SKU ranked table: Rank | Product | % Baskets, ~10 rows, scrollable region. Header row with sort caret on Rank.
- "Interested? Let's talk. →" underlined link with ArrowRightIcon; arrow translates right on hover (`group-hover:translate-x-1`).

## LiveMarketPulse
- Mint CTA button "Secure your spot for next webinar →": mint bg (#00DEAA), black text, padding ~16px 20px, sharp corners (radius 0), ArrowRightIcon. Hover: arrow translate-x.
- Right: YouTube embed (thumbnail + play). Clone: iframe `https://www.youtube.com/embed/nxNcjxcir3w` or thumbnail image with play overlay.
- "Watch Replay" / "Download Slide Deck" — underlined links.

## AlgoriNews
- **INTERACTION MODEL: click-driven horizontal carousel** (prev/next circular arrow buttons top-right). Cards scroll horizontally. ~4 cards visible on desktop.
- Card: white bg, image top (~16:9), publisher logo, headline (Archia-ish serif for some like Expansión/CincoDías because those are the publisher wordmark logos, not text), date (gray), "Read more →".
- Arrows: circular outline buttons (prev often disabled/faded at start).

## Values
- Static. Black bg with `gradient-bg.png` blurred blob overlay (subtle green glow).
- Heading "Consumer panel, reimagined." Archia, white. 4-col row: bold term (Archia ~24px) + description below.

## ImproveFMCG
- Static. Mint bg. 3-col grid separated by thin black vertical borders, outer thin black border box.
- Col headings Archia ~40px. Third col ("Self-Service platform") text is dimmed (opacity ~0.4 black) with "Coming soon" pill badge straddling the top border (black outline pill, mint fill, black text).

## Solutions + Final CTA
- 4 white cards, each: centered 148×148 gradient geometric SVG (mint + gray/black), title (Archia ~24px), description.
- Card hover: subtle (shadow/lift) — verify; keep minimal.
- Final CTA heading "Know your consumers better than everyone else" Archia 48px. + "Get in touch" button + copyright.

## Hover states (general)
- Arrow links: `group-hover:translate-x-1` on the arrow icon, transition-transform.
- Underlined text links stay underlined.

## Responsive (1440 / 768 / 390)
- Desktop: multi-column layouts as described (7-col logos, 4-col values/solutions, 3-col FMCG, 2-col split sections).
- Tablet (768): 2-col grids; split sections stack; logos ~3-4 col.
- Mobile (390): single column stacks everywhere; hero text smaller (~40-48px); dropdowns full-width; carousel 1 card; padding px-7.
