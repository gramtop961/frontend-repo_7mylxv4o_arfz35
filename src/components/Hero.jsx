import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Interactive • Futuristic • Minimalist
          </div>
          <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-white">
            Handcrafted digital products for the next era
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
            We are Nextify Globaltech — your partner for modern websites, mobile apps, intelligent analytics, and cloud-native solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium shadow-sm hover:bg-slate-100 transition">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-inset ring-white/30 hover:bg-white/20 transition">
              Explore services
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950" />
    </section>
  );
}
