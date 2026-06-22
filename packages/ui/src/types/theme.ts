/**
 * Theme-related types for the white-label system.
 */

/** Semantic color token names available in the design system */
export type BrandColorToken =
  | "brand-primary"
  | "brand-secondary"
  | "brand-accent"
  | "brand-background"
  | "brand-muted"
  | "brand-text";

/** Contact information for the footer and contact components */
export interface ContactInfo {
  readonly phone?: string;
  readonly whatsapp?: string;
  readonly email?: string;
  readonly addresses?: readonly {
    readonly label: string;
    readonly street: string;
    readonly phone?: string;
    readonly phoneHref?: string;
    readonly whatsapp?: string;
    readonly whatsappHref?: string;
    readonly mapsHref?: string;
  }[];
}

/** Footer link section */
export interface FooterLinkGroup {
  readonly title: string;
  readonly links: readonly {
    readonly label: string;
    readonly href: string;
  }[];
}

/** Full footer configuration */
export interface FooterConfig {
  readonly logo: {
    readonly src: string;
    readonly alt: string;
  };
  readonly description: string;
  readonly linkGroups: readonly FooterLinkGroup[];
  readonly contact: ContactInfo;
  readonly copyright: string;
  readonly privacyHref?: string;
  readonly googleMapsEmbedUrl?: string;
}

/** Program/course data model */
export interface ProgramData {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly whatsappMessage?: string;
}
