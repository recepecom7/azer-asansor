import { Phone, MessageCircle } from "lucide-react";

const PHONE_HREF = "tel:+905424669631";
const WHATSAPP_HREF = "https://wa.me/905424669631";

export function MobileStickyCTA() {
  return (
    <>
      {/* Spacer so content isn't hidden behind the fixed bar (mobile only). */}
      <div className="md:hidden h-16" aria-hidden="true" />

      <div className="md:hidden fixed inset-x-0 bottom-0 z-50">
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div
            className="mx-auto max-w-5xl px-4 py-3"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
          >
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow text-brand-black font-semibold py-3 text-base shadow-sm active:scale-[0.99] transition"
                aria-label="Ara"
              >
                <Phone className="w-5 h-5" />
                Ara
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 text-white font-semibold py-3 text-base shadow-sm active:scale-[0.99] transition"
                aria-label="WhatsApp’tan yaz"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

