import { Metadata } from "next";
import { DistrictEvdenEveNakliyat } from "@/components/DistrictEvdenEveNakliyat";
import { getPlaceDetails } from "@/lib/googlePlaces";

const neighborhoods = ["Güzeloba", "Şirinyalı", "Fener", "Etiler", "Meydankavağı", "Kızıltoprak"];

const faqs = [
  {
    question: "Muratpaşa'da taşınırken apartman yoğunluğu neden önemli?",
    answer:
      "Muratpaşa'da çok sayıda apartmanlı ve merkezi yerleşim alanı bulunduğu için bina içi taşıma, asansör kullanımı ve araç parkı önceden planlanmalıdır. Bu planlama, taşınma süresini kısaltır ve eşya hasarı riskini azaltır.",
  },
  {
    question: "Muratpaşa'nın hangi mahallelerinde taşınma planı daha dikkatli yapılmalı?",
    answer:
      "Güzeloba, Şirinyalı, Fener, Etiler, Meydankavağı ve Kızıltoprak gibi konut yoğunluğu yüksek mahallelerde taşıma saati, araç erişimi ve bina önü erişimi daha kritik hale gelir.",
  },
  {
    question: "Muratpaşa'da evden eve nakliyatta profesyonel hizmet ne sağlar?",
    answer:
      "Profesyonel ekip, dar alanlarda güvenli taşıma, uygun paketleme, mobilya söküm-montajı ve planlı yükleme yaparak süreci kolaylaştırır.",
  },
];

export const metadata: Metadata = {
  title: "Muratpaşa Evden Eve Nakliyat | Sigortalı & Asansörlü | Azer Asansör",
  description:
    "Antalya Muratpaşa evden eve nakliyat için profesyonel, hızlı ve güvenli taşımayı şimdi planlayın; ücretsiz teklif alın!",
  alternates: {
    canonical: "https://www.azerasansor.com/muratpasa-evden-eve-nakliyat",
  },
};

export default async function Page() {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <DistrictEvdenEveNakliyat
      district="Muratpaşa"
      slug="muratpasa-evden-eve-nakliyat"
      heroParagraph="Antalya'nın merkez ilçelerinden Muratpaşa, yüksek konut yoğunluğu, çok sayıda mahalle ve sahil hattına yakın yerleşim dokusuyla taşınma süreçlerinin dikkatli planlanmasını gerektirir. İlçede apartman yaşamı yaygın olduğu için dar merdiven boşlukları, asansör kullanımı, bina girişleri ve araç park alanları taşımayı doğrudan etkiler. Güzeloba, Şirinyalı, Fener, Etiler ve Meydankavağı gibi mahallelerde hem yerleşim yoğunluğu hem de gün içi hareketlilik yüksektir; bu da zamanlama, eşya indirme-bindirme ve trafik yönetimini önemli hale getirir. Profesyonel evden eve nakliyat hizmeti; paketleme, mobilya söküm-montajı, dar alanlardan güvenli taşıma ve hasar riskini azaltma açısından Muratpaşa'da büyük avantaj sağlar."
      neighborhoods={neighborhoods}
      faqs={faqs}
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
    />
  );
}
