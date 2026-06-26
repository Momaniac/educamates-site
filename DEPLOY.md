# Despliegue en Vercel

Este monorepo se **desarrolla unificado** pero se **despliega por sitio**: cada app es un proyecto independiente en Vercel, con su propio Root Directory y su propio dominio. El código (componentes, theming) se comparte vía `packages/ui`; cada `git push` reconstruye **solo las apps afectadas** (Turborepo).

## Proyectos (uno por app)

| Proyecto Vercel | Root Directory | Rol | Estado |
|---|---|---|---|
| **portal** | `apps/portal` | Página madre / paraguas — la entrada principal | ✅ |
| **emf** | `apps/emf` | Sitio de marca EducaMates Foundation | ⏳ por desplegar |
| ceem | `apps/ceem` | Centro Educativo EducaMates (futuro) | 🔜 |
| alma-libre | `apps/alma-libre` | Alma Libre (futuro) | 🔜 |

Todos apuntan al **mismo repositorio**; lo único que cambia entre proyectos es el **Root Directory**.

## Crear un proyecto

1. Vercel → **Add New → Project** → repo `educamates-site`.
2. **Root Directory** = la carpeta de la app (p. ej. `apps/portal`).
3. Framework Next.js autodetectado; Install/Build por defecto (Vercel detecta pnpm + Turborepo); Node 18+.
4. **Deploy**.

## Conectar el portal con cada marca

El portal enlaza a cada marca mediante la **librería de dominios**: [`apps/portal/src/lib/domains.ts`](apps/portal/src/lib/domains.ts).

El destino de cada marca se define por:
- la **env-var** `NEXT_PUBLIC_URL_<MARCA>` en el proyecto Vercel del portal (recomendado), **o**
- la constante por defecto en `domains.ts`.

Si el valor está **vacío**, la tarjeta se muestra como **"Próximamente"** (no enlaza a nada → sin 404).

### Tras desplegar EMF

1. Copia la URL del despliegue de EMF.
2. Pégala en `EMF_URL` de `domains.ts` **o** define `NEXT_PUBLIC_URL_EMF` en el proyecto del portal.
3. **Redeploy** del portal.

## Errores comunes

- **Cambiar el Root Directory solo aplica a despliegues nuevos.** Tras cambiarlo, haz un **Redeploy sin caché** (o un `git push`); el deploy en línea no cambia solo.
- Si un build **falla**, Vercel sigue sirviendo el último despliegue bueno → parece que "no cambió nada". Revisa los **Build Logs**.
- **`404 DEPLOYMENT_NOT_FOUND`** al entrar a una marca = el portal apunta a una URL que ya no existe → actualiza su destino (sección anterior).
