import { createFileRoute } from "@tanstack/react-router";
import { Globe, Stethoscope, Sparkles, GraduationCap } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Bee } from "@/components/Bee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MediBeez" },
      { name: "description", content: "MediBeez is a revolutionary platform connecting doctors and healthcare experts worldwide for collaborative learning." },
      { property: "og:title", content: "About MediBeez" },
      { property: "og:description", content: "Our mission, journey and core values." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2021", title: "First 1,000 Doctors", desc: "Reached our first community milestone." },
  { year: "2022", title: "CME Accreditation", desc: "Officially accredited to deliver CME credits." },
  { year: "2023", title: "Global Expansion", desc: "Active across multiple continents." },
  { year: "2024", title: "A Thriving Network", desc: "A thriving global medical community." },
];

const pillars = [
  { icon: Globe, t: "Global Reach", d: "Doctors from every continent, one network." },
  { icon: Stethoscope, t: "Clinician First", d: "Built around real clinical workflows." },
  { icon: Sparkles, t: "Continuous Innovation", d: "We evolve with the needs of healthcare." },
  { icon: GraduationCap, t: "Lifelong Learning", d: "Accredited CME at your fingertips." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="ABOUT MEDIBEEZ"
        title={<>Empowering <span className="text-gradient">Healthcare Professionals</span></>}
        subtitle="MediBeez is a revolutionary platform connecting doctors, medical professionals, and healthcare experts worldwide to elevate global healthcare standards."
      />

      {/* MISSION & VISION */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="card-hover relative overflow-hidden rounded-3xl p-10 bg-cta-gradient text-white shadow-glow">
            <p className="text-xs font-bold tracking-[0.3em] text-white/80">OUR MISSION</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Empowering doctors. Elevating care.</h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              To create a single, trusted home where clinicians around the world can connect, learn and collaborate —
              accelerating knowledge exchange, sharpening clinical decision-making and ultimately improving patient outcomes.
            </p>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-white/10" />
          </div>

          <div className="card-hover relative overflow-hidden rounded-3xl p-10 bg-card border border-border">
            <p className="text-xs font-bold tracking-[0.3em] text-secondary">OUR VISION</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">A connected world of medical excellence.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              To become the most trusted global platform for medical professionals — where every doctor,
              regardless of geography, has equal access to peer expertise, continuous education and the latest
              evidence-based practice.
            </p>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-secondary/10" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide every decision we make.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {pillars.map((v) => (
                <div key={v.t} className="card-hover bg-card border border-border rounded-xl p-5">
                  <v.icon className="text-secondary" size={22} />
                  <h4 className="mt-3 font-bold text-primary">{v.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <h3 className="text-xl font-bold text-primary mb-6">Our Journey</h3>
            <div className="relative pl-8 border-l-2 border-secondary/50 space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="relative card-hover bg-card border border-border rounded-xl p-5">
                  <span className="absolute -left-[42px] top-5 h-5 w-5 rounded-full bg-secondary ring-4 ring-background" />
                  <div className="text-sm font-bold text-secondary">{m.year}</div>
                  <div className="font-bold text-primary mt-1">{m.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="absolute -top-6 -right-2 bee-fly hidden sm:block">
              <Bee size={72} />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
