import { Sparkles, Radio, TestTube } from 'lucide-react';
const BADGE_VARIANTS = {
  new: {
    label: 'New',
    styles: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
    Icon: Sparkles,
  },
  live: {
    label: 'Live',
    styles: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
    Icon: Radio,
  },
  beta: {
    label: 'Beta',
    styles: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
    Icon: TestTube,
  },
};

export default function HeroBadge({ variant }){
    const config = BADGE_VARIANTS[variant?.toLowerCase()];
    if (!config) return null;
    const { label, styles, Icon } = config;
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full border transition-colors ${styles}`}>
        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            {label}
        </span>
  );
}