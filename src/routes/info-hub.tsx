import { createFileRoute } from "@tanstack/react-router";
import { Headphones, Image as ImgIcon, Presentation, PlayCircle } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

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

function InfoHubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="INFO-HUB"
        title={<>Visualizing <span className="text-gradient">Medical Breakthroughs</span></>}
        subtitle="Multimedia content designed for clinicians who learn best between cases."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hubItems.map((h) => (
            <div key={h.label} className="card-hover group bg-card border border-border rounded-2xl p-8 text-center">
              <div className="mx-auto h-16 w-16 grid place-items-center rounded-2xl bg-cta-gradient text-white shadow-soft transition group-hover:scale-110">
                <h.icon size={28} />
              </div>
              <h3 className="mt-5 font-bold text-primary">{h.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
