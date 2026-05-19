# 🟪 Equipo 2 — Stats Bar

**Vais a construir** una barra de estadísticas que **calcula el total** con
`reduce`, formatea números grandes (`1500` → `1.5k`) y permite resaltar uno.

📖 **Documentación clave:**
- [`Array.reduce()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [`Array.map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

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
git switch -c team/02-stats
git push -u origin team/02-stats
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/02-stats
git switch -c feat/stats-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 2A — Componente principal (`feat/stats-component`)

**Tu tarea:** Crear `components/Stats.jsx` que mapea los datos a `StatItem` y
calcula un total al final con `reduce`. Recibe prop `highlight` (índice del
ítem destacado).

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/Stats.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

**Necesitas:**
- `import StatItem from '@/components/StatItem';` (lo crea 2D)
- `import { stats } from '@/data/stats';` (lo crea 2E)

📖 Listas con `.map()`: <https://react.dev/learn/rendering-lists>

---

### 2B — Estilos (`feat/stats-styles`)

**Tu tarea:** Estilos con **grid responsive** (auto-fit), hover con `transform`
y una clase `.highlight` para el destacado.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css`

**Clases:** `.stats`, `.stats-item`, `.stats-item:hover`, `.stats-item.highlight`, `.stats-icon`, `.stats-num`

📖 CSS Grid: <https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout>

---

### 2C — Wire-up (`feat/stats-wire-up`)

**Tu tarea:** Importar `Stats` en `page.jsx` y colocarlo **entre el header y el
grid de tarjetas**. Pásale `highlight={1}`.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/page.jsx`

---

### 2D — Sub-componente (`feat/stats-item`)

**Tu tarea:** Crear `components/StatItem.jsx` con props `{ num, label, icon,
color, highlight }`. Incluye dentro la función `formatNum(n)` que devuelve
`"1.5k"` si `n >= 1000`. Aplica el `color` como `border-color` con estilo en línea.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/StatItem.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

📖 Estilos en línea: <https://react.dev/reference/react-dom/components/common#applying-css-styles>

---

### 2E — Datos (`feat/stats-data`)

**Tu tarea:** Crear `data/stats.js` con array de **mínimo 4** estadísticas con
`{ num, label, icon, color, priority }` y una función `getTopStats(n)`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/stats.js`

📖 `Array.sort()`: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

```bash
git add .
git commit -m "feat(stats): añadir [lo que has hecho]"
git push origin feat/stats-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_Jose_Cabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **base:** `team/02-stats`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `feat/stats-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/02-stats` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch team/02-stats
git merge main
git push origin team/02-stats
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/02-stats` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_Jose_Cabrera`
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `team/02-stats`
4. Título: `team/02-stats: Stats Bar completa`.
5. **Create pull request**.

---

## ⚠️ Ayuda rápida

- **"Error: no se encuentra StatItem / stats"** → tu compañero D o E aún no
  ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/stats-item   # o feat/stats-data
  ```
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores `<<<<<<<`, `=======`, `>>>>>>>`.
- **`reduce()` te confunde**: la firma es `array.reduce((acc, item) => acc + item.num, 0)`.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
