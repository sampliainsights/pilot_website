import { HeroGIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section
      data-theme="light"
      className="bg-algori relative -mt-[104px] flex min-h-[100svh] w-full flex-col justify-between overflow-hidden pt-[152px]"
    >
      <HeroGIcon
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 z-0 h-auto w-[70vw] max-w-[900px] -translate-y-1/2 text-white/50 opacity-60 md:opacity-100"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-7 xl:px-0">
        <h1 className="font-heading text-5xl font-normal text-black md:text-6xl xl:text-[72px] xl:leading-[90px]">
          We are Algori,
          <br />
          Consumer panel,
          <br />
          reimagined.
        </h1>
        <p className="mt-6 max-w-[672px] font-sans text-lg text-black md:text-2xl md:leading-8">
          Improving FMCG growth with the fastest and most granular insights from
          45,000 shoppers in Spain.
        </p>
      </div>
    </section>
  );
}
