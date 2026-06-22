/**
 * Configuration types for the WhatsApp-based contact components.
 */

/** An option in the ContactForm program selector. */
export interface ProgramOption {
  readonly value: string;
  readonly label: string;
}

/** Configuration for the ContactForm component. */
export interface ContactFormConfig {
  /** Destination WhatsApp number (any format; non-digits are stripped). */
  readonly whatsappNumber: string;
  /** Programs offered in the selector. */
  readonly programs: readonly ProgramOption[];
  /** Card heading. Defaults to "Solicita informes". */
  readonly heading?: string;
  /** Pre-selected program value. */
  readonly defaultProgram?: string;
  /** Optional destination overrides keyed by program value. */
  readonly whatsappNumbersByProgram?: Readonly<Record<string, string>>;
}

/** Configuration for the floating WhatsApp action button. */
export interface WhatsAppFABConfig {
  /** WhatsApp number (any format; non-digits are stripped). */
  readonly phone: string;
  /** Pre-filled message. */
  readonly message?: string;
  /** Accessible label / tooltip. */
  readonly label?: string;
}
