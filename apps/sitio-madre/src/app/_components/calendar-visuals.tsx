"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Clock3, Filter } from "lucide-react";

const monthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const highlightedDates: Record<string, "primary" | "secondary"> = {
  "2026-07-06": "secondary",
  "2026-07-20": "primary",
  "2026-07-21": "primary",
  "2026-09-07": "secondary",
};

function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getMonthNote(year: number, month: number) {
  if (year === 2026 && month === 6) {
    return "Las fechas del 20 y 21 de julio corresponden a Secundaria y Preparatoria; la asignación exacta está pendiente de confirmación.";
  }
  if (year === 2026 && month === 7) {
    return "Maternal y Preescolar: inscripciones abiertas hasta agosto de 2026. No se ha confirmado un día específico.";
  }
  if (year === 2026 && month === 8) {
    return "La segunda convocatoria de Licenciaturas recibe documentación hasta el 7 de septiembre de 2026.";
  }
  return "No hay fechas confirmadas para este mes. Consulta los próximos eventos o solicita información.";
}

export function CalendarPanel() {
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(2026, 6, 1));
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const monthDays = useMemo(() => {
    const firstWeekday = new Date(year, month, 1).getDay();
    const dayCount = new Date(year, month + 1, 0).getDate();
    const days: Array<number | null> = [
      ...Array.from({ length: firstWeekday }, () => null),
      ...Array.from({ length: dayCount }, (_, index) => index + 1),
    ];

    while (days.length % 7 !== 0) days.push(null);
    return days;
  }, [month, year]);

  const changeMonth = (offset: number) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
  };

  const monthName = monthNames[month] ?? "";
  const monthLabel = `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} de ${year}`;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-brand-secondary">
        <div className="flex items-center gap-3 mb-6">
          <CalendarDays className="w-6 h-6 text-brand-intermediate" />
          <h2 className="text-2xl font-bold text-brand-intermediate">Calendario</h2>
        </div>
        <div className="flex items-center justify-between text-brand-intermediate font-bold mb-5">
          <button type="button" onClick={() => changeMonth(-1)} aria-label="Ver mes anterior" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-brand-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span aria-live="polite">{monthLabel}</span>
          <button type="button" onClick={() => changeMonth(1)} aria-label="Ver mes siguiente" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-brand-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'].map((day) => (
            <span key={day} className="text-[10px] font-bold text-brand-text/45 pb-2">{day}</span>
          ))}
          {monthDays.map((day, index) => {
            const tone = day ? highlightedDates[dateKey(year, month, day)] : undefined;
            return (
              <span
                key={`${day ?? 'empty'}-${index}`}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium ${
                  tone === "secondary"
                    ? 'bg-brand-secondary text-white shadow-sm'
                    : tone === "primary"
                      ? 'bg-brand-intermediate text-white shadow-sm'
                      : day
                        ? 'text-brand-text/75 hover:bg-brand-background'
                        : ''
                }`}
              >
                {day}
              </span>
            );
          })}
        </div>
        <p className="text-xs text-brand-text/55 mt-5 leading-relaxed">
          {getMonthNote(year, month)}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
          <Filter className="w-5 h-5 text-brand-secondary" />
          Categorías
        </h3>
        <div className="space-y-3 text-sm text-brand-text/70">
          <p className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-brand-intermediate" /> Secundaria y Preparatoria</p>
          <p className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-brand-secondary" /> Licenciaturas</p>
          <p className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-brand-primary" /> Centro Educativo CEEM</p>
        </div>
      </div>
    </div>
  );
}

interface EventCardProps {
  readonly day: string;
  readonly month: string;
  readonly category: string;
  readonly title: string;
  readonly detail: string;
  readonly tone?: "primary" | "secondary";
}

export function EventCard({ day, month, category, title, detail, tone = "primary" }: EventCardProps) {
  const pill = tone === "secondary"
    ? "bg-brand-secondary/10 text-brand-secondary"
    : "bg-brand-intermediate/10 text-brand-intermediate";
  const border = tone === "secondary" ? "border-l-brand-secondary" : "border-l-brand-intermediate";

  return (
    <article className={`group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border-l-4 ${border} flex gap-5 items-center`}>
      <div className="w-20 min-h-20 shrink-0 rounded-lg bg-brand-background flex flex-col items-center justify-center group-hover:bg-brand-intermediate group-hover:text-white transition-colors">
        <span className="text-2xl font-extrabold leading-none">{day}</span>
        <span className="text-xs font-bold mt-1">{month}</span>
      </div>
      <div className="flex-1 min-w-0">
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-2 ${pill}`}>{category}</span>
        <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-intermediate transition-colors">{title}</h3>
        <p className="text-brand-text/55 text-sm flex items-start gap-1.5 mt-2">
          <Clock3 className="w-4 h-4 shrink-0 mt-0.5" />
          {detail}
        </p>
      </div>
      <div className="hidden sm:flex w-10 h-10 rounded-full bg-brand-background items-center justify-center text-brand-intermediate group-hover:bg-brand-secondary group-hover:text-white transition-colors">
        <ArrowRight className="w-5 h-5" />
      </div>
    </article>
  );
}
