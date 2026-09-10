import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/work-packages")({
  head: () => ({
    meta: [
      { title: "Work Packages — MegaLands" },
      {
        name: "description",
        content:
          "MegaLands is structured around five Work Packages: spatial analysis, archaeological fieldwork, palaeoenvironmental reconstruction, data modelling and dissemination.",
      },
      { property: "og:title", content: "Work Packages — MegaLands" },
      {
        property: "og:description",
        content:
          "Five integrated Work Packages combining AI-assisted detection, fieldwork, palaeoenvironmental analyses, modelling and dissemination.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPackages,
});

const wps = [
  {
    id: "WP1",
    title: "Spatial data and field prospection",
    tasks: [
      ["T1.1", "Assisted detection with AI (LiDAR datasets)"],
      ["T1.2", "Fieldwork prospection to check and record new detected sites"],
    ],
  },
  {
    id: "WP2",
    title: "Megalith on-site test-pits sampling and analyses",
    tasks: [
      ["T2.1", "GPR prospection at site scale"],
      ["T2.2", "Archaeological intervention (test pits) & on-site sampling"],
      ["T2.3", "Chronometric dating (OSL-PD & AMS 14C)"],
      ["T2.4", "Geoarchaeological analysis"],
      ["T2.5", "Palynological analysis"],
    ],
  },
  {
    id: "WP3",
    title: "Peatland off-site palaeoenvironmental analyses",
    tasks: [
      ["T3.1", "Off-site peat sampling"],
      ["T3.2", "Radiocarbon dating and age-depth modelling"],
      ["T3.3", "Geochemical analysis"],
      ["T3.4", "Palynological analysis"],
    ],
  },
  {
    id: "WP4",
    title: "Data modelling and results integration",
    tasks: [
      ["T4.1", "Landscape analysis & locational modelling (GIS / GWR)"],
      ["T4.2", "Temporal models of megalithic sites (Bayesian models)"],
      ["T4.3", "Integrative models of archaeological & palaeoenvironmental data"],
    ],
  },
  {
    id: "WP5",
    title: "Dissemination and transfer actions",
    tasks: [
      ["T5.1", "Design and launch project website"],
      ["T5.2", "GIS web app (CESGA's Peneira framework)"],
      ["T5.3", "Working meetings & closing seminar"],
      ["T5.4", "Informative talks for general public at selected sites"],
      ["T5.5", "Project reports and scientific papers drafting"],
      ["T5.6", "Publication of results at national & international conferences"],
      ["T5.7", "Organization and celebration of a closing symposium"],
    ],
  },
];

function WorkPackages() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Work Packages"
        title="Five integrated work packages"
        lead="MegaLands integrates spatial analysis, archaeological fieldwork, palaeoenvironmental reconstruction, data modelling, and public dissemination."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <figure>
          <img
            src="https://megalandsusc.github.io/images/wps_diagram_clean.jpg"
            alt="MegaLands Work Packages diagram"
            loading="lazy"
            className="w-full rounded-2xl border border-border bg-card shadow-sm"
          />
        </figure>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {wps.map((wp) => (
            <article
              key={wp.id}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl text-ochre">{wp.id}</span>
                <h2 className="text-xl font-semibold text-foreground">{wp.title}</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {wp.tasks.map(([id, task]) => (
                  <li key={id} className="flex gap-3 text-sm leading-relaxed">
                    <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 font-mono text-xs font-semibold text-secondary-foreground">
                      {id}
                    </span>
                    <span className="text-muted-foreground">{task}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
