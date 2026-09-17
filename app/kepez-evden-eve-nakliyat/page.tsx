import { Metadata } from "next";
import { DistrictEvdenEveNakliyat } from "@/components/DistrictEvdenEveNakliyat";
import { getPlaceDetails } from "@/lib/googlePlaces";

const neighborhoods = ["Varsak", "Santral", "Gürsu", "Şafak", "Yenigün", "Doğuyaka"];

const faqs = [
  {
    question: "Kepez'de taşınırken hangi mahalle yapıları nakliyatı zorlaştırır?",
    answer:
      "Eski yerleşim alanları ve yeni yapılaşma bölgeleri farklı plan ister. Dar sokaklar ve sınırlı park alanı önceden analiz edilmelidir.",
  },
  {
    question: "Kepez'de evden eve nakliyatta trafik neden önemlidir?",
    answer:
      "Kepez, Antalya'nın ana bağlantı noktalarına yakın olduğu için sabah ve akşam saatlerinde trafik yoğunlaşabilir.",
  },
  {
    question: "Kepez'de profesyonel nakliyat hizmeti neden tercih edilmeli?",
    answer:
      "Farklı tipte konutlar ve site girişleri bulunduğundan deneyimli ekip, paketleme ve taşıma sürecini daha güvenli yönetir.",
  },
];

export const metadata: Metadata = {
  title: "Kepez Evden Eve Nakliyat | Sigortalı & Asansörlü | Azer Asansör",
  description:
    "Antalya Kepez evden eve nakliyat için güvenli ve hızlı çözüm. Hemen teklif alın, taşınmayı profesyonelce planlayın!",
  alternates: {
    canonical: "https://www.azerasansor.com/kepez-evden-eve-nakliyat",
  },
};

export default async function Page() {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <DistrictEvdenEveNakliyat
      district="Kepez"
      slug="kepez-evden-eve-nakliyat"
      heroParagraph="Kepez'de eski yerleşim alanlarıyla yeni konut projeleri yan yana bulunur. Bina girişleri, dar sokaklar ve park alanı planlaması önceden organize edilmezse süreç uzar. Mesai saatlerinde artan trafik nakliyatın zamanlamasını doğrudan etkiler. Doğru araç seçimi, profesyonel paketleme ve bina koşullarına uygun plan gerekir. Azer Asansör, Kepez'in farklı mahalle yapılarını bilerek süreci hızlandırır."
      neighborhoods={neighborhoods}
      faqs={faqs}
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
    />
  );
}
