import type { Metadata } from "next";
import { Store, LayoutGrid, Venus, Trophy } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { UmkmExplorer } from "@/components/umkm/UmkmExplorer";
import { umkm } from "@/data/umkm";

export const metadata: Metadata = {
  title: "UMKM",
  description: "Direktori 75 UMKM (Usaha Mikro, Kecil, dan Menengah) di Dusun Pokobulo, Linrungloe, dan Joko, Desa Bangkalaloe.",
};

export default function UmkmPage() {
  const total = umkm.length;
  const perempuan = umkm.filter((u) => u.jk === "P").length;
  const kategoriCount = new Map<string, number>();
  umkm.forEach((u) => kategoriCount.set(u.kategori, (kategoriCount.get(u.kategori) ?? 0) + 1));
  const [topKategori, topCount] = [...kategoriCount.entries()].sort((a, b) => b[1] - a[1])[0];

  const stats = [
    { label: "Total UMKM", value: total, sub: "tersebar di 3 dusun", icon: Store },
    { label: "Pelaku usaha perempuan", value: perempuan, sub: `${Math.round((perempuan / total) * 100)}% dari total`, icon: Venus },
    { label: "Kategori usaha", value: kategoriCount.size, sub: "jenis usaha berbeda", icon: LayoutGrid },
    { label: topKategori, value: topCount, sub: "kategori terbanyak", icon: Trophy },
  ];

  return (
    <>
      <PageHero
        crumb="UMKM"
        eyebrow="Ekonomi Desa"
        title={
          <>
            Usaha warga, <em className="text-gold-300">penggerak</em> ekonomi desa
          </>
        }
        description="UMKM adalah usaha produktif milik perorangan maupun badan usaha yang memenuhi kriteria usaha mikro. Berikut direktori UMKM Desa Bangkalaloe."
        image="/images/home/umkm-hero.jpg"
        imageAlt="Kegiatan UMKM di Desa Bangkalaloe"
      />

      <section className="relative -mt-10 pb-24 sm:-mt-14">
        <div className="container-page">
          <Stagger className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="card p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-muted">{s.label}</p>
                  <s.icon size={18} className="shrink-0 text-gold-500" aria-hidden />
                </div>
                <p className="mt-3 font-display text-4xl font-semibold text-forest-900">
                  <Counter value={s.value} />
                </p>
                <p className="text-xs text-muted">{s.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-12">
            <UmkmExplorer data={umkm} />
          </div>

          <p className="mt-8 text-center text-xs text-muted">
            Data UMKM dihimpun bersama Pemerintah Desa Bangkalaloe (2025). Untuk pembaruan data, hubungi kantor desa.
          </p>
        </div>
      </section>
    </>
  );
}
