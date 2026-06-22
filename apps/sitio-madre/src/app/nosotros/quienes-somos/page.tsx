import type { Metadata } from "next";
import { BookOpen, Building2, GraduationCap, HeartHandshake, Lightbulb, Target, TrendingUp, UsersRound } from "lucide-react";
import { AccentCard, PageHero, ContactCTA } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Quiénes Somos | Educa Mates Foundation",
  description: "Fundación Educa Mates, AC transforma vidas mediante la educación, el liderazgo y el desarrollo humano.",
};

const modelPillars = [
  { icon: BookOpen, title: "Aprendizaje continuo", description: "Un modelo que impulsa el desarrollo académico, profesional y humano a lo largo de cada proceso formativo." },
  { icon: TrendingUp, title: "Liderazgo", description: "Formación orientada a fortalecer el potencial de personas, líderes y equipos de trabajo." },
  { icon: HeartHandshake, title: "Crecimiento integral", description: "Acompañamiento que reconoce las dimensiones académica, profesional y humana de cada persona." },
];

const audiences = [
  { icon: GraduationCap, label: "Jóvenes" },
  { icon: UsersRound, label: "Adultos" },
  { icon: Building2, label: "Empresas" },
  { icon: HeartHandshake, label: "Organizaciones sociales" },
];

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero title="Quiénes Somos" />

      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 rounded-full bg-brand-secondary" />
            <span className="text-brand-intermediate font-bold uppercase tracking-wider text-sm">Nuestra esencia</span>
          </div>
          <div className="grid lg:grid-cols-[1.35fr_.65fr] gap-10 lg:gap-14 items-center">
            <div className="space-y-5 text-brand-text/80 text-base md:text-lg leading-relaxed animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate">Educación para construir un mejor futuro</h2>
              <p>En <strong className="text-brand-intermediate">Educamates Foundation</strong> somos una fundación comprometida con la formación académica, profesional y humana de jóvenes, adultos, empresas y organizaciones sociales.</p>
              <p>Nuestro propósito es desarrollar el potencial de las personas mediante un modelo educativo innovador que impulse el aprendizaje continuo, el liderazgo y el crecimiento integral.</p>
              <p>Acompañamos a nuestros alumnos, líderes y equipos de trabajo en la construcción de un mejor futuro a través de programas educativos flexibles y accesibles.</p>
            </div>
            <div className="text-center animate-fade-in-up">
              <blockquote className="border-l-4 border-brand-secondary pl-5 text-left italic font-semibold text-brand-primary text-lg leading-relaxed">
                “Transformamos vidas a través de la educación y el desarrollo humano.”
              </blockquote>
              <img src="/logos/LOGO_PRINCIPAL.png" alt="Fundación Educa Mates, AC" width={220} height={70} className="mx-auto mt-8 h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-1 w-12 rounded-full bg-brand-secondary" />
            <span className="text-brand-intermediate font-bold uppercase tracking-wider text-sm">Nuestro propósito</span>
          </div>
          <AccentCard title="Desarrollar el potencial de las personas" icon={<Target className="w-6 h-6" />} accent="primary">
            Mediante un modelo educativo innovador, flexible y accesible que integra formación académica, profesional y humana.
          </AccentCard>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Modelo educativo</p>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-intermediate">Cómo impulsamos el desarrollo humano</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {modelPillars.map(({ icon: Icon, title, description }, index) => (
              <AccentCard key={title} title={title} icon={<Icon className="w-6 h-6" />} accent={index === 1 ? "secondary" : "primary"} orientation="top" className="h-full">
                {description}
              </AccentCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-background py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1 w-12 rounded-full bg-brand-secondary" />
            <div>
              <p className="text-brand-intermediate font-bold uppercase tracking-wider text-sm">Nuestra comunidad</p>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate mt-1">A quiénes acompañamos</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map(({ icon: Icon, label }, index) => (
              <div key={label} className="bg-white rounded-xl border border-brand-muted shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${index % 2 ? 'bg-brand-secondary text-white' : 'bg-brand-intermediate text-white'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-brand-intermediate">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 relative pl-6 max-w-4xl">
            <span className="absolute left-0 inset-y-0 w-1 rounded-full bg-brand-secondary" />
            <Lightbulb className="w-6 h-6 text-brand-intermediate/20 mb-2" />
            <p className="font-semibold italic text-brand-primary text-lg">Programas educativos flexibles y accesibles para acompañar la construcción de un mejor futuro.</p>
          </div>
        </div>
      </section>

      <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} />
    </>
  );
}
