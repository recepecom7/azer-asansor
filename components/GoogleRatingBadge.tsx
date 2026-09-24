import { Star } from "lucide-react";
import { getPlaceDetails, PLACE_ID } from "@/lib/googlePlaces";

const MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
const STAR_COUNT = 5;
const STAR_SIZE = "h-5 w-5 md:h-4 md:w-4";

// Places data shown outside a map needs "Google Maps" text attribution:
// sans-serif, weight 400, 12-16px, white/#1F1F1F/#5E5E5E, never translated.
export async function GoogleRatingBadge() {
  const { rating, reviewCount, isFallback } = await getPlaceDetails();
  if (isFallback) return null;

  const ratingText = rating.toLocaleString("tr-TR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener"
      aria-label={`Google Maps'te 5 üzerinden ${ratingText} puan, ${reviewCount} yorum`}
      className="mt-4 inline-flex min-h-[44px] flex-wrap max-md:flex-nowrap max-md:whitespace-nowrap items-center gap-x-1.5 md:gap-x-2 gap-y-1 rounded-full bg-black/40 px-3 md:px-4 py-2 text-sm text-white hover:bg-black/55 transition-colors"
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: STAR_COUNT }, (_, i) => {
          const fill = Math.min(Math.max(rating - i, 0), 1) * 100;
          return (
            <span key={i} className={`relative inline-block ${STAR_SIZE}`}>
              <Star className="absolute inset-0 h-full w-full text-gray-400" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${STAR_SIZE} max-w-none text-brand-yellow`} fill="currentColor" />
              </span>
            </span>
          );
        })}
      </span>
      <span className="font-semibold text-[19px] md:text-sm">{ratingText}</span>
      <span className="text-gray-100 text-[16px] md:text-sm">· {reviewCount} yorum</span>
      <span
        translate="no"
        className="text-white text-[13px] md:text-xs"
        style={{ fontFamily: "Roboto, Arial, sans-serif", fontWeight: 400 }}
      >
        Google Maps
      </span>
    </a>
  );
}
