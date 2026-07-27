import {
  Baby,
  BookOpen,
  Brain,
  Clock,
  HeartHandshake,
  Languages,
  type LucideIcon,
  Medal,
  Puzzle,
  School,
  ShieldCheck,
  Users,
  Utensils,
} from "lucide-react";

/*
 * Los datos de site.ts guardan el icono como texto en vez de como
 * componente, para que el archivo de contenido siga siendo datos
 * puros y lo pueda editar alguien que no programa. Aquí se
 * traduce ese texto al componente real.
 */
const ICONS: Record<string, LucideIcon> = {
  baby: Baby,
  book: BookOpen,
  brain: Brain,
  clock: Clock,
  heart: HeartHandshake,
  languages: Languages,
  medal: Medal,
  puzzle: Puzzle,
  school: School,
  shield: ShieldCheck,
  users: Users,
  utensils: Utensils,
};

interface IconProps {
  readonly name: string;
  readonly className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = ICONS[name] ?? Baby;
  return <Component className={className} aria-hidden />;
}
