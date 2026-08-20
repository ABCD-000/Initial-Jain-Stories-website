interface StatCardProps {
  label: string;
  value: string;
  accent?: 'emerald' | 'amber' | 'sky' | 'violet';
}

const accentClasses: Record<NonNullable<StatCardProps['accent']>, string> = {
  emerald: 'from-emerald-500 to-emerald-600',
  amber: 'from-amber-400 to-amber-500',
  sky: 'from-sky-500 to-sky-600',
  violet: 'from-violet-500 to-violet-600',
};

export default function StatCard({ label, value, accent = 'emerald' }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className={`mb-3 h-2 rounded-full bg-gradient-to-r ${accentClasses[accent]}`} />
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-slate-800 dark:text-white">{value}</p>
    </div>
  );
}
