"use client";

import { useEffect, useState } from "react";

export type Slide = { src: string; alt: string };

// Crossfades through the slides every `interval` ms. Stops on reduced-motion.
export default function HeroSlides({
  slides,
  interval = 6000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`slide ${i === index ? "on" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      {slides.length > 1 && (
        <div className="dots" aria-hidden="true">
          {slides.map((s, i) => (
            <button
              key={s.src}
              className={i === index ? "on" : ""}
              onClick={() => setIndex(i)}
              tabIndex={-1}
            />
          ))}
        </div>
      )}
    </>
  );
}
