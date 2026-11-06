"use client";

import { useEffect, useState } from "react";

/** Mengembalikan id section yang sedang terlihat di viewport. */
export function useScrollSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);
  return active;
}

/** Bar navigasi section yang menempel (sticky) di bawah navbar. */
export function SectionTabs({ items }: { items: { id: string; label: string }[] }) {
  const active = useScrollSpy(items.map((i) => i.id));
  return (
    <div className="no-print sticky top-[5.25rem] z-30 py-3 sm:top-24">
      <nav aria-label="Bagian halaman" className="container-page">
        <ul className="scrollbar-none mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-paper/85 p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          {items.map((it) => (
            <li key={it.id} className="shrink-0">
              <a
                href={`#${it.id}`}
                aria-current={active === it.id ? "true" : undefined}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === it.id ? "bg-forest-900 text-white" : "text-muted hover:text-forest-900"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
