import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-accent/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Unlock a world of medical expertise. Connect, collaborate and grow with doctors worldwide.
          </p>
          <div className="mt-5 flex gap-3 text-primary">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                 className="h-9 w-9 grid place-items-center rounded-full bg-background border border-border transition hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-0.5">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-primary">QUICK LINKS</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "News", "Clinsights", "Info-Hub", "CME", "Contact Us"].map((x) => (
              <li key={x}><a href="#" className="text-muted-foreground hover:text-secondary transition">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-primary">RESOURCES</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {["Podcast", "Infographics", "Slideshows", "M-Reels", "View All"].map((x) => (
              <li key={x}><a href="#" className="text-muted-foreground hover:text-secondary transition">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-widest text-primary">SUBSCRIBE TO OUR NEWSLETTER</h4>
          <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
            />
            <button className="btn-shine rounded-full bg-cta-gradient text-white px-5 py-2.5 text-sm font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>Copyright © 2026 MediBeez. All rights reserved.</p>
          <p className="flex gap-3"><a href="#" className="hover:text-secondary">Terms of Use</a> · <a href="#" className="hover:text-secondary">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
