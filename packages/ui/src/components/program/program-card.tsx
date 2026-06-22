import { ArrowRight } from "lucide-react";
import type { ProgramCardData } from "../../types/program";

interface ProgramCardProps {
  readonly program: ProgramCardData;
}

/**
 * ProgramCard — a single program/course card (e.g. a licenciatura).
 * Renders an optional image, title, description and a "Más información"
 * link, or a "Próximamente" badge when the program isn't open yet.
 */
export function ProgramCard({ program }: ProgramCardProps) {
  const { title, description, image, href, comingSoon } = program;

  const card = (
    <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-brand-muted shadow-sm hover:shadow-xl transition-shadow">
      {image && (
        <div className="relative aspect-video overflow-hidden bg-brand-muted">
          <img
            alt={title}
            src={image}
            loading="lazy"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            style={{ color: "transparent" }}
          />
          {comingSoon && (
            <span className="absolute top-3 right-3 bg-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
              Próximamente
            </span>
          )}
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-brand-primary mb-2">{title}</h3>
        <p className="text-brand-text/80 text-sm leading-relaxed flex-1">{description}</p>
        {href && !comingSoon && (
          <span className="inline-flex items-center gap-1.5 mt-4 text-brand-secondary font-bold text-sm group-hover:gap-2.5 transition-all">
            Más información
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
        {comingSoon && !image && (
          <span className="inline-block mt-4 text-brand-secondary font-bold text-sm">Próximamente</span>
        )}
      </div>
    </div>
  );

  if (href && !comingSoon) {
    return (
      <a href={href} className="block h-full">
        {card}
      </a>
    );
  }
  return card;
}
