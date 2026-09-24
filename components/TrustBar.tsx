interface TrustItem {
  label: string;
  value: string;
  sub: string;
}

const TRUST_ITEMS: TrustItem[] = [
  { label: "FİLO", value: "Kendi asansör ve araç filomuz", sub: "Taşeron yok" },
  { label: "HİZMET", value: "Anahtar teslim", sub: "Paketleme, demontaj, kurulum dahil" },
  { label: "DENEYİM", value: "10.000+", sub: "taşıma ve servis · 2011'den beri" },
  { label: "KAPSAM", value: "7 gün 24 saat", sub: "Tüm Türkiye · Antalya başta olmak üzere" },
];

export function TrustBar() {
  return (
    <section className="bg-[#0a0f1a]" aria-label="Güven göstergeleri">
      <div className="container mx-auto px-5 py-7 md:px-7 md:py-7 lg:px-4 lg:py-8">
        <ul className="grid grid-cols-2 items-start gap-5 lg:grid-cols-4">
          {TRUST_ITEMS.map(({ label, value, sub }) => (
            <li key={label} className="border-t-[3px] border-brand-yellow pt-3">
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/50">{label}</p>
              <p className="mt-1.5 text-xl font-bold leading-snug text-white">{value}</p>
              <p className="mt-1 text-[13px] leading-snug text-white/55">{sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
