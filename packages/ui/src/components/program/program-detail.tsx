import {
  ArrowRight,
  CircleCheckBig,
  FileText,
  GraduationCap,
  ListChecks,
  MapPin,
  Medal,
} from "lucide-react";
import { PageHero } from "../common/page-hero";
import type { Benefit } from "../../types/content";
import type {
  ProgramInfoCard,
  ProgramCurriculum,
  ProgramProcessStep,
  ProgramLocation,
} from "../../types/program";

interface ProgramDetailProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly eyebrow?: string;
  readonly infoCards?: readonly ProgramInfoCard[];
  readonly infoHeading?: string;
  readonly highlights?: readonly Benefit[];
  readonly highlightsHeading?: string;
  readonly highlightsSubheading?: string;
  readonly curriculum?: ProgramCurriculum;
  readonly requirements?: readonly string[];
  readonly requirementsHeading?: string;
  readonly requirementsNote?: string;
  readonly process?: readonly ProgramProcessStep[];
  readonly processHeading?: string;
  readonly locations?: readonly ProgramLocation[];
  readonly locationsHeading?: string;
  readonly locationsSubheading?: string;
  readonly requirementsFirst?: boolean;
  readonly ctaHref?: string;
  readonly ctaLabel?: string;
}

/**
 * Shared detail layout for short academic programs. It follows the asymmetric
 * composition of the published site while keeping every content block optional.
 */
export function ProgramDetail({
  title,
  subtitle,
  eyebrow,
  infoCards,
  infoHeading = "Información General",
  highlights,
  highlightsHeading = "¿Por qué elegirnos?",
  highlightsSubheading,
  curriculum,
  requirements,
  requirementsHeading = "Requisitos de Inscripción",
  requirementsNote,
  process,
  processHeading = "Proceso",
  locations,
  locationsHeading = "Centro de atención",
  locationsSubheading,
  requirementsFirst = false,
  ctaHref = "#contacto-programa",
  ctaLabel = "Solicitar informes",
}: ProgramDetailProps) {
  const hasOverview = Boolean(infoCards?.length);
  const hasCompanionPanel = Boolean(highlights?.length || curriculum?.areas.length);
  const hasRequirements = Boolean(requirements?.length);
  const hasProcess = Boolean(process?.length);

  return (
    <>
      <PageHero title={title} subtitle={subtitle} eyebrow={eyebrow} />

      {(hasOverview || hasCompanionPanel) && (
        <section className="bg-white py-12 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-9 lg:gap-14 items-start">
              {hasOverview && (
                <article className="bg-brand-background rounded-2xl border border-brand-muted shadow-lg p-6 md:p-8 lg:p-9">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate flex items-center gap-3 mb-7">
                    <Medal className="w-7 h-7 text-brand-secondary shrink-0" />
                    {infoHeading}
                  </h2>
                  <div className="space-y-5">
                    {infoCards?.map(({ title: cardTitle, description, icon: Icon }) => (
                      <div key={cardTitle} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-brand-muted flex items-center justify-center shrink-0 shadow-sm">
                          {Icon ? <Icon className="w-5 h-5 text-brand-secondary" /> : <CircleCheckBig className="w-5 h-5 text-brand-secondary" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-brand-intermediate mb-1">{cardTitle}</h3>
                          <p className="text-brand-text/70 text-sm leading-relaxed">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              )}

              {hasCompanionPanel && (
                <div className="pt-1 lg:pt-2">
                  <div className="w-14 h-14 rounded-full bg-brand-secondary text-white shadow-lg flex items-center justify-center mb-5">
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  {highlights && highlights.length > 0 && (
                    <>
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate mb-3">{highlightsHeading}</h2>
                      {highlightsSubheading && <p className="text-brand-text/65 leading-relaxed mb-7 max-w-xl">{highlightsSubheading}</p>}
                      <div className="space-y-4">
                        {highlights.map(({ icon: Icon, title: itemTitle, description }) => (
                          <article key={itemTitle} className="group bg-white border border-brand-muted rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-brand-intermediate/10 flex items-center justify-center shrink-0 group-hover:bg-brand-intermediate transition-colors">
                              <Icon className="w-5 h-5 text-brand-intermediate group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <h3 className="font-bold text-brand-intermediate">{itemTitle}</h3>
                              <p className="text-brand-text/65 text-sm leading-relaxed mt-1">{description}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </>
                  )}

                  {curriculum && curriculum.areas.length > 0 && (
                    <>
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate mb-3">{curriculum.heading ?? "Plan de Estudios"}</h2>
                      {curriculum.description && <p className="text-brand-text/65 leading-relaxed mb-7 max-w-xl">{curriculum.description}</p>}
                      <div className="space-y-3">
                        {curriculum.areas.map((area) => (
                          <div key={area} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-brand-muted shadow-sm">
                            <div className="w-9 h-9 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                              <CircleCheckBig className="w-5 h-5 text-brand-primary" />
                            </div>
                            <span className="text-sm font-bold text-brand-intermediate">{area}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {(hasRequirements || hasProcess) && (
        <section className="bg-brand-background py-12 lg:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-9 lg:gap-14 items-start">
              {hasProcess && (
                <div className={requirementsFirst ? "order-2" : "order-1"}>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate flex items-center gap-3 mb-7">
                    <ListChecks className="w-7 h-7 text-brand-secondary shrink-0" />
                    {processHeading}
                  </h2>
                  <div className="space-y-4">
                    {process?.map((step, index) => (
                      <article key={step.title} className="bg-white border border-brand-muted rounded-xl p-4 md:p-5 shadow-sm flex items-start gap-4">
                        <div className="w-9 h-9 rounded-full bg-brand-intermediate text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-brand-intermediate">{step.title}</h3>
                          <p className="text-brand-text/65 text-sm leading-relaxed mt-1">{step.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {hasRequirements && (
                <article className={`bg-white rounded-2xl border border-brand-muted border-t-4 border-t-brand-secondary shadow-lg p-6 md:p-8 ${requirementsFirst ? "order-1" : "order-2"}`}>
                  <h2 className="text-2xl font-bold text-brand-intermediate flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-brand-secondary shrink-0" />
                    {requirementsHeading}
                  </h2>
                  <ul className="space-y-3">
                    {requirements?.map((requirement) => (
                      <li key={requirement} className="flex items-start gap-3 text-brand-text/75 text-sm leading-relaxed">
                        <CircleCheckBig className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  {requirementsNote && (
                    <p className="mt-6 p-4 rounded-xl bg-brand-secondary/10 text-brand-text/75 text-sm leading-relaxed border border-brand-secondary/25">
                      {requirementsNote}
                    </p>
                  )}
                  <div className="mt-7 pt-6 border-t border-brand-muted">
                    <a href={ctaHref} className="w-full inline-flex items-center justify-center gap-2 bg-brand-intermediate hover:bg-brand-primary text-white px-6 py-3 rounded-xl font-bold shadow-md transition-colors">
                      {ctaLabel} <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {locations && locations.length > 0 && (
        <section className="bg-white py-12 lg:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-9">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-intermediate">{locationsHeading}</h2>
              {locationsSubheading && <p className="text-brand-text/60 mt-3 leading-relaxed">{locationsSubheading}</p>}
            </div>
            <div className={`grid gap-6 ${locations.length > 1 ? "md:grid-cols-2" : "max-w-3xl mx-auto"}`}>
              {locations.map((location) => (
                <article key={location.label} className="bg-brand-background rounded-2xl border border-brand-muted p-6 md:p-7 shadow-sm flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-brand-intermediate/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-brand-intermediate" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-intermediate text-lg">{location.label}</h3>
                    <p className="text-brand-text/65 text-sm leading-relaxed mt-1">{location.address}</p>
                    {location.href && (
                      <a href={location.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-secondary font-bold text-sm mt-3 hover:text-brand-accent transition-colors">
                        {location.actionLabel ?? "Ver ubicación"} <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
