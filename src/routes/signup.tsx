import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, User, Stethoscope, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Bee } from "@/components/Bee";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — MediBeez" },
      { name: "description", content: "Create your free MediBeez account and join a global community of doctors." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", specialty: "", password: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageShell>
      <section className="bg-hero min-h-[80vh] py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4">
          <div className="relative bg-card border border-border rounded-3xl shadow-glow p-8 sm:p-10 card-hover">
            <div className="absolute -top-10 -right-6 bee-float">
              <Bee size={80} />
            </div>
            <h1 className="text-3xl font-extrabold text-primary">Join MediBeez</h1>
            <p className="mt-2 text-sm text-muted-foreground">Create your free account in under a minute.</p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => { e.preventDefault(); if (form.email && form.password) navigate({ to: "/" }); }}
            >
              <Field icon={User} label="FULL NAME" type="text" placeholder="Dr. Jane Doe" value={form.name} onChange={set("name")} required />
              <Field icon={Mail} label="EMAIL" type="email" placeholder="you@hospital.com" value={form.email} onChange={set("email")} required />
              <Field icon={Stethoscope} label="SPECIALTY" type="text" placeholder="e.g. Cardiology" value={form.specialty} onChange={set("specialty")} />
              <Field icon={Lock} label="PASSWORD" type="password" placeholder="••••••••" value={form.password} onChange={set("password")} required />

              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-current" />
                I agree to the <a href="#" className="text-secondary font-semibold">Terms</a> and <a href="#" className="text-secondary font-semibold">Privacy Policy</a>.
              </label>

              <button type="submit" className="btn-shine w-full inline-flex items-center justify-center gap-2 rounded-full bg-cta-gradient text-white px-6 py-3.5 font-semibold">
                Create Account <ArrowRight size={16} />
              </button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              Already a member?{" "}
              <Link to="/login" className="text-secondary font-semibold hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  icon: Icon, label, ...props
}: { icon: typeof User; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-primary tracking-widest">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/30">
        <Icon size={16} className="text-muted-foreground" />
        <input {...props} className="flex-1 bg-transparent text-sm outline-none" />
      </div>
    </label>
  );
}
