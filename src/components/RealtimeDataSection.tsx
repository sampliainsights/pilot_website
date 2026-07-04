const counters = [
  { value: "34 009 763", label: "All-time" },
  { value: "105 870", label: "This week" },
  { value: "12 558", label: "This day" },
  { value: "324", label: "This hour" },
] as const;

const tableRows = [
  { time: "17:24:57", retailer: "MERCADONA", count: 8, highlighted: true },
  { time: "17:24:50", retailer: "MERCADONA", count: 15, highlighted: false },
  { time: "17:24:48", retailer: "MERCADONA", count: 16, highlighted: false },
  { time: "17:24:34", retailer: "MERCADONA", count: 2, highlighted: false },
  { time: "17:24:21", retailer: "MERCADONA", count: 5, highlighted: false },
] as const;

const retailers = [
  { name: "EROSKI", width: 10, mint: false },
  { name: "AHORRAMAS", width: 8, mint: false },
  { name: "ALCAMPO", width: 6, mint: false },
  { name: "ALDI", width: 9, mint: false },
  { name: "CONSUM", width: 12, mint: false },
  { name: "CARREFOUR", width: 11, mint: false },
  { name: "GRUPO DIA", width: 10, mint: false },
  { name: "LIDL", width: 22, mint: false },
  { name: "MERCADONA", width: 60, mint: true },
  { name: "OTHER", width: 30, mint: false },
] as const;

// Decorative scattered dots giving a faint map-of-Spain feel.
const mapDots = [
  { top: "22%", left: "38%" },
  { top: "30%", left: "55%" },
  { top: "35%", left: "28%" },
  { top: "42%", left: "62%" },
  { top: "48%", left: "45%" },
  { top: "52%", left: "70%" },
  { top: "58%", left: "33%" },
  { top: "63%", left: "58%" },
  { top: "68%", left: "48%" },
  { top: "40%", left: "78%" },
  { top: "28%", left: "72%" },
  { top: "72%", left: "40%" },
] as const;

export function RealtimeDataSection() {
  return (
    <section
      data-theme="dark"
      className="relative flex justify-center overflow-hidden bg-black py-16 text-white md:h-[90vh] md:min-h-[600px] md:py-0"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-7 md:grid-cols-2 xl:px-0">
        {/* LEFT column */}
        <div>
          <p className="mb-4 font-sans text-base text-white">Realtime Data</p>
          <h2 className="max-w-[440px] font-heading text-3xl font-normal leading-[1.1] text-white md:text-5xl">
            Live data from our shoppers in Spain
          </h2>

          {/* Counters */}
          <div className="mt-10 grid grid-cols-4 gap-4">
            {counters.map((counter) => (
              <div key={counter.label}>
                <div className="font-heading text-[28px] leading-none text-white">
                  {counter.value}
                </div>
                <div className="mt-2 font-sans text-sm text-white/50">
                  {counter.label}
                </div>
              </div>
            ))}
          </div>

          {/* Live table */}
          <div className="mt-8 max-w-[420px]">
            <div className="flex items-center justify-between px-4 pb-2 font-sans text-xs text-white/40">
              <div className="flex gap-6">
                <span>Date</span>
                <span>Retailer</span>
              </div>
              <span>Products Count</span>
            </div>

            <div className="flex flex-col gap-1">
              {tableRows.map((row) => (
                <div
                  key={row.time}
                  className={`flex items-center justify-between rounded-md px-4 py-2 font-sans text-sm ${
                    row.highlighted
                      ? "bg-white text-black"
                      : "bg-white/5 text-white"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="tabular-nums">{row.time}</span>
                    <span>{row.retailer}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="tabular-nums">{row.count}</span>
                    {row.highlighted && (
                      <span
                        aria-hidden="true"
                        className="bg-algori inline-block h-2 w-2 rounded-full"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT column — decorative map + bar chart */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] md:h-full md:rounded-none">
          {/* Radial dot texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Faint scattered map dots */}
          {mapDots.map((dot, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute h-2 w-2 rounded-full bg-white/20 blur-[1px]"
              style={{ top: dot.top, left: dot.left }}
            />
          ))}

          {/* Bar chart overlay */}
          <div className="absolute bottom-6 left-6 w-[260px] max-w-[70%]">
            <div className="flex flex-col gap-2">
              {retailers.map((retailer) => (
                <div key={retailer.name} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-right font-sans text-xs text-white/70">
                    {retailer.name}
                  </span>
                  <div className="h-3 flex-1">
                    <div
                      className={`h-full rounded-sm ${
                        retailer.mint ? "bg-algori" : "bg-white/30"
                      }`}
                      style={{ width: `${retailer.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map credit */}
          <div className="absolute bottom-2 right-3 font-sans text-[10px] text-white/30">
            © Mapbox © OpenStreetMap
          </div>
        </div>
      </div>
    </section>
  );
}
