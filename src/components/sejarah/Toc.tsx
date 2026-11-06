"use client";

import { useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, ListTree } from "lucide-react";
import type { TocItem } from "@/content/sejarah";
import { useScrollSpy } from "@/components/ui/SectionTabs";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-gold-400 to-gold-500"
      style={{ scaleX }}
    />
  );
}

function flatten(items: TocItem[]): TocItem[] {
  return items.flatMap((i) => [i, ...(i.children ? flatten(i.children) : [])]);
}

function TocList({ items, active, onNavigate }: { items: TocItem[]; active: string; onNavigate?: () => void }) {
  const parentOf = useMemo(() => {
    const map = new Map<string, string>();
    items.forEach((p) => p.children?.forEach((c) => map.set(c.id, p.id)));
    return map;
  }, [items]);
  const activeParent = parentOf.get(active) ?? active;

  return (
    <ol className="space-y-0.5 text-sm">
      {items.map((it, i) => {
        const isActive = active === it.id;
        const open = activeParent === it.id;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={`flex gap-3 rounded-xl px-3 py-2 transition-colors ${
                isActive ? "bg-forest-900 font-semibold text-white" : open ? "font-semibold text-forest-900" : "text-muted hover:bg-sand hover:text-ink"
              }`}
            >
              <span className={`tabular-nums ${isActive ? "text-gold-300" : "text-gold-600"}`}>{String(i + 1).padStart(2, "0")}</span>
              {it.label}
            </a>
            {it.children && (
              <ol className={`ml-[1.35rem] overflow-hidden border-l border-line pl-3 transition-all ${open ? "my-1 max-h-96" : "max-h-0"}`}>
                {it.children.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      onClick={onNavigate}
                      aria-current={active === c.id ? "location" : undefined}
                      className={`relative block rounded-lg px-3 py-1.5 transition-colors ${
                        active === c.id ? "font-semibold text-forest-800" : "text-muted hover:text-ink"
                      }`}
                    >
                      {active === c.id && <span className="absolute top-1/2 -left-[0.83rem] h-5 w-0.5 -translate-y-1/2 rounded bg-gold-500" />}
                      {c.label}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function Toc({ items }: { items: TocItem[] }) {
  const ids = useMemo(() => flatten(items).map((i) => i.id), [items]);
  const active = useScrollSpy(ids, 160);
  const [open, setOpen] = useState(false);
  const current = flatten(items).find((i) => i.id === active);

  return (
    <>
      {/* Mobile / tablet */}
      <div className="no-print sticky top-[5.25rem] z-30 lg:hidden">
        <div className="rounded-2xl border border-line bg-paper/90 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
          >
            <span className="flex min-w-0 items-center gap-2 text-sm">
              <ListTree size={16} className="shrink-0 text-gold-600" aria-hidden />
              <span className="text-muted">Daftar isi:</span>
              <span className="truncate font-semibold text-forest-900">{current?.label}</span>
            </span>
            <ChevronDown size={18} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
          </button>
          {open && (
            <div className="max-h-[60vh] overflow-y-auto border-t border-line p-2">
              <TocList items={items} active={active} onNavigate={() => setOpen(false)} />
            </div>
          )}
        </div>
      </div>

      {/* Desktop */}
      <nav aria-label="Daftar isi" className="no-print sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 lg:block">
        <p className="mb-3 flex items-center gap-2 px-3 text-xs font-bold tracking-[0.18em] text-gold-600 uppercase">
          <ListTree size={14} aria-hidden /> Daftar Isi
        </p>
        <TocList items={items} active={active} />
      </nav>
    </>
  );
}
