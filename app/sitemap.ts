import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.azerasansor.com";
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "monthly" },
    { path: "/iletisim", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

    { path: "/antalya-evden-eve-nakliyat", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-asansorlu-nakliyat", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-ofis-tasima", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-sehirlerarasi-nakliyat", priority: 0.9, changeFrequency: "weekly" },

    { path: "/antalya-mobil-asansor-kiralama", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-kiralik-asansor", priority: 0.9, changeFrequency: "weekly" },
    { path: "/antalya-dis-cephe-asansoru", priority: 0.9, changeFrequency: "weekly" },

    { path: "/cam-balkon-tasima-antalya", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insaat-malzemesi-tasima-antalya", priority: 0.7, changeFrequency: "monthly" },
    { path: "/klima-tasima-antalya", priority: 0.7, changeFrequency: "monthly" },

    { path: "/antalya-hizmet-bolgeleri", priority: 0.8, changeFrequency: "weekly" },
    { path: "/muratpasa-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kepez-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/konyaalti-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/lara-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/aksu-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/dosemealti-asansorlu-nakliyat", priority: 0.7, changeFrequency: "monthly" },

    { path: "/blog/antalya-evden-eve-nakliyat-fiyatlari", priority: 0.8, changeFrequency: "monthly" },
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
