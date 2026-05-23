import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import cardioImg from "@/assets/news-cardiology.jpg";
import endoImg from "@/assets/news-endo.jpg";
import pedsImg from "@/assets/news-pediatrics.jpg";
import researchImg from "@/assets/news-research.jpg";

export const Route = createFileRoute("/clinsights/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.slug)} — Clinsights | MediBeez` },
      { name: "description", content: `Latest ${params.slug} updates, guidelines and case discussions from MediBeez.` },
    ],
  }),
  component: ClinsightDetail,
});

function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }

const imgMap: Record<string, string> = {
  cardiology: cardioImg, neurology: cardioImg,
  endocrinology: endoImg, pediatrics: pedsImg,
  research: researchImg, oncology: researchImg,
};

function ClinsightDetail() {
  const { slug } = Route.useParams();
  const name = cap(slug);
  const hero = imgMap[slug] ?? researchImg;

  const articles = [
    { title: `New guideline updates in ${name}`, author: "Dr. R. Mehta", date: "May 2026", img: cardioImg },
    { title: `Case study: a challenging ${name} presentation`, author: "Dr. S. Iyer", date: "May 2026", img: endoImg },
    { title: `Five practice-changing trials in ${name}`, author: "Dr. L. Mensah", date: "Apr 2026", img: researchImg },
    { title: `${name} for the busy generalist`, author: "Dr. A. Patel", date: "Apr 2026", img: pedsImg },
  ];

  return (
    <PageShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link to="/clinsights" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:underline">
            <ArrowLeft size={16} /> Back to Clinsights
          </Link>
          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-secondary">{name.toUpperCase()}</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-primary leading-tight">
                {name} <span className="text-gradient">Insights Hub</span>
              </h1>
              <p className="mt-5 text-muted-foreground max-w-xl">
                Curated, peer-reviewed updates, case discussions and key trials in {name.toLowerCase()} — designed to help you stay current in minutes, not hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-shine inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-3 font-semibold">
                  <BookOpen size={16} /> Read latest brief
                </button>
                <Link to="/cme" className="inline-flex items-center rounded-full border-2 border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition">
                  Related CME
                </Link>
              </div>
            </div>
            <div className="img-zoom rounded-3xl shadow-glow overflow-hidden">
              <img src={hero} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">Latest in {name}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <article key={a.title} className="card-hover bg-card border border-border rounded-2xl overflow-hidden">
                <div className="img-zoom h-40 overflow-hidden">
                  <img src={a.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary leading-snug">{a.title}</h3>
                  <div className="mt-3 text-xs text-muted-foreground flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><User size={12} />{a.author}</span>
                    <span className="inline-flex items-center gap-1"><Calendar size={12} />{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
