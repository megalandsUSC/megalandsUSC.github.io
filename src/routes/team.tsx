import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — MegaLands" },
      {
        name: "description",
        content:
          "Meet the MegaLands team: principal investigators Miguel Carrero-Pazos and Noemí Silva-Sánchez, plus the research and working team members.",
      },
      { property: "og:title", content: "Team — MegaLands" },
      {
        property: "og:description",
        content:
          "The multidisciplinary MegaLands team across USC, CISPAC, CRETUS, CESGA, CITIUS, UNIOVI, St Andrews and Aberdeen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Team,
});

type Member = {
  role: string;
  name: string;
  affiliation: string;
  photo: string;
  link: string;
};

const pis: Member[] = [
  {
    role: "PI 1",
    name: "Miguel Carrero-Pazos",
    affiliation: "USC / CISPAC",
    photo: "/images/MCarrero.jpg",
    link: "https://orcid.org/0000-0001-9203-9954",
  },
  {
    role: "PI 2",
    name: "Noemí Silva-Sánchez",
    affiliation: "USC / CRETUS",
    photo: "/images/NSilva.jpg",
    link: "https://orcid.org/0000-0001-6355-7285",
  },
];

const research: Member[] = [
  {
    role: "RT 1",
    name: "María José Rodríguez-Malmierca",
    affiliation: "CESGA",
    photo: "/images/MJRodriguezMalmierca.jpg",
    link: "https://www.cesga.es/maria-jose-rodriguez-malmierca/",
  },
  {
    role: "RT 2",
    name: "José Carlos Cabaleiro-Domínguez",
    affiliation: "USC / CITIUS",
    photo: "/images/JCabaleiro.jpg",
    link: "https://orcid.org/0000-0002-5674-5162",
  },
  {
    role: "RT 3",
    name: "Fernando Rodríguez-del Cueto",
    affiliation: "UNIOVI / DEMETER",
    photo: "/images/FRDelCueto.jpg",
    link: "https://orcid.org/0000-0002-2721-7221",
  },
  {
    role: "RT 4",
    name: "Antonio Martínez-Cortizas",
    affiliation: "USC / CRETUS",
    photo: "/images/AMCortizas.jpg",
    link: "https://orcid.org/0000-0003-0430-5760",
  },
];

const working: Member[] = [
  {
    role: "WT 1",
    name: "Timothy Kinnaird",
    affiliation: "University of Saint Andrews",
    photo: "/images/TKinnaird.jpg",
    link: "https://www.st-andrews.ac.uk/earth-sciences/people/tk17/",
  },
  {
    role: "WT 2",
    name: "Timothy Mighall",
    affiliation: "University of Aberdeen",
    photo: "/images/TMighall.jpg",
    link: "https://www.abdn.ac.uk/people/t.mighall",
  },
  {
    role: "WT 3",
    name: "Alia Vázquez-Martínez",
    affiliation: "Independent researcher",
    photo: "/images/AVazquezMartinez.jpg",
    link: "https://orcid.org/0000-0003-1571-2759",
  },
  {
    role: "WT 4",
    name: "Raúl Pérez-Torrado",
    affiliation: "FPI Predoctoral Researcher — USC / CRETUS",
    photo: "/images/RPerezTorrado.jpg",
    link: "https://orcid.org/0000-0003-1571-2759",
  },
];

function MemberCard({ m }: { m: Member }) {
  return (
    <a
      href={m.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={m.photo}
          alt={`Photo of ${m.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ochre">{m.role}</p>
        <h3 className="mt-1.5 font-display text-xl leading-snug text-foreground group-hover:underline">
          {m.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{m.affiliation}</p>
      </div>
    </a>
  );
}

function Team() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Team"
        title="A multidisciplinary team"
        lead="Two Principal Investigators supported by research and working teams across Spain and the UK."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl text-foreground">Project PIs</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-3xl">
          {pis.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>

        <h2 className="mt-20 font-display text-3xl text-foreground">Research team members</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {research.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>

        <h2 className="mt-20 font-display text-3xl text-foreground">Working team members</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {working.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
