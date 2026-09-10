import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-stone-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            Mega<span className="text-ochre">Lands</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Megalithic Landscapes: exploring human-environmental drivers of
            Neolithic societies in Northwestern Iberia (5th–2nd millennium BCE).
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="text-primary-foreground/80 hover:text-primary-foreground" to="/methodology">Methodology</Link></li>
            <li><Link className="text-primary-foreground/80 hover:text-primary-foreground" to="/work-packages">Work Packages</Link></li>
            <li><Link className="text-primary-foreground/80 hover:text-primary-foreground" to="/team">Team</Link></li>
            <li><Link className="text-primary-foreground/80 hover:text-primary-foreground" to="/publications">Publications</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Institutions
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Universidade de Santiago de Compostela · CISPAC · CRETUS · CESGA
          </p>
          <a
            href="https://megalandsusc.github.io/discover/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-medium text-ochre hover:underline"
          >
            DISCOVER Project →
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        MegaLands — Knowledge-Generation Project, Non-Oriented Modality (Type A)
      </div>
    </footer>
  );
}
