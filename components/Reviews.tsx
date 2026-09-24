import { Star } from "lucide-react";
import { getPlaceDetails, PLACE_ID, type PlaceReview } from "@/lib/googlePlaces";

const MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
const CARD_BG = "#0D172B";

const DISTRICTS = ["Muratpaşa", "Kepez", "Konyaaltı", "Lara", "Aksu", "Döşemealtı", "Kemer"];

function sentenceCount(text: string): number {
  return text.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean).length;
}

// Prefer 5-star, longer (3+ sentence), district-mentioning reviews. Falls back
// to whatever is available if the API returns fewer than 3.
function pickBestReviews(reviews: PlaceReview[]): PlaceReview[] {
  const scored = reviews.map((review) => {
    let score = 0;
    if (review.rating === 5) score += 2;
    if (sentenceCount(review.text) >= 3) score += 1;
    if (DISTRICTS.some((d) => review.text.includes(d))) score += 1;
    return { review, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ review }) => review);
}

export async function Reviews() {
  const { reviews, isFallback } = await getPlaceDetails();
  if (isFallback) return null;

  const bestReviews = pickBestReviews(reviews);
  if (bestReviews.length === 0) return null;

  return (
    <section className="bg-[#0d1420]" aria-label="Müşteri yorumları">
      <div className="container mx-auto px-5 py-9 md:px-4 md:py-12">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Müşteri Yorumları
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Müşterilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {bestReviews.map((review, i) => (
            <div
              key={review.author}
              className="rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: CARD_BG }}
            >
              <div className="mb-3 flex items-center gap-0.5" aria-label="5 yıldız değerlendirme">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} size={16} className="text-brand-yellow" fill="currentColor" aria-hidden="true" />
                ))}
              </div>

              <p
                className="mb-3 line-clamp-3 text-sm leading-relaxed text-white/70"
                style={{ lineHeight: 1.6 }}
                title={review.text}
              >
                {review.text}
              </p>

              <p className="text-[15px] font-bold text-white">{review.author}</p>
              <p className="text-xs text-white/50">Google&apos;da doğrulandı</p>

              {i === bestReviews.length - 1 && (
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-block text-sm font-semibold text-brand-yellow hover:underline"
                >
                  Tüm Yorumları Gör →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
