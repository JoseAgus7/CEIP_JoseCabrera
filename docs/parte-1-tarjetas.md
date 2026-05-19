# Parte 1 — Tu primera tarjeta (individual)

> Esta es la **primera parte** del taller, **antes** de la actividad por
> equipos. Cada alumno trabaja en **su propio fork** del repositorio de
> JoseAgus7.

---

## 🎯 Qué vais a hacer

1. **Fase 1 (sin conflictos)** — Cada uno crea un archivo nuevo
   `components/cards/CardTuNombre.jsx` con su tarjeta personal.
   Como cada alumno toca un archivo distinto, **no habrá conflictos**.
2. **Fase 2 (con conflictos)** — Todos editáis el mismo archivo
   `app/page.jsx` para registrar vuestra tarjeta. **Aquí sí habrá conflictos**
   y aprenderéis a resolverlos.

---

## 📦 Prerequisitos — Instala estas herramientas

Antes de empezar necesitas tener instalado en tu portátil:

| Herramienta | Para qué | Comprobar versión |
|---|---|---|
| **Git** | Control de versiones | `git --version` |
| **Node.js 18+** | Motor de Next.js | `node --version` |
| **pnpm** | Gestor de paquetes | `pnpm --version` |
| **VS Code** (recomendado) | Editor de código | — |
| **Cuenta de GitHub** | Hospedar tu fork | github.com/signup |

> 💡 Si un comando devuelve un número de versión, ya lo tienes. Si dice
> `command not found`, instálalo siguiendo las instrucciones de abajo.

### Git

**🍎 macOS:**
```bash
# Opción 1 — Xcode Command Line Tools
xcode-select --install

# Opción 2 — Homebrew (Git siempre actualizado)
brew install git
```

**🪟 Windows:**
1. Descarga el instalador en <https://git-scm.com/download/win>
2. Ejecútalo aceptando los valores por defecto.
3. Marca **"Add Git to PATH"** y **"Use Visual Studio Code as Git's default editor"**.
4. Tras instalar, usa **Git Bash** (más cómodo que CMD).

**🐧 Linux:**
```bash
# Debian / Ubuntu / Mint
sudo apt update && sudo apt install git -y

# Fedora / RHEL / Rocky
sudo dnf install git -y

# Arch / Manjaro
sudo pacman -S git
```

**Configura tu identidad (solo la primera vez):**
```bash
git config --global user.name  "Tu Nombre"
git config --global user.email "tu@email.com"
```

📖 <https://git-scm.com/downloads>

### Node.js (versión LTS 18+ o 20+)

**🍎 macOS (Homebrew):**
```bash
brew install node
```

**🪟 Windows:**
Descarga el instalador LTS en <https://nodejs.org/download>

**🐧 Linux / WSL:**
```bash
sudo apt install -y nodejs npm
```

**🌐 Multi-versión con nvm (avanzado, opcional):**
```bash
nvm install --lts
```

📖 <https://nodejs.org>

### pnpm

```bash
# Comprueba primero si ya lo tienes
pnpm --version
```

Si no, instálalo según tu sistema:

**🍎 macOS (Homebrew):**
```bash
brew install pnpm
```

**🪟 Windows (PowerShell):**
```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```
Después cierra y abre la terminal otra vez.

**🐧 Linux / WSL:**
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

**🌐 Universal (si ya tienes Node.js):**
```bash
npm install -g pnpm
```

📖 <https://pnpm.io/installation>

### VS Code (recomendado)

Descarga en <https://code.visualstudio.com>. Te ayuda mucho con:
- Resaltado de conflictos de merge en colores
- Botones `Accept Current` / `Accept Incoming` / `Accept Both`
- Terminal integrada
- Extensión de Git incluida

### Cuenta de GitHub

Si no tienes, regístrate en <https://github.com/signup>.
Verifica el email — si no, no podrás hacer fork ni abrir PRs.

---

## 🛠 Setup inicial (una sola vez)

Con todo instalado, sigue estos pasos:

### 1. Haz tu fork del repositorio de JoseAgus7

1. Inicia sesión en [github.com](https://github.com).
2. Abre <https://github.com/JoseAgus7/CEIP_Jose_Cabrera>.
3. Pulsa **Fork** (arriba a la derecha) → **Create fork**.
4. Ya tienes tu copia en `https://github.com/TU_USUARIO/CEIP_Jose_Cabrera`.

> 💡 Esto solo se hace **una vez por persona**. Si JoseAgus7 sube cosas más
> tarde, **NO vuelvas a forkear** — usa **Sync fork** desde GitHub.

### 2. Clona TU fork en tu portátil

```bash
# Sustituye TU_USUARIO por tu nombre de usuario de GitHub
git clone https://github.com/TU_USUARIO/CEIP_Jose_Cabrera.git
cd CEIP_Jose_Cabrera/daw1-next

# Conecta también al repositorio de JoseAgus7 como 'upstream'
git remote add upstream https://github.com/JoseAgus7/CEIP_Jose_Cabrera.git

# Comprueba que tienes los dos remotes
git remote -v
```

Después de esto:
- `origin` → **tu fork** (donde subes tu trabajo con `git push`)
- `upstream` → **repositorio de JoseAgus7** (de donde traes actualizaciones)

### 3. Instala dependencias y arranca

```bash
pnpm install
pnpm dev
```

Abre <http://localhost:3000>. Si ves la web con la tarjeta de ejemplo, listo.

---

## ✍️ Fase 1 — Crea tu tarjeta (sin conflictos)

### Paso 1 · Crea tu rama

```bash
git switch main
git pull origin main
git switch -c feature/tu-nombre
```

### Paso 2 · Crea tu archivo `CardTuNombre.jsx`

Copia `components/cards/CardEjemplo.jsx`, renómbralo a
`components/cards/CardTuNombre.jsx` y modifícalo con tus datos.

```jsx
// components/cards/CardTuNombre.jsx
export default function CardTuNombre() {
  return (
    <div className="tarjeta">
      <span className="avatar">🧑‍💻</span>
      <h3>Tu Nombre</h3>
      <p className="rol">Desarrollador Web</p>
      <p className="bio">Una frase tuya aquí.</p>
      <div className="tags">
        <span>HTML</span><span>CSS</span><span>JavaScript</span>
      </div>
    </div>
  );
}
```

### Paso 3 · Commit y push a TU fork

```bash
git add components/cards/CardTuNombre.jsx
git commit -m "feat: añadir componente CardTuNombre"
git push -u origin feature/tu-nombre
```

### Paso 4 · Abre la Pull Request

Sigue las instrucciones de la sección **Abrir Pull Request** más abajo.

> ✅ Cuando JoseAgus7 mergee tu PR, tu tarjeta estará en su repo.

---

## ⚔️ Fase 2 — Registra tu tarjeta (con conflictos)

Ahora todos editáis el **mismo archivo** `app/page.jsx`. Aquí saltarán los
conflictos a propósito.

### Paso 1 · Sincroniza primero con upstream

Antes de empezar, tráete las tarjetas que JoseAgus7 ya haya mergeado:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main
```

### Paso 2 · Crea (o reutiliza) una rama

```bash
git switch -c feature/tu-nombre-page    # o sigue en la de Fase 1
```

### Paso 3 · Edita `app/page.jsx`

1. Añade tu import al principio:
   ```jsx
   import CardTuNombre from '@/components/cards/CardTuNombre';
   ```
2. Añádete al array `tarjetas`:
   ```jsx
   <CardTuNombre key="tu-nombre" />,
   ```

### Paso 4 · Commit, push y PR

```bash
git add app/page.jsx
git commit -m "feat: registrar CardTuNombre en page.jsx"
git push -u origin feature/tu-nombre-page
```

> ⚠️ Cuando abras la PR, **es probable que tenga conflictos** porque varios
> compañeros han tocado las mismas líneas. Lee la sección **Resolver
> conflictos** más abajo.

---

## 🔀 Abrir Pull Request (desde tu fork a JoseAgus7)

1. Ve a **tu fork** en GitHub: `https://github.com/TU_USUARIO/CEIP_Jose_Cabrera`.
2. Verás banner amarillo **"Compare & pull request"** → clic.
3. **⚠️ Comprueba los 4 campos** (GitHub a veces los rellena mal):
   - **base repository**: `JoseAgus7/CEIP_Jose_Cabrera` (el repositorio de JoseAgus7)
   - **base**: `main`
   - **head repository**: `TU_USUARIO/CEIP_Jose_Cabrera` (tu fork)
   - **compare**: `feature/tu-nombre`
4. Título descriptivo + descripción breve.
5. Pulsa **Create pull request**.

JoseAgus7 revisará y mergeará. Cuando esté mergeada, puedes borrar tu
rama desde la propia interfaz de la PR.

---

## ⚔️ Resolver conflictos en `app/page.jsx`

Cuando GitHub te diga **"This branch has conflicts that must be resolved"**:

### Opción A · Desde la web (sencillo)

1. En la PR, pulsa **Resolve conflicts**.
2. Verás bloques con marcadores como:
   ```
   <<<<<<< feature/tu-nombre-page
   tu código
   =======
   código de otro compañero
   >>>>>>> main
   ```
3. **Quédate con las dos versiones** (borra los marcadores `<<<<<<<`,
   `=======`, `>>>>>>>` y deja las dos líneas de imports/tarjetas).
4. **Mark as resolved** → **Commit merge**.

### Opción B · Desde terminal

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch feature/tu-nombre-page
git merge main
# Git marcará los conflictos en app/page.jsx — resuélvelos en VS Code
git add app/page.jsx
git commit
git push origin feature/tu-nombre-page
```

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>

---

## 🔄 Mantener tu fork al día

Si JoseAgus7 sube cosas durante el taller (correcciones, mergeos), trae los
cambios con una de estas dos opciones:

**Opción 1 — Desde la web:** En tu fork → botón **Sync fork** → **Update branch**.
Luego `git pull origin main` en tu portátil.

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
- ✅ Cada alumno trabaja en su rama `feature/tu-nombre`
- ✅ Nunca se hace push directo a `main`
- ✅ Toda PR va de **tu fork** al repositorio de JoseAgus7
- ✅ JoseAgus7 revisa y mergea las PRs

---

## 🆘 Si algo sale mal

### "He hecho commit en `main` por error"
```bash
git switch main
git reset HEAD~1 --soft
git switch -c feature/tu-nombre
git commit -m "feat: ..."
```

### "Olvidé `'use client'` y Next.js me grita"
Añade `'use client';` como **primera línea** del archivo de tu componente.

### "Mi PR no se puede mergear (conflicts)"
Mira la sección **Resolver conflictos** más arriba.

### "He abierto la PR contra mi propio fork en vez de contra JoseAgus7"
En GitHub, cierra esa PR y abre una nueva desde tu fork eligiendo
`base repository: JoseAgus7/CEIP_Jose_Cabrera`.

### "Estoy en mitad de un merge y quiero salir"
```bash
git merge --abort
```
