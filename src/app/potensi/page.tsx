import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, MapPin, Mountain, Landmark, Wheat, Coins } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Gallery } from "@/components/ui/Lightbox";
import { komoditasEkonomi, komoditasLuasTanam, potensiList, type Komoditas, type Potensi } from "@/data/potensi";

export const metadata: Metadata = {
  title: "Potensi Desa",
  description: "Potensi alam, situs budaya, dan komoditas unggulan Desa Bangkalaloe: Hutan Mattatakang, Batu Leppa, Makam Kuno Joko, dan lainnya.",
};

function OverviewCard({ p }: { p: Potensi }) {
  return (
    <a
      href={`#${p.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-forest-900 p-6 text-white shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
    >
      <Image
        src={p.cover}
        alt=""
        fill
        sizes="(min-width:768px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
      <div className="relative">
        <p className="text-xs font-semibold tracking-wider text-gold-300 uppercase">{p.kategori}</p>
        <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">{p.nama}</h3>
        <p className="mt-1 text-sm text-white/75">{p.subjudul}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
          Lihat detail
          <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
        </span>
      </div>
    </a>
  );
}

function Detail({ p, reverse }: { p: Potensi; reverse: boolean }) {
  return (
    <article id={p.slug} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal className={`lg:sticky lg:top-28 ${reverse ? "lg:order-2" : ""}`}>
        <p className="eyebrow mb-3">{p.kategori === "Alam" ? "Wisata Alam" : "Situs Budaya"}</p>
        <h3 className="text-3xl font-semibold text-forest-900 sm:text-4xl">{p.nama}</h3>
        {p.lokasi && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1.5 text-sm text-forest-800">
            <MapPin size={14} aria-hidden /> {p.lokasi}
          </p>
        )}
        <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-muted">
          {p.paragraf.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
        <Gallery
          images={p.galeri.map((src, i) => ({ src, alt: `${p.nama} — foto ${i + 1}` }))}
          className="grid grid-cols-2 gap-2 sm:gap-3"
          thumbClassName="aspect-[4/3]"
        />
      </Reveal>
    </article>
  );
}

function KomoditasCard({ k, tall }: { k: Komoditas; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[1.75rem] bg-forest-900 ${tall ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
      <Image src={k.img} alt={k.nama} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-2xl font-semibold sm:text-3xl">{k.nama}</h3>
        <p className="mt-1 max-w-md text-sm text-white/80">{k.deskripsi}</p>
      </div>
    </div>
  );
}

export default function PotensiPage() {
  const alam = potensiList.filter((p) => p.kategori === "Alam");
  const budaya = potensiList.filter((p) => p.kategori === "Budaya");

  return (
    <>
      <PageHero
        crumb="Potensi"
        eyebrow="Potensi Desa"
        title={
          <>
            Alam yang asri, <em className="text-gold-300">budaya</em> yang lestari
          </>
        }
        description="Mengenal lebih jauh hutan adat, panorama Batu Leppa, situs megalitikum, dan komoditas unggulan Desa Bangkalaloe."
        image="/images/home/potensi.jpg"
        imageAlt="Potensi alam Desa Bangkalaloe"
      />

      {/* Alam */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Potensi Alam"
            title={
              <span className="inline-flex items-center gap-3">
                <Mountain className="hidden size-10 text-gold-500 sm:block" aria-hidden /> Wisata alam
              </span>
            }
            description="Tiga bentang alam yang menjadi kebanggaan warga."
          />
          <Stagger className="grid gap-4 md:grid-cols-3">
            {alam.map((p) => (
              <StaggerItem key={p.slug}>
                <OverviewCard p={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-24 space-y-24">
            {alam.map((p, i) => (
              <Detail key={p.slug} p={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Budaya */}
      <section className="relative overflow-hidden bg-sand py-24 sm:py-28">
        <div className="bg-grain absolute inset-0" aria-hidden />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Potensi Kebudayaan"
            title={
              <span className="inline-flex items-center gap-3">
                <Landmark className="hidden size-10 text-gold-500 sm:block" aria-hidden /> Situs & warisan budaya
              </span>
            }
            description="Jejak para Toddo Bangkalaloe yang masih bisa disaksikan hingga kini."
          />
          <Stagger className="grid gap-4 md:grid-cols-3">
            {budaya.map((p) => (
              <StaggerItem key={p.slug}>
                <OverviewCard p={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-24 space-y-24">
            {budaya.map((p, i) => (
              <Detail key={p.slug} p={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Komoditas */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Komoditas Unggulan"
            title={
              <span className="inline-flex items-center gap-3">
                <Wheat className="hidden size-10 text-gold-500 sm:block" aria-hidden /> Berdasarkan luas tanam
              </span>
            }
          />
          <Stagger className="grid gap-4 md:grid-cols-2">
            {komoditasLuasTanam.map((k) => (
              <StaggerItem key={k.nama}>
                <KomoditasCard k={k} tall />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-24">
            <SectionHeading
              eyebrow="Komoditas Unggulan"
              title={
                <span className="inline-flex items-center gap-3">
                  <Coins className="hidden size-10 text-gold-500 sm:block" aria-hidden /> Berdasarkan nilai ekonomi
                </span>
              }
            />
            <Stagger className="grid gap-4 md:grid-cols-3">
              {komoditasEkonomi.map((k) => (
                <StaggerItem key={k.nama}>
                  <KomoditasCard k={k} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
