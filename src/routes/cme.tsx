import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Calendar, Clock, Star, Users, Play } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Bee } from "@/components/Bee";

export const Route = createFileRoute("/cme")({
  head: () => ({
    meta: [
      { title: "CME & CPD Courses — MediBeez" },
      { name: "description", content: "Earn CME and CPD credits with accredited courses from leading clinicians." },
      { property: "og:title", content: "CME & CPD Courses — MediBeez" },
      { property: "og:description", content: "Trending live and on-demand CME and CPD courses." },
    ],
  }),
  component: CMEPage,
});

const featured = {
  tag: "Live Masterclass",
  title: "Modern Approaches to Heart Failure",
  author: "Dr. Robert Kim, MD · Cardiology",
  date: "Saturday · 7:00 PM IST",
  cpd: "10 CPD",
  rating: 4.9,
  learners: 1280,
};

const courses = [
  { tag: "Cardiology", title: "Modern Approaches to Heart Failure", author: "Dr. Robert Kim", cpd: "10 CPD", level: "Advanced", dur: "4h" },
  { tag: "Pharmacology", title: "Clinical Pharmacology Update", author: "Dr. Marcos R.", cpd: "6 CPD", level: "Intermediate", dur: "2h 30m" },
  { tag: "Genomics", title: "Genomics in Everyday Practice", author: "Dr. A. Patel", cpd: "10 CPD", level: "Advanced", dur: "4h" },
  { tag: "Pediatrics", title: "Neonatal Resuscitation Refresher", author: "Dr. L. Mensah", cpd: "8 CPD", level: "All levels", dur: "3h" },
  { tag: "Endocrinology", title: "Diabetes — A Decade in Review", author: "Dr. S. Iyer", cpd: "12 CPD", level: "Advanced", dur: "5h" },
  { tag: "Radiology", title: "AI in Diagnostic Imaging", author: "Dr. M. Tanaka", cpd: "7 CPD", level: "Intermediate", dur: "3h" },
];

const benefits = [
  { icon: Award, t: "Accredited Credits", d: "Earn CME / CPD recognised by leading councils." },
  { icon: Users, t: "Expert Faculty", d: "Courses led by globally recognised clinicians." },
  { icon: Play, t: "Live & On-Demand", d: "Join interactive webinars or learn at your pace." },
  { icon: Calendar, t: "Lifetime Access", d: "Revisit materials anytime — even after the course." },
];

function CMEPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LIVE & ON-DEMAND"
        title={<>Trending <span className="text-gradient">CME & CPD Courses</span></>}
        subtitle="Earn credits while learning from leading clinicians worldwide."
      />

      {/* FEATURED */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-cta-gradient text-white p-8 sm:p-12 shadow-glow">
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-white/5" />
            <div className="absolute top-6 right-6 bee-fly hidden sm:block"><Bee size={88} /></div>
            <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
              <div>
                <span className="inline-block rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-wider">{featured.tag}</span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{featured.title}</h2>
                <p className="mt-3 text-white/90">{featured.author}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-sm">
                  <span className="inline-flex items-center gap-2"><Calendar size={16}/> {featured.date}</span>
                  <span className="inline-flex items-center gap-2"><Award size={16}/> {featured.cpd}</span>
                  <span className="inline-flex items-center gap-2"><Star size={16} className="fill-current" /> {featured.rating}</span>
                  <span className="inline-flex items-center gap-2"><Users size={16}/> {featured.learners.toLocaleString()} enrolled</span>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="btn-shine inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-bold">
                    Reserve seat <ArrowRight size={16} />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 font-semibold hover:bg-white/10 transition">
                    Preview <Play size={16} />
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-video rounded-2xl bg-white/15 backdrop-blur grid place-items-center border border-white/20">
                  <div className="h-20 w-20 grid place-items-center rounded-full bg-white/25 hover:scale-110 transition cursor-pointer">
                    <Play size={36} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.t} className="card-hover bg-card border border-border rounded-2xl p-6 flex gap-4">
              <div className="h-12 w-12 shrink-0 grid place-items-center rounded-xl bg-secondary/15 text-secondary">
                <b.icon size={22} />
              </div>
              <div>
                <h4 className="font-bold text-primary">{b.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE GRID */}
      <section className="py-14 sm:py-20 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-secondary">CATALOGUE</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary">All courses</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Cardiology", "Pediatrics", "Radiology", "Endocrinology"].map((t, i) => (
                <button key={t} className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${i===0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-primary hover:border-secondary"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="card-hover group bg-card border border-border rounded-2xl overflow-hidden">
                <div className="h-32 bg-cta-gradient relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(45deg, white 12%, transparent 12%, transparent 50%, white 50%, white 62%, transparent 62%)", backgroundSize: "20px 20px" }} />
                  <div className="absolute top-4 left-4 rounded-full bg-white/25 backdrop-blur px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">{c.tag}</div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-white text-primary px-3 py-1 text-xs font-bold">{c.cpd}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">By {c.author}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {c.dur}</span>
                    <span className="inline-flex items-center gap-1"><Star size={12} /> {c.level}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <a href="#" className="text-secondary font-semibold text-sm inline-flex items-center gap-1">
                      Details <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </a>
                    <button className="btn-shine rounded-full bg-primary text-primary-foreground text-xs font-semibold px-4 py-2">Enroll</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
