import { ArrowRightIcon, SortArrowIcon, ChevronDownIcon } from "@/components/icons";

interface SkuRow {
  rank: number;
  product: string;
  baskets: string;
}

const SKU_ROWS: SkuRow[] = [
  {
    rank: 1,
    product:
      "Tomate frito sin gluten HACENDADO, pack, brik, 3x400 g",
    baskets: "2,4 %",
  },
  {
    rank: 2,
    product:
      "Patatas fritas clásicas con aceites vegetales HACENDADO, cartucho, bolsa, 2x150 g",
    baskets: "2,4 %",
  },
  {
    rank: 3,
    product:
      "Pipas de girasol con cáscaras tostadas gigante aguasal HACENDADO, bolsa, 200 g",
    baskets: "2,2 %",
  },
  {
    rank: 4,
    product:
      "Pan de molde blanco familiar 26-28 rebanadas HACENDADO, bolsa, 820 g",
    baskets: "2,2 %",
  },
  {
    rank: 5,
    product: "Azúcar blanco HACENDADO, bolsa, 1 kg",
    baskets: "2,0 %",
  },
  {
    rank: 6,
    product:
      "Pan de molde blanco sin corteza HACENDADO, bolsa, 450 g",
    baskets: "1,8 %",
  },
  {
    rank: 7,
    product:
      "Croissant relleno de crema al cacao HACENDADO, paquete, 9 ud., 375 g",
    baskets: "1,8 %",
  },
  {
    rank: 8,
    product:
      "Aceite de girasol refinado 0,2º HACENDADO, pet, 1 L",
    baskets: "1,8 %",
  },
  {
    rank: 9,
    product:
      "Pan maxi hamburguesa HACENDADO, paquete, 4 uds. (300 g)",
    baskets: "1,8 %",
  },
  {
    rank: 10,
    product: "Leche entera HACENDADO, brik, 1 L",
    baskets: "1,6 %",
  },
];

interface FilterConfig {
  label: string;
  option: string;
}

const FILTERS: FilterConfig[] = [
  { label: "Category", option: "Alimentación seca" },
  { label: "Retailer", option: "MERCADONA" },
  { label: "Period", option: "Todas" },
];

export function GranularDataSection() {
  return (
    <section
      data-theme="light"
      className="relative flex flex-col items-center bg-white py-12 xl:h-[90vh] xl:min-h-[690px] xl:py-0 xl:justify-center"
    >
      <div className="max-w-7xl w-full mx-auto px-7 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT column */}
        <div>
          <p className="text-base text-black mb-4">Granular Data</p>
          <h2 className="font-heading font-normal text-black text-3xl md:text-5xl leading-tight">
            Most popular SKU&apos;s in Spain
          </h2>
          <p className="font-sans text-lg text-black max-w-[420px] mt-6">
            Top 10 SKU&apos;s ranking in selected categories and retailers for
            the last 6 weeks.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 mt-8 text-black underline"
          >
            Interested? Let&apos;s talk.
            <ArrowRightIcon className="h-4 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* RIGHT column — filters + table */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FILTERS.map((filter) => (
              <div key={filter.label}>
                <label className="block text-sm text-black/50 mb-2">
                  {filter.label}
                </label>
                <div className="relative">
                  <select
                    aria-label={filter.label}
                    defaultValue={filter.option}
                    className="w-full appearance-none bg-white border border-black/15 px-4 py-3 pr-10 text-base text-black cursor-pointer"
                  >
                    <option value={filter.option}>{filter.option}</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="mt-6 border-t border-black/15">
            {/* Header row */}
            <div className="grid grid-cols-[40px_1fr_auto] gap-3 py-2 border-b border-black/5 text-sm text-black/50">
              <div className="flex items-center gap-1">
                <span>Rank</span>
                <SortArrowIcon className="h-3 w-2 text-black/50" />
              </div>
              <div>Product</div>
              <div className="text-right">% Baskets</div>
            </div>

            {/* Rows */}
            <div className="max-h-[300px] overflow-y-auto">
              {SKU_ROWS.map((row) => (
                <div
                  key={row.rank}
                  className="grid grid-cols-[40px_1fr_auto] gap-3 py-2 border-b border-black/5 text-sm text-black"
                >
                  <div>{row.rank}</div>
                  <div>{row.product}</div>
                  <div className="text-right whitespace-nowrap">
                    {row.baskets}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-black/40 text-xs mt-3">
              * Text on the receipt in absence of identification of SKU level
              product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
