import React from 'react';
import Spline from '@splinetool/react-spline';
import { Camera, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for legibility; allow pointer interactions to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Camera size={14} />
          <span>Visual Performance Strategist</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Visuals that look iconic and perform even better.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 md:text-lg">
          I craft photography and graphic systems engineered for organic reach —
          combining aesthetics, SEO-informed metadata, and distribution strategy.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-black transition hover:bg-white/90"
          >
            <Rocket size={16} />
            Explore Case Studies
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/30 px-4 py-2 text-white transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
