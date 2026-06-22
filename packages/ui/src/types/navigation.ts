/**
 * Navigation types for the white-label Header component.
 *
 * These types define the contract between each app's navigation
 * configuration and the shared Header component. Apps pass their
 * own nav structure via props — the Header renders it using
 * semantic Tailwind classes that resolve to each app's theme.
 */

/** A simple navigation link */
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

/** A dropdown menu with child links */
export interface NavDropdown {
  readonly label: string;
  readonly items: readonly NavLink[];
}

/** A navigation item can be either a link or a dropdown */
export type NavItem = NavLink | NavDropdown;

/** Type guard to distinguish dropdowns from links */
export function isNavDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

/** Logo configuration with optional responsive variant */
export interface LogoConfig {
  readonly src: string;
  readonly alt: string;
  /** Compact logo for mobile viewports */
  readonly mobileSrc?: string;
  readonly width?: number;
  readonly height?: number;
}

/** Call-to-action button in the header */
export interface HeaderCTA {
  readonly label: string;
  readonly icon?: React.ReactNode;
  readonly onClick?: () => void;
  readonly href?: string;
}

/** Full Header component configuration */
export interface HeaderConfig {
  readonly logo: LogoConfig;
  readonly navigation: readonly NavItem[];
  readonly cta?: HeaderCTA;
}
