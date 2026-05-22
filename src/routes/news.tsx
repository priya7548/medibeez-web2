import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import newsCardio from "@/assets/news-cardiology.jpg";
import newsPed from "@/assets/news-pediatrics.jpg";
import newsEndo from "@/assets/news-endo.jpg";
import newsRes from "@/assets/news-research.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — MediBeez" },
      { name: "description", content: "Latest verified clinical news, updates and research highlights from across global healthcare." },
      { property: "og:title", content: "MediBeez News" },
      { property: "og:description", content: "Latest insights and trends in global healthcare." },
    ],
  }),
  component: NewsPage,
});

const news = [
  { tag: "Cardiology", date: "Apr 28, 2026", read: "4 min", title: "American Heart Association updates guidelines", excerpt: "A consolidated new evidence-based update was released by the AHA covering risk stratification and prevention.", img: newsCardio },
  { tag: "Pediatrics", date: "Apr 22, 2026", read: "5 min", title: "Antibiotic prophylaxis in infants", excerpt: "An investigator-led randomized controlled open-label trial across multiple centres shows nuanced results.", img: newsPed },
  { tag: "Endocrinology", date: "Apr 15, 2026", read: "6 min", title: "Insulin Icodec: A basal insulin analogue", excerpt: "A recent report released the effects of a comparative study against standard basal regimens.", img: newsEndo },
  { tag: "Research", date: "Apr 10, 2026", read: "5 min", title: "Prevention of CVD in HIV patients", excerpt: "HIV brings an increased risk of cardiovascular disease and the phase III data is encouraging.", img: newsRes },
  { tag: "Oncology", date: "Apr 02, 2026", read: "7 min", title: "Liquid biopsy enters mainstream screening", excerpt: "Multi-cancer early detection assays are being integrated into routine workflows in several centres.", img: newsRes },
  { tag: "Neurology", date: "Mar 26, 2026", read: "4 min", title: "Anti-amyloid therapies: a one-year recap", excerpt: "Real-world data is beginning to reflect what clinical trials suggested for early Alzheimer disease.", img: newsCardio },
];

function NewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="MEDIBEEZ NEWS"
        title={<>Stay up-to-date with <span className="text-gradient">Global Healthcare</span></>}
        subtitle="The best place to read the latest insights, updates and trends — curated by clinicians, for clinicians."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <article key={n.title} className="card-hover bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
              <div className="img-zoom relative">
                <img src={n.img} alt={n.title} loading="lazy" className="w-full h-48 object-cover" width={800} height={600} />
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
      </section>
    </PageShell>
  );
}
