import { Reveal, SectionHeading } from "./Reveal";

const LOOP = ["Learn", "Build", "Automate", "Deploy", "Improve"];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="About" title="Beyond the Tools" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I like the part of software that happens after the code is written — how it gets
              built, shipped, and kept alive. That curiosity pulled me from writing applications
              into cloud infrastructure, and it has kept me there.
            </p>
            <p>
              Most of what I know came from doing it: standing up Linux servers, describing
              infrastructure in Terraform instead of clicking through a portal, wrapping
              applications in containers, and putting a pipeline in front of every change so
              deployments stop being a manual ritual.
            </p>
            <p>
              I work mainly across Azure and AWS, and I care about the boring things that make
              systems trustworthy — repeatable environments, readable pipelines, and enough
              monitoring to notice a problem before someone else does. I&apos;m early in this
              career and deliberately still learning, which is exactly why I keep building.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                how I work
              </p>
              <ol className="mt-5 grid gap-3">
                {LOOP.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-[11px] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 rounded-lg border border-border/60 bg-surface-2 px-3 py-2 text-sm">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 font-mono text-[11px] text-muted-foreground">
                # then back to the top, with better defaults
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
