import type { ReactNode } from "react";

interface PageHeroProps {
  readonly title: ReactNode;
  readonly subtitle?: ReactNode;
  /** Small label above the title. */
  readonly eyebrow?: string;
  readonly align?: "center" | "left";
}

/**
 * Compact institutional banner for inner pages. The wave follows the visual
 * grammar of the published EducaMates site while all colors remain tokenized.
 */
export function PageHero({ title, subtitle, eyebrow, align = "center" }: PageHeroProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className="relative bg-brand-primary pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
      <div className={`container relative z-10 mx-auto px-4 flex flex-col ${alignment}`}>
        {eyebrow && (
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/85 text-sm md:text-lg mt-3 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-10 lg:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C400,110 800,10 1200,60 V120 H0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
