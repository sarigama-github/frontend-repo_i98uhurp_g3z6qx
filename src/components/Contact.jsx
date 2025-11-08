import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Let’s build visual systems that perform</h2>
        <p className="mt-2 text-white/70">Looking for a partner to uplevel your brand’s visual output and organic acquisition? Tell me about your goals and constraints.</p>
        <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Name" />
          <input className="w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Email" type="email" />
          <input className="w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Company / Product" />
          <textarea rows={4} className="w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/50" placeholder="What are you trying to achieve?" />
          <button type="submit" className="rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">Request availability</button>
        </form>
      </div>
    </section>
  );
}
