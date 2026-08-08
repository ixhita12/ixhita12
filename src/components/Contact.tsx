import { useState } from "react";
import { Github, Linkedin, Mail, FileDown, Send } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) {
      toast.error("Please enter your name (max 100 chars).");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message || message.length > 1500) {
      toast.error("Please enter a message (max 1500 chars).");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };


  const field =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-ring focus:outline-none";

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.28em] text-primary/80 uppercase">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Let&apos;s Build Something Reliable.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Open to DevOps opportunities, cloud-focused projects, and freelance collaborations.
            </p>

            <ul className="mt-8 grid gap-2.5">
              {[
                { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
                { icon: Linkedin, label: "ishita-gupta-devops", href: PROFILE.linkedin },
                { icon: Github, label: `@${PROFILE.githubHandle}`, href: PROFILE.github },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:border-primary/40"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0 truncate text-muted-foreground">{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={resumeAsset.url}
              download="Ishita_Gupta_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </a>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass grid gap-3 rounded-2xl p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  className={field}
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`${field} resize-none`}
                  maxLength={1500}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_10px_40px_-12px_var(--glow)]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold">{PROFILE.name}</p>
          <p className="text-xs text-muted-foreground">{PROFILE.title}</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-primary">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-primary">
            Email
          </a>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          Building. Automating. Learning. · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
