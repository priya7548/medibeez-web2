import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Bee } from "@/components/Bee";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — MediBeez" },
      { name: "description", content: "Log in to your MediBeez account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageShell>
      <section className="bg-hero min-h-[80vh] py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4">
          <div className="relative bg-card border border-border rounded-3xl shadow-glow p-8 sm:p-10 card-hover">
            <div className="absolute -top-10 -right-6 bee-float">
              <Bee size={80} />
            </div>
            <h1 className="text-3xl font-extrabold text-primary">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">Log in to continue your learning journey.</p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => { e.preventDefault(); if (email && password) navigate({ to: "/" }); }}
            >
              <label className="block">
                <span className="text-xs font-bold text-primary tracking-widest">EMAIL</span>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/30">
                  <Mail size={16} className="text-muted-foreground" />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@hospital.com" className="flex-1 bg-transparent text-sm outline-none" />
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-bold text-primary tracking-widest">PASSWORD</span>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/30">
                  <Lock size={16} className="text-muted-foreground" />
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="flex-1 bg-transparent text-sm outline-none" />
                </div>
              </label>

              <div className="flex items-center justify-between text-xs">
                <label className="inline-flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="accent-current" /> Remember me
                </label>
                <a href="#" className="text-secondary font-semibold">Forgot password?</a>
              </div>

              <button type="submit" className="btn-shine w-full inline-flex items-center justify-center gap-2 rounded-full bg-cta-gradient text-white px-6 py-3.5 font-semibold">
                Login <ArrowRight size={16} />
              </button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              New to MediBeez?{" "}
              <Link to="/signup" className="text-secondary font-semibold hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
