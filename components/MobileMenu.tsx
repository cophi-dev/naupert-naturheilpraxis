"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navItems } from "@/lib/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-paper-deep"
      >
        <span className="relative block h-3 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>

      <nav
        id={panelId}
        aria-label="Hauptnavigation"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-paper"
      >
        <ul className="mx-auto max-w-6xl px-5 py-3">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-xl font-medium tracking-tight"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
