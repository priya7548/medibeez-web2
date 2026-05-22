import { createFileRoute } from "@tanstack/react-router";
import {
  Users, Lightbulb, Award, MessageCircle, Video, BookOpen, ArrowRight,
  Calendar, Clock, Sparkles, Globe, Stethoscope, GraduationCap,
  PlayCircle, Headphones, Image as ImgIcon, Presentation,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bee } from "@/components/Bee";
import heroImg from "@/assets/doctors-hero.jpg";
import newsCardio from "@/assets/news-cardiology.jpg";
import newsPed from "@/assets/news-pediatrics.jpg";
import newsEndo from "@/assets/news-endo.jpg";
import newsRes from "@/assets/news-research.jpg";

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
  { icon: Users, title: "Professional Networking", desc: "Connect with doctors from various specialties, fostering collaborations, referrals and mutual learning." },
  { icon: Lightbulb, title: "Expert Insights", desc: "Stay updated with the latest medical advancements, shared by experts in the field." },
  { icon: Award, title: "Sponsored CME/CPD", desc: "Access a plethora of learning modules to expand your knowledge base and earn credit points." },
  { icon: MessageCircle, title: "Case Discussions", desc: "Engage in real clinical case discussions with peers and specialists across the globe." },
  { icon: Video, title: "Online Webinars", desc: "Attend live and on-demand webinars led by leading medical educators and researchers." },
  { icon: BookOpen, title: "Resources Galore", desc: "Explore podcasts, infographics, slideshows and M-Reels curated for busy clinicians." },
];

const news = [
  { tag: "Cardiology", date: "Apr 28, 2026", read: "4 min", title: "American Heart Association updates", excerpt: "A consolidated new evidence-based update was released by the AHA...", img: newsCardio },
  { tag: "Pediatrics", date: "Apr 22, 2026", read: "5 min", title: "Antibiotic prophylaxis in infants", excerpt: "An investigator-led randomized controlled open-label trial across...", img: newsPed },
  { tag: "Endocrinology", date: "Apr 15, 2026", read: "6 min", title: "Insulin Icodec: A basal insulin analogue", excerpt: "A recent report released the effects of a comparative study...", img: newsEndo },
  { tag: "Research", date: "Apr 10, 2026", read: "5 min", title: "Prevention of CVD in HIV patients", excerpt: "HIV brings an increased risk of cardiovascular diseases and the phase...", img: newsRes },
];

const stats = [
  { num: "150+", label: "Expert Contributors" },
  { num: "500+", label: "CME Courses" },
  { num: "50+", label: "Countries Represented" },
];

const milestones = [
  { year: "2021", title: "First 1,000 Doctors", desc: "Reached our first community milestone." },
  { year: "2022", title: "CME Accreditation", desc: "Officially accredited to deliver CME credits." },
  { year: "2023", title: "Global Expansion", desc: "Active in 50+ countries worldwide." },
  { year: "2024", title: "A Thriving Network", desc: "A thriving global medical community." },
];

const hubItems = [
  { icon: Headphones, label: "Podcasts" },
  { icon: ImgIcon, label: "Infographics" },
  { icon: Presentation, label: "Slideshows" },
  { icon: PlayCircle, label: "M-Reels" },
];

const cmeCourses = [
  { tag: "Cardiology", title: "Modern Approaches to Heart Failure", author: "Dr. Robert Kim", cpd: "10 CPD" },
  { tag: "Pharmacology", title: "Clinical Pharmacology Update", author: "Dr. Marcos R.", cpd: "6 CPD" },
  { tag: "Genomics", title: "Genomics in Everyday Practice", author: "Dr. A. Patel", cpd: "10 CPD" },
];

function Home() {
  return (
    <div id="home" className="min-h-screen bg-background overflow-x-hidden">
      <Header />

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
              <a href="#cta" className="btn-shine inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold transition">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center rounded-full border-2 border-primary text-primary px-7 py-3.5 font-semibold transition hover:bg-primary hover:text-primary-foreground">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative img-zoom rounded-3xl shadow-glow">
            <img
              src={heroImg}
              alt="Diverse team of doctors collaborating"
              className="w-full h-full object-cover rounded-3xl"
              width={900}
              height={700}
            />
            <div className="absolute -top-5 -right-3 sm:-top-6 sm:-right-4 bee-fly">
              <Bee size={72} />
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="transition hover:scale-105">
                <div className="text-4xl sm:text-5xl font-extrabold text-secondary">{s.num}</div>
                <div className="mt-2 text-primary-foreground/85 text-sm sm:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-secondary">CONNECT · UPDATE · COLLABORATE</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold">
              Everything you need with <span className="text-gradient">MediBeez</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card-hover group bg-card border border-border rounded-2xl p-7">
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-soft transition group-hover:rotate-6">
                  <f.icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section id="about" className="py-16 sm:py-24 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-secondary">EMPOWERING HEALTHCARE PROFESSIONALS</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-primary">
              Our Mission &amp; <span className="text-gradient">Core Values</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              MediBeez is a revolutionary platform connecting doctors, medical professionals, and healthcare experts worldwide. We facilitate knowledge sharing, professional development, and collaborative care to elevate global healthcare standards.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Globe, t: "Global Reach", d: "Active in 50+ countries connecting clinicians." },
                { icon: Stethoscope, t: "Clinician First", d: "Built around real clinical workflows." },
                { icon: Sparkles, t: "Continuous Innovation", d: "We evolve with the needs of healthcare." },
                { icon: GraduationCap, t: "Lifelong Learning", d: "Accredited CME at your fingertips." },
              ].map((v) => (
                <div key={v.t} className="card-hover bg-card border border-border rounded-xl p-5">
                  <v.icon className="text-secondary" size={22} />
                  <h4 className="mt-3 font-bold text-primary">{v.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Journey timeline */}
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
            <div className="absolute -top-6 -right-2 bee-float hidden sm:block">
              <Bee size={64} />
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-primary">
                Stay up-to-date with <span className="text-gradient">Global Healthcare</span>
              </h2>
              <p className="mt-3 text-muted-foreground">MediBeez News — the best place to read latest insights and trends.</p>
            </div>
            <a href="#" className="nav-link text-secondary font-semibold inline-flex items-center gap-1">View all news <ArrowRight size={16} /></a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((n) => (
              <article key={n.title} className="card-hover bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
                <div className="img-zoom relative">
                  <img src={n.img} alt={n.title} loading="lazy" className="w-full h-48 object-cover" width={400} height={300} />
                  <span className="absolute top-3 left-3 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1">{n.tag}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar size={12} /> {n.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {n.read}</span>
                  </div>
                  <h3 className="mt-3 font-bold text-primary text-lg leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{n.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-secondary font-semibold text-sm group/link">
                    Read more <ArrowRight size={14} className="transition group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLINSIGHTS strip */}
      <section id="clinsights" className="py-16 sm:py-20 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-secondary">CLINSIGHTS</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-primary">
            Verified clinical updates <span className="text-gradient">across specialties</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Cardiology", "Pediatrics", "Endocrinology", "Hepatology", "Oncology", "Neurology", "Pharmacology", "Radiology"].map((s) => (
              <span key={s} className="card-hover cursor-pointer rounded-full bg-card border border-border px-5 py-2.5 text-sm font-medium text-primary">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INFO-HUB */}
      <section id="info-hub" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-secondary">INFO-HUB</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-primary">Visualizing Medical Breakthroughs</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hubItems.map((h) => (
              <div key={h.label} className="card-hover group bg-card border border-border rounded-2xl p-8 text-center">
                <div className="mx-auto h-16 w-16 grid place-items-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:scale-110">
                  <h.icon size={28} />
                </div>
                <h3 className="mt-5 font-bold text-primary">{h.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Curated {h.label.toLowerCase()} for busy clinicians on the move.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CME */}
      <section id="cme" className="py-16 sm:py-24 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-secondary">LIVE &amp; ON-DEMAND</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-primary">
              Trending <span className="text-gradient">CME &amp; CPD Courses</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Earn credits while learning from leading clinicians.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cmeCourses.map((c) => (
              <div key={c.title} className="card-hover bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary/15 text-secondary text-xs font-bold px-3 py-1 uppercase tracking-wider">{c.tag}</span>
                  <span className="text-xs font-bold text-primary">{c.cpd}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">By {c.author}</p>
                <div className="mt-5 flex items-center justify-between">
                  <a href="#" className="text-secondary font-semibold text-sm inline-flex items-center gap-1">
                    View Details <ArrowRight size={14} />
                  </a>
                  <button className="btn-shine rounded-full bg-primary text-primary-foreground text-xs font-semibold px-4 py-2">Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-cta-gradient rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center overflow-hidden shadow-glow">
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bee-fly">
              <Bee size={56} />
            </div>
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bee-float">
              <Bee size={48} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white relative">Ready to join our community?</h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto relative">
              Be part of a global network of medical professionals dedicated to advancing healthcare through collaboration and continuous learning.
            </p>
            <a
              href="#"
              className="btn-shine relative mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-bold transition"
            >
              Get Started Today <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
