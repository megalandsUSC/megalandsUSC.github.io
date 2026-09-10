import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/methodology", label: "Methodology" },
  { to: "/work-packages", label: "WPs" },
  { to: "/team", label: "Team" },
  { to: "/outreach", label: "Outreach" },
  { to: "/social-media", label: "Social Media" },
  { to: "/publications", label: "Publications" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5 font-display text-2xl tracking-tight text-foreground">
          <img
            src="/images/MegaLands_Logo.jpeg"
            alt="MegaLands Logo"
            className="h-8 w-8 rounded-full border border-border/80 bg-white object-contain p-0.5 shadow-xs transition-transform duration-200 group-hover:scale-105"
          />
          <span>
            Mega<span className="text-ochre">Lands</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
                  pathname === l.to
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
