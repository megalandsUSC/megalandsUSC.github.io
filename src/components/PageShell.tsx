import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="animate-rise text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
          {eyebrow}
        </p>
        <h1 className="animate-rise-slow mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="animate-rise-slow mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
