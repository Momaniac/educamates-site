import type { Benefit } from "../../types/content";

interface BenefitsGridProps {
  readonly benefits: readonly Benefit[];
  readonly heading?: string;
  readonly subheading?: string;
}

/**
 * BenefitsGrid — responsive grid of icon + title + description cards.
 *
 * Icons are passed as component references (e.g. `Clock` from lucide-react)
 * so the grid controls their size/color via brand tokens.
 */
export function BenefitsGrid({ benefits, heading, subheading }: BenefitsGridProps) {
  return (
    <section className="bg-white py-8 lg:py-20">
      <div className="container mx-auto px-4">
        {heading && (
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-primary text-center mb-3 md:mb-4">
            {heading}
          </h2>
        )}
        {subheading && (
          <p className="text-brand-text text-center text-base md:text-lg mb-6 md:mb-12 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-4 lg:p-6 rounded-xl hover:shadow-xl transition-shadow border border-brand-muted bg-white"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-3 lg:mb-4">
                <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-brand-primary mb-1 lg:mb-2">{title}</h3>
              <p className="text-brand-text text-sm lg:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
