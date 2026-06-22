import type { Metadata } from "next";
import { CeemProgram } from "../_components/ceem-program";

export const metadata: Metadata = {
  title: "Preescolar | Centro Educativo EducaMates",
  description: "Programa integral de preescolar, desde maternal hasta preescolar 3.",
};

export default function PreescolarPage() {
  return <CeemProgram variant="preescolar" />;
}
