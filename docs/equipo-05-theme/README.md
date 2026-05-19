# 🟥 Equipo 5 — Theme Toggle

**Vais a construir** un botón flotante arriba a la derecha que **cambia el
tema** (claro / oscuro / auto) y **persiste la elección** en `localStorage`.

> ⚠️ Este equipo es **especial**: el wire-up va en `layout.jsx`, no en
> `page.jsx`, para que el toggle esté en todas las páginas.

📖 **Documentación clave:**
- [`useState`](https://react.dev/reference/react/useState)
- [`useEffect`](https://react.dev/reference/react/useEffect)
- [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

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
git switch -c team/05-theme
git push -u origin team/05-theme
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/05-theme
git switch -c feat/theme-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 5A — Componente principal ⚛️ (`feat/theme-component`)

**Tu tarea:** Crear `components/ThemeToggle.jsx` con `useState` (modo actual)
y **dos `useEffect`**:
1. Al montar: lee `localStorage.getItem('theme')` y lo aplica
2. Cuando cambia el modo: aplica `document.body.dataset.theme = mode` y guarda en `localStorage`

Botón que va rotando entre los modos (`getNextTheme(current)`).

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/ThemeToggle.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

⚠️ Necesita `'use client'`.

📖 `useEffect`: <https://react.dev/reference/react/useEffect>
📖 `localStorage`: <https://developer.mozilla.org/es/docs/Web/API/Window/localStorage>

---

### 5B — Estilos (`feat/theme-styles`)

**Tu tarea:** `.theme-toggle` en `position: fixed` arriba-derecha. Selectores
para el `body` con `[data-theme="dark"]` y `[data-theme="light"]`.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css`

📖 Atributos `data-*` como selector: <https://developer.mozilla.org/es/docs/Web/CSS/Attribute_selectors>

---

### 5C — Wire-up (`feat/theme-wire-up`)

**Tu tarea:** Importar `ThemeToggle` en `app/layout.jsx` y colocarlo **dentro
de `<body>`**, antes de `{children}`. (Debe estar en todas las páginas.)

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/layout.jsx`

📖 Cómo funciona el layout: <https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts>

---

### 5D — Sub-componente (`feat/theme-icon`)

**Tu tarea:** Crear `components/ThemeIcon.jsx` con prop `mode`
(`light`/`dark`/`auto`). Función interna `getIcon(mode)` devuelve ☀️ / 🌙 / 🌓.
Lleva `aria-hidden="true"`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/ThemeIcon.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

---

### 5E — Datos (`feat/theme-data`)

**Tu tarea:** Crear `data/themes.js` con un objeto `themes` (3 modos), un
array `themeOrder` con el orden, y una función `getNextTheme(current)` que
devuelve el siguiente en el ciclo.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/themes.js`

📖 Operador módulo `%`: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder>

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

```bash
git add .
git commit -m "feat(theme): añadir [lo que has hecho]"
git push origin feat/theme-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_Jose_Cabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **base:** `team/05-theme`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `feat/theme-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/05-theme` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch team/05-theme
git merge main
git push origin team/05-theme
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/05-theme` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_Jose_Cabrera`
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `team/05-theme`
4. Título: `team/05-theme: Theme Toggle`.
5. **Create pull request**.

---

## ⚠️ Ayuda rápida

- **"localStorage is not defined"** → estás intentando usar `localStorage` en
  el servidor. Asegúrate de tener `'use client'` y de leerlo dentro de
  `useEffect` (no en el render directo).
- **"Error: no se encuentra ThemeIcon / themes"** → tu compañero D o E aún no
  ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/theme-icon   # o feat/theme-data
  ```
- **Conflicto en `app/layout.jsx` con el Equipo 7** → ambos equipos editan
  `layout.jsx`. El que mergee primero pasa limpio; el segundo tendrá que
  conservar AMBOS imports y AMBOS componentes dentro de `<body>`.
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
