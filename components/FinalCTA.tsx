import { Phone, MessageCircle } from "lucide-react";

const DARK = "#0a0f1a";
const CTA_BASE = "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors";

export function FinalCTA() {
  return (
    <section className="hidden md:block" style={{ backgroundColor: "#F5C518" }} aria-label="Hemen iletişime geçin">
      <div className="container mx-auto flex items-center justify-between gap-8 px-4 py-12">
        <div>
          <p className="text-2xl font-bold" style={{ color: DARK }}>
            Taşınmaya Hazır mısınız?
          </p>
          <p className="mt-1 text-[15px]" style={{ color: DARK, opacity: 0.8 }}>
            Ücretsiz keşif için hemen arayın veya WhatsApp&apos;tan yazın.
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
          <a
            href="tel:+905424669631"
            data-cta-location="final_cta"
            className={`${CTA_BASE} text-white hover:brightness-110`}
            style={{ backgroundColor: DARK }}
          >
            <Phone className="h-5 w-5" />
            Hemen Ara · 0542 466 96 31
          </a>
          <a
            href="https://wa.me/905424669631"
            target="_blank"
            rel="noopener noreferrer"
            data-cta-location="final_cta"
            className={`${CTA_BASE} bg-white hover:bg-gray-100`}
            style={{ color: DARK }}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp&apos;tan Fiyat Al
          </a>
        </div>
      </div>
    </section>
  );
}
