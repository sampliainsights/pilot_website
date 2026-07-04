"use client";

import { useEffect, useState } from "react";
import { LogoIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div className="flex h-12 w-full items-center justify-center bg-black px-7 text-center text-sm font-sans text-white sm:text-[14px]">
      <span>
        Algori secures &euro;3.6M to scale its AI-driven, high-granularity
        shopper insights platform across Europe and Latin America
        <a href="#" className="ml-2 whitespace-nowrap underline">
          Read more
        </a>
      </span>
    </div>
  );
}

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const HEADER_LINE = 48;

    const updateTheme = () => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-theme]"),
      );
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= HEADER_LINE && rect.bottom > HEADER_LINE) {
          const value = el.dataset.theme;
          if (value === "light" || value === "dark") {
            setTheme(value);
          }
          break;
        }
      }
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 mt-6 flex h-[80px] w-full justify-center bg-transparent px-7">
      <div
        className={cn(
          "flex w-full max-w-7xl flex-row items-center justify-between transition-colors duration-150",
          theme === "dark" ? "text-white" : "text-black",
        )}
      >
        <a href="#" aria-label="Algori home">
          <LogoIcon className="h-6 w-auto sm:h-7" />
        </a>
        <a href="#" className="text-base font-sans underline">
          Get in touch
        </a>
      </div>
    </header>
  );
}
