import React from 'react';
import Hero from './components/Hero';
import CaseStudyCard from './components/CaseStudyCard';
import ProcessPillars from './components/ProcessPillars';
import Contact from './components/Contact';

const caseStudies = [
  {
    title: 'Developer Camera: Launch Visual System',
    client: 'Aperture.dev',
    role: 'Creative Direction, Photography, SEO Architecture',
    cover: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
    metrics: [
      { label: 'Organic CTR', value: '+38%' },
      { label: 'Impressions', value: '+420k/90d' },
      { label: 'Bounce Rate', value: '-19%' },
    ],
    insights: [
      { type: 'seo', text: 'Mapped queries around \'best camera for coding streams\' to pillar + cluster pages with structured data.' },
      { type: 'perf', text: 'Delivered responsive art-directed imagery via srcset + AVIF for sub-50KB above-the-fold.' },
      { type: 'seo', text: 'Embedded IPTC credit + keyword taxonomies to improve image search discoverability.' },
    ],
    impact: 'Unified visual identity shipped across docs, blog, and product — lifting organic acquisition and engagement.' ,
    tags: ['Photography', 'Graphic System', 'Schema.org', 'Performance'],
  },
  {
    title: 'Open Source Lens: Community Photo Library',
    client: 'Photonix OSS',
    role: 'Production, Rights, Search Strategy',
    cover: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop',
    metrics: [
      { label: 'Image SERP', value: 'Top 3 for 12 queries' },
      { label: 'Backlinks', value: '+115 referring' },
      { label: 'Downloads', value: '23k' },
    ],
    insights: [
      { type: 'perf', text: 'Built semantic filenames + alt text programmatically from taxonomy to scale image SEO.' },
      { type: 'seo', text: 'Added EXIF/ IPTC, WebP/AVIF, and lazy-loading heuristics to maximize LCP.\' },
      { type: 'seo', text: 'Published licensing and credit patterns to encourage attribution backlinks.' },
    ],
    impact: 'Community assets now rank and attract links, compounding organic reach.',
    tags: ['Metadata', 'Open Graph', 'Backlink Strategy'],
  },
  {
    title: 'SaaS Feature Launch: Motion Captures',
    client: 'Vectorly',
    role: 'Design System, Motion, Landing Architecture',
    cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    metrics: [
      { label: 'Time on Page', value: '+27%' },
      { label: 'Ranked Keywords', value: '+64' },
      { label: 'Signups', value: '+14%' },
    ],
    insights: [
      { type: 'perf', text: 'Segmented hero media by connection type using save-data + prefers-reduced-motion.' },
      { type: 'seo', text: 'Structured FAQ + HowTo schema tied to feature intents boosted rich results.' },
      { type: 'perf', text: 'Optimized CLS via aspect-ratio placeholders for gallery components.' },
    ],
    impact: 'Launch creative improved comprehension and discoverability while staying fast.',
    tags: ['Feature SEO', 'Motion Design', 'Accessibility'],
  },
  {
    title: 'Hardware Brand Refresh: Minimal Optics',
    client: 'Helio Optics',
    role: 'Identity, Product Photography, Content Model',
    cover: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1600&auto=format&fit=crop',
    metrics: [
      { label: 'Branded Search', value: '+52%' },
      { label: 'Image Clicks', value: '+31%' },
      { label: 'Load Time', value: '-42%' },
    ],
    insights: [
      { type: 'seo', text: 'Deployed product-level schema + canonical media, removing dupe assets hindering crawl budget.' },
      { type: 'perf', text: 'Color-managed export pipeline (P3→sRGB) with sharpening tuned for responsive breakpoints.' },
      { type: 'seo', text: 'Alt text and captions emphasize intent and benefits, lifting non-brand discovery.' },
    ],
    impact: 'A lean visual language with measurable acquisition gains.',
    tags: ['Brand System', 'Product Photo', 'Core Web Vitals'],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      <main id="case-studies" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Curated Case Studies</h2>
          <p className="mt-2 max-w-2xl text-white/70">Four deeply analyzed projects that blend craft and performance. Each outlines the problem, approach, and measurable impact.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
      </main>

      <ProcessPillars />
      <Contact />

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Visual Performance Strategy • Built for modern, minimalist tech brands.
      </footer>
    </div>
  );
}
