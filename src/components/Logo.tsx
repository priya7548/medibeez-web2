import { Link } from "@tanstack/react-router";
import logo from "@/assets/medibeez-logo-full.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="MediBeez home">
      <img
        src={logo}
        alt="MediBeez — Unlock a world of medical expertise"
        className="h-10 sm:h-12 w-auto"
        style={{ mixBlendMode: "multiply" }}
      />
    </Link>
  );
}
