import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero, ContactForm } from "@educamates/ui";
import { CONTACTS, OFFICIAL_EMAIL, WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contacto | Educa Mates Foundation",
  description:
    "Canales oficiales de contacto de Educa Mates Foundation y Centro Educativo EducaMates en CDMX.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ programa?: string }>;
}) {
  const { programa } = await searchParams;
  const defaultProgram = PROGRAM_OPTIONS.some((option) => option.value === programa) ? programa : "";

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos Listos para Ayudarte"
        subtitle="Elige el canal adecuado y conversemos sobre el programa o servicio que necesitas."
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 lg:mb-12">
            <p className="max-w-3xl text-lg leading-relaxed text-brand-text/80">
              Completa el formulario para preparar tu mensaje o contacta directamente la sede que corresponde. Maternal y Preescolar son atendidos por CEEM; los demás programas y servicios, por Foundation.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-5">Formulario de contacto</h2>
              <ContactForm
                whatsappNumber={WHATSAPP_NUMBER}
                programs={PROGRAM_OPTIONS}
                defaultProgram={defaultProgram}
                whatsappNumbersByProgram={{
                  Maternal: CONTACTS.ceem.whatsappNumber,
                  Preescolar: CONTACTS.ceem.whatsappNumber,
                }}
                heading="Solicita informes"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-5">Nuestras sedes</h2>
              <div className="space-y-4">
                <div className="rounded-2xl border border-brand-muted bg-brand-background/40 p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-1">Atención general</p>
                      <h3 className="font-bold text-lg text-brand-primary">{CONTACTS.foundation.name}</h3>
                      <a href={CONTACTS.foundation.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm leading-relaxed text-brand-text/75 hover:text-brand-secondary">
                        {CONTACTS.foundation.address}
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a href={CONTACTS.foundation.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                      <MessageCircle className="w-4 h-4" />
                      {CONTACTS.foundation.whatsappDisplay}
                    </a>
                    <a href={CONTACTS.foundation.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary/20 px-4 py-2.5 text-sm font-bold text-brand-primary hover:border-brand-secondary hover:text-brand-secondary transition-colors">
                      Ver en Google Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="mt-3 text-xs text-brand-text/60">Atención general por WhatsApp.</p>
                </div>

                <div className="rounded-2xl border border-brand-muted bg-brand-background/40 p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-1">Maternal y Preescolar</p>
                      <h3 className="font-bold text-lg text-brand-primary">{CONTACTS.ceem.name}</h3>
                      <a href={CONTACTS.ceem.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm leading-relaxed text-brand-text/75 hover:text-brand-secondary">
                        {CONTACTS.ceem.address}
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    <a href={CONTACTS.ceem.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                      <MessageCircle className="w-4 h-4" />
                      {CONTACTS.ceem.whatsappDisplay}
                    </a>
                    <a href={CONTACTS.ceem.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary/20 px-4 py-2.5 text-sm font-bold text-brand-primary hover:border-brand-secondary hover:text-brand-secondary transition-colors">
                      <Phone className="w-4 h-4" />
                      {CONTACTS.ceem.phone}
                    </a>
                    <a href={CONTACTS.ceem.mapsUrl} target="_blank" rel="noopener noreferrer" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary/20 px-4 py-2.5 text-sm font-bold text-brand-primary hover:border-brand-secondary hover:text-brand-secondary transition-colors">
                      Ver en Google Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <a href={`mailto:${OFFICIAL_EMAIL}`} className="flex items-center gap-4 rounded-2xl border border-brand-secondary/30 bg-brand-secondary/5 p-5 hover:border-brand-secondary transition-colors">
                  <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                  <div>
                    <p className="font-bold text-brand-primary">Correo oficial</p>
                    <p className="text-brand-text/80 text-sm">{OFFICIAL_EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
