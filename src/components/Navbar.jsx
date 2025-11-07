import React from 'react';
import { Wallet, PieChart, TrendingUp, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white">
              <Wallet className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Alpha Ledger</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#performance" className="hover:text-gray-900 inline-flex items-center gap-1">
              <TrendingUp className="h-4 w-4" /> Performance
            </a>
            <a href="#holdings" className="hover:text-gray-900 inline-flex items-center gap-1">
              <PieChart className="h-4 w-4" /> Holdings
            </a>
            <a href="#about" className="hover:text-gray-900 inline-flex items-center gap-1">
              <User className="h-4 w-4" /> About
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
