import { Star } from "lucide-react";

const EYEBROW_COLOR = "#b8960a"; // darkened brand-yellow for readability on light bg

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Oğuzhan T.",
    rating: 5,
    text: "Çok profesyonel ekip, gerçekten 2 kere eşyalarımı taşıdılar. Her şeyi güzelce söküp paketleme yapıp yeni yerine güzelce monte ettiler ve hızlı taşıma yapıldı. Her şey için teşekkür ederim, herkese de tavsiye ederim.",
  },
  {
    name: "Mustafa B.",
    rating: 5,
    text: "Antalya Konyaaltı'ndan Lara'ya bizi sorunsuz taşıdılar. Gerçekten çok teşekkür ederim, işinin ehli, hızlı ve profesyonel bir ekip. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Tuğra O.",
    rating: 5,
    text: "Lara Fener'deki evimizden her şey dahil bu firmaya işimizi verdik. Çatalından askısına kadar her şeyi elimizi bile sürdürtmeden Alanya Oba'daki evimize sorunsuz bir şekilde ve hatta bozuk olan dolap kapaklarını ve yatak bazasını tamir ederek en iyi şekilde yardımcı oldular. Her şey için çok teşekkür ederiz. İyi ki sizi tercih etmişiz. 🙏🙏",
  },
];

export function Reviews() {
  return (
    <section className="bg-[#f5f6f7]" aria-label="Müşteri yorumları">
      <div className="container mx-auto px-5 py-9 md:px-4 md:py-12">
        <div className="mb-8 text-center md:mb-10">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: EYEBROW_COLOR }}
          >
            Müşteri Yorumları
          </p>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Müşterilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-0.5" aria-label="5 yıldız değerlendirme">
                  {Array.from({ length: review.rating }, (_, star) => (
                    <Star key={star} size={16} className="text-brand-yellow" fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs text-gray-400">Google&apos;da doğrulandı</span>
              </div>

              <p className="mb-3 text-[15px] font-bold text-gray-900">{review.name}</p>

              <p className="text-sm leading-relaxed text-gray-700" style={{ lineHeight: 1.6 }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
