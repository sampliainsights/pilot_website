import { ArrowRightIcon } from "@/components/icons";

export function LiveMarketPulseSection() {
  return (
    <section
      data-theme="dark"
      className="relative flex justify-center overflow-hidden bg-[#232A2D] bg-gradient-to-b from-black to-[#232A2D] px-7 py-16 text-white xl:px-0 xl:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* LEFT column */}
        <div>
          <p className="mb-4 text-base text-white">Live market pulse</p>
          <h2 className="font-heading text-4xl font-normal leading-[1.05] text-white md:text-5xl xl:text-[56px]">
            From period close
            <br />
            to insights
            <br />
            in 4 days
          </h2>
          <p className="mt-8 max-w-[520px] text-lg text-white/80">
            Join hundreds of FMCG companies participating live. We analyze the
            period just 4 days after it closes—free insights, first in the
            market. Engage, interact, and adapt faster.
          </p>
          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-3 rounded-none bg-algori px-5 py-4 text-base text-black"
          >
            Secure your spot for next webinar
            <ArrowRightIcon className="h-4 w-5 text-black transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-white/60">
            Join 100+ peers from Danone, Nestle, etc.
          </p>
        </div>

        {/* RIGHT column — webinar video */}
        <div>
          <iframe
            src="https://www.youtube.com/embed/nxNcjxcir3w"
            className="w-full aspect-video"
            title="Algori webinar"
            allowFullScreen
            loading="lazy"
          />
          <p className="mt-4 text-sm text-white/70">
            Missed the last one?{" "}
            <a href="#" className="underline">
              Watch Replay
            </a>{" "}
            or{" "}
            <a href="#" className="underline">
              Download Slide Deck
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
