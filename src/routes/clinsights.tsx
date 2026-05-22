import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

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

const specialties = [
  "Cardiology", "Pediatrics", "Endocrinology", "Hepatology",
  "Oncology", "Neurology", "Pharmacology", "Radiology",
  "Dermatology", "Psychiatry", "Nephrology", "Gastroenterology",
];

function ClinsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="CLINSIGHTS"
        title={<>Verified clinical updates <span className="text-gradient">across specialties</span></>}
        subtitle="Hand-picked, peer-reviewed clinical insights to help you make confident decisions at the bedside."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <span key={s} className="card-hover cursor-pointer rounded-full bg-card border border-border px-5 py-2.5 text-sm font-medium text-primary">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.slice(0, 6).map((s) => (
              <div key={s} className="card-hover bg-card border border-border rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest text-secondary">{s.toUpperCase()}</p>
                <h3 className="mt-3 text-lg font-bold text-primary leading-snug">Weekly clinical brief — {s}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Concise, evidence-based summaries of the most relevant {s.toLowerCase()} updates for practising clinicians.
                </p>
                <a href="#" className="mt-4 inline-block text-secondary font-semibold text-sm">Read brief →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
