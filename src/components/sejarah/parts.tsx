import type { ReactNode } from "react";
import { Info, Quote } from "lucide-react";

export function Note({ children, title = "Catatan" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="my-8 rounded-2xl border border-gold-200 bg-gold-50/70 p-5 sm:p-6">
      <p className="mb-2 flex items-center gap-2 font-sans text-sm font-bold tracking-wide text-gold-700 uppercase">
        <Info size={16} aria-hidden /> {title}
      </p>
      <div className="text-[0.975rem] leading-relaxed text-ink/85 [&>p:last-child]:mb-0 [&>p]:mb-3 [&>ul]:mb-0">
        {children}
      </div>
    </aside>
  );
}

/** Pantun / kelong: bahasa Makassar di kiri, terjemahan di kanan. */
export function Verse({ lines, caption }: { lines: [string, string][]; caption?: string }) {
  return (
    <figure className="my-10 overflow-hidden rounded-3xl bg-forest-900 text-white">
      <div className="grid gap-px bg-white/10 sm:grid-cols-2">
        <div className="bg-forest-900 p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Bahasa Makassar</p>
          {lines.map(([a]) => (
            <p key={a} className="mb-1 font-display text-xl leading-relaxed italic">
              {a}
            </p>
          ))}
        </div>
        <div className="bg-forest-900 p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Terjemahan</p>
          {lines.map(([, b]) => (
            <p key={b} className="mb-1 text-lg leading-relaxed text-white/80">
              {b}
            </p>
          ))}
        </div>
      </div>
      {caption && <figcaption className="border-t border-white/10 px-6 py-3 text-sm text-white/60 sm:px-8">{caption}</figcaption>}
    </figure>
  );
}

export function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="my-10 border-l-4 border-gold-400 pl-6">
      <Quote className="mb-3 text-gold-400" size={28} aria-hidden />
      <p className="font-display text-2xl leading-snug text-forest-900 italic">{children}</p>
      {cite && <cite className="mt-3 block text-sm text-muted not-italic">— {cite}</cite>}
    </blockquote>
  );
}

export function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: (string | number)[][];
  caption: string;
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)]">
      <table className="w-full min-w-[34rem] text-left text-[0.925rem]">
        <caption className="sr-only">{caption}</caption>
        <thead className="sticky top-0 bg-forest-900 text-white">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-sans text-xs font-semibold tracking-wider whitespace-nowrap uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((r, i) => (
            <tr key={i} className="even:bg-paper/60 hover:bg-gold-50/60">
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="w-16 px-4 py-2.5 font-semibold text-gold-700 tabular-nums">
                    {c}
                  </th>
                ) : (
                  <td key={j} className={`px-4 py-2.5 ${c === "" ? "text-line" : "text-ink"}`}>
                    {c === "" ? "—" : c}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
