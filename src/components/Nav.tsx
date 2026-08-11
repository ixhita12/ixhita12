import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X, FileDown } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border transition-all duration-300 ${
          scrolled
            ? "bg-background/70 px-4 py-2.5 shadow-[var(--shadow-elevated)] backdrop-blur-xl"
            : "bg-background/35 px-5 py-3.5 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
            ig
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight">
            {PROFILE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground sm:grid"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground sm:grid"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Ishita_Gupta_Resume.pdf"
            className="hidden items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-2 text-[13px] font-medium text-primary transition-all hover:bg-primary/20 sm:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" /> Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border bg-background/90 p-3 backdrop-blur-xl lg:hidden">
          <ul className="grid gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs text-muted-foreground"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs text-muted-foreground"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Ishita_Gupta_Resume.pdf"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 py-2 text-xs text-primary"
            >
              <FileDown className="h-3.5 w-3.5" /> Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
