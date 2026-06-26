import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PageHero, ContactCTA } from "@educamates/ui";
import { WHATSAPP_NUMBER, PROGRAM_OPTIONS } from "../../lib/site";
import { CalendarPanel, EventCard } from "../_components/calendar-visuals";

export const metadata: Metadata = {
  title: "Calendario Académico | Educa Mates Foundation",
  description: "Próximos inicios de programas, talleres, webinars y fechas límite de Educa Mates.",
};

const events = [
  { day: "20–21", month: "JUL", category: "Secundaria y Preparatoria", title: "Cierre de inscripciones", detail: "Fechas confirmadas; asignación por programa pendiente.", tone: "primary" as const },
  { day: "06", month: "JUL", category: "Licenciaturas", title: "Primera convocatoria 2026", detail: "Recepción hasta el lunes 06 de julio de 2026.", tone: "secondary" as const },
  { day: "07", month: "SEP", category: "Licenciaturas", title: "Segunda convocatoria 2026", detail: "Recepción hasta el lunes 07 de septiembre de 2026.", tone: "secondary" as const },
  { day: "AGO", month: "2026", category: "Centro Educativo CEEM", title: "Inscripciones abiertas", detail: "Maternal y Preescolar: inscripciones abiertas hasta agosto de 2026.", tone: "primary" as const },
];

export default function CalendarioPage() {
  return (
    <>
      <PageHero
        title="Calendario Académico"
      />

      <section className="bg-brand-background py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><CalendarPanel /></div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate mb-8 flex items-center gap-3">
                <CalendarDays className="w-7 h-7 text-brand-secondary" />
                Próximos Eventos
              </h2>
              <div className="space-y-5">
                {events.map((event) => <EventCard key={`${event.day}-${event.title}`} {...event} />)}
              </div>
              <div className="mt-10 bg-brand-intermediate rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-lg">
                <CalendarDays className="absolute -right-8 -top-8 w-40 h-40 text-white/10" />
                <h3 className="text-2xl font-bold mb-3 relative">¿No encuentras la fecha que buscas?</h3>
                <p className="text-white/80 max-w-xl mx-auto relative">Contáctanos para conocer próximas aperturas y disponibilidad de los programas.</p>
                <a href="#contacto-calendario" className="inline-flex mt-6 bg-brand-secondary hover:bg-brand-accent text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all relative">Solicitar Información</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contacto-calendario">
        <ContactCTA whatsappNumber={WHATSAPP_NUMBER} programs={PROGRAM_OPTIONS} title="Solicitar Información" />
      </div>
    </>
  );
}
