import { Users } from "lucide-react";
import type { Testimonial } from "../../types/content";

interface TestimonialsProps {
  readonly testimonials: readonly Testimonial[];
  readonly heading?: string;
}

/**
 * Testimonials — stacked quote cards. Used standalone or embedded inside
 * CertificateSection. All accents use brand tokens.
 */
export function Testimonials({ testimonials, heading = "Testimonios" }: TestimonialsProps) {
  return (
    <div className="relative">
      <h3 className="text-2xl font-extrabold text-brand-primary mb-6 text-center lg:text-left flex items-center gap-3 justify-center lg:justify-start">
        <Users className="w-6 h-6 text-brand-secondary" />
        {heading}
      </h3>
      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-brand-primary/5 hover:border-brand-secondary/20 transition-all"
          >
            <p className="text-sm text-brand-text/70 leading-relaxed italic">
              &quot;{testimonial.text}&quot;
            </p>
            <div className="mt-2 text-sm font-bold text-brand-primary flex items-center gap-2">
              <div className="w-6 h-[2px] bg-brand-secondary" />
              {testimonial.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
