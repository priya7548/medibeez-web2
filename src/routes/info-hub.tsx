import { createFileRoute } from "@tanstack/react-router";
import { Headphones, Image as ImgIcon, Presentation, PlayCircle, Clock, ArrowRight, Mic, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Bee } from "@/components/Bee";

export const Route = createFileRoute("/info-hub")({
  head: () => ({
    meta: [
      { title: "Info-Hub — MediBeez" },
      { name: "description", content: "Podcasts, infographics, slideshows and M-Reels curated for busy clinicians." },
      { property: "og:title", content: "Info-Hub — MediBeez" },
      { property: "og:description", content: "Visualizing medical breakthroughs through curated multimedia." },
    ],
  }),
  component: InfoHubPage,
});

const hubItems = [
  { icon: Headphones, label: "Podcasts", desc: "Listen on the move to expert conversations across specialties." },
  { icon: ImgIcon, label: "Infographics", desc: "Visual one-pagers that make complex evidence easy to grasp." },
  { icon: Presentation, label: "Slideshows", desc: "Case-based decks ready to use in your next teaching session." },
  { icon: PlayCircle, label: "M-Reels", desc: "Short medical reels — quick takeaways in under a minute." },
];

const podcasts = [
  { title: "The Future of AI in Diagnostics", host: "Dr. Anika Sharma", dur: "32 min", tag: "Radiology" },
  { title: "Antimicrobial Resistance Today", host: "Dr. Liam Carter", dur: "28 min", tag: "Infectious Disease" },
  { title: "Managing Burnout in Medicine", host: "Dr. Priya Menon", dur: "45 min", tag: "Wellness" },
];

const infographics = [
  { title: "Hypertension Guidelines 2025 at a Glance", tag: "Cardiology" },
  { title: "Pediatric Vaccination Schedule", tag: "Pediatrics" },
  { title: "Insulin Titration — Quick Reference", tag: "Endocrinology" },
  { title: "Stroke — Time-to-Treatment Pathway", tag: "Neurology" },
];

const slideshows = [
  { title: "ECG Interpretation Masterclass", slides: 48, tag: "Cardiology" },
  { title: "Approach to the Febrile Child", slides: 32, tag: "Pediatrics" },
  { title: "Difficult Airway Algorithm", slides: 24, tag: "Anaesthesia" },
];

const reels = [
  { title: "60-sec NIHSS Refresher", dur: "1:02" },
  { title: "Reading a Chest X-Ray in 45s", dur: "0:48" },
  { title: "Suture Technique — Mattress", dur: "0:55" },
  { title: "Hand Hygiene 5 Moments", dur: "0:40" },
];

function SectionHeader({ icon: Icon, eyebrow, title }: { icon: any; eyebrow: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-14 w-14 grid place-items-center rounded-2xl bg-cta-gradient text-white shadow-soft">
        <Icon size={26} />
      </div>
      <div>
        <p className="text-xs font-bold tracking-[0.25em] text-secondary">{eyebrow}</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">{title}</h2>
      </div>
    </div>
  );
}

function InfoHubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="INFO-HUB"
        title={<>Visualizing <span className="text-gradient">Medical Breakthroughs</span></>}
        subtitle="Podcasts, infographics, slideshows and M-Reels — multimedia content designed for clinicians who learn best between cases."
      />

      {/* Format tiles */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hubItems.map((h) => (
            <a key={h.label} href={`#${h.label.toLowerCase()}`} className="card-hover group bg-card border border-border rounded-2xl p-8 text-center block">
              <div className="mx-auto h-16 w-16 grid place-items-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:scale-110 group-hover:rotate-6">
                <h.icon size={28} />
              </div>
              <h3 className="mt-5 font-bold text-primary">{h.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Podcasts */}
      <section id="podcasts" className="py-14 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader icon={Mic} eyebrow="LISTEN" title="Featured Podcasts" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {podcasts.map((p) => (
              <div key={p.title} className="card-hover bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary/15 text-secondary text-xs font-bold px-3 py-1 uppercase tracking-wider">{p.tag}</span>
                  <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Clock size={12} /> {p.dur}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground inline-flex items-center gap-2"><Users size={14} /> {p.host}</p>
                <button className="btn-shine mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5">
                  <PlayCircle size={16} /> Play episode
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics */}
      <section id="infographics" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader icon={ImgIcon} eyebrow="GLANCE" title="Infographics" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infographics.map((g) => (
              <div key={g.title} className="card-hover group bg-card border border-border rounded-2xl overflow-hidden">
                <div className="h-36 bg-cta-gradient relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 2px), radial-gradient(circle at 70% 60%, white 1px, transparent 2px)", backgroundSize: "30px 30px" }} />
                  <ImgIcon className="absolute inset-0 m-auto text-white/80" size={42} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{g.tag}</span>
                  <h3 className="mt-2 font-bold text-primary leading-snug">{g.title}</h3>
                  <a className="mt-3 inline-flex items-center gap-1 text-secondary font-semibold text-sm" href="#">View <ArrowRight size={14} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slideshows */}
      <section id="slideshows" className="py-14 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader icon={Presentation} eyebrow="LEARN" title="Slideshows" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slideshows.map((s) => (
              <div key={s.title} className="card-hover bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary/15 text-secondary text-xs font-bold px-3 py-1 uppercase tracking-wider">{s.tag}</span>
                  <span className="text-xs text-muted-foreground">{s.slides} slides</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary leading-snug">{s.title}</h3>
                <button className="mt-5 inline-flex items-center gap-2 text-secondary font-semibold text-sm">
                  Open deck <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M-Reels */}
      <section id="m-reels" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader icon={PlayCircle} eyebrow="QUICK" title="M-Reels" />
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
            {reels.map((r) => (
              <div key={r.title} className="card-hover group relative aspect-[9/14] rounded-2xl overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 bg-cta-gradient opacity-80 group-hover:opacity-95 transition" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-16 w-16 grid place-items-center rounded-full bg-white/20 backdrop-blur group-hover:scale-110 transition">
                    <PlayCircle size={36} />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="text-xs opacity-90">{r.dur}</div>
                  <div className="font-bold text-sm leading-snug">{r.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-16">
        <div className="absolute right-8 -top-4 bee-fly hidden sm:block"><Bee size={72} /></div>
      </div>
    </PageShell>
  );
}
