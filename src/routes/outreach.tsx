import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach Activities — MegaLands" },
      {
        name: "description",
        content:
          "MegaLands outreach activities: conferences, talks and media coverage, regularly updated with project news.",
      },
      { property: "og:title", content: "Outreach Activities — MegaLands" },
      {
        property: "og:description",
        content:
          "Conferences, talks, press releases and media coverage from the MegaLands project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Outreach,
});

function Outreach() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Outreach"
        title="Outreach activities"
        lead="Conferences, talks and media from the MegaLands project."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl text-foreground">Conferences, talks and media</h2>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">2026</p>
          <article className="mt-4 rounded-2xl border border-border bg-card p-7 shadow-sm">
            <p className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Carrero-Pazos, M.</span> (2026).{" "}
              <em>
                DISCOVER: Automatic Detection of Megalithic Monuments using LiDAR and Artificial
                Intelligence
              </em>
              . Project Highlight presented at the{" "}
              <span className="font-semibold text-foreground">
                Landscape Archaeology Conference (LAC 2026)
              </span>
              , Bamberg, 18–21 March 2026.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-black shadow-md">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-contain"
                poster="/images/discover/discover_hero_bg.jpeg"
              >
                <source
                  src="/images/discover/CarreroPazos_ProjectHighlight_DISCOVER.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>
        </div>

        <p className="mt-12 rounded-2xl bg-secondary/70 p-6 text-sm leading-relaxed text-muted-foreground">
          This section will be regularly updated with project outreach activities, press releases,
          and media coverage.
        </p>
      </section>
    </PageShell>
  );
}
