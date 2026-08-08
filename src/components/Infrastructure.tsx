import { useState } from "react";
import { INFRA_NODES } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Infrastructure() {
  const [active, setActive] = useState(INFRA_NODES[3]!.id);
  const current = INFRA_NODES.find((n) => n.id === active)!;

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Architecture"
          title="How I Think About Infrastructure"
          sub="A change should travel a predictable path from a commit to a monitored, running service. Hover a node to see its role."
        />

        <Reveal>
          <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-10">
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet/10 blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <ol className="relative grid gap-3">
                {INFRA_NODES.map((n, i) => {
                  const isActive = n.id === active;
                  return (
                    <li key={n.id} className="relative flex items-stretch gap-4">
                      <div className="relative flex w-8 shrink-0 justify-center">
                        <span
                          className={`mt-4 h-3 w-3 rounded-full transition-all ${
                            isActive
                              ? "bg-primary shadow-[0_0_16px_var(--glow)]"
                              : "bg-primary/35"
                          }`}
                        />
                        {i < INFRA_NODES.length - 1 ? (
                          <svg
                            className="absolute top-7 left-1/2 h-[calc(100%-0.5rem)] w-px -translate-x-1/2 overflow-visible"
                            aria-hidden="true"
                          >
                            <line
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="100%"
                              stroke="var(--color-primary)"
                              strokeOpacity="0.4"
                              strokeWidth="1"
                              strokeDasharray="4 8"
                              className="animate-dash"
                            />
                          </svg>
                        ) : null}
                      </div>
                      <button
                        onMouseEnter={() => setActive(n.id)}
                        onFocus={() => setActive(n.id)}
                        onClick={() => setActive(n.id)}
                        aria-pressed={isActive}
                        className={`flex-1 rounded-xl border px-4 py-3 text-left transition-all ${
                          isActive
                            ? "border-primary/50 bg-primary/10"
                            : "border-border/70 bg-surface-2 hover:border-primary/30"
                        }`}
                      >
                        <p className="text-sm font-medium">{n.label}</p>
                        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground lg:hidden">
                          {n.note}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className="hidden lg:block">
                <div className="sticky top-28 rounded-2xl border border-primary/25 bg-surface-2 p-6">
                  <p className="font-mono text-[11px] tracking-[0.24em] text-primary uppercase">
                    {current.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {current.note}
                  </p>
                  <div className="mt-6 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
                    stage {INFRA_NODES.findIndex((n) => n.id === active) + 1} /{" "}
                    {INFRA_NODES.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
