import { TIMELINE } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="DevOps Journey"
          sub="Milestones rather than bullet points — where the shift from writing code to running systems happened."
        />

        <ol className="relative grid gap-5">
          <span className="pointer-events-none absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent sm:left-[15px]" />
          {TIMELINE.map((item, i) => (
            <li key={item.role} className="relative pl-9 sm:pl-12">
              <span className="absolute top-6 left-0 grid h-6 w-6 place-items-center rounded-full border border-primary/40 bg-background sm:h-8 sm:w-8">
                <span
                  className="h-2 w-2 rounded-full bg-primary animate-pulse-node"
                  style={{ animationDelay: `${i * 400}ms` }}
                />
              </span>
              <Reveal delay={i * 90}>
                <div className="glass rounded-2xl p-5 transition-colors hover:border-primary/35 sm:p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold sm:text-lg">{item.role}</h3>
                      <p className="truncate text-sm text-primary/90">{item.org}</p>
                    </div>
                    <p className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  <p className="mt-5 font-mono text-[10.5px] tracking-[0.22em] text-muted-foreground uppercase">
                    focus areas
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {item.chips.map((c) => (
                      <li
                        key={c}
                        className="rounded-md border border-border/70 bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-foreground/85"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
