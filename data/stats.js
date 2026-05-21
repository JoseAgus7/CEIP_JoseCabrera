// Array con mínimo 4 estadísticas
export const statsData = [
  {
    num: 1500,
    label: "Usuarios Activos",
    icon: "UserIcon", // O el componente del icono directamente
    color: "#4f46e5", // Índigo
    priority: 3
  },
  {
    num: 450,
    label: "Proyectos Creados",
    icon: "FolderIcon",
    color: "#10b981", // Verde
    priority: 1
  },
  {
    num: 12400,
    label: "Descargas Totales",
    icon: "DownloadIcon",
    color: "#f59e0b", // Ámbar
    priority: 4
  },
  {
    num: 98,
    label: "Soporte Resuelto",
    icon: "CheckIcon",
    color: "#ef4444", // Rojo
    priority: 2
  }
];

/**
 * Obtiene las 'n' estadísticas con mayor prioridad.
 * @param {number} n - Cantidad de estadísticas a retornar.
 * @returns {Array} Array filtrado y ordenado de mayor a menor prioridad.
 */
export function getTopStats(n) {
  // Creamos una copia del array para no mutar el original con .sort()
  return [...statsData]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, n);
}