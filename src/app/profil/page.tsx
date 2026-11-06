import type { Metadata } from "next";
import Image from "next/image";
import { Download, Target, Eye } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery } from "@/components/ui/Lightbox";
import { OrgChart } from "@/components/profil/OrgChart";
import { kepalaDesa, misi, visi } from "@/data/struktur";

export const metadata: Metadata = {
  title: "Profil Desa",
  description: "Visi misi JULUBORITTA PLUS, struktur organisasi pemerintahan, dan peta sarana infrastruktur Desa Bangkalaloe.",
};

/** Ubah "Ma[ju]" → Ma<mark>ju</mark> untuk menyorot huruf akronim. */
function Akronim({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? (
          <span key={i} className="font-bold text-clay-500 underline decoration-gold-300 decoration-2 underline-offset-4">
            {p.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export default function ProfilPage() {
  return (
    <>
      <PageHero
        crumb="Profil"
        eyebrow="Profil Desa"
        title={
          <>
            Pemerintahan yang <em className="text-gold-300">maju, inklusif</em> &amp; bersih
          </>
        }
        description="Visi, misi, dan susunan aparat Pemerintah Desa Bangkalaloe."
        image="/images/home/tugu.jpg"
        imageAlt="Tugu Desa Bangkalaloe"
      />

      {/* Kepala desa + Visi */}
      <section className="overflow-hidden py-24 sm:py-28">
        <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <figure className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.25rem] bg-gold-200" aria-hidden />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
                <Image
                  src={kepalaDesa.foto}
                  alt={`Foto ${kepalaDesa.nama}`}
                  fill
                  sizes="(min-width:1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-6 text-center">
                <p className="font-display text-2xl font-semibold text-forest-900">{kepalaDesa.nama}</p>
                <p className="mt-1 text-sm font-medium text-gold-600">{kepalaDesa.jabatan}</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-white sm:p-12">
              <div className="bg-weave absolute inset-0" aria-hidden />
              <div className="relative">
                <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase">
                  <Eye size={16} aria-hidden /> Visi
                </p>
                <p className="mt-6 font-display text-xl text-white/70">Terwujudnya</p>
                <p className="mt-1 font-display text-5xl leading-none font-semibold tracking-tight text-gold-300 sm:text-6xl lg:text-7xl">
                  {visi.judul}
                </p>
                <p className="mt-8 max-w-2xl rounded-2xl bg-white/95 p-5 text-base leading-relaxed text-ink sm:p-6 sm:text-lg">
                  <Akronim text={visi.akronim} />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misi */}
      <section className="bg-sand py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Misi"
            title="Tujuh langkah menuju desa yang berdaya"
            description="Arah kerja pemerintah desa untuk mewujudkan visi JULUBORITTA PLUS."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {misi.map((m, i) => (
              <StaggerItem
                key={m}
                className={`card group flex gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
                  i === misi.length - 1 ? "lg:col-start-2" : ""
                }`}
              >
                <span className="font-display text-4xl leading-none font-semibold text-gold-400 transition-colors group-hover:text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 leading-relaxed text-ink">{m}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Struktur */}
      <section className="py-24 sm:py-28" aria-labelledby="struktur">
        <div className="container-page">
          <SectionHeading
            id="struktur"
            eyebrow="Bagan Desa"
            title="Struktur organisasi & tata kerja"
            description="Pemerintahan Desa Bangkalaloe, Kecamatan Bontoramba, Kabupaten Jeneponto."
          />
          <OrgChart />
        </div>
      </section>

      {/* Peta sarana */}
      <section className="pb-24 sm:pb-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Peta"
            title="Peta sarana & infrastruktur"
            description="Klik peta untuk memperbesar, atau unduh versi resolusi penuh."
            action={
              <a href="/images/struktur/peta-sarana.jpg" download className="btn-forest">
                <Download size={16} /> Unduh peta
              </a>
            }
          />
          <Reveal className="card mx-auto max-w-2xl p-3">
            <Gallery
              images={[{ src: "/images/struktur/peta-sarana.jpg", alt: "Peta sarana dan infrastruktur Desa Bangkalaloe" }]}
              className="grid"
              thumbClassName="aspect-[3091/4000]"
              sizes="(min-width:1024px) 900px, 100vw"
            />
          </Reveal>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
            <Target size={14} aria-hidden /> Sumber: Pemerintah Desa Bangkalaloe
          </p>
        </div>
      </section>
    </>
  );
}
