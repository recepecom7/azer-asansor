'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
}

interface WhyUsSliderProps {
  slides: Slide[];
}

export function WhyUsSlider({ slides }: WhyUsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused, prefersReducedMotion, activeIndex]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <div
      className="relative h-[420px] md:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {slides.map((slide, idx) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-500 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Onceki gorsel"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Sonraki gorsel"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
      >
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, idx) => (
          <button
            key={`dot-${slide.src}`}
            type="button"
            aria-label={`Gorsel ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className="flex items-center justify-center p-[17px] -m-[17px]"
          >
            <span className={`block w-2.5 h-2.5 rounded-full ${idx === activeIndex ? 'bg-brand-yellow' : 'bg-white/70'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
