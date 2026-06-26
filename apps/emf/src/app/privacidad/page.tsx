import type { Metadata } from "next";
import { PageHero } from "@educamates/ui";
import { privacySections } from "../../lib/privacy-content";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Educa Mates Foundation",
  description:
    "Aviso de Privacidad Integral del Centro Educativo Educa Mates y Educa Mates Foundation, A.C.",
  robots: "noindex, follow",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero title="Aviso de Privacidad" subtitle="Aviso de Privacidad Integral" />

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {privacySections.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h2 className="text-lg md:text-xl font-bold text-brand-primary mb-2">{section.heading}</h2>
              )}
              <p className="text-brand-text/80 text-sm md:text-base leading-relaxed text-justify">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
