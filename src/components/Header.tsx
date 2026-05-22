import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "News", to: "/news" as const },
  { label: "Clinsights", to: "/clinsights" as const },
  { label: "Info-Hub", to: "/info-hub" as const },
  { label: "CME", to: "/cme" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "nav-link px-3 py-2 rounded-full text-sm font-semibold bg-accent text-primary" }}
              inactiveProps={{ className: "nav-link px-3 py-2 rounded-full text-sm font-medium text-foreground/80" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <Link to="/login" className="nav-link px-4 py-2 text-sm font-semibold text-primary">Login</Link>
          <Link to="/signup" className="btn-shine inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition">
            Sign up
          </Link>
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
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary">Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
