import { Star } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJmyRxBJuF9YURtT8wdV810jw";
const CARD_BG = "#0D172B";

interface Review {
  name: string;
  rating: number;
  timeAgo: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Oğuzhan Taşkıran",
    rating: 5,
    timeAgo: "1 ay önce",
    text: "Çok profesyonel ekip, gerçekten 2 kere eşyalarımı taşıdılar. Her şeyi güzelce söküp paketleme yapıp yeni yerine güzelce monte ettiler ve hızlı taşıma yapıldı. Her şey için teşekkür ederim, herkese de tavsiye ederim.",
  },
  {
    name: "Mustafa Bülbül",
    rating: 5,
    timeAgo: "4 ay önce",
    text: "Antalya Konyaaltı'ndan Lara'ya bizi sorunsuz taşıdılar. Gerçekten çok teşekkür ederim, işinin ehli, hızlı ve profesyonel bir ekip. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Tuğra (OkanTGR)",
    rating: 5,
    timeAgo: "2 ay önce",
    text: "Lara Fener'deki evimizden her şey dahil bu firmaya işimizi verdik. Çatalından askısına kadar her şeyi elimizi bile sürdürtmeden Alanya Oba'daki evimize sorunsuz bir şekilde ve hatta bozuk olan dolap kapaklarını ve yatak bazasını tamir ederek en iyi şekilde yardımcı oldular. Her şey için çok teşekkür ederiz. İyi ki sizi tercih etmişiz. 🙏🙏",
  },
];

export function Reviews() {
  return (
    <section className="bg-[#0d1420]" aria-label="Müşteri yorumları">
      <div className="container mx-auto px-5 py-9 md:px-4 md:py-12">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Müşteri Yorumları
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Müşterilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: CARD_BG }}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-0.5" aria-label="5 yıldız değerlendirme">
                  {Array.from({ length: review.rating }, (_, star) => (
                    <Star key={star} size={16} className="text-brand-yellow" fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs text-white/50">Google&apos;da doğrulandı</span>
              </div>

              <p className="text-[15px] font-bold text-white">{review.name}</p>
              <p className="mb-3 text-xs text-white/40">{review.timeAgo}</p>

              <p className="text-sm leading-relaxed text-white/70" style={{ lineHeight: 1.6 }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-10">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-yellow hover:underline"
          >
            Tüm Google Yorumlarını Gör →
          </a>
        </div>
      </div>
    </section>
  );
}
