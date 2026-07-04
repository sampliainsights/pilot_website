const LOGOS: { file: string; name: string }[] = [
  { file: "ahorra_mas.svg", name: "Ahorramás" },
  { file: "c_and_d_foods.svg", name: "C&D Foods" },
  { file: "campofrio.svg", name: "Campofrío" },
  { file: "carrefour.svg", name: "Carrefour" },
  { file: "cerealto.svg", name: "Cerealto" },
  { file: "cocacola.svg", name: "Coca-Cola" },
  { file: "dinosol.svg", name: "DinoSol" },
  { file: "elpozo.svg", name: "ElPozo" },
  { file: "eroski.svg", name: "Eroski" },
  { file: "europastry.svg", name: "Europastry" },
  { file: "familia_martinez.svg", name: "Familia Martínez" },
  { file: "iberian_premium_fruits.svg", name: "Iberian Premium Fruits" },
  { file: "ifa.svg", name: "ifa" },
  { file: "importaco.svg", name: "Importaco" },
  { file: "lindt.svg", name: "Lindt" },
  { file: "loreal.svg", name: "L'Oréal" },
  { file: "martinez_y_canto.svg", name: "Martínez y Cantó" },
  { file: "optimal_care.svg", name: "Optimal Care" },
  { file: "panamar.svg", name: "Panamar" },
  { file: "pascual.svg", name: "Pascual" },
  { file: "pepsico.svg", name: "PepsiCo" },
  { file: "tetra_pak.svg", name: "Tetra Pak" },
  { file: "uvesco.svg", name: "Uvesco" },
];

export function TrustedBySection() {
  return (
    <section
      data-theme="light"
      className="z-10 flex justify-center bg-white px-7 py-16 xl:px-0 xl:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-12 font-sans text-xl text-black md:text-2xl">
          Trusted and used by
        </p>
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
          {LOGOS.map(({ file, name }) => (
            <div key={file} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/logos/${file}`}
                alt={name}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
