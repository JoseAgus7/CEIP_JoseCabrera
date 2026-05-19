# 🟩 Equipo 4 — Filtro por tags

**Vais a construir** una fila de botones para filtrar tarjetas. El que está
activo se resalta, hay un contador de tags disponibles y un botón "Limpiar"
que se deshabilita si ya está en el por defecto.

📖 **Documentación clave:**
- [`useState`](https://react.dev/reference/react/useState)
- [Event handlers en React](https://react.dev/learn/responding-to-events)

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
git switch -c team/04-filter
git push -u origin team/04-filter
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/04-filter
git switch -c feat/filter-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 4A — Componente principal ⚛️ (`feat/filter-component`)

**Tu tarea:** Crear `components/TagFilter.jsx` con `useState` para el tag
activo (default: `defaultTag`). Botón "Limpiar" vuelve al default. Muestra
"X tags disponibles".

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/TagFilter.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

⚠️ Necesita `'use client'` por el `useState`.
👉 <https://nextjs.org/docs/app/building-your-application/rendering/client-components>

📖 `useState`: <https://react.dev/reference/react/useState>

---

### 4B — Estilos (`feat/filter-styles`)

**Tu tarea:** `.tag-filter`, `.tag-btn`, `.tag-btn.active`, `.tag-btn:active`
(animación al click), `.tag-clear:disabled`.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css`

📖 Pseudo-clases: <https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes>

---

### 4C — Wire-up (`feat/filter-wire-up`)

**Tu tarea:** Importar `TagFilter` en `page.jsx` y colocarlo **entre `Stats`
y el grid**. Debajo añade un `<p className="search-hint">Mostrando: todos</p>` (visual).

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/page.jsx`

---

### 4D — Sub-componente (`feat/filter-tag-button`)

**Tu tarea:** Crear `components/TagButton.jsx` con props `{ label, count,
active, onClick }`. Muestra `label (count)`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/TagButton.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

📖 Event handlers en React: <https://react.dev/learn/responding-to-events>

---

### 4E — Datos (`feat/filter-data`)

**Tu tarea:** Crear `data/tags.js` con array de **mínimo 5** tags `{ slug,
label, count }` y exportar `defaultTag` (string con el slug por defecto).

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/tags.js`

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

```bash
git add .
git commit -m "feat(filter): añadir [lo que has hecho]"
git push origin feat/filter-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_JoseCabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_JoseCabrera`
   - **base:** `team/04-filter`
   - **head repository:** `LIDER_USUARIO/CEIP_JoseCabrera`
   - **compare:** `feat/filter-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/04-filter` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch team/04-filter
git merge main
git push origin team/04-filter
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/04-filter` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_JoseCabrera`
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_JoseCabrera`
   - **compare:** `team/04-filter`
4. Título: `team/04-filter: Filtro por tags`.
5. **Create pull request**.

---

## ⚠️ Ayuda rápida

- **"Error: no se encuentra TagButton / tags"** → tu compañero D o E aún no
  ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/filter-tag-button   # o feat/filter-data
  ```
- **"Next.js me grita por useState"** → falta `'use client'` en la primera
  línea de `TagFilter.jsx`.
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
