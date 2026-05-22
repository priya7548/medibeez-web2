import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MediBeez" },
      { name: "description", content: "Get in touch with the MediBeez team." },
      { property: "og:title", content: "Contact MediBeez" },
      { property: "og:description", content: "Reach out — we'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="GET IN TOUCH"
        title={<>We'd love to <span className="text-gradient">hear from you</span></>}
        subtitle="Questions, partnerships, or feedback — drop us a line and we'll get back within 1–2 business days."
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: Mail, t: "Email", d: "hello@medibeez.com" },
              { icon: Phone, t: "Phone", d: "+1 (555) 010-9999" },
              { icon: MapPin, t: "Office", d: "Global · Remote-first" },
            ].map((c) => (
              <div key={c.t} className="card-hover bg-card border border-border rounded-2xl p-5 flex gap-4 items-start">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-secondary text-secondary-foreground"><c.icon size={20} /></div>
                <div>
                  <div className="font-bold text-primary">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4 card-hover"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none" />
              <input required type="email" placeholder="Email address" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none" />
            </div>
            <input placeholder="Subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none" />
            <textarea required rows={6} placeholder="Your message" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none" />
            <button type="submit" className="btn-shine inline-flex items-center gap-2 rounded-full bg-cta-gradient text-white px-7 py-3 font-semibold">
              Send Message <Send size={16} />
            </button>
            {sent && <p className="text-sm text-secondary font-semibold">Thanks — your message has been received.</p>}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
