export type SectionTheme = "light" | "dark";

export interface BrandLogo {
  name: string;
  file: string; // path under /images/logos/
}

export interface LiveFeedRow {
  time: string;
  retailer: string;
  count: number;
}

export interface RetailerBar {
  name: string;
  value: number; // 0..100 relative width
  highlight?: boolean;
}

export interface SkuRow {
  rank: number;
  product: string;
  baskets: string; // e.g. "2,4 %"
}

export interface NewsItem {
  publisherLogo: string; // path under /images/news/logos/
  publisherName: string;
  image: string; // path under /images/news/photos or /stock
  headline: string;
  date: string;
  href: string;
}

export interface ValueItem {
  term: string;
  description: string;
}

export interface FmcgColumn {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export interface SolutionCard {
  title: string;
  description: string;
  graphic: "innovation" | "switch" | "shop" | "survey";
}
