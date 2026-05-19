# DAW1 — Nuestro Equipo 🐙 (Next.js)

Web colaborativa del taller de **Git & GitHub** construida sobre **Next.js 14**.
Cada miembro del equipo añade su tarjeta en su propia rama y la integra vía Pull Request.

---

## 🚀 Cómo lanzar el proyecto

Necesitas tener **Node.js 18+**, **Git** y una **cuenta de GitHub**.

### 1. Haz tu fork (una sola vez)

1. Inicia sesión en [github.com](https://github.com).
2. Abre el repositorio de JoseAgus7: <https://github.com/JoseAgus7/CEIP_Jose_Cabrera>.
3. Pulsa el botón **Fork** (arriba a la derecha).
4. Pulsa **Create fork** (deja las opciones por defecto).
5. Ahora tienes tu copia en `https://github.com/TU_USUARIO/CEIP_Jose_Cabrera`.

> 💡 **No vuelvas a forkear** si JoseAgus7 sube cosas después. Para
> traértelas usa el botón **Sync fork** desde tu fork en GitHub.

### 2. Clona TU fork en tu portátil

```bash
# Clona TU fork (sustituye TU_USUARIO por tu usuario de GitHub)
git clone https://github.com/TU_USUARIO/CEIP_Jose_Cabrera.git
cd CEIP_Jose_Cabrera

# Conecta también al repositorio de JoseAgus7 como 'upstream'
git remote add upstream https://github.com/JoseAgus7/CEIP_Jose_Cabrera.git

# Comprueba que tienes los 2 remotes
git remote -v
```

Después de esto:
- `origin` → **tu fork** (donde subes tu trabajo con `git push`)
- `upstream` → **repositorio de JoseAgus7** (de donde traes actualizaciones)

### 3. Instala dependencias y arranca

```bash
# Instala dependencias (esto crea la carpeta node_modules)
pnpm install

# Arranca el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.
Cuando guardes un archivo, la web se recarga sola (hot reload).

---

## 🧩 Estructura del proyecto

```
daw1-next/
├── app/
│   ├── layout.jsx        ← layout raíz (no tocar)
│   ├── page.jsx          ← página principal: imports + lista de tarjetas
│   └── globals.css       ← estilos globales (no tocar)
├── components/
│   └── cards/
│       ├── CardEjemplo.jsx       ← tarjeta de referencia
│       └── CardTuNombre.jsx      ← ← AQUÍ AÑADES LA TUYA
├── public/                ← imágenes y assets estáticos
├── .gitignore             ← archivos que Git debe ignorar
├── next.config.mjs
└── package.json
```

---

## 📋 Tu misión (taller)

### Fase 1 — Tarea fácil (sin conflictos)

1. Asegúrate de estar en `main` y actualizado en tu fork:
   ```bash
   git switch main
   git pull origin main
   ```
2. Crea tu rama:
   ```bash
   git switch -c feature/tu-nombre
   ```
3. Crea un archivo nuevo `components/cards/CardTuNombre.jsx`. Cópialo de
   `CardEjemplo.jsx` y modifícalo con tus datos.
4. Commit + push a TU fork:
   ```bash
   git add components/cards/CardTuNombre.jsx
   git commit -m "feat: añadir componente CardTuNombre"
   git push -u origin feature/tu-nombre
   ```
5. Abre la Pull Request desde **tu fork** al repositorio de JoseAgus7 (ver sección
   *Abrir Pull Request* más abajo).

> Como cada uno toca **un archivo distinto**, no habrá conflictos.

### Fase 2 — Tarea con conflictos (¡a propósito!)

Ahora todos editáis el **mismo archivo** (`app/page.jsx`) para registrar
vuestras tarjetas:

1. Sincroniza primero con upstream para tener las tarjetas ya mergeadas:
   ```bash
   git switch main
   git fetch upstream
   git merge upstream/main
   git push origin main
   ```
2. Crea una rama nueva (o sigue en la de Fase 1).
3. En `app/page.jsx`, añade tu import al principio:
   ```jsx
   import CardTuNombre from '@/components/cards/CardTuNombre';
   ```
4. Añádete al array `tarjetas`:
   ```jsx
   <CardTuNombre key="tu-nombre" />,
   ```
5. Commit + push a tu fork y abre la PR al repositorio de JoseAgus7.

> ⚠️ Aquí **habrá conflictos** porque varios compañeros tocan las
> mismas líneas. Es el momento de aprender a resolverlos.

---

## 🔀 Abrir Pull Request (desde tu fork al repositorio de JoseAgus7)

1. Ve a **tu fork** en GitHub: `https://github.com/TU_USUARIO/CEIP_Jose_Cabrera`.
2. Pulsa el banner amarillo **"Compare & pull request"**.
3. **Comprueba los 4 campos** (a veces GitHub se confunde):
   - **base repository**: `JoseAgus7/CEIP_Jose_Cabrera` (el de JoseAgus7)
   - **base**: `main`
   - **head repository**: `TU_USUARIO/CEIP_Jose_Cabrera` (tu fork)
   - **compare**: `feature/tu-nombre`
4. Título descriptivo + descripción breve.
5. Pulsa **Create pull request**.

JoseAgus7 revisará y mergeará tu PR. Cuando esté mergeado podrás borrar
tu rama desde la propia interfaz de la PR.

---

## 🔄 Mantener tu fork al día

Si JoseAgus7 sube cosas nuevas después de tu fork (correcciones,
material extra, mergeos de otros compañeros), tráelas con una de estas
dos opciones:

**Opción 1 — Desde GitHub (web):**
Tu fork → botón **Sync fork** → **Update branch**. Luego en tu portátil:
```bash
git pull origin main
```

**Opción 2 — Desde terminal:**
```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main
```

---

## 📐 Reglas del taller

- ✅ Cada alumno trabaja en **su propio fork** del repositorio de JoseAgus7
- ✅ Cada alumno trabaja en su rama `feature/nombre-apellido` dentro de su fork
- ✅ Nunca se hace push directo a `main` (ni en tu fork ni en upstream)
- ✅ Toda PR va de **tu fork** al repositorio de JoseAgus7
- ✅ JoseAgus7 revisa y mergea las PRs

---

## 🛠 Comandos pnpm útiles

| Comando | Qué hace |
|---|---|
| `pnpm install` | Instala dependencias en `node_modules/` |
| `pnpm dev` | Servidor de desarrollo en http://localhost:3000 |
| `pnpm build` | Compila el proyecto para producción |
| `pnpm start` | Ejecuta la versión compilada |
