import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

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

const cmeCourses = [
  { tag: "Cardiology", title: "Modern Approaches to Heart Failure", author: "Dr. Robert Kim", cpd: "10 CPD" },
  { tag: "Pharmacology", title: "Clinical Pharmacology Update", author: "Dr. Marcos R.", cpd: "6 CPD" },
  { tag: "Genomics", title: "Genomics in Everyday Practice", author: "Dr. A. Patel", cpd: "10 CPD" },
  { tag: "Pediatrics", title: "Neonatal Resuscitation Refresher", author: "Dr. L. Mensah", cpd: "8 CPD" },
  { tag: "Endocrinology", title: "Diabetes — A Decade in Review", author: "Dr. S. Iyer", cpd: "12 CPD" },
  { tag: "Radiology", title: "AI in Diagnostic Imaging", author: "Dr. M. Tanaka", cpd: "7 CPD" },
];

function CMEPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LIVE & ON-DEMAND"
        title={<>Trending <span className="text-gradient">CME & CPD Courses</span></>}
        subtitle="Earn credits while learning from leading clinicians worldwide."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cmeCourses.map((c) => (
            <div key={c.title} className="card-hover bg-card border border-border rounded-2xl p-6">
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
      </section>
    </PageShell>
  );
}
