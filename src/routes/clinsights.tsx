import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import cardioImg from "@/assets/news-cardiology.jpg";
import endoImg from "@/assets/news-endo.jpg";
import pedsImg from "@/assets/news-pediatrics.jpg";
import researchImg from "@/assets/news-research.jpg";

export const Route = createFileRoute("/clinsights")({
  head: () => ({
    meta: [
      { title: "Clinsights — MediBeez" },
      { name: "description", content: "Verified clinical updates and case discussions across every specialty." },
      { property: "og:title", content: "Clinsights — MediBeez" },
      { property: "og:description", content: "Specialty-wise verified clinical updates from MediBeez." },
    ],
  }),
  component: ClinsightsPage,
});

const specialties: { slug: string; name: string; img: string; blurb: string }[] = [
  { slug: "cardiology", name: "Cardiology", img: cardioImg, blurb: "Heart-failure, arrhythmia and interventional updates." },
  { slug: "pediatrics", name: "Pediatrics", img: pedsImg, blurb: "Growth, vaccination, neonatal care and beyond." },
  { slug: "endocrinology", name: "Endocrinology", img: endoImg, blurb: "Diabetes, thyroid and metabolic medicine." },
  { slug: "research", name: "Clinical Research", img: researchImg, blurb: "Trial summaries and evidence reviews." },
  { slug: "oncology", name: "Oncology", img: researchImg, blurb: "Solid-tumour and haem-onc treatment advances." },
  { slug: "neurology", name: "Neurology", img: cardioImg, blurb: "Stroke pathways, epilepsy and movement disorders." },
];

const moreTags = ["Pharmacology", "Radiology", "Dermatology", "Psychiatry", "Nephrology", "Gastroenterology", "Hepatology"];

function ClinsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="CLINSIGHTS"
        title={<>Verified clinical updates <span className="text-gradient">across specialties</span></>}
        subtitle="Hand-picked, peer-reviewed clinical insights to help you make confident decisions at the bedside."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              placeholder="Search a specialty, condition or guideline…"
              className="w-full rounded-full border border-border bg-card pl-12 pr-5 py-3.5 text-sm outline-none focus:border-secondary transition"
            />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s) => (
              <Link
                key={s.slug}
                to="/clinsights/$slug"
                params={{ slug: s.slug }}
                className="card-hover group bg-card border border-border rounded-2xl overflow-hidden block"
              >
                <div className="img-zoom h-44 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest text-secondary">{s.name.toUpperCase()}</p>
                  <h3 className="mt-3 text-lg font-bold text-primary leading-snug">Weekly brief — {s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-secondary font-semibold text-sm">
                    Read brief <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-center text-sm font-bold tracking-[0.25em] text-secondary mb-5">MORE SPECIALTIES</p>
            <div className="flex flex-wrap justify-center gap-3">
              {moreTags.map((t) => (
                <Link
                  key={t}
                  to="/clinsights/$slug"
                  params={{ slug: t.toLowerCase() }}
                  className="card-hover rounded-full bg-card border border-border px-5 py-2.5 text-sm font-medium text-primary"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
