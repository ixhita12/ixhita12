import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

const STACK = [
  { label: "Cloud", detail: "Azure • AWS" },
  { label: "Infrastructure", detail: "Terraform • Linux" },
  { label: "Containers", detail: "Docker • Kubernetes" },
  { label: "CI/CD", detail: "Actions • Jenkins" },
  { label: "Monitoring", detail: "Prometheus • Grafana" },
];

function Terminal() {
  const full = "whoami";
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(full);
      setDone(true);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        window.clearInterval(id);
        window.setTimeout(() => setDone(true), 320);
      }
    }, 95);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="glass rounded-xl p-4 font-mono text-[13px] shadow-[var(--shadow-glow)]">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 text-[11px] text-muted-foreground">bash</span>
      </div>
      <p className="text-muted-foreground">
        <span className="text-primary">ishita@devops</span>:~$ {typed}
        {!done ? <span className="animate-blink">▋</span> : null}
      </p>
      {done ? <p className="mt-1.5 text-foreground">Cloud &amp; DevOps Engineer</p> : null}
    </div>
  );
}

function InfraFlow() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-5 shadow-[var(--shadow-elevated)]">
      <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
        delivery path
      </p>
      <ul className="relative mt-4 grid gap-2.5">
        {STACK.map((s, i) => (
          <li key={s.label} className="group relative flex items-center gap-3">
            <span className="relative grid h-9 w-9 shrink-0 place-items-center">
              <span
                className="absolute inset-0 rounded-full bg-primary/15 animate-pulse-node"
                style={{ animationDelay: `${i * 420}ms` }}
              />
              <span className="relative h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
              {i < STACK.length - 1 ? (
                <span className="absolute top-9 left-1/2 h-[calc(100%+0.625rem-2.25rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 to-primary/5" />
              ) : null}
            </span>
            <div className="min-w-0 flex-1 rounded-lg border border-border/70 bg-surface-2 px-3.5 py-2.5 transition-colors group-hover:border-primary/40">
              <p className="truncate text-sm font-medium">{s.label}</p>
              <p className="truncate font-mono text-[11px] text-muted-foreground">{s.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.32em] text-primary uppercase sm:text-xs">
            Cloud • DevOps • Automation
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Ishita Gupta.
            <span className="mt-2 block text-gradient">Cloud &amp; DevOps Engineer</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Building cloud infrastructure, automating workflows, and turning ideas into reliable
            deployments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_10px_40px_-12px_var(--glow)]"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Ishita_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-muted-foreground">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-10 max-w-sm">
            <Terminal />
          </div>
        </div>

        <div className="animate-float lg:pl-6">
          <InfraFlow />
        </div>
      </div>
    </section>
  );
}
