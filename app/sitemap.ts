import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.azerasansor.com";
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iletisim", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

    { path: "/antalya-nakliyat", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-evden-eve-nakliyat", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-asansorlu-nakliyat", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-ofis-tasima", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-sehirlerarasi-nakliyat", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-istanbul-nakliyat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/antalya-izmir-nakliyat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/antalya-ankara-nakliyat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/antalya-bursa-nakliyat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/antalya-adana-nakliyat", priority: 0.8, changeFrequency: "monthly" },

    { path: "/antalya-mobil-asansor-kiralama", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-kiralik-asansor", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-dis-cephe-asansoru", priority: 0.9, changeFrequency: "weekly" },

    { path: "/cam-balkon-tasima-antalya", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insaat-malzemesi-tasima-antalya", priority: 0.7, changeFrequency: "monthly" },
    { path: "/klima-tasima-antalya", priority: 0.7, changeFrequency: "monthly" },

    { path: "/antalya-hizmet-bolgeleri", priority: 0.8, changeFrequency: "weekly" },
    { path: "/muratpasa-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/muratpasa-evden-eve-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kepez-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kepez-evden-eve-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/konyaalti-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/konyaalti-evden-eve-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/lara-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/lara-evden-eve-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/aksu-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/aksu-evden-eve-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/dosemealti-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/dosemealti-evden-eve-nakliyat", priority: 0.7, changeFrequency: "monthly" },

    { path: "/blog/antalya-evden-eve-nakliyat-asansorlu-nakliyat-eylul", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/antalya-evden-eve-nakliyat-eylul", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/antalya-evden-eve-nakliyat-fiyatlari", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/antalya-ev-tasima-suresi", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/antalya-asansorlu-nakliyat-fiyatlari", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/antalya-mobil-asansor-kiralama-fiyatlari", priority: 0.8, changeFrequency: "monthly" },
  ] as const;

  return routes.map((route) => ({
    url: route.path === "/" ? baseUrl : `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
