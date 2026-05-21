// daw1-next/data/heroContent.js

export const taglines = [
  "Construyendo el futuro de la web, un componente a la vez.",
  "Dominando React y Next.js paso a paso.",
  "Del front-end al back-end",
  "Desarrollo web moderno, rápido y escalable."
];

export const badge = {
  variant: "live", 
  text: "Proyecto Activo"
};

export const getRandomTagline = () => {
  const randomIndex = Math.floor(Math.random() * taglines.length);
  return taglines[randomIndex];
};