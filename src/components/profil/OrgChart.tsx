import Image from "next/image";
import { Crown, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { dusunStruktur, kaur, kepalaDesa, sekretaris, seksi, type Jabatan } from "@/data/struktur";

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

function Node({ j, tone = "white" }: { j: Jabatan; tone?: "white" | "forest" | "gold" }) {
  const styles = {
    white: "bg-white border-line",
    forest: "bg-forest-800 border-forest-700 text-white",
    gold: "bg-gold-50 border-gold-200",
  }[tone];
  return (
    <div className={`rounded-2xl border px-4 py-3 shadow-[var(--shadow-soft)] ${styles}`}>
      <p
        className={`text-[11px] font-semibold tracking-wider uppercase ${
          tone === "forest" ? "text-gold-300" : "text-gold-600"
        }`}
      >
        {j.jabatan}
      </p>
      <p className={`mt-0.5 font-semibold ${tone === "forest" ? "text-white" : "text-ink"}`}>{j.nama}</p>
    </div>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
      <span className="h-px flex-1 bg-line" />
      {children}
      <span className="h-px flex-1 bg-line" />
    </p>
  );
}

export function OrgChart() {
  return (
    <div className="space-y-10">
      {/* Puncak: Kepala Desa + BPD */}
      <Reveal className="flex flex-col items-center">
        <div className="relative flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex items-center gap-4 rounded-3xl bg-forest-900 p-3 pr-6 text-white shadow-[var(--shadow-lift)]">
            <Image
              src={kepalaDesa.foto}
              alt={`Foto ${kepalaDesa.nama}`}
              width={72}
              height={72}
              className="size-16 rounded-2xl object-cover ring-2 ring-gold-400"
            />
            <div>
              <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-gold-300 uppercase">
                <Crown size={12} aria-hidden /> Kepala Desa
              </p>
              <p className="font-display text-lg font-semibold">{kepalaDesa.nama}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-forest-300 bg-forest-50 px-4 py-3 text-center">
            <p className="text-[11px] font-semibold tracking-wider text-forest-600 uppercase">Mitra</p>
            <p className="text-sm font-semibold text-forest-900">BPD</p>
          </div>
        </div>
        <span className="h-8 w-px bg-forest-300" aria-hidden />
      </Reveal>

      {/* Sekretariat & Seksi */}
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="rounded-[1.75rem] border border-line bg-sand/60 p-5 sm:p-6">
          <GroupLabel>Sekretariat</GroupLabel>
          <Node j={sekretaris} tone="forest" />
          <div className="mt-3 grid gap-3 border-l-2 border-forest-200 pl-4 sm:grid-cols-3 sm:border-l-0 sm:pl-0">
            {kaur.map((k) => (
              <Node key={k.jabatan} j={k} />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[1.75rem] border border-line bg-sand/60 p-5 sm:p-6">
          <GroupLabel>Pelaksana Teknis</GroupLabel>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {seksi.map((s) => (
              <Node key={s.jabatan} j={s} tone="gold" />
            ))}
          </div>
        </Reveal>
      </div>

      {/* Kewilayahan */}
      <div>
        <GroupLabel>Pelaksana Kewilayahan</GroupLabel>
        <div className="grid gap-5 md:grid-cols-3">
          {dusunStruktur.map((d, i) => (
            <Reveal key={d.dusun} delay={i * 0.08} className="card overflow-hidden">
              <div className="bg-gradient-to-br from-forest-800 to-forest-900 p-5 text-white">
                <p className="text-[11px] font-semibold tracking-wider text-gold-300 uppercase">
                  Kepala Dusun {d.dusun}
                </p>
                <p className="mt-0.5 font-display text-xl font-semibold">{d.kepala}</p>
              </div>
              <div className="p-5">
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold text-muted">
                  <Users size={14} aria-hidden /> {d.rk.length} Rukun Kampung
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {d.rk.map((nama, idx) => (
                    <li key={nama} className="rounded-xl bg-sand px-3 py-2">
                      <span className="block text-[10px] font-bold tracking-wider text-gold-600">
                        RK {roman[idx]}
                      </span>
                      <span className="text-sm font-medium text-ink">{nama}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
