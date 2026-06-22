import type { Metadata } from "next";
import { ComingSoon, ContactCTA } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";

export const metadata: Metadata = {
  title: "Maestrías | Educa Mates Foundation",
  description: "Programas de maestría de Educa Mates Foundation. Próximamente.",
};

export default function MaestriasPage() {
  return (
    <>
      <ComingSoon title="Maestrías" />
      <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} defaultProgram="Maestrías" />
    </>
  );
}
