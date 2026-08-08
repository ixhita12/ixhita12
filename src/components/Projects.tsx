import { useState } from "react";
import { Github, X, ExternalLink } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS, type Project } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

function Card({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <article className="group glass flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 font-mono text-[13.5px] leading-snug break-words text-foreground">
          {p.name}
        </h3>
        <span className="shrink-0 rounded-md border border-border/70 px-2 py-0.5 text-[10.5px] tracking-wide text-muted-foreground uppercase">
          {p.category}
        </span>
      </div>
      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">{p.short}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <li
            key={t}
            className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-foreground/75"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>
        <button
          onClick={() => onOpen(p)}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-primary transition-colors hover:bg-primary/10"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const featured = PROJECTS.filter((p) => p.featured);
  const all = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          sub="Infrastructure experiments, pipelines and applications — each one a repository you can open and read."
        />

        <Reveal className="mb-14">
          <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            featured
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((p) => (
              <Card key={p.slug} p={p} onOpen={setOpen} />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <p className="mr-2 font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
              all projects
            </p>
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg border px-3 py-1.5 text-xs transition-all ${
                  filter === f
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/25 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((p) => (
              <Card key={p.slug} p={p} onOpen={setOpen} />
            ))}
          </div>
          {all.length === 0 ? (
            <p className="rounded-xl border border-border bg-surface p-8 text-center text-sm text-muted-foreground">
              Nothing in this category yet.
            </p>
          ) : null}
        </Reveal>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${open.name} details`}
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-scale-in max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-primary/25 bg-card p-6 shadow-[var(--shadow-elevated)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="min-w-0 font-mono text-base break-words">{open.name}</h3>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close details"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-primary/80 uppercase">
              what I built
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{open.built}</p>

            <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-primary/80 uppercase">
              technology stack
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {open.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border/70 bg-surface-2 px-2 py-1 font-mono text-[11px]"
                >
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-primary/80 uppercase">
              key concepts
            </p>
            <ul className="mt-2 grid gap-1.5">
              {open.concepts.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">›</span>
                  {c}
                </li>
              ))}
            </ul>

            <a
              href={open.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_10px_40px_-12px_var(--glow)]"
            >
              <Github className="h-4 w-4" /> Repository
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
}
