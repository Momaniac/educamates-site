import type { Metadata } from "next";
import { PageHero, TeamGrid, ContactCTA } from "@educamates/ui";
import type { TeamMember } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Educa Mates Foundation",
  description: "Conoce al equipo de Educa Mates Foundation.",
};

const team: TeamMember[] = [
  { name: "Dra. Alma Mtz", role: "Fundadora y directora general", photo: "/images/equipo/dra-alma.jpg", photoPosition: "center top" },
  { name: "Lic. Pamela Tejeda", role: "Coordinación administrativa", photo: "/images/equipo/lic-pamela.jpg", photoPosition: "center 35%" },
  { name: "Lic. Mónica Hdz", role: "Coordinación técnica", photo: "/images/equipo/lic-monica.jpg", photoPosition: "center 35%" },
  { name: "Lic. Juan Carlos R.", role: "Coordinación educativa", photo: "/images/equipo/lic-juan-carlos.jpg", photoPosition: "center 15%" },
];

export default function NuestroEquipoPage() {
  return (
    <>
      <PageHero title="Nuestro equipo" />
      <TeamGrid members={team} eyebrow="Conoce a" heading="Nuestro Equipo" />
      <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} />
    </>
  );
}
