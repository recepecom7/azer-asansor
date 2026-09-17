import { Metadata } from "next";
import { DistrictEvdenEveNakliyat } from "@/components/DistrictEvdenEveNakliyat";
import { getPlaceDetails } from "@/lib/googlePlaces";

const neighborhoods = ["Altıntaş", "Kemerağzı", "Kurşunlu", "Pınarlı", "Çalkaya"];

const faqs = [
  {
    question: "Altıntaş Mahallesi'nde siteye taşınırken asansör kurulumu gerekir mi?",
    answer:
      "Giriş dar ise dış cephe asansörü gerekir. Önceden keşif yapınca uygun araç seçilir.",
  },
  {
    question: "Kemerağzı tarafında sabah mı, öğleden sonra mı taşınmak daha uygundur?",
    answer:
      "Sabah saatleri daha rahattır. Site trafiği ve araç giriş çıkışı daha düşüktür.",
  },
  {
    question: "Kurşunlu ve Pınarlı arasında taşınma planı neden farklı yapılmalı?",
    answer:
      "Kurşunlu daha geniş alanlar sunar. Pınarlı'da yoğun yerleşim ve kat planı önem kazanır.",
  },
];

export const metadata: Metadata = {
  title: "Aksu Evden Eve Nakliyat | Sigortalı & Asansörlü | Azer Asansör",
  description:
    "Antalya Aksu evden eve nakliyat için hemen teklif alın. Mahallenize uygun taşınma planı ve hızlı çözüm sizi bekliyor.",
  alternates: {
    canonical: "https://www.azerasansor.com/aksu-evden-eve-nakliyat",
  },
};

export default async function Page() {
  const { rating, reviewCount, reviews } = await getPlaceDetails();

  return (
    <DistrictEvdenEveNakliyat
      district="Aksu"
      slug="aksu-evden-eve-nakliyat"
      heroParagraph="Aksu'da taşınma, mahalle yapısına göre değişir. Altıntaş ve Kemerağzı'nda site girişleri işlemi yavaşlatır. Kurşunlu ve Pınarlı tarafında geniş alanlar plan ister. Siz eşyayı hazırlarken biz güzergâhı ve zamanı ayarlarız. Dar dönüşler, yoğun saatler ve kat farkı sizi yormaz. Azer Asansör, Aksu'nun sokak düzenini ve bina tiplerini bilir."
      neighborhoods={neighborhoods}
      faqs={faqs}
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
    />
  );
}
