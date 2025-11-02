export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-900 text-white px-8 py-14 shadow-xl">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-violet-400/30 to-fuchsia-400/30 blur-3xl pointer-events-none" />

          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Build what’s next with Nextify Globaltech</h3>
            <p className="mt-3 text-white/80">Tell us about your vision—web, mobile, AI, or cloud—and we’ll craft a tailored plan with clear timelines and transparent pricing.</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:hello@nextifyglobal.tech" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium shadow hover:bg-slate-100 transition">
              hello@nextifyglobal.tech
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-inset ring-white/30 hover:bg-white/20 transition">
              Download capabilities deck
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Nextify Globaltech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
