import { Sparkles } from "lucide-react";

interface ComingSoonProps {
  readonly title: string;
  readonly message?: string;
}

/**
 * ComingSoon — placeholder body for programs not yet open
 * (maestrías, doctorados, etc.). Brand-token styled.
 */
export function ComingSoon({
  title,
  message = "Estamos preparando este programa. Déjanos tus datos y serás de los primeros en enterarte cuando abra inscripciones.",
}: ComingSoonProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary/10 mb-6">
          <Sparkles className="w-8 h-8 text-brand-secondary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">{title}</h2>
        <span className="inline-block bg-brand-secondary/15 text-brand-secondary font-bold px-4 py-1.5 rounded-full text-sm mb-5">
          Próximamente
        </span>
        <p className="text-brand-text/80 text-base md:text-lg leading-relaxed">{message}</p>
      </div>
    </section>
  );
}
