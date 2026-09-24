import Link from "next/link";

interface Area {
  label: string;
  href: string;
}

const DISTRICTS: Area[] = [
  { label: "Muratpaşa", href: "/muratpasa-evden-eve-nakliyat" },
  { label: "Kepez", href: "/kepez-evden-eve-nakliyat" },
  { label: "Konyaaltı", href: "/konyaalti-evden-eve-nakliyat" },
  { label: "Lara", href: "/lara-evden-eve-nakliyat" },
  { label: "Aksu", href: "/aksu-evden-eve-nakliyat" },
  { label: "Döşemealtı", href: "/dosemealti-evden-eve-nakliyat" },
  { label: "Kemer", href: "/kemer-evden-eve-nakliyat" },
];

const CITIES: Area[] = [
  { label: "İstanbul", href: "/antalya-istanbul-nakliyat" },
  { label: "Ankara", href: "/antalya-ankara-nakliyat" },
  { label: "İzmir", href: "/antalya-izmir-nakliyat" },
  { label: "Bursa", href: "/antalya-bursa-nakliyat" },
  { label: "Adana", href: "/antalya-adana-nakliyat" },
];

export function ServiceAreas() {
  return (
    <section className="bg-[#0d1420]" aria-label="Hizmet bölgelerimiz">
      <div className="container mx-auto px-5 py-9 md:px-4 md:py-12">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Hizmet Bölgelerimiz
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Antalya ve Tüm Türkiye&apos;ye Hizmet Veriyoruz
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
            Antalya&apos;nın tüm ilçelerinde evden eve nakliyat ve asansörlü taşıma hizmeti veriyoruz.
            İstanbul, Ankara, İzmir başta olmak üzere şehirlerarası taşıma da yapıyoruz.
          </p>
        </div>

        <p className="mb-3 text-[13px] font-medium uppercase tracking-widest text-white/50">
          Antalya İlçeleri
        </p>
        <div className="flex flex-wrap gap-2">
          {DISTRICTS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-full border border-brand-yellow/40 px-4 py-2 text-sm text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-brand-black"
            >
              {area.label}
            </Link>
          ))}
        </div>

        <div className="my-6 border-t border-white/10" />

        <p className="mb-3 text-[13px] font-medium uppercase tracking-widest text-white/50">
          Şehirlerarası Nakliyat
        </p>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-full border border-white/30 px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              {area.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
