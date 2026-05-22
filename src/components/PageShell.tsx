import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center fade-up">
        <p className="text-sm font-bold tracking-[0.25em] text-secondary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary">{title}</h1>
        {subtitle && <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
