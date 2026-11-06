import type { Metadata } from "next";
import {
  BookHeart,
  Briefcase,
  Home,
  MapPinned,
  School,
  Tractor,
  UserX,
  Users,
  Wallet,
  Receipt,
  TrendingUp,
  ArrowLeftRight,
  PiggyBank,
  ChevronDown,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { SectionTabs } from "@/components/ui/SectionTabs";
import { BarList, StackedShare } from "@/components/charts/BarList";
import { monografi } from "@/data/site";
import {
  apbdesTahun,
  belanja,
  pekerjaan,
  pembiayaan,
  pendapatan,
  pendidikan,
  pendidikanKhusus,
  ringkasanApbdes,
  sarana,
  tidakSekolah,
} from "@/data/infografis";

export const metadata: Metadata = {
  title: "Infografis",
  description: "Data kependudukan, pendidikan, sarana prasarana, dan APBDes Desa Bangkalaloe dalam grafik interaktif.",
};

const nf = new Intl.NumberFormat("id-ID");
const rp = (n: number) => (n < 0 ? "−Rp" : "Rp") + nf.format(Math.abs(n));

const tabs = [
  { id: "penduduk", label: "Penduduk" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "sarana", label: "Sarana" },
  { id: "apbdes", label: "APBDes" },
];

export default function InfografisPage() {
  const r = ringkasanApbdes();
  const pendudukCards = [
    { label: "Total penduduk", value: monografi.penduduk, unit: "jiwa", icon: Users },
    { label: "Kepala keluarga", value: monografi.kepalaKeluarga, unit: "KK", icon: Home },
    { label: "Keluarga petani", value: monografi.keluargaPetani, unit: "KK", icon: Tractor },
    { label: "Dusun / RK", value: monografi.dusun, unit: `dusun · ${monografi.rk} RK`, icon: MapPinned },
  ];
  const belanjaPerBidang = belanja.map((b) => ({
    label: b.bidang,
    value: b.kegiatan.reduce((a, k) => a + k.value, 0),
  }));
  const ringkasan = [
    { label: "Pendapatan", value: r.totalPendapatan, icon: Wallet, tone: "bg-forest-50 text-forest-700" },
    { label: "Belanja", value: r.totalBelanja, icon: Receipt, tone: "bg-gold-50 text-gold-700" },
    { label: "Surplus", value: r.surplus, icon: TrendingUp, tone: "bg-forest-50 text-forest-700" },
    { label: "Pembiayaan netto", value: r.pembiayaanNetto, icon: ArrowLeftRight, tone: "bg-sand text-clay-600" },
    { label: "SiLPA", value: r.silpa, icon: PiggyBank, tone: "bg-sand text-forest-800" },
  ];

  return (
    <>
      <PageHero
        crumb="Infografis"
        eyebrow="Data Desa"
        title={
          <>
            Bangkalaloe dalam <em className="text-gold-300">angka</em>
          </>
        }
        description="Demografi, pendidikan, sarana prasarana, dan anggaran desa — disajikan ringkas dan mudah dibaca."
        image="/images/home/hero.jpg"
        imageAlt="Panorama Desa Bangkalaloe"
      />

      <SectionTabs items={tabs} />

      {/* ---------------- PENDUDUK ---------------- */}
      <section id="penduduk" className="scroll-mt-14 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Kependudukan" title="Jumlah penduduk" />
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {pendudukCards.map((c) => (
              <StaggerItem key={c.label} className="card p-5 sm:p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-forest-50 text-forest-700">
                  <c.icon size={22} aria-hidden />
                </span>
                <p className="mt-5 text-sm text-muted">{c.label}</p>
                <p className="mt-1 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
                  <Counter value={c.value} />
                </p>
                <p className="text-xs font-medium text-muted">{c.unit}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="card mt-8 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gold-50 text-gold-700">
                <Briefcase size={20} aria-hidden />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-forest-900">Berdasarkan pekerjaan</h3>
                <p className="text-sm text-muted">Petani mendominasi — hampir separuh penduduk.</p>
              </div>
            </div>
            <BarList data={pekerjaan} caption="Jumlah penduduk berdasarkan pekerjaan" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- PENDIDIKAN ---------------- */}
      <section id="pendidikan" className="scroll-mt-14 bg-sand py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Pendidikan" title="Lulusan pendidikan" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Reveal className="card p-6 sm:p-8 lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-gold-50 text-gold-700">
                  <School size={20} aria-hidden />
                </span>
                <h3 className="text-2xl font-semibold text-forest-900">Pendidikan umum</h3>
              </div>
              <BarList data={pendidikan} caption="Jumlah penduduk berdasarkan lulusan pendidikan umum" />
            </Reveal>
            <div className="grid gap-6 lg:col-span-4">
              <Reveal delay={0.1} className="card p-6">
                <p className="flex items-center gap-2 font-display text-xl font-semibold text-forest-900">
                  <BookHeart size={20} className="text-gold-600" aria-hidden /> Pendidikan khusus
                </p>
                <dl className="mt-5 space-y-4">
                  {pendidikanKhusus.map((d) => (
                    <div key={d.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0">
                      <dt className="text-muted">{d.label}</dt>
                      <dd className="font-display text-2xl font-semibold tabular-nums">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.15} className="card p-6">
                <p className="flex items-center gap-2 font-display text-xl font-semibold text-forest-900">
                  <UserX size={20} className="text-clay-500" aria-hidden /> Tidak lulus / tidak sekolah
                </p>
                <dl className="mt-5 space-y-4">
                  {tidakSekolah.map((d) => (
                    <div key={d.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0">
                      <dt className="text-muted">{d.label}</dt>
                      <dd className="font-display text-2xl font-semibold tabular-nums">{nf.format(d.value)}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SARANA ---------------- */}
      <section id="sarana" className="scroll-mt-14 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sarana & Prasarana"
            title="Fasilitas desa"
            description="Infrastruktur pemerintahan, pendidikan, ibadah, olahraga, transportasi, dan sanitasi."
          />
          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {sarana.map((g, gi) => (
              <Reveal key={g.title} delay={(gi % 3) * 0.06} className="card mb-5 break-inside-avoid p-5 sm:p-6">
                <h3 className="mb-3 font-sans text-xs font-bold tracking-[0.16em] text-gold-600 uppercase">{g.title}</h3>
                <ul className="divide-y divide-line">
                  {g.items.map((s) => (
                    <li key={s.label} className="group flex items-center gap-4 py-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-forest-50 text-forest-700 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-gold-300">
                        <s.icon size={22} aria-hidden />
                      </span>
                      <span className="flex-1 text-[0.95rem] leading-snug text-ink">{s.label}</span>
                      <span className="text-right">
                        <span className="font-display text-2xl font-semibold text-forest-900">
                          <Counter value={s.value} />
                        </span>
                        <span className="ml-1 text-xs font-medium text-muted">{s.unit}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- APBDES ---------------- */}
      <section id="apbdes" className="scroll-mt-14 bg-forest-950 py-16 text-white sm:py-24">
        <div className="container-page">
          <SectionHeading
            tone="dark"
            eyebrow={`APBDes T.A. ${apbdesTahun}`}
            title="Anggaran Pendapatan & Belanja Desa"
            description="Desa Bangkalaloe, Kecamatan Bontoramba, Kabupaten Jeneponto."
          />

          <Stagger className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            {ringkasan.map((s, i) => (
              <StaggerItem
                key={s.label}
                className={`rounded-3xl bg-white p-5 text-ink ${i === ringkasan.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <span className={`grid size-10 place-items-center rounded-xl ${s.tone}`}>
                  <s.icon size={20} aria-hidden />
                </span>
                <p className="mt-4 text-sm text-muted">{s.label}</p>
                <p className="mt-1 font-display text-lg font-semibold tabular-nums sm:text-xl">{rp(s.value)}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            Surplus = pendapatan − belanja. SiLPA (sisa lebih pembiayaan anggaran) = surplus + penerimaan
            pembiayaan ({rp(pembiayaan.penerimaan)}) − pengeluaran pembiayaan ({rp(pembiayaan.pengeluaran)}).
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Reveal className="rounded-[1.75rem] bg-white p-6 text-ink sm:p-8 lg:col-span-12">
              <h3 className="text-2xl font-semibold text-forest-900">Komposisi dana transfer desa</h3>
              <p className="mt-1 mb-6 text-sm text-muted">Total {rp(r.totalPendapatan)}</p>
              <StackedShare data={pendapatan} colors={["#1f7a4f", "#d9962a", "#b5442f"]} />
            </Reveal>

            <Reveal className="rounded-[1.75rem] bg-white p-6 text-ink sm:p-8 lg:col-span-12">
              <h3 className="text-2xl font-semibold text-forest-900">Belanja per bidang</h3>
              <p className="mt-1 mb-6 text-sm text-muted">Klik setiap bidang di bawah untuk melihat rincian kegiatan.</p>
              <BarList data={belanjaPerBidang} unit="rupiah" caption="Belanja desa per bidang" />

              <div className="mt-8 space-y-2">
                {belanja.map((b) => {
                  const sub = b.kegiatan.reduce((a, k) => a + k.value, 0);
                  return (
                    <details key={b.bidang} className="group rounded-2xl border border-line open:bg-paper">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-semibold [&::-webkit-details-marker]:hidden">
                        <span>Bidang {b.bidang}</span>
                        <span className="flex items-center gap-3 text-sm tabular-nums">
                          <span className="hidden sm:inline">{rp(sub)}</span>
                          <ChevronDown size={18} className="transition-transform group-open:rotate-180" aria-hidden />
                        </span>
                      </summary>
                      <ul className="divide-y divide-line border-t border-line px-4">
                        {b.kegiatan.map((k) => (
                          <li key={k.label} className="flex flex-col justify-between gap-1 py-3 text-sm sm:flex-row sm:gap-6">
                            <span className="text-muted first-letter:uppercase">{k.label}</span>
                            <span className="shrink-0 font-semibold tabular-nums">{rp(k.value)}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
