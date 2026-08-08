import { useState } from "react";
import { PIPELINE_STAGES, SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0]!.id);
  const current = SKILL_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="The Pipeline, End to End"
          sub="Every stage below is something I've actually wired up. Pick a category to see the tools I reach for."
        />

        {/* Pipeline */}
        <Reveal className="glass mb-12 overflow-hidden rounded-2xl p-5 sm:p-7">
          <ol className="grid gap-3 md:grid-cols-7">
            {PIPELINE_STAGES.map((stage, i) => (
              <li key={stage.name} className="group relative">
                <div className="h-full rounded-xl border border-border/70 bg-surface-2 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-node"
                      style={{ animationDelay: `${i * 260}ms` }}
                    />
                    <p className="font-mono text-[10.5px] tracking-[0.16em] text-primary">
                      {stage.name}
                    </p>
                  </div>
                  <ul className="mt-2.5 space-y-1">
                    {stage.tools.map((t) => (
                      <li key={t} className="text-[12.5px] text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < PIPELINE_STAGES.length - 1 ? (
                  <>
                    <span className="absolute top-1/2 -right-3 hidden h-px w-3 bg-gradient-to-r from-primary/50 to-transparent md:block" />
                    <span className="mx-auto block h-3 w-px bg-gradient-to-b from-primary/50 to-transparent md:hidden" />
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Categories */}
        <Reveal className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {SKILL_CATEGORIES.map((c) => (
              <li key={c.id}>
                <button
                  onMouseEnter={() => setActive(c.id)}
                  onFocus={() => setActive(c.id)}
                  onClick={() => setActive(c.id)}
                  aria-pressed={active === c.id}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    active === c.id
                      ? "border-primary/50 bg-primary/10 text-foreground"
                      : "border-border bg-surface text-muted-foreground hover:border-primary/25 hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="truncate font-medium">{c.name}</span>
                    <span className="font-mono text-[11px] text-primary/70">
                      {String(c.tools.length).padStart(2, "0")}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.24em] text-primary/80 uppercase">
              {current.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {current.blurb}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {current.tools.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border/70 bg-surface-2 px-3 py-1.5 font-mono text-[12px] text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
              # no percentage bars — just what I use and why
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
