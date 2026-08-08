import { LEARNING, SERVICES } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";
import { ArrowRight } from "lucide-react";

const STATE_ORDER = ["Exploring", "Learning", "Building", "Deepening"];

export function Learning() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Growth"
          title="Currently Learning"
          sub="An honest map of where I am with each topic — from first exploration to steady practice."
        />

        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <ul className="mb-7 flex flex-wrap gap-2">
              {STATE_ORDER.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="rounded-md border border-border/70 bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </span>
                  {i < STATE_ORDER.length - 1 ? (
                    <ArrowRight className="h-3 w-3 text-primary/50" />
                  ) : null}
                </li>
              ))}
            </ul>

            <ul className="grid gap-3 sm:grid-cols-2">
              {LEARNING.map((l) => {
                const step = STATE_ORDER.indexOf(l.state) + 1;
                return (
                  <li
                    key={l.topic}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl border border-border/70 bg-surface-2 px-4 py-3.5 transition-colors hover:border-primary/40"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{l.topic}</p>
                      <div className="mt-2 flex gap-1" aria-hidden="true">
                        {STATE_ORDER.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1 w-8 rounded-full ${
                              i < step ? "bg-primary/70" : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-primary">{l.state}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              DevSecOps is a direction I&apos;m actively moving toward, not a title I claim yet.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Freelance"
          title="What I Can Help With"
          sub="Practical, well-scoped work where careful setup matters more than seniority."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 70}>
              <div className="glass h-full rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <p className="font-mono text-[11px] text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_10px_40px_-12px_var(--glow)]"
          >
            Let&apos;s Work Together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
