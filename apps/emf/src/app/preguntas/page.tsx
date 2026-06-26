import type { Metadata } from "next";
import { PageHero, ContactCTA } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Educa Mates Foundation",
  description: "Sección de preguntas frecuentes de Educa Mates actualmente en revisión.",
};

export default function PreguntasPage() {
  return (
    <>
      <PageHero
        eyebrow="Soporte"
        title="Preguntas Frecuentes"
        subtitle="Estamos revisando esta información para ofrecer respuestas claras y actualizadas."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-primary mb-4">Preguntas frecuentes en revisión</h2>
          <p className="text-brand-text/80 text-lg">El contenido de esta sección está pendiente de validación. Mientras tanto, nuestro equipo puede resolver tus dudas directamente.</p>
        </div>
      </section>
      <ContactCTA
        whatsappNumber={WHATSAPP_NUMBER}
        programs={PROGRAM_OPTIONS}
        title="¿No encontraste tu respuesta?"
        description="Escríbenos por WhatsApp y un asesor resolverá todas tus dudas."
      />
    </>
  );
}
