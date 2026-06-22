import type { ReactNode } from "react";
import { CircleCheckBig, ShieldCheck } from "lucide-react";
import { Testimonials } from "./testimonials";
import type { CertificateFeature, Testimonial } from "../../types/content";

interface CertificateSectionProps {
  /** Heading; pass a node to highlight part of it (e.g. with text-brand-secondary). */
  readonly heading: ReactNode;
  readonly features: readonly CertificateFeature[];
  /** Optional pill text shown under the heading. */
  readonly badgeText?: ReactNode;
  /** Testimonials rendered in the right column (omit to hide). */
  readonly testimonials?: readonly Testimonial[];
  readonly testimonialsHeading?: string;
}

/**
 * CertificateSection — 2-column trust block: features list + testimonials.
 *
 * Each feature's icon chip can be tinted "primary" or "secondary"; everything
 * resolves through brand tokens so the whole block re-themes per tenant.
 */
export function CertificateSection({
  heading,
  features,
  badgeText,
  testimonials,
  testimonialsHeading,
}: CertificateSectionProps) {
  return (
    <section className="relative bg-brand-muted/20 py-12 lg:py-16 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 lg:px-16 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* ── Features column ─────────────────────────────── */}
          <div className="text-center lg:text-left relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight mb-6">
              {heading}
            </h2>

            {badgeText && (
              <div className="inline-block mb-8">
                <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-brand-secondary/30 shadow-sm">
                  <div className="w-7 h-7 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-secondary" />
                  </div>
                  <p className="text-base md:text-lg text-brand-primary font-medium">{badgeText}</p>
                </div>
              </div>
            )}

            <div className="space-y-4 mb-8 text-left">
              {features.map((feature) => {
                const isPrimary = (feature.accent ?? "primary") === "primary";
                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/60 hover:bg-white transition-all border border-transparent hover:border-brand-primary/10 shadow-sm group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${
                        isPrimary
                          ? "bg-brand-primary/5 group-hover:bg-brand-primary"
                          : "bg-brand-secondary/5 group-hover:bg-brand-secondary"
                      } flex items-center justify-center flex-shrink-0 transition-colors duration-300`}
                    >
                      <CircleCheckBig
                        className={`w-5 h-5 ${
                          isPrimary ? "text-brand-primary" : "text-brand-secondary"
                        } group-hover:text-white`}
                      />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-brand-primary">{feature.title}</p>
                      <p className="text-brand-text/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Testimonials column ─────────────────────────── */}
          {testimonials && testimonials.length > 0 && (
            <div className="relative pt-4 lg:pt-8">
              <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent" />
              <div className="relative z-10">
                <Testimonials testimonials={testimonials} heading={testimonialsHeading} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
