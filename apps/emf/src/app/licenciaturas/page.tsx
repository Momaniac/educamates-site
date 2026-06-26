import type { Metadata } from "next";
import {
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Scale,
  School,
} from "lucide-react";
import { PageHero, ContactCTA, buildWhatsAppUrl } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";
import { DegreeOfferCard, DegreePlanAccordion } from "./degree-visuals";
import { DEGREE_PLANS } from "./plans";

export const metadata: Metadata = {
  title: "Licenciaturas | Educa Mates Foundation",
  description: "Licenciaturas de 24 meses en Pedagogía, Administración, Derecho, Contaduría y Educación Preescolar.",
};

const degreeIcons = [BookOpen, BriefcaseBusiness, Scale, Calculator, School];

const integralFormation = [
  "Liderazgo",
  "Comunicación efectiva",
  "Desarrollo humano",
  "Inteligencia emocional",
  "Trabajo en equipo",
  "Pensamiento crítico",
  "Habilidades profesionales",
  "Crecimiento personal",
];

function degreeContactUrl(degreeName: string) {
  return buildWhatsAppUrl({
    phone: WHATSAPP_NUMBER,
    message: `Hola, me interesa recibir información sobre ${degreeName}.`,
  });
}

export default function LicenciaturasPage() {
  return (
    <>
      <PageHero title="Licenciaturas" />

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-9 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-1 w-12 rounded-full bg-brand-secondary" />
                <span className="text-brand-intermediate font-bold uppercase tracking-wider text-sm">Formación profesional</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate leading-tight">Conocimientos, habilidades y competencias humanas</h2>
              <p className="text-brand-text/70 text-base md:text-lg leading-relaxed mt-5">
                Todas nuestras licenciaturas tienen una duración de 24 meses y están diseñadas para desarrollar conocimientos académicos, habilidades profesionales y competencias humanas que permitan a nuestros estudiantes desenvolverse exitosamente en el ámbito laboral y personal.
              </p>
            </div>
            <aside className="bg-brand-background rounded-2xl border border-brand-muted border-t-4 border-t-brand-secondary shadow-md p-7 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-secondary text-white flex items-center justify-center shadow-md">
                  <Clock3 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-brand-text/50">Duración confirmada</p>
                  <p className="text-3xl font-extrabold text-brand-intermediate">24 meses</p>
                </div>
              </div>
              <p className="text-sm text-brand-text/65 leading-relaxed mt-5">La misma duración aplica a las cinco licenciaturas de la oferta académica.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-brand-background py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Oferta académica</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate">Nuestras licenciaturas</h2>
            <p className="text-brand-text/65 mt-4">Cinco opciones activas con modalidades y planes de estudio confirmados por EducaMates.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {DEGREE_PLANS.map((degree, index) => {
              const Icon = degreeIcons[index] ?? GraduationCap;
              return <DegreeOfferCard key={degree.id} degree={degree} icon={Icon} contactUrl={degreeContactUrl(degree.name)} index={index} />;
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div>
              <div className="w-14 h-14 rounded-full bg-brand-secondary text-white flex items-center justify-center shadow-md mb-5">
                <GraduationCap className="w-7 h-7" />
              </div>
              <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Más allá de lo académico</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate">Formación integral</h2>
              <p className="text-brand-text/65 leading-relaxed mt-4">Nuestro modelo educativo incorpora materias integrales que fortalecen capacidades profesionales y humanas.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {integralFormation.map((item) => (
                <div key={item} className="bg-brand-background rounded-xl border border-brand-muted p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span className="font-bold text-brand-intermediate text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="planes-estudio" className="bg-brand-background py-12 lg:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-9 lg:mb-12">
            <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Exploración progresiva</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate">Planes de estudio</h2>
            <p className="text-brand-text/65 mt-4">Abre una licenciatura y después el semestre, cuatrimestre o área que quieras consultar.</p>
          </div>
          <div className="space-y-4">
            {DEGREE_PLANS.map((degree) => (
              <DegreePlanAccordion key={degree.id} degree={degree} contactUrl={degreeContactUrl(degree.name)} />
            ))}
          </div>
        </div>
      </section>

      <div id="contacto-licenciaturas">
        <ContactCTA
          whatsappNumber={WHATSAPP_NUMBER}
          programs={PROGRAM_OPTIONS}
          defaultProgram="Licenciaturas"
          title="Solicita informes sobre nuestras licenciaturas"
          description="Selecciona Licenciaturas en el formulario y cuéntanos qué carrera te interesa."
        />
      </div>
    </>
  );
}
