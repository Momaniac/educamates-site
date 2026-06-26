import type { Metadata } from "next";
import { CeemProgram } from "../_components/ceem-program";

export const metadata: Metadata = {
  title: "Maternal | Centro Educativo EducaMates",
  description: "Atención integral desde los 45 días de nacidos en Centro Educativo EducaMates.",
};

export default function MaternalPage() {
  return <CeemProgram variant="maternal" />;
}
