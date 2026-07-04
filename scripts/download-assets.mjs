// Downloads all image assets from algori.ai to public/images/
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const BASE = "https://algori.ai";

const brandLogos = [
  "ahorra_mas","c_and_d_foods","campofrio","carrefour","cerealto","cocacola",
  "dinosol","elpozo","eroski","europastry","familia_martinez","iberian_premium_fruits",
  "ifa","importaco","lindt","loreal","martinez_y_canto","optimal_care","panamar",
  "pascual","pepsico","tetra_pak","uvesco",
].map((n) => ({ url: `/logos/${n}.svg`, out: `public/images/logos/${n}.svg` }));

const newsLogos = [
  "expansion.svg","axios.svg","logo-cinco-dias.svg","tech-eu.svg","el-referente.svg",
  "alimarket.svg","inforetail.svg","financialfood.svg","retailtechinnovationhub.svg",
  "webcapitalriesgo.png","food-retail.svg","thesaasnews.svg","ain-capital.svg",
  "capital-riesgo.png","merca2.svg","techfundingnews.svg","mundostartup.svg",
  "aithority.png","freshplaza.svg","theobjective.svg","indisa.jpg","tpvnews.png",
  "sonitron.svg","ipmark.svg","hiretail.svg","justretail.svg","retailactual.png",
  "bigdatamagazine.svg","itespresso.svg",
].map((n) => ({ url: `/news/logos/${n}`, out: `public/images/news/logos/${n}` }));

const newsPhotos = [
  "ain-founders.png","tech-eu-algori.png","el-referente-founders.jpg",
  "inforetail-brand-evolution-2025.jpg","financialfood-consumo-oct2025.jpg",
  "inforetail-ahorramas-2025.jpg","financialfood-cesta-jul2024.jpg",
  "financialfood-consumo-feb2024.jpg","financialfood-familia-jan2024.jpg",
  "financialfood-carrefour-dec2023.jpg","foodretail-mercadona-lidl.jpg",
  "thesaasnews-seed.png","capital-riesgo-founders.jpg","merca2-mercadona.jpg",
  "rtih-founders.jpg","techfundingnews-founders.jpg","mundostartup-founders.jpg",
  "aithority-algori.jpg","inforetail-top10-2023.jpg","theobjective-lidl.jpg",
  "inforetail-battle-2023.jpg","financialfood-consumo-jul2023.jpg",
  "bigdatamagazine-datos.jpg","inforetail-algori-born.jpg",
  "foodretail-algori-startup.jpg","itespresso-algori-logo.png",
].map((n) => ({ url: `/news/downloaded_images/${n}`, out: `public/images/news/photos/${n}` }));

const stockImages = ["Bitmap.jpg","Bitmap-1.jpg","Bitmap-2.jpg","Bitmap-3.jpg","Bitmap-4.jpg","Bitmap-5.jpg"]
  .map((n) => ({ url: `/news/stock_images/${n}`, out: `public/images/news/stock/${n}` }));

const misc = [
  { url: "/_next/static/media/gradient-bg.1847ee1e.png", out: "public/images/gradient-bg.png" },
];

const all = [...brandLogos, ...newsLogos, ...newsPhotos, ...stockImages, ...misc];

async function fetchOne({ url, out }) {
  try {
    const res = await fetch(BASE + url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { out, ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    return { out, ok: true, size: buf.length };
  } catch (e) {
    return { out, ok: false, error: String(e) };
  }
}

async function run() {
  const results = [];
  const BATCH = 6;
  for (let i = 0; i < all.length; i += BATCH) {
    const batch = all.slice(i, i + BATCH);
    results.push(...(await Promise.all(batch.map(fetchOne))));
  }
  const ok = results.filter((r) => r.ok);
  const fail = results.filter((r) => !r.ok);
  console.log(`Downloaded ${ok.length}/${all.length}`);
  if (fail.length) console.log("FAILED:", JSON.stringify(fail, null, 2));
}

run();
