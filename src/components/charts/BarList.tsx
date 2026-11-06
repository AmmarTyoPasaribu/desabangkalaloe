"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BarChart3, Table2 } from "lucide-react";

export type Datum = { label: string; value: number };

const nf = new Intl.NumberFormat("id-ID");
const rupiah = (n: number) => "Rp" + nf.format(n);
const short = (n: number) =>
  n >= 1e9 ? `${(n / 1e9).toLocaleString("id-ID", { maximumFractionDigits: 2 })} M` :
  n >= 1e6 ? `${(n / 1e6).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt` : nf.format(n);

/**
 * Bar horizontal berperingkat (satu warna — besaran, bukan identitas).
 * Hover/fokus menampilkan detail; tombol "Tabel" memberi tampilan data mentah.
 */
export function BarList({
  data,
  unit = "jiwa",
  caption,
  sort = true,
}: {
  data: Datum[];
  unit?: "jiwa" | "rupiah";
  caption: string;
  sort?: boolean;
}) {
  const [view, setView] = useState<"chart" | "table">("chart");
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const rows = sort ? [...data].sort((a, b) => b.value - a.value) : data;
  const total = rows.reduce((a, d) => a + d.value, 0);
  const max = Math.max(...rows.map((d) => d.value));
  const fmt = (n: number) => (unit === "rupiah" ? rupiah(n) : `${nf.format(n)} jiwa`);
  const fmtShort = (n: number) => (unit === "rupiah" ? short(n) : nf.format(n));
  const pct = (n: number) => ((n / total) * 100).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + "%";

  return (
    <figure>
      <div className="mb-5 flex items-center justify-between gap-4">
        <figcaption className="text-sm text-muted">
          Total <strong className="text-ink tabular-nums">{fmt(total)}</strong>
        </figcaption>
        <div className="inline-flex rounded-full bg-sand p-1 text-xs font-semibold" role="group" aria-label="Pilih tampilan">
          {(["chart", "table"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
                view === v ? "bg-white text-forest-900 shadow-sm" : "text-muted hover:text-ink"
              }`}
            >
              {v === "chart" ? <BarChart3 size={14} /> : <Table2 size={14} />}
              {v === "chart" ? "Grafik" : "Tabel"}
            </button>
          ))}
        </div>
      </div>

      {view === "chart" ? (
        <ul className="space-y-1" aria-label={caption}>
          {rows.map((d, i) => {
            const w = Math.max((d.value / max) * 100, 0.8);
            const isActive = active === i;
            const dim = active !== null && !isActive;
            return (
              <li
                key={d.label}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                aria-label={`${d.label}: ${fmt(d.value)}, ${pct(d.value)}`}
                className={`group relative grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 rounded-xl px-3 py-2.5 outline-none transition-all sm:grid-cols-[12rem_1fr_6.5rem] ${
                  isActive ? "bg-forest-50" : ""
                } ${dim ? "opacity-55" : ""}`}
              >
                <span className="text-sm leading-snug font-medium text-ink">{d.label}</span>
                <span className="text-right text-sm font-semibold text-ink tabular-nums sm:order-last">
                  {fmtShort(d.value)}
                  <span className="ml-1.5 text-xs font-normal text-muted">{pct(d.value)}</span>
                </span>
                <div className="col-span-2 h-3 overflow-hidden rounded-full bg-sand sm:col-span-1">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-forest-600 to-forest-500"
                    initial={reduce ? false : { width: 0 }}
                    whileInView={{ width: `${w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    style={reduce ? { width: `${w}%` } : undefined}
                  />
                </div>
                {isActive && (
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute -top-9 right-3 z-10 rounded-lg bg-forest-950 px-3 py-1.5 text-xs whitespace-nowrap text-white shadow-lg"
                  >
                    {d.label}: <strong className="tabular-nums">{fmt(d.value)}</strong> · {pct(d.value)}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full text-sm">
            <caption className="sr-only">{caption}</caption>
            <thead className="bg-sand text-left text-xs tracking-wider text-muted uppercase">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Kategori</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">{unit === "rupiah" ? "Anggaran" : "Jumlah"}</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Persentase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((d) => (
                <tr key={d.label} className="hover:bg-paper">
                  <th scope="row" className="px-4 py-3 text-left font-medium">{d.label}</th>
                  <td className="px-4 py-3 text-right tabular-nums">{fmt(d.value)}</td>
                  <td className="px-4 py-3 text-right text-muted tabular-nums">{pct(d.value)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-sand font-semibold">
              <tr>
                <th scope="row" className="px-4 py-3 text-left">Total</th>
                <td className="px-4 py-3 text-right tabular-nums">{fmt(total)}</td>
                <td className="px-4 py-3 text-right tabular-nums">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </figure>
  );
}

/** Bar bertumpuk 100% untuk komposisi (≤ 4 kategori) — selalu disertai legenda bernilai. */
export function StackedShare({ data, colors }: { data: Datum[]; colors: string[] }) {
  const total = data.reduce((a, d) => a + d.value, 0);
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      <div className="flex h-5 gap-0.5 overflow-hidden rounded-full" role="img" aria-label={data.map((d) => `${d.label} ${((d.value / total) * 100).toFixed(1)}%`).join(", ")}>
        {data.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ width: 0 }}
            whileInView={{ width: `${(d.value / total) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="h-full min-w-1 transition-opacity first:rounded-l-full last:rounded-r-full"
            style={{ background: colors[i], opacity: active !== null && active !== i ? 0.45 : 1 }}
          />
        ))}
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {data.map((d, i) => (
          <li
            key={d.label}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`rounded-2xl border p-4 transition-colors ${active === i ? "border-forest-300 bg-forest-50" : "border-line bg-white"}`}
          >
            <p className="flex items-center gap-2 text-sm text-muted">
              <span className="size-3 shrink-0 rounded-full" style={{ background: colors[i] }} aria-hidden />
              {d.label}
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-ink tabular-nums">{rupiah(d.value)}</p>
            <p className="text-xs text-muted tabular-nums">{((d.value / total) * 100).toLocaleString("id-ID", { maximumFractionDigits: 1 })}% dari total</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
