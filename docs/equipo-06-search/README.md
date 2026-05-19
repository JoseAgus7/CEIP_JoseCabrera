# 🟨 Equipo 6 — Search Bar

**Vais a construir** una barra de búsqueda con input controlado, botón × para
limpiar, contador de caracteres y aviso si el query es muy corto.

📖 **Documentación clave:**
- [Inputs controlados](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
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
git switch -c team/06-search
git push -u origin team/06-search
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/06-search
git switch -c feat/search-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 6A — Componente principal ⚛️ (`feat/search-component`)

**Tu tarea:** Crear `components/Search.jsx` con `useState` para `query` y
`focused`. Input controlado. Botón "×" solo si hay texto. Aviso si
`query.length < minChars`. Muestra contador `query.length`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/Search.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

⚠️ Necesita `'use client'`.

📖 Inputs controlados: <https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable>

---

### 6B — Estilos (`feat/search-styles`)

**Tu tarea:** `.search` con `:focus-within` que cambia el borde, animación
`@keyframes` para el icono al focus, `.search-warn` en rojo.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css`

📖 `:focus-within`: <https://developer.mozilla.org/es/docs/Web/CSS/:focus-within>

---

### 6C — Wire-up (`feat/search-wire-up`)

**Tu tarea:** Importar `Search` en `page.jsx`, colocarlo **debajo del header**.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/page.jsx`

---

### 6D — Sub-componente (`feat/search-icon`)

**Tu tarea:** Crear `components/SearchIcon.jsx` con prop `focused`. Si está
focused, aplica clase `bounce`. Atributo `aria-hidden`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/SearchIcon.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

---

### 6E — Datos (`feat/search-data`)

**Tu tarea:** Crear `data/searchConfig.js` con `{ placeholder, minChars,
suggestions: [...] }` (mínimo 5 sugerencias) y función `filterSuggestions(query)`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/searchConfig.js`

📖 `String.includes()`: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes>

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

```bash
git add .
git commit -m "feat(search): añadir [lo que has hecho]"
git push origin feat/search-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_Jose_Cabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **base:** `team/06-search`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `feat/search-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/06-search` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch team/06-search
git merge main
git push origin team/06-search
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/06-search` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_Jose_Cabrera`
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `team/06-search`
4. Título: `team/06-search: Search Bar`.
5. **Create pull request**.

---

## ⚠️ Ayuda rápida

- **"Next.js me grita por useState"** → falta `'use client'` en la primera
  línea de `Search.jsx`.
- **"Error: no se encuentra SearchIcon / searchConfig"** → tu compañero D o E
  aún no ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/search-icon   # o feat/search-data
  ```
- **Input controlado**: el `<input>` necesita `value={query}` y
  `onChange={e => setQuery(e.target.value)}` para funcionar.
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
