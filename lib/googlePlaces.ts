export const PLACE_ID = "ChIJmyRxBJuF9YURtT8wdV810jw";
const FALLBACK_RATING = 5;
const FALLBACK_REVIEW_COUNT = 119;
const REVALIDATE_SECONDS = 43200;

export interface PlaceReview {
  author: string;
  text: string;
  rating: number;
}

const FALLBACK_REVIEWS: PlaceReview[] = [
  {
    author: "Erhan Kara",
    text: "Güler yüzlü esnaflar işini temiz yaptılar, saatinde gelip evimi taşıdılar. Eşyalarımı güzelce paketleyip mobilya montajını yaptılar, her şey için çok teşekkür ederiz.",
    rating: 5,
  },
  {
    author: "Selman Karacan",
    text: "Gerçekten işini çok dürüst yapan, verdikleri hizmeti dolu dolu sunan bir işletme. Daha önce bir çok kez taşınmış birisi olarak bu kadar memnun olduğum bir taşıma hizmeti sunan biri olmamıştı.",
    rating: 5,
  },
  {
    author: "Acelya Arslan",
    text: "3 yıl içinde 2 defa taşınma durumum oldu, ikisinde de Azer Nakliyat ile çalıştım. Çalışanlar işlerinde hızlı ve pratikler, eşyaları muntazam ve dikkatli şekilde taşıyıp yerleştiriyorlar.",
    rating: 5,
  },
  {
    author: "Defne Kalayci",
    text: "Binamızın altındaki market nedeniyle 7. kata asansörün ulaşması oldukça zor görünüyordu. Buna rağmen profesyonel yaklaşımları ve tecrübeleri sayesinde hiçbir sorun yaşamadan taşıma tamamlandı.",
    rating: 5,
  },
  {
    author: "Tuana Vuran",
    text: "1.5 yıl önce de hizmet almıştım, memnun kaldığım için tekrar bu yıl aradım ve gene her zamanki gibi çok ilgili ve titiz davrandılar. Çalışanların hepsi kendi ailesinden birini taşıyor gibi ilgili.",
    rating: 5,
  },
];

interface PlaceDetails {
  rating: number;
  reviewCount: number;
  reviews: PlaceReview[];
  isFallback: boolean;
}

interface GooglePlaceReview {
  authorAttribution?: { displayName?: string };
  text?: { text?: string };
  originalText?: { text?: string };
  rating?: number;
}

export async function getPlaceDetails(): Promise<PlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.log("[googlePlaces] falling back: GOOGLE_PLACES_API_KEY is missing");
    return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT, reviews: FALLBACK_REVIEWS, isFallback: true };
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      console.log(
        `[googlePlaces] falling back: non-OK response (status ${response.status} ${response.statusText})`
      );
      return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT, reviews: FALLBACK_REVIEWS, isFallback: true };
    }

    const data = await response.json();
    console.log("[googlePlaces] raw API response:", JSON.stringify(data));

    if (!data || Object.keys(data).length === 0) {
      console.log("[googlePlaces] falling back: empty data in response");
      return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT, reviews: FALLBACK_REVIEWS, isFallback: true };
    }

    const reviews: PlaceReview[] = Array.isArray(data.reviews)
      ? data.reviews
          .map((review: GooglePlaceReview) => ({
            author: review.authorAttribution?.displayName ?? "Google Kullanıcısı",
            text: review.originalText?.text ?? review.text?.text ?? "",
            rating: review.rating ?? 0,
          }))
          .filter((review: PlaceReview) => review.text.length > 0)
      : [];

    return {
      rating: data.rating ?? FALLBACK_RATING,
      reviewCount: data.userRatingCount ?? FALLBACK_REVIEW_COUNT,
      reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS,
      isFallback: data.rating == null || data.userRatingCount == null,
    };
  } catch (error) {
    console.log("[googlePlaces] falling back: request threw an error", error);
    return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT, reviews: FALLBACK_REVIEWS, isFallback: true };
  }
}
