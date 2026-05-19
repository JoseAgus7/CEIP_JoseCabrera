# 🟦 Equipo 1 — Hero Section

**Vais a construir** una sección destacada arriba de la página con un badge,
título, mensaje que se puede rotar con un botón, y la fecha actual.

📖 **Documentación clave:**
- [Layouts y páginas](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [`useState`](https://react.dev/reference/react/useState)

---

## 🛠 Setup del equipo (Fase 0 + Fase 1)

### Solo el LÍDER del equipo (sincronizar fork + añadir collaborators)

> El líder es **cualquier miembro del equipo que ya tenga su fork de la Parte 1**.
> No hace falta forkear de nuevo: sincronízalo y úsalo como fork del equipo.

**1. Sincroniza tu fork** (para traer la guía nueva y lo último de JoseAgus7):

1. Ve a tu fork: `https://github.com/TU_USUARIO/CEIP_Jose_Cabrera`.
2. Pulsa **Sync fork** (arriba a la derecha) → **Update branch**.
3. Verifica que `main` ya está al día con JoseAgus7.

**2. Añade a tus compañeros como Collaborators:**

4. En tu fork: **Settings** → **Collaborators** → **Add people**.
5. Añade a tus 4 compañeros del equipo por su usuario de GitHub.
6. Ellos tienen que **aceptar la invitación** (les llega por email).

> ⚠️ Si todavía no tienes fork (no hiciste la Parte 1), hazlo ahora:
> ve a <https://github.com/JoseAgus7/CEIP_Jose_Cabrera> → **Fork** → **Create fork**.

### Todos los miembros del equipo (incluido el líder)

```bash
# Clona el fork del LÍDER del equipo (sustituye LIDER_USUARIO)
git clone https://github.com/LIDER_USUARIO/CEIP_Jose_Cabrera.git
cd CEIP_Jose_Cabrera/daw1-next

# Conecta al repositorio de JoseAgus7 como upstream
git remote add upstream https://github.com/JoseAgus7/CEIP_Jose_Cabrera.git

# Instala dependencias y arranca
pnpm install
pnpm dev
```

### El líder crea la rama del equipo

```bash
git switch -c team/01-hero
git push -u origin team/01-hero
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/01-hero
git switch -c feat/hero-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 1A — Componente principal ⚛️ (`feat/hero-component`)

**Tu tarea:** Crear `components/Hero.jsx`. Es un componente con interactividad:
guarda en estado un *tagline*, y al pulsar un botón cambia a otro aleatorio.
Muestra también la fecha de hoy formateada.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/Hero.jsx`
- ✏️ Editar: `daw1-next/components/index.js` (añadir tu export)

**Necesitas:**
- `import HeroBadge from '@/components/HeroBadge'` (lo crea tu compañero D)
- `import { taglines, badge, getRandomTagline } from '@/data/heroContent'` (lo crea tu compañero E)

⚠️ **Como usas `useState`, el archivo necesita `'use client'` en la primera línea.**
👉 <https://nextjs.org/docs/app/building-your-application/rendering/client-components>

📖 Pasar props: <https://react.dev/learn/passing-props-to-a-component>

---

### 1B — Estilos (`feat/hero-styles`)

**Tu tarea:** Añadir al final de `app/globals.css` las clases del Hero, una
animación `@keyframes` para que aparezca con fade-in y una *media query* para
móvil.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css` (añadir al final)

**Clases que tienes que crear:**
`.hero`, `.hero h1`, `.hero p`, `.hero-badge`, `.hero-btn`, `.hero-date`, `.fade-in`

📖 Animaciones CSS: <https://developer.mozilla.org/es/docs/Web/CSS/CSS_animations/Using_CSS_animations>
📖 Media queries: <https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries>

---

### 1C — Wire-up (`feat/hero-wire-up`)

**Tu tarea:** Importar el Hero en la página principal y renderizarlo arriba
del grid de tarjetas. Pásale el curso como prop.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/page.jsx`

**Cambios:**
- Añadir `import Hero from '@/components/Hero';` arriba
- Añadir `<Hero course="DAW1" />` justo antes del `<main>` o dentro, encima de `.grid`

📖 Estructura de page.jsx: <https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages>

---

### 1D — Sub-componente (`feat/hero-badge`)

**Tu tarea:** Crear `components/HeroBadge.jsx`. Es un badge pequeño con
**3 variantes** (`new`, `live`, `beta`) que cambian color e icono. Si no
recibe variante válida, **no renderiza nada** (`return null`).

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/HeroBadge.jsx`
- ✏️ Editar: `daw1-next/components/index.js` (añadir tu export)

📖 Renderizado condicional: <https://react.dev/learn/conditional-rendering>

---

### 1E — Datos (`feat/hero-data`)

**Tu tarea:** Crear `data/heroContent.js` con un array de mínimo **4 taglines**,
un objeto `badge`, y una función `getRandomTagline()` que devuelve uno al azar.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/heroContent.js` (la carpeta `data/` aún no existe — créala tú)

📖 `Math.random()`: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random>

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

Cuando tengas tu sub-tarea funcionando:

```bash
git add .
git commit -m "feat(hero): añadir [lo que has hecho]"
git push origin feat/hero-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_Jose_Cabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera` (vuestro fork)
   - **base:** `team/01-hero`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `feat/hero-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/01-hero` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
# Sincronizar con upstream
git switch main
git fetch upstream
git merge upstream/main
git push origin main

# Llevar los cambios de main a la rama del equipo
git switch team/01-hero
git merge main
git push origin team/01-hero
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/01-hero` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_Jose_Cabrera` (el de JoseAgus7)
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera` (vuestro fork)
   - **compare:** `team/01-hero`
4. Título: `team/01-hero: Hero Section completa`.
5. **Create pull request**.

JoseAgus7 revisará la PR final y mergeará si todo está bien.

---

## ⚠️ Ayuda rápida

- **"Error: no se encuentra HeroBadge / heroContent"** → tu compañero D o E
  aún no ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/hero-badge   # o feat/hero-data
  ```
- **"Next.js me grita por useState"** → falta `'use client'` en la primera
  línea del archivo del componente.
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores `<<<<<<<`, `=======`, `>>>>>>>`.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
