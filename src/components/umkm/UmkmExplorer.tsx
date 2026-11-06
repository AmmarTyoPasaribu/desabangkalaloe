"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X, SearchX, MapPin, Briefcase } from "lucide-react";
import type { Kategori, Umkm } from "@/data/umkm";
import { dusunList, type Dusun } from "@/data/site";

type DusunFilter = "Semua" | Dusun;

const initials = (n: string) =>
  n
    .replace(/^(Hj?\.|H\.|M\.|Muh\.)\s*/i, "")
    .split(/[\s,]+/)
    .filter((w) => /^[A-Za-z]/.test(w) && !w.includes("."))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase() || n[0];

export function UmkmExplorer({ data }: { data: Umkm[] }) {
  const [q, setQ] = useState("");
  const [dusun, setDusun] = useState<DusunFilter>("Semua");
  const [kategori, setKategori] = useState<Kategori | "Semua">("Semua");
  const query = useDeferredValue(q.trim().toLowerCase());

  const kategoriList = useMemo(() => {
    const count = new Map<Kategori, number>();
    data.forEach((d) => count.set(d.kategori, (count.get(d.kategori) ?? 0) + 1));
    return [...count.entries()].sort((a, b) => b[1] - a[1]);
  }, [data]);

  const filtered = useMemo(
    () =>
      data.filter(
        (d) =>
          (dusun === "Semua" || d.dusun === dusun) &&
          (kategori === "Semua" || d.kategori === kategori) &&
          (!query ||
            d.nama.toLowerCase().includes(query) ||
            d.usaha.toLowerCase().includes(query) ||
            d.kategori.toLowerCase().includes(query) ||
            d.pekerjaan.toLowerCase().includes(query)),
      ),
    [data, dusun, kategori, query],
  );

  const countDusun = (x: DusunFilter) => (x === "Semua" ? data.length : data.filter((d) => d.dusun === x).length);
  const reset = () => {
    setQ("");
    setDusun("Semua");
    setKategori("Semua");
  };
  const hasFilter = q || dusun !== "Semua" || kategori !== "Semua";

  return (
    <div>
      {/* Kontrol filter */}
      <div className="card p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Cari UMKM</span>
            <Search size={18} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted" aria-hidden />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari nama pelaku usaha atau jenis usaha…"
              className="w-full rounded-full border border-line bg-paper py-3 pr-11 pl-11 text-sm outline-none transition-shadow placeholder:text-muted/70 focus:border-forest-300 focus:ring-4 focus:ring-forest-100"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-sand"
                aria-label="Hapus pencarian"
              >
                <X size={16} />
              </button>
            )}
          </label>
          <div role="tablist" aria-label="Filter dusun" className="scrollbar-none flex gap-1 overflow-x-auto rounded-full bg-sand p-1">
            {(["Semua", ...dusunList] as DusunFilter[]).map((d) => (
              <button
                key={d}
                role="tab"
                type="button"
                aria-selected={dusun === d}
                onClick={() => setDusun(d)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  dusun === d ? "text-white" : "text-muted hover:text-ink"
                }`}
              >
                {dusun === d && (
                  <motion.span layoutId="dusun-pill" className="absolute inset-0 -z-0 rounded-full bg-forest-900" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                )}
                <span className="relative">
                  {d} <span className={dusun === d ? "text-gold-300" : "text-muted/70"}>{countDusun(d)}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter kategori usaha">
          {([["Semua", data.length], ...kategoriList] as [Kategori | "Semua", number][]).map(([k, n]) => (
            <button
              key={k}
              type="button"
              aria-pressed={kategori === k}
              onClick={() => setKategori(k)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                kategori === k
                  ? "border-gold-400 bg-gold-100 text-forest-950"
                  : "border-line bg-white text-muted hover:border-forest-200 hover:text-ink"
              }`}
            >
              {k} <span className="opacity-60">· {n}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-4 flex items-center justify-between text-sm">
        <p className="text-muted" aria-live="polite">
          Menampilkan <strong className="text-ink">{filtered.length}</strong> dari {data.length} UMKM
        </p>
        {hasFilter && (
          <button type="button" onClick={reset} className="font-semibold text-forest-700 underline-offset-4 hover:underline">
            Reset filter
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="card flex flex-col items-center px-6 py-16 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-sand text-muted">
            <SearchX size={28} />
          </span>
          <p className="mt-4 font-display text-xl font-semibold text-forest-900">Tidak ada hasil</p>
          <p className="mt-1 max-w-sm text-sm text-muted">Coba kata kunci lain atau hapus filter yang aktif.</p>
          <button type="button" onClick={reset} className="btn-forest mt-6">Reset filter</button>
        </div>
      ) : (
        <>
          {/* Desktop: tabel */}
          <div className="card hidden overflow-hidden md:block">
            <table className="w-full text-sm">
              <caption className="sr-only">Daftar UMKM Desa Bangkalaloe</caption>
              <thead className="bg-sand text-left text-xs tracking-wider text-muted uppercase">
                <tr>
                  <th scope="col" className="w-14 px-5 py-3.5 font-semibold">No</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Pelaku usaha</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Bidang usaha</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Kategori</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Pekerjaan</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Dusun</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((d, i) => (
                  <tr key={d.id} className="transition-colors hover:bg-paper">
                    <td className="px-5 py-3.5 text-muted tabular-nums">{i + 1}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold ${
                            d.jk === "P" ? "bg-gold-100 text-gold-700" : "bg-forest-100 text-forest-700"
                          }`}
                          aria-hidden
                        >
                          {initials(d.nama)}
                        </span>
                        <span>
                          <span className="block font-semibold text-ink">{d.nama}</span>
                          <span className="text-xs text-muted">{d.jk === "P" ? "Perempuan" : "Laki-laki"}</span>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-ink">{d.usaha}</td>
                    <td className="px-5 py-3.5">
                      <span className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-forest-800">{d.kategori}</span>
                    </td>
                    <td className="px-5 py-3.5 text-muted">{d.pekerjaan}</td>
                    <td className="px-5 py-3.5 text-muted">{d.dusun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: kartu */}
          <ul className="grid gap-3 md:hidden">
            <AnimatePresence initial={false}>
              {filtered.map((d) => (
                <motion.li
                  key={d.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="card flex items-start gap-4 p-4"
                >
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold ${
                      d.jk === "P" ? "bg-gold-100 text-gold-700" : "bg-forest-100 text-forest-700"
                    }`}
                    aria-hidden
                  >
                    {initials(d.nama)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{d.nama}</p>
                    <p className="mt-0.5 text-sm text-forest-800">{d.usaha}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} aria-hidden /> {d.dusun}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Briefcase size={12} aria-hidden /> {d.pekerjaan}
                      </span>
                      <span>{d.jk === "P" ? "Perempuan" : "Laki-laki"}</span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
  );
}
