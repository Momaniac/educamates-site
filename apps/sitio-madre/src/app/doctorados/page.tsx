import type { Metadata } from "next";
import { ComingSoon, ContactCTA } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Doctorados | Educa Mates Foundation",
  description: "Programas de doctorado de Educa Mates Foundation. Próximamente.",
};

export default function DoctoradosPage() {
  return (
    <>
      <ComingSoon title="Doctorados" />
      <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} defaultProgram="Doctorados" />
    </>
  );
}
