import {
  ArrowRight,
  Baby,
  Brain,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  School,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";
import { PageHero, ContactCTA, buildWhatsAppUrl } from "@educamates/ui";
import { CONTACTS, PROGRAM_OPTIONS } from "../../lib/site";

type CeemVariant = "maternal" | "preescolar";

const benefits = [
  { icon: School, title: "Kinder incorporado a la SEP", description: "Kinder incorporado a la Secretaría de Educación Pública." },
  { icon: Clock, title: "Horario extendido", description: "Horario extendido para apoyar a las familias trabajadoras." },
  { icon: Utensils, title: "Servicio de comedor", description: "Servicio de comedor como parte de la atención del Centro Educativo." },
  { icon: HeartHandshake, title: "Personal especializado", description: "Personal capacitado y especializado para acompañar a los niños." },
  { icon: Users, title: "Grupos reducidos", description: "Grupos reducidos que permiten una atención más personalizada." },
  { icon: Brain, title: "Ingeniería y STEM", description: "Ingeniería aplicada y programa STEM para fomentar pensamiento lógico e innovación." },
  { icon: Languages, title: "Inglés todos los días", description: "Inglés todos los días como parte de la experiencia educativa." },
  { icon: ShieldCheck, title: "Instalaciones adecuadas", description: "Instalaciones limpias, seguras y adecuadas para los niños." },
];

const focusAreas = [
  {
    title: "Desarrollo socioemocional",
    description: "Acompañamos hábitos, emociones y bienestar desde las primeras etapas.",
    icon: HeartHandshake,
    items: ["Hábitos saludables", "Educación emocional", "Cuidado y prevención", "Sensibilización sensorial", "Disciplina positiva"],
  },
  {
    title: "Desarrollo académico y cognitivo",
    description: "Fortalecemos habilidades para conocer, comunicar, crear y comprender el mundo.",
    icon: Brain,
    items: ["Habilidades y destrezas", "Lenguaje y comunicación", "Arte, ciencia y tecnología", "Conocimiento del mundo", "Programa STEM", "Coordinación motriz fina y gruesa", "Desarrollo del análisis y la capacidad de síntesis"],
  },
] as const;

const maternalBenefitOrder = [3, 4, 7, 2, 1, 0, 5, 6];

export function CeemProgram({ variant }: { readonly variant: CeemVariant }) {
  const isMaternal = variant === "maternal";
  const title = isMaternal ? "Maternal" : "Preescolar";
  const displayedBenefits = isMaternal
    ? maternalBenefitOrder
        .map((index) => benefits[index])
        .filter((benefit): benefit is (typeof benefits)[number] => benefit !== undefined)
    : benefits;
  const displayedFocus = isMaternal ? focusAreas : [...focusAreas].reverse();
  const whatsappUrl = buildWhatsAppUrl({
    phone: CONTACTS.ceem.whatsappNumber,
    message: `Hola, me interesa recibir información sobre ${title} en Centro Educativo EducaMates.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Centro Educativo EducaMates"
        title={title}
        subtitle={isMaternal ? "Atención desde los 45 días de nacidos." : "Un programa integral para el desarrollo académico, emocional, social y personal."}
      />

      <section className="bg-white py-12 lg:py-20 overflow-x-clip">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-1 w-12 rounded-full bg-brand-secondary" />
                <span className="text-brand-intermediate font-bold uppercase tracking-wider text-sm">{isMaternal ? "Atención desde edades tempranas" : "Programa integral"}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate leading-tight">
                {isMaternal ? "Acompañamiento desde los primeros días" : "Desarrollo integral para cada niño"}
              </h2>
              <div className="space-y-4 text-brand-text/70 text-base md:text-lg leading-relaxed mt-5">
                {isMaternal ? (
                  <>
                    <p>Contamos con niveles desde maternal hasta preescolar 3, acompañando el desarrollo de los pequeños desde los 45 días de nacidos hasta los 5 años.</p>
                    <p>El programa está diseñado para impulsar el desarrollo académico, emocional, social y personal de cada niño, adaptándonos a sus necesidades individuales.</p>
                  </>
                ) : (
                  <>
                    <p>En Centro Educativo Educa Mates ofrecemos un programa integral de educación preescolar que va más allá del programa tradicional de la SEP, ya que está diseñado para impulsar el desarrollo académico, emocional, social y personal de cada niño, adaptándonos a sus necesidades individuales.</p>
                    <p>Contamos con niveles desde maternal hasta preescolar 3 y atención desde los 45 días de nacidos hasta los 5 años.</p>
                  </>
                )}
              </div>
            </div>

            {isMaternal ? (
              <aside className="bg-brand-background rounded-2xl border border-brand-muted border-t-4 border-t-brand-secondary shadow-lg p-7 md:p-8">
                <div className="w-14 h-14 rounded-full bg-brand-secondary text-white flex items-center justify-center shadow-md mb-6">
                  <Baby className="w-7 h-7" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-brand-text/50">Inicio de atención</p>
                <p className="text-3xl md:text-4xl font-extrabold text-brand-intermediate mt-1">Desde 45 días</p>
                <div className="border-t border-brand-muted mt-6 pt-5 flex items-center gap-3 text-brand-text/70">
                  <Sparkles className="w-5 h-5 text-brand-secondary shrink-0" />
                  <span>Acompañamiento hasta los 5 años dentro de los niveles del Centro Educativo.</span>
                </div>
              </aside>
            ) : (
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-brand-secondary/10 rotate-2" />
                <img
                  src="/images/carreras/ceem-preescolar.webp"
                  alt="Actividades del Centro Educativo EducaMates Preescolar"
                  width={8001}
                  height={4501}
                  loading="lazy"
                  className="relative w-full aspect-video object-cover rounded-2xl shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-background py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">{isMaternal ? "Cuidado y acompañamiento" : "Experiencia educativa"}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate">Beneficios que nos distinguen</h2>
            <p className="text-brand-text/65 mt-4">{isMaternal ? "Una atención cercana para las primeras etapas y las necesidades de cada familia." : "Recursos y condiciones para fortalecer el aprendizaje y el desarrollo integral."}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="bg-white rounded-2xl border border-brand-muted border-t-4 border-t-brand-secondary p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-brand-intermediate/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-intermediate" />
                  </div>
                  <h3 className="font-bold text-brand-intermediate">{benefit.title}</h3>
                  <p className="text-brand-text/65 text-sm leading-relaxed mt-2">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm mb-2">Nuestro enfoque educativo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-intermediate">Desarrollo integral</h2>
            <p className="text-brand-text/65 mt-4">{isMaternal ? "En Maternal damos prioridad al bienestar socioemocional sin separar el desarrollo cognitivo." : "En Preescolar fortalecemos el aprendizaje académico y cognitivo junto con el desarrollo socioemocional."}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {displayedFocus.map((area, index) => {
              const Icon = area.icon;
              const isEmphasized = index === 0;
              return (
                <article key={area.title} className={`rounded-2xl border p-6 md:p-8 ${isEmphasized ? "bg-brand-intermediate text-white border-brand-intermediate shadow-lg" : "bg-brand-background border-brand-muted"}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${isEmphasized ? "bg-white/15" : "bg-brand-secondary/10"}`}>
                    <Icon className={`w-6 h-6 ${isEmphasized ? "text-white" : "text-brand-secondary"}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${isEmphasized ? "text-white" : "text-brand-intermediate"}`}>{area.title}</h3>
                  <p className={`text-sm leading-relaxed mt-2 ${isEmphasized ? "text-white/75" : "text-brand-text/65"}`}>{area.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-3 mt-6">
                    {area.items.map((item) => (
                      <li key={item} className={`flex items-start gap-2 text-sm ${isEmphasized ? "text-white/90" : "text-brand-text/75"}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isEmphasized ? "text-brand-secondary" : "text-brand-secondary"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-intermediate text-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div>
              <p className="text-brand-secondary font-bold uppercase tracking-wider text-sm">Centro Educativo EducaMates</p>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">Conoce más sobre {title}</h2>
              <p className="text-white/75 mt-2">Habla directamente con CEEM para conocer disponibilidad e inscripciones.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-accent text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Hablar por WhatsApp <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#contacto-ceem" className="inline-flex items-center justify-center gap-2 border border-white/50 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Solicitar informes <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-6">
            <article className="bg-brand-background rounded-2xl border border-brand-muted p-6 md:p-8 flex flex-col sm:flex-row gap-5">
              <div className="w-14 h-14 rounded-full bg-brand-intermediate/10 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-brand-intermediate" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-brand-secondary">Visita el Centro Educativo</p>
                <h2 className="text-2xl font-bold text-brand-intermediate mt-1">{CONTACTS.ceem.name}</h2>
                <p className="text-brand-text/65 leading-relaxed mt-2">{CONTACTS.ceem.address}</p>
                <a href={CONTACTS.ceem.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-secondary font-bold text-sm mt-4 hover:text-brand-accent">
                  Ver en Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
            <div className="grid gap-4">
              <a href={CONTACTS.ceem.phoneHref} className="bg-white rounded-2xl border border-brand-muted p-5 flex items-center gap-4 hover:border-brand-secondary transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-brand-secondary" /></div>
                <div><p className="text-sm text-brand-text/55">Teléfono</p><p className="font-bold text-brand-intermediate">{CONTACTS.ceem.phone}</p></div>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl border border-brand-muted p-5 flex items-center gap-4 hover:border-brand-secondary transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-brand-secondary" /></div>
                <div><p className="text-sm text-brand-text/55">WhatsApp CEEM</p><p className="font-bold text-brand-intermediate">{CONTACTS.ceem.whatsappDisplay}</p></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="contacto-ceem">
        <ContactCTA
          whatsappNumber={CONTACTS.ceem.whatsappNumber}
          programs={PROGRAM_OPTIONS}
          defaultProgram={title}
          title={`Solicita informes sobre ${title}`}
          description={`Escríbenos al ${CONTACTS.ceem.whatsappDisplay}; el formulario abrirá una conversación directa con el Centro Educativo EducaMates.`}
        />
      </div>
    </>
  );
}
