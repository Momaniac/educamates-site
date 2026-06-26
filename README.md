# EducaMates — Ecosistema web

Ecosistema web de EducaMates construido como **monorepo multi-tenant** con Turborepo + pnpm. El mismo conjunto de componentes white-label (`packages/ui`) alimenta el portal paraguas y las marcas, cambiando solo props y variables CSS.

**`portal`** es la **página madre / paraguas**: la entrada donde el usuario elige entre las tres marcas hermanas (CEEM, EMF, Alma Libre). Cada marca es (o será) su propio sitio. Hoy solo **EMF** (`apps/emf`) está desarrollado; CEEM y Alma Libre se muestran como "Próximamente".

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** · **Radix UI** · **lucide-react**
- **Turborepo** + **pnpm** (workspaces)

## Estructura

```
educamates-monorepo/
├── apps/
│   ├── portal/           # Página madre / paraguas — entrada con las 3 marcas
│   ├── emf/              # EducaMates Foundation — sitio de marca ya desarrollado
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
pnpm dev:portal     # portal (paraguas) en http://localhost:3002
pnpm dev:emf        # sitio EMF en http://localhost:3000
pnpm dev:submarca   # submarca-a en http://localhost:3001
```

Otros scripts: `pnpm build`, `pnpm type-check`, `pnpm lint`.

## Despliegue en Vercel

Cada app es un **proyecto independiente** en Vercel (Root Directory distinto). Framework Next.js autodetectado; install/build por defecto (Vercel detecta pnpm + Turborepo); Node 18+.

| App | Root Directory | Rol |
|---|---|---|
| **portal** | `apps/portal` | Entrada / página madre (paraguas) |
| **emf** | `apps/emf` | Sitio de marca EducaMates Foundation |
| submarca-a | `apps/submarca-a` | Demostración multi-tenant |

El portal enlaza a cada marca mediante la **librería de dominios** (`apps/portal/src/lib/domains.ts`). Tras desplegar EMF, define su URL ahí o con la env-var `NEXT_PUBLIC_URL_EMF` en el proyecto del portal.

## Notas

- Los formularios de contacto continúan la conversación por **WhatsApp** (no persisten leads todavía; CRM/base de datos es una fase futura).
- Las rutas legacy (`/educacioninicial`, `/quienes-somos`, `/nuestro-equipo`) redirigen con 301 a sus versiones consolidadas.
- El aviso de privacidad está marcado como `noindex`.
