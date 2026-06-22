/* ── Components ─────────────────────────────────────────────── */
export { Header } from "./components/header/header";
export { DesktopNav, NavDropdownMenu } from "./components/header/nav-dropdown";
export { MobileMenu } from "./components/header/mobile-menu";
export { Footer } from "./components/footer/footer";
export { ContactForm } from "./components/contact/contact-form";
export { WhatsAppFAB } from "./components/contact/whatsapp-fab";
export { PartnersTicker } from "./components/carousel/partners-ticker";
export { ImageCarousel } from "./components/carousel/image-carousel";
export { BenefitsGrid } from "./components/program/benefits-grid";
export { ProgramShowcase } from "./components/program/program-showcase";
export { ProgramDetail } from "./components/program/program-detail";
export { ProgramCard } from "./components/program/program-card";
export { ComingSoon } from "./components/program/coming-soon";
export { Testimonials } from "./components/sections/testimonials";
export { CertificateSection } from "./components/sections/certificate-section";
export { FAQAccordion } from "./components/sections/faq-accordion";
export { TeamGrid } from "./components/team/team-grid";
export { ContactCTA } from "./components/contact/contact-cta";
export { SectionWrapper } from "./components/common/section-wrapper";
export { PageHero } from "./components/common/page-hero";
export { AccentCard } from "./components/common/accent-card";
export { WhatsAppIcon } from "./components/common/icons";

/* ── Hooks & lib ────────────────────────────────────────────── */
export { useCarousel } from "./hooks/use-carousel";
export { buildWhatsAppUrl } from "./lib/whatsapp";
export type { WhatsAppUrlOptions } from "./lib/whatsapp";

/* ── Types ──────────────────────────────────────────────────── */
export type {
  NavLink,
  NavDropdown,
  NavItem,
  LogoConfig,
  HeaderCTA,
  HeaderConfig,
} from "./types/navigation";
export { isNavDropdown } from "./types/navigation";

export type {
  BrandColorToken,
  ContactInfo,
  FooterLinkGroup,
  FooterConfig,
  ProgramData,
} from "./types/theme";

export type {
  IconProps,
  IconComponent,
  Benefit,
  Testimonial,
  Partner,
  CarouselSlide,
  CertificateFeature,
  ProgramSlide,
  ProgramSlideStat,
} from "./types/content";

export type {
  ProgramOption,
  ContactFormConfig,
  WhatsAppFABConfig,
} from "./types/contact";

export type {
  ProgramInfoCard,
  ProgramCurriculum,
  ProgramProcessStep,
  ProgramLocation,
  ProgramCardData,
  TeamMember,
  FAQItem,
} from "./types/program";
