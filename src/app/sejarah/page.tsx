import type { Metadata } from "next";
import { Clock, Feather } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Gallery } from "@/components/ui/Lightbox";
import { ReadingProgress, Toc } from "@/components/sejarah/Toc";
import { PrintButton } from "@/components/sejarah/PrintButton";
import { ProfilPenulis, SejarahContent, toc } from "@/content/sejarah";

export const metadata: Metadata = {
  title: "Sejarah",
  description:
    "Sejarah lengkap Desa Bangkalaloe: Paccinongang, Tumanurunga ri Marrung, Toddo Appaka, Kerajaan Binamu, Burung Emas, hingga berdirinya desa pada 1986.",
};

const lampiran = [
  { src: "/images/sejarah/lampiran-1.png", alt: "Mattewakkang Dg. Raja, Karaeng Binamu terakhir (XXI)" },
  { src: "/images/sejarah/lampiran-2.png", alt: "Penulis di tengah narator lisan H. Alias Bulu Dg. Tinggi (kanan) dan Drs. H. Salemuddin Pama (kiri)" },
  { src: "/images/sejarah/lampiran-3.png", alt: "Dokumen tertulis sebagai salah satu sumber rujukan informasi" },
  { src: "/images/sejarah/lampiran-4.png", alt: "Salah satu makam Toddo Bangkalaloe di Kompleks Makam Purbakala, Joko" },
];

export default function SejarahPage() {
  return (
    <>
      <ReadingProgress />
      <PageHero
        crumb="Sejarah"
        eyebrow="Historiografi Desa"
        title={
          <>
            Sejarah Desa <em className="text-gold-300">Bangkalaloe</em>
          </>
        }
        description="Dari Paccinongang, Tumanurunga ri Marrung, hingga Toddo Appaka dan Kerajaan Binamu — dihimpun dari tradisi lisan yang diwariskan lintas generasi."
        image="/images/home/sejarah.jpg"
        imageAlt="Ilustrasi sejarah Desa Bangkalaloe"
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
          <span className="inline-flex items-center gap-2">
            <Feather size={16} className="text-gold-300" aria-hidden /> Fahridenai
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={16} className="text-gold-300" aria-hidden /> ± 45 menit baca
          </span>
          <span>22 Januari 2025</span>
        </div>
      </PageHero>

      <div className="container-page py-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] xl:grid-cols-[18rem_minmax(0,1fr)_4rem]">
          <aside>
            <Toc items={toc} />
          </aside>

          <article className="prose-desa mx-auto w-full max-w-[44rem] [&>h2:first-child]:mt-0">
            <SejarahContent />
            <ProfilPenulis />

            <h2 id="lampiran">Lampiran</h2>
            <Gallery
              images={lampiran}
              className="not-prose grid list-none grid-cols-2 gap-3 pl-0 sm:gap-4"
              thumbClassName="aspect-[3/4]"
              sizes="(min-width:768px) 22rem, 50vw"
            />
            <ol className="mt-6 text-sm text-muted">
              {lampiran.map((l) => (
                <li key={l.src}>{l.alt}</li>
              ))}
            </ol>
          </article>

          <div className="hidden xl:block">
            <div className="sticky top-28">
              <PrintButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
