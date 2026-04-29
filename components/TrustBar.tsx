import { Star, ShieldCheck, Clock, MapPin, Building2 } from "lucide-react";

export function TrustBar() {
  return (
    <section
      className="bg-brand-black border-t border-white/10 border-b border-white/10"
      aria-label="Güven göstergeleri"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-900 rounded-2xl border border-white/10 px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="text-center lg:text-left">
            <div
              className="flex justify-center lg:justify-start items-center gap-1 text-brand-yellow mb-1"
              aria-label="5 yıldız değerlendirme"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
              ))}
            </div>

            {/* Update review count manually every 1–2 months */}
            <p className="text-white font-bold text-lg">
              5.0 Google Değerlendirmesi
              <span className="text-gray-300 font-medium"> · 66+ Yorum</span>
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Antalya&apos;da asansörlü nakliyat ve mobil asansör kiralama
              hizmeti
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white w-full lg:w-auto">
            <li className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-yellow" aria-hidden="true" />
              Sigortalı Taşıma
            </li>
            <li className="flex items-center gap-2">
              <Building2 size={18} className="text-brand-yellow" aria-hidden="true" />
              22. Kata Kadar
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} className="text-brand-yellow" aria-hidden="true" />
              Aynı Gün Hizmet
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-yellow" aria-hidden="true" />
              Antalya Geneli
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
