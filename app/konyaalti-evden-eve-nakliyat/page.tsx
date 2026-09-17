import { Metadata } from "next";
import { DistrictEvdenEveNakliyat } from "@/components/DistrictEvdenEveNakliyat";
import { getPlaceDetails } from "@/lib/googlePlaces";

const neighborhoods = ["Konyaaltı Sahili", "Hurma", "Liman", "Uncalı", "Akdeniz"];

const faqs = [
  {
    question: "Konyaaltı'nda sahile yakın sitelerde taşınma neden daha fazla plan ister?",
    answer:
      "Sahil hattında araç ve yaya yoğunluğu daha yüksektir. Site girişleri ve yükleme saatleri önceden netleştirilmezse taşıma süresi uzayabilir.",
  },
  {
    question: "Konyaaltı'nın hangi tür konutlarında asansörlü nakliyat daha avantajlıdır?",
    answer:
      "Yüksek katlı apartmanlar ve dar merdivenli binalarda asansörlü taşıma daha güvenli ve hızlı olur.",
  },
  {
    question: "Konyaaltı'nda taşınma günü saat seçimi neden önemlidir?",
    answer:
      "Sahil trafiği ve yaz sezonundaki hareketlilik nedeniyle sabah erken saatler genellikle daha uygundur.",
  },
];

export const metadata: Metadata = {
  title: "Konyaaltı Evden Eve Nakliyat | Sigortalı & Asansörlü | Azer Asansör",
  description:
    "Konyaaltı evden eve nakliyat için profesyonel, güvenli ve planlı çözüm. Hemen teklif alın, taşınmanızı kolaylaştırın!",
  alternates: {
    canonical: "https://www.azerasansor.com/konyaalti-evden-eve-nakliyat",
  },
};

export default async function Page() {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <DistrictEvdenEveNakliyat
      district="Konyaaltı"
      slug="konyaalti-evden-eve-nakliyat"
      heroParagraph="Konyaaltı'nda sahile yakın cadde ve sokaklarda yaz döneminde artan trafik, taşıma saatlerinin doğru seçilmesini önemli hale getirir. Apartman girişlerinin dar olduğu ya da site kurallarının bulunduğu adreslerde sürecin önceden planlanması gerekir. Sahil kuşağındaki modern konutlar ile iç kesimlerdeki yerleşim alanları aynı operasyonu gerektirmez. Doğru ekip, hem eşyaların güvenliğini hem de taşınma gününün sorunsuz ilerlemesini sağlar."
      neighborhoods={neighborhoods}
      faqs={faqs}
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
    />
  );
}
