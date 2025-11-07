import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, TrendingUp, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-500" />
          Curated Portfolio • Stocks • ETFs • Crypto
        </div>

        <h1 className="mt-6 font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm md:text-6xl">
          A modern portfolio for the digital markets era
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          Reflective cubes, vibrant neon, and a data-driven strategy. Explore my allocations across equities, ETFs, and crypto with real-time flair.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#performance"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            <TrendingUp className="h-4 w-4" />
            View Performance
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#holdings"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur transition hover:bg-white"
          >
            <Rocket className="h-4 w-4" />
            Explore Holdings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
