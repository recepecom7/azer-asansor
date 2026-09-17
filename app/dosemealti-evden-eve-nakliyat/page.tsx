import { Metadata } from "next";
import { DistrictEvdenEveNakliyat } from "@/components/DistrictEvdenEveNakliyat";
import { getPlaceDetails } from "@/lib/googlePlaces";

const neighborhoods = ["Altınkale", "Yeşilbayır", "Çıplaklı", "Yeniköy", "Düzlerçamı"];

const faqs = [
  {
    question: "Altınkale'de site içine asansörlü araç girebilir mi?",
    answer:
      "Giriş dar ise dış cephe asansörü gerekir. Önceden keşif yapınca uygun araç seçilir.",
  },
  {
    question: "Çıplaklı'da sabah taşıma neden daha uygundur?",
    answer:
      "Okul ve site çıkış saatleri trafiği artırır. Sabah erken saatlerde taşıma daha hızlı ilerler.",
  },
  {
    question: "Yeşilbayır ve Yeniköy arasında taşınırken neye dikkat etmeliyim?",
    answer:
      "Mesafe kısa olsa da mahalle yapısı değişir. Eşya boyu, bina girişi ve park alanı önceden planlanır.",
  },
];

export const metadata: Metadata = {
  title: "Döşemealtı Evden Eve Nakliyat | Sigortalı & Asansörlü | Azer Asansör",
  description:
    "Döşemealtı evden eve nakliyat için hemen teklif alın. Azer Asansör ile taşınmayı planlayın, zaman kaybetmeyin.",
  alternates: {
    canonical: "https://www.azerasansor.com/dosemealti-evden-eve-nakliyat",
  },
};

export default async function Page() {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <DistrictEvdenEveNakliyat
      district="Döşemealtı"
      slug="dosemealti-evden-eve-nakliyat"
      heroParagraph="Döşemealtı'nda geniş mahalleler ve dağınık yerleşim taşıma süresini uzatır. Altınkale, Yeşilbayır ve Çıplaklı'da site girişleri işi zorlaştırır. Yeniköy ve Düzlerçamı tarafında sokaklar daha sakin ama araç yanaşma planı yine gerekir. Biz asansörlü çözümle kat farkını azaltırız. Dar merdiven, ağır koltuk ve çizilme riski böyle düşer. Azer Asansör, bu ilçede yükleme alanını önceden planlar."
      neighborhoods={neighborhoods}
      faqs={faqs}
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
    />
  );
}
