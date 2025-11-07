import React from 'react';
import { ArrowUpRight, BarChart3, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'YTD Return', value: '+18.4%', positive: true },
  { label: 'Sharpe Ratio', value: '1.42', positive: true },
  { label: 'Max Drawdown', value: '-9.7%', positive: false },
  { label: 'Win Rate', value: '62%', positive: true },
];

const Performance = () => {
  return (
    <section id="performance" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Performance at a glance</h2>
          <p className="mt-2 max-w-2xl text-gray-600">A balanced mix of equities, ETFs, and crypto designed to capture growth while managing risk.</p>
        </div>
        <a href="#holdings" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:opacity-80">
          Full breakdown <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">{m.label}</p>
              <BarChart3 className="h-4 w-4 text-gray-400" />
            </div>
            <p className={`mt-2 text-2xl font-semibold ${m.positive ? 'text-emerald-600' : 'text-rose-600'}`}>{m.value}</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className={`h-full ${m.positive ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: m.positive ? '70%' : '30%' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Strategy</p>
            <p className="text-sm text-gray-600">Diversified across tech equities, broad-market ETFs, and a core basket of large-cap crypto assets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
