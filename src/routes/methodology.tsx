import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Collapsible } from "@/components/Collapsible";
import cabaleirosAsset from "@/assets/Cabaleiros_Dolmen.jpeg.asset.json";
import penausenAsset from "@/assets/Penausen_M1_dolmen.jpeg.asset.json";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — MegaLands" },
      {
        name: "description",
        content:
          "MegaLands' transdisciplinary methodology and study areas: Serra da Capelada, Serra do Leboreiro, Costa da Morte, Xistral Mountains and Penausén-Idarga.",
      },
      { property: "og:title", content: "Methodology — MegaLands" },
      {
        property: "og:description",
        content:
          "Transdisciplinary methodology integrating archaeological, palaeoenvironmental and chronological data across five study areas in NW Iberia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Methodology,
});

type Area = {
  name: string;
  text: string;
  image?: { src: string; alt: string; caption: string };
};

const areas: Area[] = [
  {
    name: "Serra da Capelada",
    text: "The Capelada-Coriscada mountain complex hosts one of the most numerous tumulus and megalithic assemblages in the northwest of the Iberian Peninsula, with over a hundred tumuli scattered across the Faladoira, Coriscada, and Capelada mountain ranges. Our current database indicates that Serra da Capelada contains a group of approximately 30 tumular monuments located on elevated peneplains, near transit areas.",
  },
  {
    name: "Serra do Leboreiro",
    text: "This region represents the most continental area of those studied within this project and is renowned for its significant concentration of tumular and megalithic dolmens. Recent remote sensing analyses with technologies like LiDAR (Canedo et al. 2024) allowed the identification of ca. 200 megalithic monuments, greatly increasing the number of sites, based on field surveys and prospections.",
  },
  {
    name: "Costa da Morte",
    text: "Costa da Morte stands out as one of the areas in Galicia with the highest density of megalithic mounds (ca. 400) (Carrero-Pazos et al. 2019). Several tombs are among the most renowned sites of the Galician megalithic complex, such as Dombate, Parxubeira or Casa dos Mouros.",
    image: {
      src: cabaleirosAsset.url,
      alt: "The dolmen of Cabaleiros during archaeological excavations",
      caption:
        "The dolmen of Cabaleiros (Tordoia) during archaeological excavations during september 2026. Photograph by Team members.",
    },
  },
  {
    name: "Xistral Mountains",
    text: "The Xistral mountains represent an absolute hotspot in terms of palaeoenvironmental knowledge. The extent and age of their peatlands (some covering the whole Holocene period) favoured the intense palaeoenvironmental work that has been undertaken in the area since the late 1990s, both from a geochemical and a palynological perspective (e.g., Martínez-Cortizas et al. 2002; Mighall et al. 2006, 2023).",
  },
  {
    name: "Penausén-Idarga Sierras",
    text: "The Necropolis of Penausén-Calabazos is composed of a total of eleven monuments (Rodríguez del Cueto, Carrero Pazos 2021).",
    image: {
      src: penausenAsset.url,
      alt: "Penausén M1 dolmen during the excavations",
      caption:
        "Pensausén M1 dolmen (Salas, Asturias) during the excavations, September 2026. Photograph by Team members.",
    },
  },
];

function Methodology() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Methodology"
        title="Explicitly transdisciplinary"
        lead="Integrating archaeological, palaeoenvironmental, and chronological data to provide new understandings of the megalithic phenomenon in NW Iberia."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <figure>
          <img
            src="https://megalandsusc.github.io/images/Rationale%20of%20Megalands%20-%20Methodology.jpeg"
            alt="Diagram of the relation between Specific Objectives and the rationale of MegaLands working plan"
            loading="lazy"
            className="w-full rounded-2xl border border-border bg-card shadow-sm"
          />
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            Relation between the Specific Objectives and the MegaLands working plan.
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-border/60 bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
            Study areas
          </p>
          <h2 className="mt-4 font-display text-4xl text-foreground">Working regions</h2>
          <div className="mt-10 space-y-4">
            {areas.map((a, i) =>
              a.image ? (
                <Collapsible
                  key={a.name}
                  badge={String(i + 1).padStart(2, "0")}
                  title={a.name}
                >
                  <p className="leading-relaxed text-muted-foreground">{a.text}</p>
                  <figure className="mt-6">
                    <img
                      src={a.image.src}
                      alt={a.image.alt}
                      loading="lazy"
                      className="w-full rounded-2xl border border-border bg-card shadow-sm"
                    />
                    <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                      {a.image.caption}
                    </figcaption>
                  </figure>
                </Collapsible>
              ) : (
                <article
                  key={a.name}
                  className="grid gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm md:grid-cols-[3rem_1fr]"
                >
                  <span className="font-display text-3xl text-ochre">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{a.name}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{a.text}</p>
                  </div>
                </article>
              )
            )}
          </div>
          <figure className="mt-12">
            <img
              src="https://megalandsusc.github.io/images/Study_areasMegaLands.jpeg"
              alt="Study areas with selected sites for the MegaLands project"
              loading="lazy"
              className="w-full rounded-2xl border border-border bg-card shadow-sm"
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              Study areas with selected sites for the MegaLands project.
            </figcaption>
          </figure>
        </div>
      </section>
    </PageShell>
  );
}
