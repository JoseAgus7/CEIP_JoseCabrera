# 🟧 Equipo 3 — Footer ampliado

**Vais a construir** un footer con **dos columnas** (redes sociales y enlaces
legales) y un copyright con el **año actual dinámico**.

📖 **Documentación clave:**
- [`Date()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Accesibilidad ARIA](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA)

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
git switch -c team/03-footer
git push -u origin team/03-footer
```

### Los otros 4 miembros, después del líder

```bash
git fetch
git switch team/03-footer
git switch -c feat/footer-XXXX     # XXXX = tu rol (ver abajo)
```

---

## 👥 Los 5 roles del equipo

### 3A — Componente principal (`feat/footer-component`)

**Tu tarea:** Crear `components/FooterLinks.jsx` que renderiza 2 secciones
(social/legal). El copyright se calcula con `new Date().getFullYear()`. Recibe
prop `author`.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/FooterLinks.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

📖 `Date()`: <https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date>

---

### 3B — Estilos (`feat/footer-styles`)

**Tu tarea:** `.footer-links` con grid de 2 columnas (1 columna en móvil),
hover con `transition`, separador entre secciones.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/globals.css`

**Clases:** `.footer-links`, `.footer-col`, `.footer-col a`, `.footer-copy`

📖 Transitions: <https://developer.mozilla.org/es/docs/Web/CSS/CSS_transitions/Using_CSS_transitions>

---

### 3C — Wire-up (`feat/footer-wire-up`)

**Tu tarea:** **Reemplazar el `<footer>` actual** de `page.jsx` por
`<FooterLinks author="DAW1 · CEIP" />`.

**Dónde trabajas:**
- ✏️ Editar: `daw1-next/app/page.jsx`

---

### 3D — Sub-componente (`feat/footer-social-icon`)

**Tu tarea:** Crear `components/SocialIcon.jsx` con props `{ name, size }`
(`sm`/`md`/`lg`). Mapa interno de iconos por nombre, fallback si no existe.
Atributo `aria-label` para accesibilidad.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/components/SocialIcon.jsx`
- ✏️ Editar: `daw1-next/components/index.js`

📖 Accesibilidad ARIA: <https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA>

---

### 3E — Datos (`feat/footer-data`)

**Tu tarea:** Crear `data/socialLinks.js` con estructura `{ social: [...],
legal: [...] }`. Cada link es `{ name, url, label }`. Mínimo 3 social, 2 legal.

**Dónde trabajas:**
- ✏️ Crear: `daw1-next/data/socialLinks.js`

---

## 🚀 Pull Requests

Hay **dos tipos de PR** en esta práctica:

### PR interna (cada miembro, al acabar su sub-tarea)

```bash
git add .
git commit -m "feat(footer): añadir [lo que has hecho]"
git push origin feat/footer-XXXX
```

En GitHub, dentro del **fork del equipo** (`LIDER_USUARIO/CEIP_Jose_Cabrera`):

1. Verás banner "Compare & pull request" → clic.
2. **Comprueba los 4 campos** (todo dentro del fork del equipo):
   - **base repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **base:** `team/03-footer`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `feat/footer-XXXX`
3. Asigna a un compañero del equipo como **reviewer**.
4. Cuando apruebe → **Merge**.

### PR externa (UNA SOLA por equipo, al final)

Cuando `team/03-footer` esté completo (todas las sub-ramas mergeadas), el
**líder** sincroniza con upstream y abre la PR final hacia JoseAgus7:

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main

git switch team/03-footer
git merge main
git push origin team/03-footer
```

Después en GitHub, desde el fork del equipo:

1. Ve a la rama `team/03-footer` en el fork.
2. Pulsa **Contribute** → **Open pull request**.
3. **Comprueba los 4 campos**:
   - **base repository:** `JoseAgus7/CEIP_Jose_Cabrera`
   - **base:** `main`
   - **head repository:** `LIDER_USUARIO/CEIP_Jose_Cabrera`
   - **compare:** `team/03-footer`
4. Título: `team/03-footer: Footer ampliado`.
5. **Create pull request**.

---

## ⚠️ Ayuda rápida

- **"Error: no se encuentra SocialIcon / socialLinks"** → tu compañero D o E
  aún no ha mergeado su sub-rama. Tráetela temporalmente:
  ```bash
  git fetch
  git merge origin/feat/footer-social-icon   # o feat/footer-data
  ```
- **Conflicto en `components/index.js`** entre roles A y D → quédate con
  **las dos líneas** y borra los marcadores `<<<<<<<`, `=======`, `>>>>>>>`.
- **`new Date().getFullYear()`** devuelve el año actual como número.

📖 Resolver conflictos: <https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line>
