import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-stone-deep text-primary-foreground">
      {/* Top Grid */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">
            Mega<span className="text-ochre">Lands</span>
          </p>
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
            Universidade de Santiago de Compostela · CISPAC · CRETUS · CESGA · CITIUS · Universidad de Oviedo · University of St Andrews · University of Aberdeen
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
              Funding & Support / Financiación
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90 font-medium">
              PID2024-156264NA-I00 funded by MICIU / AEI / 10.13039/501100011033 / FEDER, EU.
            </p>
            <p className="mt-1 text-xs text-primary-foreground/60">
              Proyecto de Generación de Conocimiento, Modalidad No Orientada (Tipo A), financiado por el Ministerio de Ciencia, Innovación y Universidades (MICIU), la Agencia Estatal de Investigación (AEI) y la Unión Europea a través del Fondo Europeo de Desarrollo Regional (FEDER) y el Plan de Recuperación, Transformación y Resiliencia (NextGenerationEU).
            </p>
          </div>

          {/* Institutional Logos Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-5 pt-2">
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
