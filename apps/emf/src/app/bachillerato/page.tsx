import type { Metadata } from "next";
import { Target, Clock, UserRound, Laptop } from "lucide-react";
import { ProgramDetail, ContactCTA } from "@educamates/ui";
import { FOUNDATION_SEDE, WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Bachillerato en 6 Meses | Educa Mates",
  description: "Programa de bachillerato en 6 meses para personas desde los 17 años, con acompañamiento académico personalizado.",
};

export default function BachilleratoPage() {
  return (
    <>
      <ProgramDetail
        title="Bachillerato en 6 Meses"
        infoHeading="Información General"
        infoCards={[
          {
            icon: Target,
            title: "Programa",
            description: "Bachillerato en 6 meses.",
          },
          { icon: Clock, title: "Duración", description: "6 meses." },
          {
            icon: UserRound,
            title: "Edad mínima",
            description: "17 años.",
          },
          { icon: Laptop, title: "Acompañamiento", description: "Acompañamiento académico personalizado." },
        ]}
        curriculum={{
          heading: "Plan de Estudios SEP",
          description:
            "Nuestro programa cubre las áreas fundamentales para tu desarrollo académico y personal.",
          areas: [
            "Matemáticas y Ciencias Experimentales",
            "Ciencias Sociales y Humanidades",
            "Bases Académicas",
            "Desarrollo Personal y Profesional",
          ],
        }}
        process={[
          {
            title: "Revisa la documentación",
            description: "Verifica con un asesor los documentos necesarios para iniciar el proceso.",
          },
          {
            title: "Contacta a un asesor",
            description: "Coordina por WhatsApp la revisión y entrega de la documentación.",
          },
          {
            title: "Completa tu inscripción",
            description: "Entrega los documentos indicados para completar el proceso de admisión.",
          },
        ]}
        processHeading="Proceso de Admisión"
        requirements={[
          "Acta de nacimiento original",
          "Certificado de secundaria original",
          "CURP actualizado",
          "INE o pasaporte (vigencia mayor a 7 meses)",
          "6 fotografías tamaño infantil (B/N, mate, fondo blanco)",
        ]}
        requirementsNote="Importante: Si falta algún documento no será posible realizar el trámite. Edad mínima 17 años."
        locations={[FOUNDATION_SEDE]}
        locationsHeading="Centro de atención"
        locationsSubheading="Atención para Bachillerato a través de Fundación Educa Mates, AC."
        requirementsFirst
        ctaHref="#contacto-programa"
        ctaLabel="Solicitar informes"
      />
      <div id="contacto-programa">
        <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} defaultProgram="Bachillerato" />
      </div>
    </>
  );
}
