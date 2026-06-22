"use client";

import { ChevronLeft, ChevronRight, CircleCheckBig } from "lucide-react";
import { useCarousel } from "../../hooks/use-carousel";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../common/icons";
import type { ProgramSlide } from "../../types/content";

interface ProgramShowcaseProps {
  readonly slides: readonly ProgramSlide[];
  /** Destination for the per-slide WhatsApp inquiry button. */
  readonly whatsappNumber?: string;
}

/**
 * ProgramShowcase — the original site's program carousel: image slider on
 * the left, and an info panel (title, description, benefits, stats, CTAs)
 * that switches together with the active slide.
 *
 * Replicates the live site's "Program Carousel + info al costado" section.
 * All chrome and accents resolve through brand tokens.
 */
export function ProgramShowcase({ slides, whatsappNumber }: ProgramShowcaseProps) {
  const { index, next, prev, goTo } = useCarousel(slides.length);

  if (slides.length === 0) return null;
  const active = slides[index]!;

  return (
    <section className="bg-brand-background py-8 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          {/* ── Image carousel ─────────────────────────────── */}
          <div className="relative w-full max-w-[600px] mx-auto group select-none order-1">
            <div className="relative w-full aspect-video lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-brand-muted">
              <img
                alt={active.alt}
                loading="eager"
                className="object-cover object-center absolute inset-0 w-full h-full transition-opacity duration-300"
                src={active.image}
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Programa anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-brand-primary hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Programa siguiente"
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
                    key={slide.image}
                    type="button"
                    onClick={() => goTo(dotIndex)}
                    aria-label={`Ver ${slide.title}`}
                    aria-current={dotIndex === index}
                    className={`h-2 rounded-full transition-all ${
                      dotIndex === index ? "w-6 bg-brand-secondary" : "w-2 bg-brand-muted hover:bg-brand-accent"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Info panel (changes with the slide) ────────── */}
          <div className="order-2">
            <div key={active.title} className="space-y-4 lg:space-y-6 animate-fade-in-up">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary leading-tight">
                {active.title}
              </h2>
              <p className="text-brand-text text-base md:text-xl leading-relaxed">{active.description}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                {active.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CircleCheckBig className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-base text-brand-text">{benefit}</span>
                  </li>
                ))}
              </ul>

              {active.stats && active.stats.length > 0 && (
                <div className="grid grid-cols-3 gap-2 lg:gap-4 py-2 lg:py-4">
                  {active.stats.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center p-2 lg:p-4 bg-white border border-brand-muted rounded-xl lg:rounded-2xl shadow-sm"
                    >
                      <span className="text-brand-primary mb-1 lg:mb-2 [&>svg]:w-5 [&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6">
                        {icon}
                      </span>
                      <p className="text-[10px] lg:text-xs font-bold text-brand-primary uppercase text-center leading-tight">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2 lg:pt-4 flex flex-col sm:flex-row gap-3 lg:gap-4">
                {active.ctaHref && (
                  <a
                    href={active.ctaHref}
                    className="inline-flex items-center justify-center bg-brand-secondary text-white px-6 py-3 lg:px-10 lg:py-4 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    SABER MÁS
                    <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                )}
                {whatsappNumber && active.whatsappMessage && (
                  <a
                    href={buildWhatsAppUrl({ phone: whatsappNumber, message: active.whatsappMessage })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-base lg:text-lg font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    <WhatsAppIcon className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                    SOLICITA INFORMES
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
