import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-stone-deep text-primary-foreground">
      {/* Top Grid */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/80 bg-white p-1 shadow-sm">
              <img
                src="/images/MegaLands_Logo.jpeg"
                alt="MegaLands Project Logo"
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <div>
              <p className="font-display text-2xl leading-none">
                Mega<span className="text-ochre">Lands</span>
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-ochre mt-1">Research Project</p>
            </div>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Megalithic Landscapes: exploring human-environmental drivers of
            Neolithic societies in Northwestern Iberia (5th–2nd millennium BCE).
          </p>
          <p className="mt-4 text-xs leading-relaxed text-primary-foreground/60">
            <strong>PIs:</strong> Miguel Carrero-Pazos (USC / CISPAC) & Noemí Silva-Sánchez (USC / CRETUS)
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="text-primary-foreground/80 transition-colors hover:text-ochre" to="/methodology">
                Methodology & Study Areas
              </Link>
            </li>
            <li>
              <Link className="text-primary-foreground/80 transition-colors hover:text-ochre" to="/work-packages">
                Work Packages
              </Link>
            </li>
            <li>
              <Link className="text-primary-foreground/80 transition-colors hover:text-ochre" to="/team">
                Team
              </Link>
            </li>
            <li>
              <Link className="text-primary-foreground/80 transition-colors hover:text-ochre" to="/publications">
                Publications
              </Link>
            </li>
            <li>
              <Link className="text-primary-foreground/80 transition-colors hover:text-ochre" to="/outreach">
                Outreach Activities
              </Link>
            </li>
            <li>
              <Link className="text-primary-foreground/80 transition-colors hover:text-ochre" to="/social-media">
                Social Media
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            Participating Institutions
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            <a
              href="https://www.usc.gal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              Universidade de Santiago de Compostela
            </a>
            {" · "}
            <a
              href="https://cispac.gal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              CISPAC
            </a>
            {" · "}
            <a
              href="https://cretus.usc.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              CRETUS
            </a>
            {" · "}
            <a
              href="https://www.cesga.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              CESGA
            </a>
            {" · "}
            <a
              href="https://citius.gal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              CITIUS
            </a>
            {" · "}
            <a
              href="https://www.uniovi.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              Universidad de Oviedo
            </a>
            {" · "}
            <a
              href="https://www.st-andrews.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              University of St Andrews
            </a>
            {" · "}
            <a
              href="https://www.abdn.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
            >
              University of Aberdeen
            </a>
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://megalandsusc.github.io/discover/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium text-ochre hover:underline"
            >
              DISCOVER Project →
            </a>
            <a
              href="https://cispac.gal/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline"
            >
              CISPAC Research Centre →
            </a>
          </div>
        </div>
      </div>

      {/* Official Funding & Logos Strip */}
      <div className="border-t border-primary-foreground/15 bg-black/25 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
              Funding & Support
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90 font-medium">
              PID2024-156264NA-I00 funded by MICIU / AEI / 10.13039/501100011033 / FEDER, EU.
            </p>
            <p className="mt-1 text-xs text-primary-foreground/60 leading-relaxed max-w-4xl">
              Knowledge-Generation Project, Non-Oriented Modality (Type A), funded by the Ministry of Science, Innovation and Universities (MICIU), the State Research Agency (AEI), and the European Union through the European Regional Development Fund (FEDER) and the Recovery, Transformation and Resilience Plan (NextGenerationEU).
            </p>
          </div>

          {/* Institutional Logos Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-5 pt-2">
            <div
              className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 shadow-md"
              title="MegaLands Research Project"
            >
              <img
                src="/images/MegaLands_Logo.jpeg"
                alt="MegaLands Project Logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-contain"
                loading="lazy"
              />
              <span className="font-display text-lg md:text-xl font-semibold text-stone-deep tracking-tight">
                Mega<span className="text-ochre">Lands</span>
              </span>
            </div>

            <a
              href="https://www.aei.gob.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-white p-3 shadow-md transition-all hover:opacity-95 hover:shadow-lg"
              title="Agencia Estatal de Investigación (AEI) - Ministerio de Ciencia, Innovación y Universidades"
            >
              <img
                src="/images/MICIU_NextG_PRTR_AEI_GE.jpg"
                alt="Funded by MICIU / AEI / NextGenerationEU / PRTR / FEDER, EU"
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                loading="lazy"
              />
            </a>

            <a
              href="https://www.usc.gal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 shadow-md transition-all hover:opacity-95 hover:shadow-lg"
              title="Universidade de Santiago de Compostela"
            >
              <img
                src="/images/USC_logo.png"
                alt="Universidade de Santiago de Compostela"
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Credits Bar */}
      <div className="border-t border-primary-foreground/10 px-6 py-6 text-center text-xs text-primary-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div>
            Content licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground"
            >
              CC BY-SA 4.0
            </a>{" "}
            © 2026 Miguel Carrero & Noemí Silva. Hosted by{" "}
            <a
              href="https://cispac.gal/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground"
            >
              CISPAC
            </a>
            . Built with{" "}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground"
            >
              Lovable
            </a>
            .
          </div>
          <div>
            <a
              href="https://github.com/megalandsUSC/megalandsUSC.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground"
            >
              Source code on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
