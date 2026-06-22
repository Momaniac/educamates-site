import type { ReactNode } from "react";

interface AccentCardProps {
  readonly title: string;
  readonly children: ReactNode;
  readonly icon?: ReactNode;
  readonly accent?: "primary" | "secondary";
  readonly orientation?: "top" | "left";
  readonly className?: string;
}

/** White-label card variant used by institutional EducaMates layouts. */
export function AccentCard({
  title,
  children,
  icon,
  accent = "primary",
  orientation = "left",
  className = "",
}: AccentCardProps) {
  const accentBorder = accent === "secondary"
    ? orientation === "top" ? "border-t-4 border-t-brand-secondary" : "border-l-4 border-l-brand-secondary"
    : orientation === "top" ? "border-t-4 border-t-brand-intermediate" : "border-l-4 border-l-brand-intermediate";
  const iconColor = accent === "secondary"
    ? "bg-brand-secondary/10 text-brand-secondary"
    : "bg-brand-intermediate/10 text-brand-intermediate";

  return (
    <article className={`bg-white rounded-xl border border-brand-muted/80 shadow-md hover:shadow-lg transition-all duration-300 ${accentBorder} ${className}`}>
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-4">
          {icon && (
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconColor}`}>
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-brand-intermediate mb-2">{title}</h3>
            <div className="text-brand-text/75 text-sm leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
