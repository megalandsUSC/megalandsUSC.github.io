import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Collapsible } from "@/components/Collapsible";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MegaLands — Megalithic Landscapes of NW Iberia" },
      {
        name: "description",
        content:
          "MegaLands explores human-environmental drivers of Neolithic societies in Northwestern Iberia (5th–2nd millennium BCE) through spatial, chronological and palaeoenvironmental research.",
      },
      { property: "og:title", content: "MegaLands — Megalithic Landscapes of NW Iberia" },
      {
        property: "og:description",
        content:
          "A knowledge-generation project on the megalithic societies of NW Iberia, combining AI, LiDAR, chronometrics and palaeoenvironmental science.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const objectives = [
  {
    id: "SO1",
    title: "Spatial data through AI",
    text: "To refine available spatial data of NW Iberian megaliths through artificial intelligence.",
  },
  {
    id: "SO2",
    title: "Chronological gaps",
    text: "To contribute to fill the available gaps in the chronological knowledge about the megalithic phenomenon in NW Iberia, providing new detailed, more refined chronometric datasets in comparative regions.",
  },
  {
    id: "SO3",
    title: "Environmental reconstruction",
    text: "To reconstruct the environmental conditions and subsistence practices (agriculture, livestock, burning, etc.) of megalithic landscapes through a combination of a multiproxy (geochemistry and palynology) and using a multiscale (on-site and off-site) approach.",
  },
  {
    id: "SO4",
    title: "Comparative distribution models",
    text: "To generate comparative models of the distribution of megalithic tombs in the Iberian Northwest, identifying regional location patterns and assessing their correspondence with environmental and geographical factors.",
  },
];

const hypothesisPoints = [
  {
    id: "a",
    title: "Data quality and cataloguing",
    text: "Existing archaeological records require updating to address inaccuracies, duplication, and inconsistent documentation.",
  },
  {
    id: "b",
    title: "Chronological gaps",
    text: "The 103 radiocarbon dates from 56 NW Iberian monuments are insufficient to establish a robust timeline, necessitating new dating programs.",
  },
  {
    id: "c",
    title: "Palaeoenvironmental data representativity",
    text: "Most of available palaeoenvironmental information comes from the highlands, so increasing data availability in the lowlands will allow a better understanding of the megalithic phenomenon diversity within NW Iberia.",
  },
  {
    id: "d",
    title: "Data integration",
    text: "Spatial models of megalithic monuments published up-to-date focus on geographical trends, but no effort has been made to integrate palaeoenvironmental data.",
  },
];

function Index() {
  return (
    <PageShell>
      {/* Hero — cover with video (upload your video and it will replace the image) */}
      <section className="relative overflow-hidden">
        <img
          src="/images/Cabaleiros_dolmen_portada.jpeg"
          alt="Dolmen de Cabaleiros - MegaLands portada"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep/90 via-stone-deep/40 to-stone-deep/20" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-6 pb-20 pt-36 md:pb-28 md:pt-48">
          <div className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="animate-rise text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
                Knowledge-Generation Project · PID2024-156264NA-I00 (AEI / MICIU / FEDER, EU)
              </p>
              <h1 className="animate-rise-slow mt-5 font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
                Megalithic Landscapes of Northwestern Iberia
              </h1>
              <p className="animate-rise-slow mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
                Exploring human-environmental drivers of Neolithic societies
                (5th–2nd millennium BCE) through innovative, multidisciplinary
                research.
              </p>
              <div className="animate-rise-slow mt-10 flex flex-wrap gap-4">
                <Link
                  to="/methodology"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-stone-deep transition-transform hover:scale-[1.03]"
                >
                  Explore the project <ArrowRight size={16} />
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Meet the team
                </Link>
              </div>
            </div>

            {/* Logo "globo" flotante */}
            <div className="animate-rise shrink-0 self-start lg:self-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-full bg-ochre/35 blur-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 rounded-full overflow-hidden border-4 border-white/95 bg-white p-2 sm:p-2.5 shadow-2xl backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/MegaLands_Logo.jpeg"
                    alt="MegaLands Project Logo"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
            The project
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">
            Understanding megalithic societies, from stone to soil
          </h2>
          <img
            src="/images/pedra_arca.jpg"
            alt="Pedra da Arca megalithic monument"
            loading="lazy"
            className="mt-8 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            MegaLands is a Knowledge-Generation Project, Non-Oriented Modality
            (Type A) [PID2024-156264NA-I00], funded by the Agencia Estatal de Investigación
            (AEI / MICIU / 10.13039/501100011033 / FEDER, EU), led by two Principal Investigators —{" "}
            <span className="font-semibold text-foreground">
              Miguel Carrero-Pazos (USC / CISPAC)
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              Noemí Silva-Sánchez (USC / CRETUS)
            </span>{" "}
            — and supported by a multidisciplinary team.
          </p>
          <p>
            The project aims to increase the generation of high-quality
            scientific knowledge, fostering a deeper understanding of megalithic
            societies in NW Iberia through innovative multidisciplinary
            approaches that address critical gaps in spatial, chronological, and
            palaeoenvironmental data.
          </p>
        </div>
      </section>

      {/* Objectives — collapsible */}
      <section className="bg-stone-deep py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
            Objectives
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            A holistic approach to social and environmental dimensions
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/70">
            To increase our understanding of the megalithic societies in
            Northwestern Iberia through a holistic approach, considering both
            their social and environmental dimensions. Click to read each
            specific objective.
          </p>
          <div className="mt-10 space-y-4">
            {objectives.map((o) => (
              <div
                key={o.id}
                className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 [&_button]:px-7 [&_span]:text-primary-foreground"
              >
                <DarkCollapsible badge={o.id} title={o.title}>
                  {o.text}
                </DarkCollapsible>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hypothesis — collapsible */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
          Starting hypothesis
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground">
          Monumental distribution reflects deliberate landscape use
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          MegaLands arises from the starting hypothesis that the spatial
          distribution of NW Iberian megalithic monuments reflects deliberate
          landscape use and settlement strategies influenced by environmental
          and ecological factors, including periods of environmental change.
        </p>
        <div className="mt-10 space-y-4">
          {hypothesisPoints.map((p) => (
            <Collapsible key={p.id} badge={p.id} title={p.title}>
              {p.text}
            </Collapsible>
          ))}
        </div>
        <p className="mt-12 max-w-3xl leading-relaxed text-muted-foreground">
          MegaLands builds on the above-described state of the art by
          integrating spatial, environmental and new chronometric data, to
          provide a revised understanding of the NW Iberian megalithic complex.
          Moving beyond traditional descriptive approaches, it aligns with calls
          for holistic studies that integrate human agency and environmental
          changes. By addressing whether ecological and climatic changes
          influenced megalithic monument construction, the project avoids
          deterministic frameworks, proposing nuanced explanations of
          human-environment dynamics.
        </p>
      </section>

      {/* Contents nav */}
      <section className="border-y border-border/60 bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl text-foreground">Contents</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/methodology", label: "Methodology", desc: "Study areas & approach" },
              { to: "/work-packages", label: "Work Packages", desc: "Five integrated WPs" },
              { to: "/team", label: "Team", desc: "PIs & researchers" },
              { to: "/outreach", label: "Outreach Activities", desc: "Talks & media" },
              { to: "/social-media", label: "Social Media", desc: "Follow the project" },
              { to: "/publications", label: "Publications", desc: "Papers & chapters" },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <p className="text-lg font-semibold text-foreground">{c.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <ArrowRight className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-ochre" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related project */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
          Related projects
        </p>
        <a
          href="https://megalandsusc.github.io/discover/"
          target="_blank"
          rel="noreferrer"
          className="group mt-8 flex flex-col gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg md:flex-row md:items-center md:p-12"
        >
          <img
            src="/images/discover/Logo-Def.jpg"
            alt="DISCOVER project logo"
            loading="lazy"
            className="w-full max-w-[220px] rounded-xl object-contain"
          />
          <div>
            <h3 className="font-display text-3xl text-foreground">DISCOVER Project</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              USC · CISPAC · Fondos Impulso USC
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Automatic detection of tumular and megalithic monuments in Galicia
              using airborne LiDAR data and Artificial Intelligence, including a
              citizen science component on Zooniverse.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-ochre">
              Explore DISCOVER <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </a>
      </section>
    </PageShell>
  );
}

// Collapsible variant styled for the dark objectives band
function DarkCollapsible({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-7 py-5 text-left"
      >
        <span className="shrink-0 font-display text-xl text-ochre">{badge}</span>
        <span className="flex-1 text-base font-semibold text-primary-foreground md:text-lg">
          {title}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-primary-foreground/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-7 pb-6 leading-relaxed text-primary-foreground/75">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
