import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function Collapsible({
  badge,
  title,
  children,
  defaultOpen = false,
}: {
  badge?: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {badge && (
          <span className="shrink-0 rounded-full bg-accent px-3 py-1 font-display text-sm text-accent-foreground">
            {badge}
          </span>
        )}
        <span className="flex-1 text-base font-semibold text-foreground md:text-lg">
          {title}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
