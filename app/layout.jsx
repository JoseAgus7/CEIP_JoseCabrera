import './globals.css';

export const metadata = {
  title: 'DAW1 — Nuestro Equipo (Next.js)',
  description: 'Taller de Git & GitHub sobre Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
