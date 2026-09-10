import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — MegaLands" },
      {
        name: "description",
        content:
          "MegaLands publications: journal articles, book chapters, conference proceedings and press contributions.",
      },
      { property: "og:title", content: "Publications — MegaLands" },
      {
        property: "og:description",
        content:
          "Scientific papers, book chapters and outreach publications from the MegaLands project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Publications,
});

type Pub = {
  img?: string;
  imgAlt?: string;
  citation: React.ReactNode;
  link: string;
};

const conferences: Pub[] = [
  {
    img: "/images/cad_2025.jpg",
    imgAlt: "CAD 2025",
    link: "https://www.researchgate.net/publication/403758545_Arqueoloxia_dende_o_ceo_A_tecnoloxia_LIDAR_no_estudo_do_Megalitismo_galego",
    citation: (
      <>
        <strong className="text-foreground">Carrero-Pazos, M.</strong> (2025).{" "}
        <span className="text-foreground underline decoration-ochre/60 underline-offset-4">
          Arqueoloxía dende o ceo: A tecnoloxía LIDAR no estudo do Megalitismo galego
        </span>
        . <em>Congreso de Arqueoloxía de Deza. CAD 2025</em> (pp. 26–42). Lalín: Edición
        Consultores.
      </>
    ),
  },
];

const articles: Pub[] = [
  {
    img: "/images/jas_reports.jpg",
    imgAlt: "Journal of Archaeological Science: Reports",
    link: "https://www.sciencedirect.com/science/article/pii/S2352409X26001653",
    citation: (
      <>
        <strong className="text-foreground">Lima e Silva, D.</strong>,{" "}
        <strong className="text-foreground">Carrero Pazos, M.</strong>,{" "}
        <strong className="text-foreground">Fonte, J.</strong>,{" "}
        <strong className="text-foreground">Vilas, B.</strong> (2026).{" "}
        <span className="text-foreground underline decoration-ochre/60 underline-offset-4">
          Spatial insights of the tumular phenomenon in Serra do Laboreiro region (NW Iberian
          Peninsula)
        </span>
        . <em>Journal of Archaeological Science: Reports</em>, 72, 105730.
      </>
    ),
  },
];

const chapters: Pub[] = [
  {
    img: "/images/megalithic_societies.jpg",
    imgAlt: "Megalithic societies. Old questions, new narratives",
    link: "https://www.archaeopress.com/Archaeopress/Products/9781805830764",
    citation: (
      <>
        <strong className="text-foreground">Carrero-Pazos, M.</strong>,{" "}
        <strong className="text-foreground">White, D.</strong> (2026).{" "}
        <span className="text-foreground underline decoration-ochre/60 underline-offset-4">
          'Linking megaliths'. A computational approach to the study of movement and mobility in
          the megalithic complex of Galicia (Northwest of the Iberian Peninsula)
        </span>
        . In Higginbottom et al., <em>Megalithic societies. Old questions, new narratives</em>{" "}
        (pp. 164–178). Oxford: Archaeopress.
      </>
    ),
  },
  {
    img: "/images/el_afan_de_eternidad.jpg",
    imgAlt: "El afán de eternidad de las sociedades neolíticas",
    link: "https://dialnet.unirioja.es/servlet/articulo?codigo=10767357",
    citation: (
      <>
        <strong className="text-foreground">Carrero Pazos, M.</strong>,{" "}
        <strong className="text-foreground">Maldonado Ruiz, A.</strong>,{" "}
        <strong className="text-foreground">Esmorís Pena, A.</strong> (2026).{" "}
        <span className="text-foreground underline decoration-ochre/60 underline-offset-4">
          “El fenómeno tumular y megalítico en Galicia: distribución geográfica, cartografía
          analítica y prospección remota mediante LiDAR”
        </span>
        . En R. del Cueto, F. & De Blas Cortina, M. Á. (Eds.),{" "}
        <em>
          El afán de eternidad de las sociedades neolíticas: una actualización del megalitismo en
          Galicia y Asturias
        </em>{" "}
        (pp. 87–110). Salas: Fundación Valdés Salas.
      </>
    ),
  },
];

const press: Pub[] = [
  {
    img: "/images/desperta_ferro_56.jpg",
    imgAlt: "Revista Despertaferro Arqueología & Historia nº 56",
    link: "https://investigacion.usc.es/documentos/69d6a4b3a94fcb220764979f?lang=es",
    citation: (
      <>
        <strong className="text-foreground">Carrero Pazos, M.</strong>,{" "}
        <strong className="text-foreground">Rodríguez del Cueto, F.</strong>{" "}
        <span className="text-foreground underline decoration-ochre/60 underline-offset-4">
          La primera arquitectura monumental de la Iberia atlántica. Formas, territorios y
          expansiones
        </span>
        . <em>Revista Despertaferro</em>, nº 56, pp. 42–49.
      </>
    ),
  },
];

function PubCard({ pub }: { pub: Pub }) {
  return (
    <a
      href={pub.link}
      target="_blank"
      rel="noreferrer"
      className="group flex gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {pub.img && (
        <img
          src={pub.img}
          alt={pub.imgAlt ?? ""}
          loading="lazy"
          className="hidden w-24 shrink-0 rounded-xl object-cover sm:block"
        />
      )}
      <p className="leading-relaxed text-muted-foreground">{pub.citation}</p>
    </a>
  );
}

function Section({ title, pubs }: { title: string; pubs: Pub[] }) {
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="font-display text-3xl text-foreground">{title}</h2>
      <div className="mt-6 space-y-4">
        {pubs.map((p, i) => (
          <PubCard key={i} pub={p} />
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Publications"
        title="Published works"
        lead="Journal articles, book chapters, conference proceedings and press from the MegaLands team."
      />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Section title="Conferences and workshop publications" pubs={conferences} />
        <Section title="Journal articles" pubs={articles} />
        <Section title="Book chapters" pubs={chapters} />
        <Section title="Press & Outreach" pubs={press} />
        <p className="mt-14 rounded-2xl bg-secondary/70 p-6 text-sm text-muted-foreground">
          This section is regularly updated.
        </p>
      </div>
    </PageShell>
  );
}
