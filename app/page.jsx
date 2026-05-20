import CardTuNombre from '@/components/cards/CardAbraham';
import CardEjemplo from '@/components/cards/CardHugo';

import CardJoseAgustin from '@/components/cards/CardJoseAgustin';

// ════════════════════════════════════════════════════════════
//  📌  REGISTRO DE TARJETAS
//  Aquí cada alumno importa SU componente arriba y lo añade
//  al array de abajo. Este es el archivo donde se generarán
//  los conflictos durante la Fase 2 del taller — ¡prepárate!
// ════════════════════════════════════════════════════════════

// ↓ AÑADE TU IMPORT AQUÍ ABAJO ↓


// ↓ AÑADE TU <Card... /> EN LA LISTA ↓
const tarjetas = [
  <CardJoseAgustin key="jose-agustin" />,
  <CardTuNombre key="Abraham" />,
   <CardTuNombre key="Hugo" />,
];

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">🐙</div>
        <h1> CEIP Jose Cabrera - Curso Git</h1>
        <p>
          Web colaborativa hecha con Next.js. Cada tarjeta la añadió un
          compañero en su propia rama y se integró con una Pull Request.
        </p>
        <span className="badge">✅ Hecho con Git & GitHub · Next.js 14</span>
      </header>

      <main>
        <p className="section-title">👥 El equipo</p>

        <div className="grid">
          {tarjetas}
          <div className="placeholder">
            <span className="icon">➕</span>
            Tu tarjeta podría estar aquí.<br />
            Crea tu rama y súbela.
          </div>
        </div>
      </main>

      <footer>
        Proyecto del taller de Git & GitHub · DAW1 ·{' '}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </>
  );
}
