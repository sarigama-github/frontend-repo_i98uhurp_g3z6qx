import React from 'react';
import { Layers, Bot, Magnet, Settings2 } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'System-first creative',
    desc: 'Design modular visual systems that scale across channels without losing brand equity.',
  },
  {
    icon: Magnet,
    title: 'Distribution by design',
    desc: 'Engineer assets for discoverability with smart crops, captions, alt text, and link architecture.',
  },
  {
    icon: Bot,
    title: 'Data-guided iteration',
    desc: 'Use analytics, search intent, and content velocity to prioritize high-ROI production.',
  },
  {
    icon: Settings2,
    title: 'Technical SEO hygiene',
    desc: 'Structured data, EXIF/ IPTC metadata, and performance budgets baked into the workflow.',
  },
];

export default function ProcessPillars() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-semibold md:text-3xl">A process built for reach</h2>
      <p className="mt-2 max-w-2xl text-white/70">Every deliverable is designed to be indexable, linkable, and shareable — without compromising craft.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p.icon className="text-white/80" />
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-white/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
