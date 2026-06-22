import type { Metadata } from "next";
import { Target, Clock, Users, BadgeCheck, Zap, ShieldCheck } from "lucide-react";
import { ProgramDetail, ContactCTA } from "@educamates/ui";
import { FOUNDATION_SEDE, WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Secundaria en 6 Meses | Educa Mates",
  description: "Programa de secundaria en 6 meses para personas desde los 15 años, con modalidad flexible y preparación integral.",
};

export default function SecundariaPage() {
  return (
    <>
      <ProgramDetail
        title="Secundaria en 6 Meses"
        infoHeading="Información General"
        infoCards={[
          {
            icon: Target,
            title: "Programa",
            description: "Secundaria en 6 meses.",
          },
          { icon: Clock, title: "Duración", description: "6 meses." },
          {
            icon: Users,
            title: "Edad mínima",
            description: "15 años.",
          },
          {
            icon: BadgeCheck,
            title: "Modalidad",
            description: "Modalidad flexible.",
          },
        ]}
        highlights={[
          {
            icon: Zap,
            title: "Modalidad flexible",
            description: "Una alternativa educativa flexible durante los seis meses del programa.",
          },
          {
            icon: ShieldCheck,
            title: "Preparación integral",
            description: "Preparación integral para acompañar el avance académico de cada estudiante.",
          },
        ]}
        highlightsHeading="Una preparación pensada para avanzar"
        highlightsSubheading="El programa combina una duración definida con una modalidad flexible y preparación integral."
        process={[
          { title: "Solicita información", description: "Contacta a un asesor para conocer el programa y resolver tus dudas." },
          { title: "Revisa los requisitos", description: "Prepara la documentación necesaria para tu inscripción." },
          { title: "Entrega la documentación", description: "Coordina con el asesor la entrega de tus documentos." },
          { title: "Inicia tu preparación", description: "Comienza el programa de seis meses con modalidad flexible." },
        ]}
        processHeading="Proceso de Admisión"
        requirements={[
          "Acta de nacimiento (color)",
          "Certificado de primaria (ambos lados)",
          "CURP actualizado",
          "INE o identificación oficial (tutor si es menor)",
          "6 fotografías tamaño infantil",
        ]}
        locations={[FOUNDATION_SEDE]}
        locationsHeading="Centro de atención"
        locationsSubheading="Atención para Secundaria a través de Fundación Educa Mates, AC."
        ctaHref="#contacto-programa"
        ctaLabel="Solicitar informes"
      />
      <div id="contacto-programa">
        <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} defaultProgram="Secundaria" />
      </div>
    </>
  );
}
