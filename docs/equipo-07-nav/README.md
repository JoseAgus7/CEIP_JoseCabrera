# 🟫 Equipo 7 — Navigation Menu

**Vais a construir** un menú de navegación **sticky** arriba del todo, con
link activo y badges opcionales en algunos enlaces.

> ⚠️ Este equipo, como el 5, hace el wire-up en `layout.jsx` (no en `page.jsx`).

📖 **Documentación clave:**
- [`position: sticky`](https://developer.mozilla.org/es/docs/Web/CSS/position#sticky)
- [Pseudo-elementos `::before` y `::after`](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements)

---

## 🛠 Setup del equipo (Fase 0 + Fase 1)

### Solo el LÍDER del equipo (sincronizar fork + añadir collaborators)

> El líder es **cualquier miembro del equipo que ya tenga su fork de la Parte 1**.
> No hace falta forkear de nuevo: sincronízalo y úsalo como fork del equipo.

**1. Sincroniza tu fork** (para traer la guía nueva y lo último de JoseAgus7):

1. Ve a tu fork: `https://github.com/TU_USUARIO/CEIP_JoseCabrera`.
2. Pulsa **Sync fork** (arriba a la derecha) → **Update branch**.
3. Verifica que `main` ya está al día con JoseAgus7.

**2. Añade a tus compañeros como Collaborators:**

4. En tu fork: **Settings** → **Collaborators** → **Add people**.
5. Añade a tus 4 compañeros del equipo por su usuario de GitHub.
6. Ellos tienen que **aceptar la invitación** (les llega por email).

> ⚠️ Si todavía no tienes fork (no hiciste la Parte 1), hazlo ahora:
> ve a <https://github.com/JoseAgus7/CEIP_JoseCabrera> → **Fork** → **Create fork**.

### Todos los miembros del equipo (incluido el líder)

```bash
# Clona el fork del LÍDER del equipo (sustituye LIDER_USUARIO)
git clone https://github.com/LIDER_USUARIO/CEIP_JoseCabrera.git
cd CEIP_JoseCabrera/daw1-next

# Conecta al repositorio de JoseAgus7 como upstream
git remote add upstream https://github.com/JoseAgus7/CEIP_JoseCabrera.git

# Instala dependencias y arranca
pnpm install
pnpm dev
```

### El líder crea la rama del equipo

```bash
git switch -c team/07-nav
git push -u origin team/07-nav
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/07-nav
git switch -c feat/nav-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 7A — Componente principal ⚛️ (`feat/nav-component`)

**Tu tarea:** Crear `components/NavMenu.jsx` con `useState` para `activeIndex`
(default 0). Al hacer click en un link cambia el activo.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/NavMenu.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

⚠️ Necesita `'use client'`.

---

### 7B — Estilos (`feat/nav-styles`)

**Tu tarea:** `.nav-menu` con `position: sticky; top: 0`, responsive con
`flex-wrap`. `.nav-link.active` con subrayado animado (`::after` con
`@keyframes`).

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css`

📖 `position: sticky`: <https://developer.mozilla.org/es/docs/Web/CSS/position#sticky>
📖 Pseudo-elementos `::before` y `::after`: <https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements>

---

### 7C — Wire-up (`feat/nav-wire-up`)

**Tu tarea:** Importar `NavMenu` en `app/layout.jsx`, **dentro de `<body>` y
encima de `{children}`**.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/layout.jsx`

---

### 7D — Sub-componente (`feat/nav-link`)

**Tu tarea:** Crear `components/NavLink.jsx` con props `{ label, href, active,
badge, onClick }`. Si `badge` existe, lo renderiza al lado con `.nav-badge`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/NavLink.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

---

### 7E — Datos (`feat/nav-data`)

**Tu tarea:** Crear `data/navLinks.js` con array de **mínimo 4 links**
`{ label, href, badge? }`. Al menos 2 deben tener `badge`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/navLinks.js`

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

```bash
git add .
git commit -m "feat(nav): añadir [lo que has hecho]"
git push origin feat/nav-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_JoseCabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_JoseCabrera`
   - **base:** `team/07-nav`
   - **head repository:** `LIDER_USUARIO/CEIP_JoseCabrera`
   - **compare:** `feat/nav-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/07-nav` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch team/07-nav
git merge main
git push origin team/07-nav
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/07-nav` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_JoseCabrera`
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_JoseCabrera`
   - **compare:** `team/07-nav`
4. Título: `team/07-nav: Navigation Menu`.
5. **Create pull request**.

---

## ⚠️ Ayuda rápida

- **"Next.js me grita por useState"** → falta `'use client'` en la primera
  línea de `NavMenu.jsx`.
- **"Error: no se encuentra NavLink / navLinks"** → tu compañero D o E aún no
  ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/nav-link   # o feat/nav-data
  ```
- **Conflicto en `app/layout.jsx` con el Equipo 5** → ambos equipos editan
  `layout.jsx`. El que mergee primero pasa limpio; el segundo tendrá que
  conservar AMBOS imports y AMBOS componentes dentro de `<body>`.
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
