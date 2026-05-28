'use client'; // Obligatorio en Next.js al usar hooks como useState o useEffect

import { useState, useEffect } from 'react';

// Función auxiliar para rotar entre los temas disponibles
// (Puedes añadir 'system' u otros temas en este array si tu proyecto lo requiere)
const getNextTheme = (current) => {
  const themes = ['light', 'dark']; 
  const nextIndex = (themes.indexOf(current) + 1) % themes.length;
  return themes[nextIndex];
};

export default function ThemeToggle() {
  // Estado inicial. Usamos 'light' por defecto.
  const [theme, setTheme] = useState('light');
  
  // Estado extra recomendado en Next.js para saber si el componente ya se montó en el navegador
  const [isMounted, setIsMounted] = useState(false);

  // 1er useEffect: AL MONTAR
  // Se ejecuta solo una vez cuando la página carga por primera vez en el navegador.
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme); // Si había un tema guardado, actualizamos el estado
    }
    setIsMounted(true); // Indicamos que ya estamos en el cliente
  }, []); // El array vacío [] significa "solo al montar"

  // 2do useEffect: CUANDO CAMBIA EL MODO
  // Se ejecuta cada vez que el estado 'theme' cambia.
  useEffect(() => {
    // Evitamos ejecutar esto antes de que se haya montado y leído el localStorage inicial
    if (!isMounted) return; 

    // Aplica el tema al HTML: quedará algo como <body data-theme="dark">
    document.body.dataset.theme = theme;
    
    // Guarda el nuevo tema en el almacenamiento del navegador
    localStorage.setItem('theme', theme);
  }, [theme, isMounted]); // Se ejecuta cuando cambian estas variables

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = () => {
    const nextMode = getNextTheme(theme);
    setTheme(nextMode);
  };

  // Para evitar errores visuales en Next.js (Hydration Mismatch), 
  // no renderizamos nada hasta que no hayamos leído el localStorage
  if (!isMounted) return null;

  return (
    <button 
      onClick={handleClick} 
      style={{ padding: '8px 16px', cursor: 'pointer' }}
    >
      Cambiar a tema: {getNextTheme(theme)}
    </button>
  );
}