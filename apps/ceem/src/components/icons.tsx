import {
  Award,
  Baby,
  BadgeCheck,
  BookOpen,
  Brain,
  Briefcase,
  Camera,
  Clock,
  FilePen,
  Flower2,
  Footprints,
  GraduationCap,
  HeartHandshake,
  House,
  IdCard,
  Languages,
  type LucideIcon,
  Medal,
  Puzzle,
  School,
  ScrollText,
  ShieldCheck,
  Shirt,
  Snowflake,
  Stethoscope,
  Sun,
  Sunrise,
  Sunset,
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

  /* Checklist de documentación para colaboradores. */
  badge: BadgeCheck,
  briefcase: Briefcase,
  camera: Camera,
  certificate: Award,
  footprints: Footprints,
  graduation: GraduationCap,
  handshake: HeartHandshake,
  house: House,
  id: IdCard,
  medical: Stethoscope,
  receipt: ScrollText,
  shirt: Shirt,
  signature: FilePen,

  /* Horarios, cursos y promociones (17-ago-2026). */
  flower: Flower2,
  snowflake: Snowflake,
  sun: Sun,
  sunrise: Sunrise,
  sunset: Sunset,
};

interface IconProps {
  readonly name: string;
  readonly className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = ICONS[name] ?? Baby;
  return <Component className={className} aria-hidden />;
}
