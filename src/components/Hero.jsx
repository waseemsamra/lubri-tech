import { useState, useEffect } from "react";
import { IMAGES } from "../data";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

const HERO_SLIDES = [
  { image: IMAGES.bannerLubri1, alt: "Lubri-tech banner slide 1" },
  { image: IMAGES.bannerLubri2, alt: "Lubri-tech banner slide 2" },
  { image: IMAGES.bannerLubri3, alt: "Lubri-tech banner slide 3" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const count = HERO_SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  const go = (i) => setIndex((i + count) % count);

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-inverse-surface">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.alt}
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        </div>
      ))}

      <div className="absolute inset-y-0 left-0 z-10 w-2/3 bg-gradient-to-r from-black/50 to-transparent md:w-1/2" />
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop" />

      <button
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-3 text-safety-white transition-all hover:bg-black/70"
      >
        <Icon name="chevron_left" className="text-[28px]" />
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-3 text-safety-white transition-all hover:bg-black/70"
      >
        <Icon name="chevron_right" className="text-[28px]" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.alt}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-industrial-green" : "w-2.5 bg-safety-white/60 hover:bg-safety-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
