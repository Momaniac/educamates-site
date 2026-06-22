import type { LucideIcon } from "lucide-react";
import { ArrowRight, ChevronDown, CircleCheckBig, FileText, GraduationCap, MessageCircle } from "lucide-react";
import type { DegreePlan } from "./plans";

interface DegreeOfferCardProps {
  readonly degree: DegreePlan;
  readonly icon: LucideIcon;
  readonly contactUrl: string;
  readonly index: number;
}

export function DegreeOfferCard({ degree, icon: Icon, contactUrl, index }: DegreeOfferCardProps) {
  return (
    <article className={`bg-white rounded-2xl border border-brand-muted border-t-4 border-t-brand-secondary p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}>
      <div className="w-12 h-12 rounded-full bg-brand-secondary text-white flex items-center justify-center shadow-md mb-5">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-brand-intermediate leading-tight">{degree.name}</h3>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="rounded-full bg-brand-intermediate/10 text-brand-intermediate px-3 py-1 text-xs font-bold capitalize">{degree.modality}</span>
        <span className="rounded-full bg-brand-secondary/10 text-brand-secondary px-3 py-1 text-xs font-bold">24 meses</span>
      </div>
      {degree.rvoe && <p className="text-xs text-brand-text/60 mt-4">RVOE DGAIR/SEP: <strong>{degree.rvoe}</strong></p>}
      <div className="mt-auto pt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-brand-muted/80">
        <a href={`#plan-${degree.id}`} className="inline-flex items-center gap-1.5 text-brand-intermediate font-bold text-sm hover:text-brand-primary">
          Ver plan <ArrowRight className="w-4 h-4" />
        </a>
        <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-secondary font-bold text-sm hover:text-brand-accent">
          Solicitar informes <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

export function DegreePlanAccordion({ degree, contactUrl }: { readonly degree: DegreePlan; readonly contactUrl: string }) {
  return (
    <details id={`plan-${degree.id}`} className="group/degree scroll-mt-24 bg-white rounded-2xl border border-brand-muted shadow-sm overflow-hidden open:shadow-lg">
      <summary className="cursor-pointer list-none p-5 md:p-6 flex items-center gap-4 hover:bg-brand-background transition-colors [&::-webkit-details-marker]:hidden">
        <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
          <GraduationCap className="w-6 h-6 text-brand-secondary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-brand-intermediate">{degree.name}</h3>
          <p className="text-sm text-brand-text/60 mt-1 capitalize">
            Modalidad {degree.modality} · 24 meses{degree.rvoe ? ` · RVOE ${degree.rvoe}` : ""}
          </p>
        </div>
        <ChevronDown className="w-5 h-5 text-brand-intermediate shrink-0 transition-transform group-open/degree:rotate-180" />
      </summary>

      <div className="border-t border-brand-muted bg-brand-background/60 p-4 md:p-6">
        <div className="flex items-center gap-2 text-brand-intermediate font-bold mb-4">
          <FileText className="w-5 h-5 text-brand-secondary" />
          Estructura académica proporcionada por EducaMates
        </div>
        <div className="space-y-3">
          {degree.periods.map((period) => (
            <details key={`${period.group ?? "periodo"}-${period.name}`} className="bg-white rounded-xl border border-brand-muted overflow-hidden">
              <summary className="cursor-pointer list-none p-4 flex items-start gap-3 hover:bg-white/60 [&::-webkit-details-marker]:hidden">
                <CircleCheckBig className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="flex-1">
                  {period.group && <span className="block text-[11px] uppercase tracking-wide text-brand-text/45 mb-1">{period.group}</span>}
                  <span className="font-bold text-brand-intermediate">{period.name}</span>
                </span>
                <ChevronDown className="w-4 h-4 text-brand-text/50 shrink-0 mt-1" />
              </summary>
              <ul className="grid md:grid-cols-2 gap-x-7 gap-y-2 px-5 pb-5 pt-1 text-sm text-brand-text/70">
                {period.subjects.map((subject) => (
                  <li key={subject} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-2" />
                    {subject}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-accent text-white px-6 py-3 rounded-xl font-bold transition-colors">
            Solicitar informes <MessageCircle className="w-5 h-5" />
          </a>
          <a href="#contacto-licenciaturas" className="inline-flex items-center justify-center gap-2 border border-brand-intermediate text-brand-intermediate hover:bg-brand-intermediate hover:text-white px-6 py-3 rounded-xl font-bold transition-colors">
            Ir al formulario <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </details>
  );
}
