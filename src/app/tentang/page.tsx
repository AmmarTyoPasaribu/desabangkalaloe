import type { Metadata } from "next";
import Image from "next/image";
import { Code2, GraduationCap, HeartHandshake, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Website",
  description: "Tentang website profil Desa Bangkalaloe dan tim KKN Gelombang 113 Universitas Hasanuddin yang membuatnya.",
};

const pillars = [
  {
    icon: Target,
    title: "Tujuan",
    text: "Menjadi wadah bagi seluruh masyarakat untuk mengakses informasi mengenai Desa Bangkalaloe dengan mudah.",
  },
  {
    icon: HeartHandshake,
    title: "Harapan",
    text: "Mempromosikan Desa Bangkalaloe agar lebih dikenal khalayak luas, di dalam maupun di luar desa — dan tentunya lebih maju.",
  },
  {
    icon: GraduationCap,
    title: "Program Kerja",
    text: "Website ini adalah salah satu program kerja KKN Gelombang 113 Universitas Hasanuddin di Desa Bangkalaloe.",
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        crumb="Tentang"
        eyebrow="Tentang Website"
        title={
          <>
            Dibuat dengan <em className="text-gold-300">cinta</em> untuk Bangkalaloe
          </>
        }
        description="Website profil dan informasi desa, hasil kolaborasi mahasiswa KKN Universitas Hasanuddin dengan pemerintah dan masyarakat Desa Bangkalaloe."
        image="/images/about/tim-kkn.jpg"
        imageAlt="Mahasiswa KKN Gelombang 113 Universitas Hasanuddin di Desa Bangkalaloe"
      />

      <section className="py-24 sm:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">Latar Belakang</p>
            <h2 className="text-4xl leading-[1.1] font-semibold text-forest-900 sm:text-5xl">
              Teknologi untuk mendekatkan informasi desa
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
              <p>
                Website profil Desa Bangkalaloe dibuat oleh mahasiswa KKN Universitas Hasanuddin guna
                memenuhi program kerja pembuatan website profil dan informasi desa. Terima kasih
                kepada Kepala Desa, aparat desa, dan masyarakat yang turut berpartisipasi.
              </p>
              <p>
                Posko KKN Gelombang 113 di Desa Bangkalaloe diketuai oleh{" "}
                <strong className="text-ink">Muh. Sahrul Saputra</strong> dan beranggotakan tujuh
                mahasiswa dari berbagai jurusan. Posko ini berharap kehadirannya memberi dampak
                positif melalui program kerja yang sesuai dengan kondisi desa.
              </p>
              <p>
                Berkembangnya inovasi teknologi menuntut kita untuk beradaptasi. Website ini
                menghadirkan informasi tentang Desa Bangkalaloe sehingga diharapkan mampu menarik
                perhatian masyarakat umum dan membuat desa lebih dikenal.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about/tim-kkn.jpg"
                  alt="Mahasiswa KKN Gel. 113 Unhas Desa Bangkalaloe"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4 p-5">
                <Image src="/images/brand/logo-kkn.png" alt="Logo Posko KKN" width={56} height={56} className="size-14 object-contain" />
                <div>
                  <p className="font-semibold text-ink">KKN Unhas Gel. 113</p>
                  <p className="text-sm text-muted">Posko Desa Bangkalaloe · Januari 2025</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Visi Website" title="Mengapa website ini ada" align="center" />
          <Stagger className="grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.title} className="card p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-forest-900 text-gold-300">
                  <p.icon size={22} aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-page">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-white sm:p-12">
            <div className="bg-weave absolute inset-0" aria-hidden />
            <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
              <Image
                src="/images/about/developer.jpg"
                alt="Foto Ammar Tyo Pasaribu"
                width={160}
                height={160}
                className="size-36 shrink-0 rounded-full object-cover ring-4 ring-gold-400/80"
              />
              <div>
                <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase sm:justify-start">
                  <Code2 size={14} aria-hidden /> Pengembang
                </p>
                <p className="mt-2 font-display text-3xl font-semibold">Ammar Tyo Pasaribu</p>
                <p className="mt-2 leading-relaxed text-white/70">
                  Mahasiswa KKN Universitas Hasanuddin Gelombang 113, Desa Bangkalaloe. Merancang dan
                  membangun website ini pada Januari 2025.
                </p>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-6"
                >
                  <InstagramIcon size={16} /> Instagram KKN Bangkalaloe
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
