import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Clinsights", href: "#clinsights" },
  { label: "Info-Hub", href: "#info-hub" },
  { label: "CME", href: "#cme" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#home" aria-label="MediBeez home"><Logo /></a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              className={`nav-link px-3 py-2 rounded-full text-sm font-medium ${
                i === 0 ? "bg-accent text-primary" : "text-foreground/80"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a href="#cta" className="nav-link px-4 py-2 text-sm font-semibold text-primary">Login</a>
          <a
            href="#cta"
            className="btn-shine inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition"
          >
            Sign up
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-primary"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#cta" className="flex-1 text-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary">Login</a>
              <a href="#cta" className="flex-1 text-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">Sign up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
