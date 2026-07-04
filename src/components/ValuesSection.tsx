const VALUES: { term: string; description: string }[] = [
  { term: "Size", description: "45.000 weekly active shoppers." },
  {
    term: "Depth",
    description: "Granular stock-keeping-unit (SKU) basket data.",
  },
  { term: "Speed", description: "Near real-time data." },
  {
    term: "Transparency",
    description: "Fully transparent commercial engagement model.",
  },
];

export function ValuesSection() {
  return (
    <section
      data-theme="dark"
      className="relative flex flex-col items-center overflow-hidden bg-black py-12 text-white md:h-[90vh] md:min-h-[600px] md:justify-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/gradient-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-60 blur-2xl"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-7 xl:px-0">
        <p className="mb-4 font-sans text-base text-white">Algori</p>
        <h2 className="font-heading text-3xl font-normal leading-tight text-white md:text-5xl">
          Consumer panel,
          <br />
          reimagined.
        </h2>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {VALUES.map(({ term, description }) => (
            <div key={term}>
              <p className="font-heading text-2xl font-bold text-white md:text-[28px]">
                {term}
              </p>
              <p className="mt-4 max-w-[200px] font-sans text-base text-white/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
