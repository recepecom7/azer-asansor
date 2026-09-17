import { Metadata } from "next";
import { DistrictEvdenEveNakliyat } from "@/components/DistrictEvdenEveNakliyat";
import { getPlaceDetails } from "@/lib/googlePlaces";

const neighborhoods = ["Güzeloba", "Şirinyalı", "Fener", "Lara Sahili", "Tekelioğlu"];

const faqs = [
  {
    question: "Lara Güzeloba'da site girişleri dar. Eşyalarım nasıl taşınır?",
    answer:
      "Dar girişlerde asansörlü taşıma kullanırız. Böylece bina içi yük azalır. Eşyalarınız daha hızlı çıkar.",
  },
  {
    question: "Şirinyalı'da sabah trafiği taşınmayı geciktirir mi?",
    answer:
      "Evet, yoğun saatler planı bozar. Biz erken saatlerde program kurarız. Böylece gecikme riski düşer.",
  },
  {
    question: "Fener ve Lara Sahili tarafında araç parkı sorun olur mu?",
    answer:
      "Olabilir, özellikle apartman önü kısa kalır. Ön keşif yaparız. Aracı uygun noktaya yerleştiririz.",
  },
];

export const metadata: Metadata = {
  title: "Lara Evden Eve Nakliyat | Sigortalı & Asansörlü | Azer Asansör",
  description:
    "Antalya Lara evden eve nakliyat için şimdi arayın. Güzeloba ve Şirinyalı'da hızlı plan alın, taşınmanızı kolaylaştırın.",
  alternates: {
    canonical: "https://www.azerasansor.com/lara-evden-eve-nakliyat",
  },
};

export default async function Page() {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <DistrictEvdenEveNakliyat
      district="Lara"
      slug="lara-evden-eve-nakliyat"
      heroParagraph="Lara'da taşınma, sahil hattı ve yoğun site yaşamı nedeniyle dikkat ister. Güzeloba, Şirinyalı ve Fener çevresinde bina girişleri daralır. Bülent Ecevit Bulvarı ve Tekelioğlu Caddesi'nde trafik saatleri işi uzatır. Siz eşya hazırlarken zaman kaybetmeyin. Biz keşfi önceden yapar, rotayı buna göre kurarız. Asansörlü taşıma, yüksek katlı rezidanslarda hızlı çözüm sunar. Dar otoparklar, site kuralları ve apartman saatleri sizi zorlamaz. Azer Asansör, Lara'nın site düzenine ve yoğun saatlerine göre plan yapar."
      neighborhoods={neighborhoods}
      faqs={faqs}
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
    />
  );
}
