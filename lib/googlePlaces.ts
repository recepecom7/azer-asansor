const PLACE_ID = "ChIJmyRxBJuF9YURtT8wdV810jw";
const FALLBACK_RATING = 5;
const FALLBACK_REVIEW_COUNT = 119;
const REVALIDATE_SECONDS = 86400;

interface PlaceDetails {
  rating: number;
  reviewCount: number;
}

export async function getPlaceDetails(): Promise<PlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT };
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!response.ok) {
      return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT };
    }

    const data = await response.json();

    return {
      rating: data.rating ?? FALLBACK_RATING,
      reviewCount: data.userRatingCount ?? FALLBACK_REVIEW_COUNT,
    };
  } catch {
    return { rating: FALLBACK_RATING, reviewCount: FALLBACK_REVIEW_COUNT };
  }
}
