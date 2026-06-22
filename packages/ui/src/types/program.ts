/**
 * Data models for program/institutional pages.
 */
import type { IconComponent } from "./content";

/** A card in a program's "Información General" grid. */
export interface ProgramInfoCard {
  readonly title: string;
  readonly description: string;
  readonly icon?: IconComponent;
}

/** Curriculum / study plan block. */
export interface ProgramCurriculum {
  readonly heading?: string;
  readonly description?: string;
  readonly areas: readonly string[];
}

/** A numbered step in an admission/delivery process. */
export interface ProgramProcessStep {
  readonly title: string;
  readonly description: string;
}

/** A physical location / sede. */
export interface ProgramLocation {
  readonly label: string;
  readonly address: string;
  readonly href?: string;
  readonly actionLabel?: string;
}

/** A program card (e.g. each licenciatura). */
export interface ProgramCardData {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly href?: string;
  readonly comingSoon?: boolean;
}

/** A team member for the TeamGrid. */
export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly photo?: string;
  /** CSS object-position for the photo crop (e.g. "center top"). */
  readonly photoPosition?: string;
}

/** A question/answer pair for the FAQAccordion. */
export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}
