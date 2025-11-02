import { Code2, Smartphone, BarChart3, Brain, Cloud, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'Blazing-fast, SEO-friendly websites crafted with modern frameworks and accessible design.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native-quality cross-platform apps with seamless UX and robust performance.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'From data pipelines to dashboards—turn raw data into actionable insights.',
  },
  {
    icon: Brain,
    title: 'AI & ML',
    desc: 'Intelligent models for recommendations, predictions, and automation at scale.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Secure, scalable cloud architecture, migrations, and DevOps best practices.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Growth-focused campaigns across SEO, performance marketing, and content.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we deliver</h2>
          <p className="mt-3 text-slate-600">Full-stack capabilities to design, build, and scale digital products end-to-end.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-slate-900 text-white p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-100/40 via-violet-100/30 to-pink-100/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
