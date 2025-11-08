import React from 'react';
import { ArrowUpRight, BarChart3, Image as ImageIcon, Search } from 'lucide-react';

export default function CaseStudyCard({ title, client, role, impact, cover, metrics, insights, tags }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl md:w-2/5">
          <img src={cover} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex w-full flex-col md:w-3/5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
              <p className="text-sm text-white/70">{client} • {role}</p>
            </div>
            <ArrowUpRight className="shrink-0 text-white/60" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {metrics?.map((m, idx) => (
              <div key={idx} className="rounded-lg border border-white/10 p-3 text-sm">
                <div className="text-xs uppercase text-white/50">{m.label}</div>
                <div className="mt-1 text-lg font-semibold">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm text-white/80">
            {insights?.map((i, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {i.type === 'seo' ? <Search size={16} className="mt-0.5" /> : <BarChart3 size={16} className="mt-0.5" />}
                <p>{i.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((t, idx) => (
              <span key={idx} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/80">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
