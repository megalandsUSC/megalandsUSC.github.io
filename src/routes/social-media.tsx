import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Twitter } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media — MegaLands" },
      {
        name: "description",
        content:
          "Follow the MegaLands project on social media: @MegaLandsUSC on X and @proxecto_megalandsusc on Instagram.",
      },
      { property: "og:title", content: "Social Media — MegaLands" },
      {
        property: "og:description",
        content:
          "Follow @MegaLandsUSC on X and @proxecto_megalandsusc on Instagram for the latest project news, fieldwork updates and publications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SocialMedia,
});

const tweets = [
  {
    text: "🪨 New fieldwork season begins in Galicia! The team is on-site recording newly detected megalithic monuments identified by our AI-assisted LiDAR analysis. Stay tuned for updates.",
    tags: "#Megalithism #LiDAR #Archaeology",
  },
  {
    text: "📢 Our paper “Spatial insights of the tumular phenomenon in Serra do Laboreiro region” is now available in Journal of Archaeological Science: Reports.",
    tags: "#OpenAccess #PrehistoricLandscapes",
  },
];

const instaPosts = [
  {
    text: "Morning mist over the moors of Serra do Laboreiro. One of the breathtaking landscapes where our team is working to document the megalithic heritage.",
    tags: "#Galicia #Megalithism #FieldWork",
  },
  {
    text: "LiDAR visualization of a dolmen cluster in NW Iberia. The AI-assisted analysis helps identify previously unknown structures hidden under dense vegetation.",
    tags: "#RemoteSensing #LiDAR #AI",
  },
];

function SocialMedia() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Social Media"
        title="Follow the project"
        lead="Keep up to date with fieldwork news, publications, events, and outreach activities."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap gap-4">
          <a
            href="https://x.com/MegaLandsUSC"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Twitter size={16} /> @MegaLandsUSC
          </a>
          <a
            href="https://www.instagram.com/proxecto_megalandsusc/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
          >
            <Instagram size={16} /> @proxecto_megalandsusc
          </a>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-3 font-display text-3xl text-foreground">
                <Twitter size={22} className="text-ochre" /> X / Twitter
              </h2>
              <a
                href="https://x.com/MegaLandsUSC"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-ochre hover:underline"
              >
                Follow @MegaLandsUSC →
              </a>
            </div>
            <div className="mt-6 space-y-4">
              {tweets.map((t, i) => (
                <article key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">@MegaLandsUSC</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.text}</p>
                  <p className="mt-3 text-sm font-medium text-ochre">{t.tags}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-3 font-display text-3xl text-foreground">
                <Instagram size={22} className="text-ochre" /> Instagram
              </h2>
              <a
                href="https://www.instagram.com/proxecto_megalandsusc/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-ochre hover:underline"
              >
                Follow @proxecto_megalandsusc →
              </a>
            </div>
            <div className="mt-6 space-y-4">
              {instaPosts.map((p, i) => (
                <article key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">@proxecto_megalandsusc</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    <span className="mr-2">📷</span>
                    {p.text}
                  </p>
                  <p className="mt-3 text-sm font-medium text-ochre">{p.tags}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
