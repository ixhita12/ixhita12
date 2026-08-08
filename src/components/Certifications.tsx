import { Award, ExternalLink, Plus } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified Credentials"
          sub="Credentials I hold today, with more cloud and DevOps certifications on the way."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
              <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    IBM
                  </p>
                  <p className="truncate text-xs text-muted-foreground">Issued credential</p>
                </div>
              </div>
              <h3 className="mt-5 text-lg leading-snug font-semibold">
                Getting Started with Artificial Intelligence
              </h3>
              <a
                href="https://www.credly.com/badges/668d7db9-6d43-4f11-ad2d-cc00a0e88ced"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                View Credential <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-dashed border-border p-6 text-muted-foreground">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border">
                <Plus className="h-5 w-5" />
              </span>
              <p className="mt-5 text-sm font-medium text-foreground">More in progress</p>
              <p className="mt-2 text-sm leading-relaxed">
                Currently working toward cloud and container certifications. This space is built to
                grow.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
