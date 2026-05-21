import StatItem from '@/components/StatItem';
import { stats } from '@/data/stats';

export default function Stats({ highlight }) {
  const total = stats.reduce((acc, stat) => acc + stat.value, 0);

  return (
    <div>
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          stat={stat}
          isHighlighted={index === highlight}
        />
      ))}
      <p>Total: {total}</p>
    </div>
  );
}