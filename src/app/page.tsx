import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Compass,
  Landmark,
  MountainSnow,
  ScrollText,
  Store,
} from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafOrnament, MapPinIcon } from "@/components/icons";
import { batasWilayah, monografi, site } from "@/data/site";

const stats = [
  { label: "Jiwa penduduk", value: monografi.penduduk },
  { label: "Kepala keluarga", value: monografi.kepalaKeluarga },
  { label: "Dusun", value: monografi.dusun },
  { label: "Rukun Kampung", value: monografi.rk },
  { label: "Luas wilayah", value: monografi.luasKm2, decimals: 2, suffix: " km²" },
];

const timeline = [
  { year: "± 1500", title: "Tumanurunga ri Marrung", text: "Seorang gadis kecil ditemukan terapung di atas bonggol bambu — asal nama Pokobulo." },
  { year: "1968", title: "Toddo menjadi Bori", text: "Istilah Toddo berakhir; terbentuk Lingkungan Pokobulo di bawah Bori Balumbungang." },
  { year: "1983", title: "Desa Persiapan", text: "Pemekaran desa: Bangkalaloe membina Dusun Pokobulo, Linrungloe, dan Joko." },
  { year: "1986", title: "Desa Definitif", text: "Pada 2 Mei 1986 Desa Bangkalaloe resmi berdiri secara definitif." },
];

const explore = [
  {
    href: "/profil",
    title: "Profil Desa",
    text: "Visi JULUBORITTA PLUS, misi, dan struktur aparat dari kepala desa hingga RK.",
    img: "/images/struktur/kepala-desa.jpg",
    icon: Landmark,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    href: "/infografis",
    title: "Infografis",
    text: "Demografi, sarana prasarana, dan APBDes dalam grafik interaktif.",
    img: null,
    icon: BarChart3,
    span: "md:col-span-2",
  },
  {
    href: "/umkm",
    title: "UMKM",
    text: "75 pelaku usaha di tiga dusun.",
    img: "/images/home/umkm.jpg",
    icon: Store,
    span: "",
  },
  {
    href: "/potensi",
    title: "Potensi Desa",
    text: "Hutan adat, Batu Leppa, situs megalitikum.",
    img: "/images/home/potensi.jpg",
    icon: MountainSnow,
    span: "",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-950 text-white">
        <Image
          src="/images/home/hero.jpg"
          alt="Panorama sawah, kebun jagung, dan permukiman Desa Bangkalaloe"
          fill
          priority
          sizes="100vw"
          className="-z-20 animate-kenburns object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/70 via-forest-950/35 to-forest-950" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />

        <div className="container-page flex flex-1 flex-col justify-center pt-32 pb-12">
          <p className="eyebrow animate-rise text-gold-300">
            Kec. {site.kecamatan} · Kab. {site.kabupaten} · {site.provinsi}
          </p>
          <h1 className="mt-6 max-w-5xl animate-rise text-5xl leading-[0.98] font-semibold [animation-delay:120ms] sm:text-7xl lg:text-[6.5rem]">
            Selamat datang di <span className="text-gold-300 italic">Bangkalaloe</span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            Desa di kaki perbukitan Jeneponto — tanah para Toddo, hutan adat Mattatakang, dan
            hamparan sawah yang dijaga turun-temurun sejak berabad lalu.
          </p>
          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
            <Link href="/profil" className="btn-gold px-6 py-3">
              Kenali Desa Kami <ArrowRight size={18} />
            </Link>
            <Link href="/sejarah" className="btn-ghost-light px-6 py-3">
              <ScrollText size={18} /> Baca Sejarah
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-page relative pb-8">
          <dl className="grid animate-rise grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md [animation-delay:500ms] sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`bg-forest-950/40 px-5 py-5 sm:px-6 ${i === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <dt className="text-xs font-medium tracking-wide text-white/60 uppercase">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-white sm:text-4xl">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- PROFIL SINGKAT ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Profil Singkat</p>
            <h2 className="text-4xl leading-[1.08] font-semibold text-forest-900 sm:text-5xl">
              Desa kecil dengan <em className="text-gold-600">akar sejarah</em> yang panjang
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
              <p>
                Desa Bangkalaloe terletak di Kecamatan Bontoramba, Kabupaten Jeneponto, Sulawesi
                Selatan. Wilayahnya seluas <strong className="text-ink">782,2 hektare</strong> (±7,85 km²)
                dan terbagi menjadi <strong className="text-ink">3 dusun</strong> — Pokobulo,
                Linrungloe, dan Joko — dengan <strong className="text-ink">16 Rukun Kampung</strong>.
              </p>
              <p>
                Hampir separuh warganya bekerja sebagai petani — padi, jagung, bawang merah, dan
                cabai menjadi komoditas unggulan. Desa ini memiliki PAUD hingga SMK, masjid dan
                musholla, puskesmas pembantu, poskesdes, serta pasar desa.
              </p>
            </div>
            <Link
              href="/profil"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-forest-800"
            >
              Lihat profil lengkap
              <span className="grid size-8 place-items-center rounded-full bg-gold-100 transition-all group-hover:translate-x-1 group-hover:bg-gold-300">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] sm:aspect-[5/5]">
              <Image
                src="/images/home/tugu.jpg"
                alt="Tugu Desa Bangkalaloe"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 rounded-3xl bg-forest-900 p-5 text-white shadow-[var(--shadow-lift)] sm:-left-8 sm:p-6">
              <p className="text-xs tracking-widest text-gold-300 uppercase">Berdiri definitif</p>
              <p className="mt-1 font-display text-3xl font-semibold">2 Mei 1986</p>
            </div>
            <div className="absolute -top-5 -right-2 hidden rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-forest-950 shadow-lg sm:block">
              Tugu Desa
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- MAKNA NAMA ---------------- */}
      <section className="relative overflow-hidden bg-sand py-24 sm:py-28">
        <div className="bg-grain absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <LeafOrnament className="mx-auto mb-8 h-6 w-32 text-gold-500" />
            <p className="eyebrow mb-6 justify-center">Makna Nama</p>
            <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 font-display text-5xl font-semibold text-forest-900 sm:text-7xl">
              <span>Bangkala</span>
              <span className="text-3xl text-gold-500 sm:text-5xl">+</span>
              <span className="italic">loe</span>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-left sm:grid-cols-2">
              <div className="card p-6">
                <p className="font-display text-xl font-semibold text-forest-900">Bangkala</p>
                <p className="mt-2 text-muted">
                  Sejenis pohon sebangsa ketapang; juga berarti <em>mengkal</em> — bakal masak atau
                  matang.
                </p>
              </div>
              <div className="card p-6">
                <p className="font-display text-xl font-semibold text-forest-900">Loe</p>
                <p className="mt-2 text-muted">Berarti banyak. Tempat di mana pohon bangkala tumbuh melimpah.</p>
              </div>
            </div>
            <blockquote className="mx-auto mt-12 max-w-2xl font-display text-2xl leading-snug text-forest-800 italic sm:text-3xl">
              “Biarkan banyak yang mengkal, tetapi pastikan satu yang matang.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SEJARAH TIMELINE ---------------- */}
      <section className="relative overflow-hidden bg-forest-900 py-24 text-white sm:py-32">
        <div className="bg-weave absolute inset-0" aria-hidden />
        <div className="container-page relative grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4 text-gold-300">Jejak Sejarah</p>
              <h2 className="text-4xl leading-[1.08] font-semibold sm:text-5xl">
                Dari Paccinongang hingga desa definitif
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Sejarah Bangkalaloe dituturkan dari mulut ke mulut — kisah Tumanurunga, Burung
                Emas, hingga Toddo Appaka yang memilih Raja Binamu.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="relative mt-10 hidden aspect-[4/5] overflow-hidden rounded-[2rem] lg:block">
              <Image
                src="/images/home/sejarah.jpg"
                alt="Ilustrasi sejarah Desa Bangkalaloe"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <ol className="relative space-y-4 border-l border-white/15 pl-8 sm:pl-10">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.year} delay={i * 0.08} className="relative">
                  <span className="absolute top-7 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-gold-400 ring-4 ring-forest-900 sm:-left-[calc(2.5rem+5px)]" />
                  <div className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.07] sm:p-7">
                    <p className="font-display text-3xl font-semibold text-gold-300">{t.year}</p>
                    <p className="mt-2 text-lg font-semibold">{t.title}</p>
                    <p className="mt-1 text-white/65">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.3}>
              <Link href="/sejarah" className="btn-gold mt-10 px-6 py-3">
                Baca sejarah lengkap <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- JELAJAHI (BENTO) ---------------- */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Jelajahi"
            title="Semua tentang Bangkalaloe, dalam satu tempat"
            description="Dari data kependudukan hingga destinasi wisata alam dan budaya."
          />
          <Stagger className="grid auto-rows-[16rem] gap-4 md:grid-cols-4 md:auto-rows-[15rem]">
            {explore.map((e) => (
              <StaggerItem key={e.href} className={e.span}>
                <Link
                  href={e.href}
                  className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[1.75rem] bg-forest-900 p-6 text-white shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)] sm:p-7"
                >
                  {e.img ? (
                    <Image
                      src={e.img}
                      alt=""
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                    />
                  ) : (
                    <div className="bg-weave absolute inset-0" aria-hidden>
                      {/* Ilustrasi: proporsi pekerjaan penduduk (data asli) */}
                      <div className="absolute top-8 right-8 left-8 flex flex-col gap-2.5 opacity-70 transition-opacity duration-500 group-hover:opacity-40 sm:left-auto sm:w-3/5">
                        {[1521, 340, 331, 247, 211].map((v, i) => (
                          <div key={v} className="h-3 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full origin-left rounded-full bg-gradient-to-r from-gold-400 to-gold-300 transition-transform duration-700 group-hover:scale-x-105"
                              style={{ width: `${(v / 1521) * 100}%`, transitionDelay: `${i * 50}ms` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
                  <div className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-white/15 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-400 group-hover:text-forest-950">
                    <ArrowUpRight size={20} />
                  </div>
                  <div className="relative">
                    <e.icon size={22} className="mb-3 text-gold-300" aria-hidden />
                    <h3 className="text-2xl font-semibold sm:text-3xl">{e.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{e.text}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- LOKASI ---------------- */}
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Lokasi"
            title="Letak & batas wilayah"
            description="Berada di Kecamatan Bontoramba, sekitar pusat Kabupaten Jeneponto."
            action={
              <a href={site.social.maps} target="_blank" rel="noopener noreferrer" className="btn-forest">
                <MapPinIcon size={16} /> Buka di Google Maps
              </a>
            }
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <Reveal className="card overflow-hidden p-2 lg:col-span-7">
              <iframe
                src={site.mapsEmbed}
                title="Peta lokasi Desa Bangkalaloe"
                className="h-[360px] w-full rounded-[1rem] sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
            <Reveal delay={0.1} className="card flex flex-col p-6 sm:p-8 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-forest-50 text-forest-700">
                  <Compass size={22} />
                </span>
                <h3 className="text-2xl font-semibold text-forest-900">Batas Desa</h3>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {batasWilayah.map((b) => (
                  <div key={b.arah}>
                    <dt className="text-xs font-semibold tracking-wider text-gold-600 uppercase">{b.arah}</dt>
                    <dd className="mt-1 font-medium text-ink">{b.desa}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
                <div className="rounded-2xl bg-sand p-4">
                  <p className="text-xs text-muted">Garis lintang</p>
                  <p className="mt-1 font-semibold tabular-nums">{monografi.lintang}</p>
                </div>
                <div className="rounded-2xl bg-sand p-4">
                  <p className="text-xs text-muted">Garis bujur</p>
                  <p className="mt-1 font-semibold tabular-nums">{monografi.bujur}</p>
                </div>
                <div className="rounded-2xl bg-sand p-4">
                  <p className="text-xs text-muted">Luas</p>
                  <p className="mt-1 font-semibold">782,2 ha</p>
                </div>
                <div className="rounded-2xl bg-sand p-4">
                  <p className="text-xs text-muted">Kode pos</p>
                  <p className="mt-1 font-semibold">{site.kodePos}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
