import { ContactForm } from "./contact-form";
import type { ContactFormConfig } from "../../types/contact";

interface ContactCTAProps extends ContactFormConfig {
  /** Left-column heading. */
  readonly title?: string;
  /** Left-column description. */
  readonly description?: string;
}

/**
 * ContactCTA — the recurring "¿Tienes dudas? Solicita informes" section:
 * intro copy on the left, the shared ContactForm on the right, on a
 * brand-primary surface. Used at the bottom of most pages.
 */
export function ContactCTA({
  title = "¿Tienes dudas? Solicita informes",
  description = "Completa el formulario para preparar tu mensaje y continuar la conversación por WhatsApp.",
  ...formConfig
}: ContactCTAProps) {
  return (
    <section className="bg-brand-primary text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-12 order-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
            <p className="text-base text-white/80">{description}</p>
          </div>
          <div className="w-full order-2">
            <ContactForm {...formConfig} />
          </div>
        </div>
      </div>
    </section>
  );
}
