"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "../../hooks/use-carousel";
import type { CarouselSlide } from "../../types/content";

interface ImageCarouselProps {
  readonly slides: readonly CarouselSlide[];
  /** Tailwind aspect-ratio classes for the frame. */
  readonly aspectClassName?: string;
}

/**
 * ImageCarousel — image slider with prev/next arrows and dot indicators.
 *
 * Index state lives in `useCarousel` (wraps at both ends). Arrows, dots and
 * focus states use brand tokens, so the control chrome matches each tenant.
 */
export function ImageCarousel({
  slides,
  aspectClassName = "aspect-video lg:aspect-[4/3]",
}: ImageCarouselProps) {
  const { index, next, prev, goTo } = useCarousel(slides.length);

  if (slides.length === 0) return null;
  const active = slides[index]!;

  return (
    <div className="relative w-full max-w-[600px] mx-auto group select-none">
      <div className={`relative w-full ${aspectClassName} overflow-hidden rounded-2xl shadow-2xl bg-brand-muted`}>
        <img
          alt={active.alt}
          loading="eager"
          className="object-cover object-center absolute inset-0 w-full h-full transition-opacity duration-300"
          src={active.src}
          style={{ color: "transparent" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-brand-primary hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-brand-primary hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((slide, dotIndex) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(dotIndex)}
              aria-label={`Ir a la imagen ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              className={`h-2 rounded-full transition-all ${
                dotIndex === index ? "w-6 bg-brand-secondary" : "w-2 bg-brand-muted hover:bg-brand-accent"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
