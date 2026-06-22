import type { Metadata } from "next";
import { BookOpen, BriefcaseBusiness, Building2, MessagesSquare, Mic2, Presentation, TrendingUp, Users } from "lucide-react";
import { PageHero, ContactCTA } from "@educamates/ui";
import { CONTACTS, WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";
import { BenefitItem, BusinessServiceCard } from "../_components/business-service-visuals";

export const metadata: Metadata = {
  title: "Servicios para Empresas | Educa Mates Foundation",
  description: "Capacitación empresarial, coaching y desarrollo del talento humano para empresas, emprendedores y organizaciones.",
};

const services = [
  { icon: BookOpen, title: "Cursos especializados", description: "Opciones de formación para fortalecer conocimientos y habilidades dentro de las organizaciones." },
  { icon: Presentation, title: "Talleres prácticos", description: "Espacios de aprendizaje orientados a la participación y la aplicación práctica." },
  { icon: TrendingUp, title: "Diplomados", description: "Programas de formación para acompañar el desarrollo profesional de personas y equipos." },
  { icon: Mic2, title: "Conferencias", description: "Encuentros de aprendizaje para empresas, emprendedores y organizaciones." },
  { icon: MessagesSquare, title: "Coaching individual y grupal", description: "Acompañamiento profesional para personas, líderes y equipos de trabajo." },
  { icon: Users, title: "Desarrollo del talento humano", description: "Formación enfocada en impulsar el potencial humano y profesional." },
];

const benefits = [
  { title: "Formación flexible", description: "Diversas modalidades de capacitación y acompañamiento según el tipo de programa." },
  { title: "Desarrollo de habilidades", description: "Procesos formativos orientados al crecimiento de personas y equipos." },
  { title: "Acompañamiento profesional", description: "Coaching individual y grupal como parte de la oferta confirmada." },
  { title: "Programas adaptables", description: "Opciones que pueden organizarse de acuerdo con las necesidades generales de cada organización." },
  { title: "Crecimiento humano y profesional", description: "Una propuesta que integra aprendizaje, desarrollo humano y formación profesional." },
];

export default function ServiciosEmpresasPage() {
  return (
    <>
      <PageHero title="Capacitación Empresarial y Desarrollo Organizacional" subtitle="Impulsamos el crecimiento de empresas, emprendedores y organizaciones." />

      <section className="bg-white py-12 lg:py-20 overflow-x-clip">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-1 w-12 rounded-full bg-brand-secondary" />
                <span className="text-brand-intermediate font-bold uppercase tracking-wider text-sm">Servicios corporativos</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-intermediate leading-tight mb-6">Formación y acompañamiento para organizaciones</h2>
              <div className="space-y-5 text-brand-text/75 text-base md:text-lg leading-relaxed">
                <p>En <strong className="text-brand-intermediate">Fundación Educa Mates, AC</strong> acompañamos a empresas, emprendedores y organizaciones mediante opciones de capacitación y desarrollo humano.</p>
                <p>Impulsamos su crecimiento a través de cursos, talleres, diplomados, conferencias, coaching y desarrollo del talento humano.</p>
              </div>
              <a href="#servicios-confirmados" className="inline-flex items-center gap-2 mt-7 bg-brand-secondary hover:bg-brand-accent text-white px-7 py-3 rounded-lg font-bold shadow-md transition-all">
                Conocer servicios <TrendingUp className="w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-secondary/10 rotate-2" />
              <img src="/images/carreras/somos-educamates.webp" alt="Fundación Educa Mates" width={1200} height={675} className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="servicios-confirmados" className="bg-brand-background py-12 lg:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Soluciones de formación</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Servicios confirmados por EducaMates</h2>
            <p className="text-brand-text/65 mt-4">Opciones para impulsar el aprendizaje y el desarrollo dentro de empresas, emprendimientos y organizaciones.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <BusinessServiceCard key={service.title} {...service} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Beneficios generales</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">Una propuesta centrada en las personas</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {benefits.map((benefit) => <BenefitItem key={benefit.title} {...benefit} />)}
              </div>
            </div>
            <aside className="bg-brand-background rounded-2xl p-7 border-t-4 border-brand-secondary shadow-md">
              <div className="w-12 h-12 rounded-xl bg-brand-intermediate text-white flex items-center justify-center mb-5"><BriefcaseBusiness className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-brand-intermediate mb-4">Acompañamiento profesional</h3>
              <p className="text-brand-text/70 leading-relaxed">La oferta confirmada combina opciones de capacitación con coaching individual y grupal, así como desarrollo del talento humano.</p>
              <div className="mt-6 p-4 bg-white rounded-xl border border-brand-muted flex items-center gap-3">
                <Building2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-sm font-semibold text-brand-text/75">Empresas, emprendedores y organizaciones</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-brand-background py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl p-7 border-t-4 border-brand-intermediate shadow-md">
              <div className="flex items-center gap-4 mb-5"><Users className="w-8 h-8 text-brand-intermediate" /><h2 className="text-2xl font-bold text-brand-intermediate">Desarrollo humano</h2></div>
              <ul className="space-y-3 text-brand-text/70">
                <li>• Coaching individual y grupal.</li>
                <li>• Desarrollo del talento humano.</li>
                <li>• Formación flexible para personas y equipos.</li>
              </ul>
            </article>
            <article className="bg-white rounded-2xl p-7 border-t-4 border-brand-secondary shadow-md">
              <div className="flex items-center gap-4 mb-5"><Building2 className="w-8 h-8 text-brand-secondary" /><h2 className="text-2xl font-bold text-brand-intermediate">Capacitación organizacional</h2></div>
              <ul className="space-y-3 text-brand-text/70">
                <li>• Cursos especializados y talleres prácticos.</li>
                <li>• Diplomados y conferencias.</li>
                <li>• Opciones para empresas, emprendimientos y organizaciones.</li>
              </ul>
            </article>
          </div>

          <div className="mt-8 bg-white rounded-xl border border-brand-muted p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0"><BookOpen className="w-6 h-6 text-brand-secondary" /></div>
            <div className="flex-1">
              <h3 className="font-bold text-brand-intermediate">Cartera detallada en proceso de validación</h3>
              <p className="text-sm text-brand-text/65 mt-1">Los nombres, objetivos, duraciones y temarios específicos se publicarán cuando la cartera de servicios sea confirmada por el cliente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-intermediate text-white py-12">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">¿Listo para impulsar el desarrollo de tu organización?</h2>
          <p className="text-white/80 mt-3">Conversemos sobre las opciones de formación y acompañamiento disponibles.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">
            <a href="/contacto?programa=Servicio%20empresas" className="bg-brand-secondary hover:bg-brand-accent text-white px-7 py-3 rounded-full font-bold transition-colors">Solicitar información</a>
            <a href={CONTACTS.foundation.whatsappUrl} target="_blank" rel="noopener noreferrer" className="border border-white/50 hover:bg-white/10 text-white px-7 py-3 rounded-full font-bold transition-colors">WhatsApp</a>
          </div>
        </div>
      </section>

      <div id="contacto-empresas">
        <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} defaultProgram="Servicio empresas" title="Solicita información para tu organización" description="Cuéntanos qué tipo de formación o acompañamiento estás buscando." />
      </div>
    </>
  );
}
