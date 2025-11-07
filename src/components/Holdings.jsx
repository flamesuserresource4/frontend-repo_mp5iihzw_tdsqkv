import React from 'react';
import { Coins, LineChart, Building2 } from 'lucide-react';

const data = [
  {
    title: 'Equities',
    icon: Building2,
    items: [
      { name: 'AAPL', weight: 12.5 },
      { name: 'MSFT', weight: 10.2 },
      { name: 'NVDA', weight: 8.4 },
    ],
    color: 'from-blue-500/15 to-indigo-500/15',
  },
  {
    title: 'ETFs',
    icon: LineChart,
    items: [
      { name: 'VTI', weight: 14.0 },
      { name: 'QQQ', weight: 9.0 },
      { name: 'ARKK', weight: 4.0 },
    ],
    color: 'from-emerald-500/15 to-teal-500/15',
  },
  {
    title: 'Crypto',
    icon: Coins,
    items: [
      { name: 'BTC', weight: 16.0 },
      { name: 'ETH', weight: 12.0 },
      { name: 'SOL', weight: 5.0 },
    ],
    color: 'from-fuchsia-500/15 to-pink-500/15',
  },
];

const Holdings = () => {
  return (
    <section id="holdings" className="relative mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Holdings</h2>
      <p className="mt-2 max-w-2xl text-gray-600">Snapshot of current allocations by sleeve with top positions and weights.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {data.map((group) => (
          <div key={group.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className={`mb-4 rounded-xl bg-gradient-to-br ${group.color} p-3 inline-flex items-center gap-2`}> 
              <group.icon className="h-4 w-4 text-gray-900" />
              <span className="text-sm font-semibold text-gray-900">{group.title}</span>
            </div>

            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-sm text-gray-600">{item.weight}%</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gray-900"
                style={{ width: `${group.items.reduce((a, b) => a + b.weight, 0)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Holdings;
