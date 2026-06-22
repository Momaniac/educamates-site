import type { Partner } from "../../types/content";

interface PartnersTickerProps {
  readonly partners: readonly Partner[];
  /** Heading above the ticker. Defaults to "Trabajamos con:". */
  readonly title?: string;
}

/**
 * PartnersTicker — infinite horizontal marquee of partner logos.
 *
 * Logos render grayscale and reveal color on hover. The list is duplicated so
 * the CSS `animate-partners-ticker` (translateX -50%) loops seamlessly.
 * Fade edges use `brand-background` so they blend with any tenant theme.
 */
export function PartnersTicker({ partners, title = "Trabajamos con:" }: PartnersTickerProps) {
  return (
    <section className="py-10 bg-brand-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl md:text-2xl font-bold text-brand-text/80 mb-8 uppercase tracking-widest">
          {title}
        </h3>
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-8 md:gap-16 animate-partners-ticker w-max">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 md:gap-16" aria-hidden={setIndex === 1}>
                {partners.map((partner) => (
                  <div
                    key={`${setIndex}-${partner.alt}`}
                    className="relative flex items-center justify-center shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 w-[160px] md:w-[180px] h-[80px] px-2 md:px-3 transition-all duration-300"
                  >
                    <img
                      alt={partner.alt}
                      loading="lazy"
                      width={180}
                      height={70}
                      className="object-contain max-h-[65px] md:max-h-[70px]"
                      src={partner.src}
                      style={{ color: "transparent" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
