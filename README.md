# DAW1 — Nuestro Equipo 🐙 (Next.js)

Web colaborativa del taller de **Git & GitHub** construida sobre **Next.js 14**.
Cada miembro del equipo añade su tarjeta en su propia rama y la integra vía Pull Request.

---

## 🚀 Cómo lanzar el proyecto

Necesitas tener **Node.js 18+** y **Git** instalados.

```bash
# 1. Clona el repo
git clone https://github.com/JoseAgus7/CIP_Jose_Cabrera.git
cd CIP_Jose_Cabrera

# 2. Instala dependencias (esto crea la carpeta node_modules)
pnpm install

# 3. Arranca el servidor de desarrollo
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

1. Clona y crea tu rama:
   ```bash
   git switch -c feature/tu-nombre
   ```
2. Crea un archivo nuevo `components/cards/CardTuNombre.jsx`. Cópialo de
   `CardEjemplo.jsx` y modifícalo con tus datos.
3. Commit + push:
   ```bash
   git add components/cards/CardTuNombre.jsx
   git commit -m "feat: añadir componente CardTuNombre"
   git push -u origin feature/tu-nombre
   ```

> Como cada uno toca **un archivo distinto**, no habrá conflictos.

### Fase 2 — Tarea con conflictos (¡a propósito!)

Ahora todos editáis el **mismo archivo** (`app/page.jsx`) para registrar
vuestras tarjetas:

1. En `app/page.jsx`, añade tu import al principio:
   ```jsx
   import CardTuNombre from '@/components/cards/CardTuNombre';
   ```
2. Añádete al array `tarjetas`:
   ```jsx
   <CardTuNombre key="tu-nombre" />,
   ```
3. Commit + push y abre la PR.

> ⚠️ Aquí **habrá conflictos** porque varios compañeros tocan las
> mismas líneas. Es el momento de aprender a resolverlos.

---

## 📐 Reglas del taller

- ✅ Cada alumno trabaja en su rama `feature/nombre-apellido`
- ✅ Nunca se hace push directo a `main`
- ✅ Toda PR necesita al menos una aprobación antes de mergearse
- ✅ El revisor **no** es el mismo que abre la PR

---

## 🛠 Comandos pnpm útiles

| Comando | Qué hace |
|---|---|
| `pnpm install` | Instala dependencias en `node_modules/` |
| `pnpm dev` | Servidor de desarrollo en http://localhost:3000 |
| `pnpm build` | Compila el proyecto para producción |
| `pnpm start` | Ejecuta la versión compilada |
