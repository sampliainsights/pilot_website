export function ImproveFmcgSection() {
  return (
    <section
      data-theme="light"
      className="bg-algori flex justify-center py-16 text-black md:h-[800px] md:items-center md:py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-7 xl:px-0">
        <p className="mb-8 font-sans text-base text-black">Improve FMCG Growth</p>

        <div className="grid grid-cols-1 border border-black md:grid-cols-3">
          {/* Column 1 */}
          <div className="border-black p-8 first:border-l-0 md:min-h-[460px] md:border-l md:p-10">
            <h2 className="font-heading text-3xl font-normal leading-tight text-black md:text-[40px]">
              Custom
              <br />
              Answers
            </h2>
            <p className="mt-8 max-w-[280px] font-sans text-base text-black">
              Tailored answers to custom business questions delivered by our
              skilled industry team
            </p>
          </div>

          {/* Column 2 */}
          <div className="border-black p-8 first:border-l-0 md:min-h-[460px] md:border-l md:p-10">
            <h2 className="font-heading text-3xl font-normal leading-tight text-black md:text-[40px]">
              Insights
              <br />
              Solutions
            </h2>
            <p className="mt-8 max-w-[280px] font-sans text-base text-black">
              Access SKU-level insights to relevant business questions online at
              any time via Algori&apos;s Insights Platform together with expert
              support
            </p>
          </div>

          {/* Column 3 — dimmed, with "Coming soon" badge */}
          <div className="relative border-black p-8 first:border-l-0 md:min-h-[460px] md:border-l md:p-10">
            <span className="bg-algori absolute -top-3 left-6 rounded-full border border-black px-4 py-1 text-sm text-black">
              Coming soon
            </span>
            <h2 className="font-heading text-3xl font-normal leading-tight text-black/40 md:text-[40px]">
              Self-Service
              <br />
              platform
            </h2>
            <p className="mt-8 max-w-[280px] font-sans text-base text-black/40">
              Fully automated Software- as-a-Service solution, delivering answers
              to your business questions faster than ever before
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
