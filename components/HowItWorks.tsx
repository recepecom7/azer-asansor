interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Arayın veya Yazın",
    description: "Telefon veya WhatsApp'tan ulaşın. Taşınma tarihinizi, adresinizi ve kat bilginizi paylaşın.",
  },
  {
    number: "02",
    title: "Ücretsiz Keşif",
    description: "Ekibimiz gelir, eşyalarınıza ve binaya bakar. Asansör tipini belirler, net fiyat verir. Sürpriz ücret yok.",
  },
  {
    number: "03",
    title: "Taşıma Günü",
    description: "Belirlenen günde ekip gelir, paketler, taşır ve yeni adresinizde kurar. Siz sadece yeni evinizin keyfini çıkarın.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#0d1420]" aria-label="Nasıl çalışır">
      <div className="container mx-auto px-5 py-9 md:px-4 md:py-12">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Nasıl Çalışır?
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">3 Adımda Taşınma</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-[52px] top-6 hidden h-px w-[calc(100%-52px)] bg-white/20 md:block"
                />
              )}
              <p className="text-[48px] font-bold leading-none text-brand-yellow">{step.number}</p>
              <p className="mt-3 text-lg font-bold text-white">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65" style={{ lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
