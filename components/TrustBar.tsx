interface TrustItem {
  title: string;
  sub: string;
}

const TRUST_ITEMS: TrustItem[] = [
  { title: "Kendi Filomuz", sub: "Asansör ve nakliye araçlarımız bize ait, taşeron yok" },
  { title: "Anahtar Teslim", sub: "Paketleme, demontaj ve kurulum dahil" },
  { title: "10.000+", sub: "Taşıma ve asansör hizmeti" },
  { title: "7/24", sub: "Antalya başta olmak üzere tüm Türkiye" },
];

export function TrustBar() {
  return (
    <section className="bg-[#0a0f1a]" aria-label="Güven göstergeleri">
      <div className="container mx-auto px-5 py-7 md:px-7 md:py-7 lg:px-4 lg:py-8">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {TRUST_ITEMS.map(({ title, sub }) => (
            <li key={title} className="text-left lg:px-6 lg:text-center lg:first:pl-0 lg:last:pr-0">
              <p className="text-[28px] font-bold leading-tight text-white lg:text-[32px]">{title}</p>
              <p className="mt-1 text-[13px] leading-snug text-white/60 lg:mt-2 lg:text-sm">{sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
