import { ArrowRight, Github } from "lucide-react";
import { PROFILE, PROJECTS } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const LANGUAGES = ["HCL / Terraform", "Shell", "Python", "Java", "YAML", "Dockerfile"];

export function GitHubSection() {
  return (
    <section id="github" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="GitHub"
          title="Open Source, Experiments & Projects"
          sub="Most of my learning ends up as a repository — infrastructure code, pipelines and small tools."
        />

        <Reveal>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border p-6 sm:flex sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2">
                  <Github className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm">@{PROFILE.githubHandle}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    Cloud, DevOps &amp; automation repositories
                  </p>
                </div>
              </div>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                Explore My GitHub
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-3">
              {[
                { k: "Public repositories", v: `${PROJECTS.length}+` },
                { k: "Primary focus", v: "IaC & CI/CD" },
                { k: "Most used", v: "Terraform" },
              ].map((s) => (
                <div key={s.k} className="bg-card p-6">
                  <p className="font-display text-2xl font-semibold text-gradient">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-6">
              <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                languages & formats
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {LANGUAGES.map((l) => (
                  <li
                    key={l}
                    className="rounded-md border border-border/70 bg-surface-2 px-2.5 py-1 font-mono text-[11px]"
                  >
                    {l}
                  </li>
                ))}
              </ul>

              <p className="mt-7 font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                selected repositories
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {PROJECTS.slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-surface-2 px-4 py-3 transition-colors hover:border-primary/40"
                    >
                      <span className="min-w-0 truncate font-mono text-[12.5px]">{p.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
