import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface BusinessServiceCardProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly index: number;
}

export function BusinessServiceCard({ icon: Icon, title, description, index }: BusinessServiceCardProps) {
  const isSecondary = index % 3 === 1;

  return (
    <article className="group bg-white rounded-xl border border-brand-muted/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className={`h-32 relative overflow-hidden ${isSecondary ? "bg-brand-warm" : "bg-brand-intermediate/10"}`}>
        <div className={`absolute -right-8 -top-10 w-32 h-32 rounded-full ${isSecondary ? "bg-brand-secondary/15" : "bg-brand-intermediate/10"}`} />
        <div className={`absolute left-6 bottom-5 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${isSecondary ? "bg-brand-secondary text-white" : "bg-brand-intermediate text-white"}`}>
          <Icon className="w-7 h-7" />
        </div>
      </div>
      <div className="p-6 border-t-4 border-t-brand-secondary">
        <h3 className="text-lg font-bold text-brand-intermediate mb-3">{title}</h3>
        <p className="text-brand-text/70 leading-relaxed text-sm min-h-14">{description}</p>
        <a href="#contacto-empresas" className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm mt-5 group-hover:gap-3 transition-all">
          Solicitar información <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

export function BenefitItem({ title, description }: { readonly title: string; readonly description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
      </div>
      <div>
        <h3 className="font-bold text-brand-intermediate">{title}</h3>
        <p className="text-sm text-brand-text/65 leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  );
}
