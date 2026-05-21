import React from 'react';

export default function StatItem({ num, label, icon: Icon, color, highlight }) {
  
  // Función interna para formatear el número
  const formatNum = (n) => {
    if (n >= 1000) {
      return `${(n / 1000).toFixed(1).replace('.0', '')}k`;
    }
    return n;
  };

  // Estilo inline para el borde dinámico
  const itemStyle = {
    borderColor: color,
    borderStyle: 'solid',
    borderWidth: '2px'
  };

  return (
    <div 
      className={`stat-item ${highlight ? 'stat-item--highlighted' : ''}`} 
      style={itemStyle}
    >
      <div className="stat-item__icon">
        {Icon && <Icon />}
      </div>
      <div className="stat-item__content">
        <span className="stat-item__number">{formatNum(num)}</span>
        <p className="stat-item__label">{label}</p>
      </div>
    </div>
  );
}