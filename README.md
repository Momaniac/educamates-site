# EducaMates — Sitio web

Sitio web de EducaMates construido como **monorepo multi-tenant** con Turborepo + pnpm. El mismo conjunto de componentes white-label (`packages/ui`) alimenta la marca madre y futuras submarcas, cambiando solo props y variables CSS.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** · **Radix UI** · **lucide-react**
- **Turborepo** + **pnpm** (workspaces)

## Estructura

```
educamates-monorepo/
├── apps/
│   ├── sitio-madre/      # EducaMates — app principal (la que se despliega)
│   └── submarca-a/       # Submarca demostrativa del patrón multi-tenant
└── packages/
    ├── ui/               # Componentes compartidos white-label (header, footer, formularios…)
    ├── config-tailwind/  # Preset de Tailwind + variables CSS semánticas
    └── typescript-config/# tsconfig base compartido
```

## Desarrollo local

Requiere Node.js ≥ 18 y pnpm 9.

```bash
pnpm install
pnpm dev:madre      # sitio-madre en http://localhost:3000
pnpm dev:submarca   # submarca-a
```

Otros scripts: `pnpm build`, `pnpm type-check`, `pnpm lint`.

## Despliegue en Vercel (app `sitio-madre`)

Al importar este repositorio en Vercel:

| Ajuste | Valor |
|---|---|
| **Framework Preset** | Next.js (autodetectado) |
| **Root Directory** | `apps/sitio-madre` |
| **Build Command** | (por defecto) `next build` |
| **Install Command** | (por defecto) `pnpm install` |
| **Node.js Version** | 18.x o superior |

Vercel detecta automáticamente el workspace de pnpm y Turborepo. No se requieren variables de entorno para el funcionamiento actual del sitio.

> Para desplegar también `submarca-a`, crear un segundo proyecto en Vercel apuntando a `apps/submarca-a` como Root Directory.

## Notas

- Los formularios de contacto continúan la conversación por **WhatsApp** (no persisten leads todavía; CRM/base de datos es una fase futura).
- Las rutas legacy (`/educacioninicial`, `/quienes-somos`, `/nuestro-equipo`) redirigen con 301 a sus versiones consolidadas.
- El aviso de privacidad está marcado como `noindex`.
