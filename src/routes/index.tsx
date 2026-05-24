import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, Lightbulb, Award, MessageCircle, Video, BookOpen, ArrowRight,
  Sparkles, Globe, Stethoscope, GraduationCap, Heart, Baby, FlaskConical, Activity,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Bee } from "@/components/Bee";
import heroImg from "@/assets/hero-doctors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediBeez — Unlock a World of Medical Expertise" },
      { name: "description", content: "MediBeez connects doctors worldwide for knowledge sharing, CME courses, expert insights, webinars and continuous learning." },
      { property: "og:title", content: "MediBeez — Unlock a World of Medical Expertise" },
      { property: "og:description", content: "A revolutionary online networking platform for doctors to connect, collaborate and grow professionally." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Users, title: "Professional Networking", desc: "Connect with doctors from various specialties, fostering collaborations, referrals and mutual learning.", to: "/about" as const },
  { icon: Lightbulb, title: "Expert Insights", desc: "Stay updated with the latest medical advancements, shared by experts in the field.", to: "/clinsights" as const },
  { icon: Award, title: "Sponsored CME / CPD", desc: "Access a plethora of learning modules to expand your knowledge base and earn credit points.", to: "/cme" as const },
  { icon: MessageCircle, title: "Case Discussions", desc: "Engage in real clinical case discussions with peers and specialists across the globe.", to: "/clinsights" as const },
  { icon: Video, title: "Online Webinars", desc: "Attend live and on-demand webinars led by leading medical educators and researchers.", to: "/cme" as const },
  { icon: BookOpen, title: "Resources Galore", desc: "Explore podcasts, infographics, slideshows and M-Reels curated for busy clinicians.", to: "/info-hub" as const },
];

const pillars = [
  { icon: Globe, t: "Global Community", d: "Doctors from every continent, one network." },
  { icon: Stethoscope, t: "Clinician First", d: "Built around real clinical workflows." },
  { icon: Sparkles, t: "Continuous Innovation", d: "We evolve with the needs of healthcare." },
  { icon: GraduationCap, t: "Lifelong Learning", d: "Accredited CME at your fingertips." },
];

const news = [
  { icon: Heart, tag: "Cardiology", date: "Apr 28, 2026 · 4 min", title: "American Heart Association updates", desc: "A consolidated, evidence-based update from the AHA on heart-failure management.", to: "/news" as const },
  { icon: Baby, tag: "Pediatrics", date: "Apr 22, 2026 · 5 min", title: "Antibiotic prophylaxis in infants", desc: "An investigator-led, multi-centre randomised open-label trial reports new findings.", to: "/news" as const },
  { icon: Activity, tag: "Endocrinology", date: "Apr 15, 2026 · 6 min", title: "Insulin Icodec — a once-weekly basal analogue", desc: "Comparative-study results contrast Icodec with standard daily basal regimens.", to: "/news" as const },
  { icon: FlaskConical, tag: "Research", date: "Apr 10, 2026 · 5 min", title: "Preventing CVD in patients living with HIV", desc: "Phase results offer fresh hope for reducing cardiovascular risk in this cohort.", to: "/news" as const },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span style={{ color: "var(--brand-navy)" }}>Unlock a</span><br />
              <span style={{ color: "var(--brand-navy)" }}>World of </span>
              <span className="text-gradient">Medical Expertise</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              A revolutionary online networking platform designed to revolutionise how doctors stay updated, connect, collaborate, and grow professionally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/signup" className="btn-shine inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold transition">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-full border-2 border-primary text-primary px-7 py-3.5 font-semibold transition hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative img-zoom rounded-3xl shadow-glow">
            <img
              src={heroImg}
              alt="Diverse team of doctors collaborating"
              className="w-full h-full object-cover rounded-3xl"
              width={1280}
              height={960}
            />
            <div className="absolute -top-6 -right-3 sm:-top-10 sm:-right-6 bee-fly">
              <Bee size={96} />
            </div>
          </div>
        </div>

        {/* Tagline band (replaces stats) */}
        <div className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { t: "Connect", d: "Build your global medical circle" },
              { t: "Learn", d: "CME, webinars & expert insights" },
              { t: "Collaborate", d: "Case discussions across borders" },
            ].map((s) => (
              <div key={s.t} className="transition hover:scale-105">
                <div className="text-3xl sm:text-4xl font-extrabold text-secondary">{s.t}</div>
                <div className="mt-2 text-primary-foreground/85 text-sm sm:text-base">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-secondary">CONNECT · UPDATE · COLLABORATE</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold">
              Everything you need with <span className="text-gradient">MediBeez</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link key={f.title} to={f.to} className="card-hover group bg-card border border-border rounded-2xl p-7 block">
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-soft transition group-hover:rotate-6 group-hover:scale-110">
                  <f.icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-secondary text-sm font-semibold">
                  Explore <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--brand-cream) 0%, var(--accent) 100%)" }}>
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full opacity-20" style={{ background: "var(--gradient-cta)" }} />
        <div className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full opacity-10" style={{ background: "var(--gradient-cta)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-secondary">WHAT WE STAND FOR</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-primary">
              Built on values that <span className="text-gradient">empower clinicians</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every feature, every conversation, every course on MediBeez is shaped by these four principles.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((v, i) => (
              <div
                key={v.t}
                className="tilt-hover group relative bg-card border border-border rounded-2xl p-7 overflow-hidden"
                style={{ animation: `fade-up .8s ${i * 120}ms both` }}
              >
                <div className="absolute inset-x-0 -top-1 h-1 bg-cta-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:rotate-12 group-hover:scale-110">
                  <v.icon size={26} />
                </div>
                <h4 className="mt-5 text-lg font-bold text-primary">{v.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/10 group-hover:bg-secondary/25 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-cta-gradient rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center overflow-hidden shadow-glow">
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bee-fly">
              <Bee size={64} />
            </div>
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bee-float">
              <Bee size={56} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white relative">Ready to join our community?</h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto relative">
              Be part of a global network of medical professionals dedicated to advancing healthcare through collaboration and continuous learning.
            </p>
            <Link
              to="/signup"
              className="btn-shine relative mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-bold transition"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
