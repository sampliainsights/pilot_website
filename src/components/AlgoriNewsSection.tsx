"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@/components/icons";

interface NewsCard {
  photo: string;
  logo: string;
  publisher: string;
  headline: string;
  date: string;
}

const NEWS_CARDS: readonly NewsCard[] = [
  {
    photo: "/images/news/photos/ain-founders.png",
    logo: "/images/news/logos/expansion.svg",
    publisher: "Expansión",
    headline: "Algori raises €3.6 million to grow in Europe and Latin America",
    date: "December 10, 2025",
  },
  {
    photo: "/images/news/stock/Bitmap-5.jpg",
    logo: "/images/news/logos/axios.svg",
    publisher: "Axios",
    headline: "Axios Pro Rata",
    date: "December 9, 2025",
  },
  {
    photo: "/images/news/photos/ain-founders.png",
    logo: "/images/news/logos/logo-cinco-dias.svg",
    publisher: "CincoDías",
    headline:
      "Startup Algori raises €3.6 million to bring its purchase data platform to Europe and Latin America",
    date: "December 9, 2025",
  },
  {
    photo: "/images/news/photos/tech-eu-algori.png",
    logo: "/images/news/logos/tech-eu.svg",
    publisher: "tech.eu",
    headline: "Algori raises €3.6M to scale its AI shopper insights platform globally",
    date: "December 9, 2025",
  },
  {
    photo: "/images/news/photos/el-referente-founders.jpg",
    logo: "/images/news/logos/el-referente.svg",
    publisher: "El Referente",
    headline: "Algori closes a €3.6 million funding round",
    date: "December 9, 2025",
  },
  {
    photo: "/images/news/photos/ain-founders.png",
    logo: "/images/news/logos/alimarket.svg",
    publisher: "Alimarket",
    headline: "Algori's consumer data and behavior platform absorbs €7.5M in funding",
    date: "December 9, 2025",
  },
  {
    photo: "/images/news/photos/inforetail-brand-evolution-2025.jpg",
    logo: "/images/news/logos/inforetail.svg",
    publisher: "infoRETAIL",
    headline:
      "Analysis of brand evolution in Mercadona, Carrefour, Lidl, DIA and Aldi",
    date: "October 8, 2025",
  },
  {
    photo: "/images/news/photos/financialfood-consumo-oct2025.jpg",
    logo: "/images/news/logos/financialfood.svg",
    publisher: "Financial Food",
    headline: "Consumer goods market grows 4.5% in volume over the last four months",
    date: "October 8, 2025",
  },
];

const SCROLL_AMOUNT = 340;

export function AlgoriNewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 1);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (!track) return;
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
  }, []);

  return (
    <section
      data-theme="light"
      className="z-10 flex flex-col bg-algori-gray py-16 lg:py-24 xl:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-7 xl:px-0">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl text-black">Algori in the news</h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scroll(-1)}
              disabled={!canScrollPrev}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-black/30 text-black transition-colors hover:bg-black/5 ${
                !canScrollPrev ? "cursor-default opacity-40 hover:bg-transparent" : ""
              }`}
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scroll(1)}
              disabled={!canScrollNext}
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-black/30 text-black transition-colors hover:bg-black/5 ${
                !canScrollNext ? "cursor-default opacity-40 hover:bg-transparent" : ""
              }`}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateScrollState}
          style={{ scrollbarWidth: "none" }}
          className="flex snap-x gap-5 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {NEWS_CARDS.map((card, index) => (
            <article
              key={`${card.publisher}-${index}`}
              className="flex w-[300px] shrink-0 snap-start flex-col bg-white"
            >
              <img
                src={card.photo}
                alt={card.headline}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <img
                  src={card.logo}
                  alt={card.publisher}
                  className="mb-4 h-6 w-auto max-w-[120px] object-contain"
                />
                <h3 className="mb-3 text-base text-black">{card.headline}</h3>
                <p className="text-sm text-black/40">{card.date}</p>
                <a
                  href="#"
                  className="group mt-6 inline-flex items-center gap-2 text-black underline"
                >
                  Read more
                  <ArrowRightIcon className="h-3.5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
