/**
 * Content data models for the shared section components.
 *
 * Apps pass their own content via these props; the components render it
 * using only semantic Tailwind classes, so every section re-themes itself
 * automatically per tenant.
 */
import type { ComponentType, ReactNode } from "react";

/** Props every Lucide (or compatible) icon component accepts. */
export interface IconProps {
  readonly className?: string;
  readonly strokeWidth?: number;
}

/** A passable icon component reference (e.g. `Clock` from lucide-react). */
export type IconComponent = ComponentType<IconProps>;

/** A single benefit/feature card in the BenefitsGrid. */
export interface Benefit {
  readonly icon: IconComponent;
  readonly title: string;
  readonly description: string;
}

/** A customer testimonial. */
export interface Testimonial {
  readonly text: string;
  readonly name: string;
}

/** A partner/affiliate logo for the PartnersTicker. */
export interface Partner {
  readonly alt: string;
  readonly src: string;
}

/** A single image slide for the ImageCarousel. */
export interface CarouselSlide {
  readonly src: string;
  readonly alt: string;
  /** Optional deep link when the slide is clicked. */
  readonly href?: string;
}

/** A feature row inside the CertificateSection. */
export interface CertificateFeature {
  readonly title: string;
  readonly description: string;
  /** Which brand accent tints the icon chip. Defaults to "primary". */
  readonly accent?: "primary" | "secondary";
}

/**
 * A compact stat badge shown under a program slide (e.g. "6 Meses").
 * `icon` is a rendered element (e.g. `<Clock />`), not a component reference,
 * so the data can cross the server → client boundary of ProgramShowcase.
 */
export interface ProgramSlideStat {
  readonly icon: ReactNode;
  readonly label: string;
}

/**
 * A full program slide for the ProgramShowcase: image plus the info panel
 * content that changes alongside it (title, benefits, stats, CTAs).
 */
export interface ProgramSlide {
  readonly image: string;
  readonly alt: string;
  readonly title: string;
  readonly description: string;
  readonly benefits: readonly string[];
  readonly stats?: readonly ProgramSlideStat[];
  /** "SABER MÁS" destination. */
  readonly ctaHref?: string;
  /** Pre-filled WhatsApp message for this program's inquiry button. */
  readonly whatsappMessage?: string;
}
