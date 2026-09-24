"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const REDIRECT_SECONDS = 3;
const CTA_BASE =
  "inline-flex w-full sm:w-auto min-h-[44px] items-center justify-center rounded-full px-7 py-3 text-base md:text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

export default function NotFound() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, REDIRECT_SECONDS * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <main
      className="flex min-h-screen w-full flex-col items-center justify-center px-5 text-center"
      style={{ backgroundColor: "#0a0f1a" }}
    >
      <p className="text-[96px] font-bold leading-none text-brand-yellow">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Sayfa Bulunamadı</h1>
      <p className="mt-3 text-[15px] text-white/60">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
      </p>
      <p className="mt-2 text-sm text-white/50">
        {secondsLeft} saniye içinde anasayfaya yönlendiriliyorsunuz.
      </p>
      <button
        type="button"
        onClick={() => router.push("/")}
        className={`${CTA_BASE} mt-8 bg-brand-yellow text-brand-black hover:bg-yellow-500 focus:ring-brand-yellow`}
      >
        Anasayfaya Dön
      </button>
    </main>
  );
}
