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

const suratAwal = [
  "Lima puluh enam hari. Dulu angka itu terdengar begitu panjang — saat pertama kali kita datang membawa koper, saling menyebut nama, masih canggung bahkan untuk sekadar bertanya “sudah makan?”. Siapa sangka, lima puluh enam hari itu berlalu jauh lebih cepat daripada yang sanggup aku terima.",
  "Aku masih ingat malam-malam di posko: rapat program kerja yang selalu molor, tawa yang pecah tanpa alasan yang jelas, piring-piring yang kita cuci bergantian, dan obrolan larut yang entah bagaimana selalu berakhir menjadi cerita tentang hidup. Aku ingat lelahnya pulang dari rumah warga, hujan yang turun tanpa permisi, dan bagaimana semua itu terasa ringan hanya karena kita menjalaninya bersama.",
  "Kalian bukan sekadar teman satu posko. Kalian adalah rumah yang tidak pernah aku rencanakan — orang-orang asing yang dalam hitungan minggu berubah menjadi keluarga.",
];

const suratAkhir = [
  "Aku menulis ini di sela baris-baris kode website yang kita buat untuk Bangkalaloe. Setiap halamannya menyimpan sesuatu dari kalian: foto yang kita ambil bersama, data yang kita kumpulkan dari pintu ke pintu, dan sabarnya kalian menunggu aku menyelesaikannya. Mungkin itu sebabnya aku tidak pernah benar-benar ingin website ini selesai — karena selama masih kukerjakan, rasanya kita belum benar-benar berpisah.",
  "Tapi hari terakhir tetap datang. Kita berpelukan, berjanji akan sering bertemu, berjanji grup tidak akan pernah sepi. Aku tahu, dan mungkin kalian juga tahu, bahwa hidup pelan-pelan akan membawa kita ke arah masing-masing. Grup akan perlahan sunyi. Posko itu akan ditempati orang lain. Dan suatu hari nanti, kita hanya akan saling mengenang lewat foto-foto ini.",
  "Tidak apa-apa. Aku hanya ingin kalian tahu: terima kasih. Terima kasih sudah sabar dengan sifat burukku, sudah menertawakan leluconku yang sebenarnya tidak lucu, sudah menjadi alasan aku bangun pagi dengan semangat di desa yang jauh dari rumah. Terima kasih untuk setiap kenangan berharga yang tidak akan pernah bisa aku ulang, sekeras apa pun aku merindukannya.",
  "Kalau suatu hari kalian melintas di Jeneponto, singgahlah sebentar di Bangkalaloe. Kita mungkin tidak lagi di sana — tapi sebagian dari kita akan selalu tinggal di sana.",
  "Sampai bertemu lagi. Entah kapan, entah di mana.",
];

function SuratPerpisahan() {
  return (
    <section aria-labelledby="surat" className="relative overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
      <Image src="/images/about/tim-kkn.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/85 to-forest-950" aria-hidden />
      <div className="bg-grain absolute inset-0" aria-hidden />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-gold-300">Sepucuk surat</p>
          <h2 id="surat" className="mt-4 text-4xl leading-tight font-semibold sm:text-5xl">
            Untuk kalian, <em className="text-gold-300">Posko 113</em>
          </h2>
          <p className="mt-4 text-white/60">Lima puluh enam hari yang tidak akan pernah terulang.</p>
        </Reveal>

        {/* 56 hari bersama */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-md">
          <div className="grid grid-cols-14 gap-1.5 sm:gap-2" role="img" aria-label="56 hari bersama">
            {Array.from({ length: 56 }, (_, i) => (
              <span
                key={i}
                className={`aspect-square rounded-full ${
                  i === 55 ? "bg-gold-300 ring-4 ring-gold-300/25" : "bg-white/25"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-xs text-white/45">
            <span>Hari ke-1</span>
            <span className="text-gold-300/90">Hari ke-56</span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl">
          <article className="relative rounded-[2rem] bg-paper p-7 text-ink shadow-2xl sm:p-14">
            <p className="text-sm text-muted">Bangkalaloe, hari ke-56</p>
            <p className="mt-6 font-display text-2xl text-forest-900 italic sm:text-3xl">
              Untuk kalian, teman-teman Posko 113 Desa Bangkalaloe,
            </p>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.85] text-ink/80">
              {suratAwal.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
              <blockquote className="!my-10 border-l-4 border-gold-400 pl-6 font-display text-2xl leading-snug text-forest-900 italic sm:text-3xl">
                “Lima puluh enam hari tidak cukup untuk mengenal kalian, tapi lebih dari cukup untuk
                merindukan kalian seumur hidup.”
              </blockquote>
              {suratAkhir.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
            <div className="mt-12 border-t border-line pt-8">
              <p className="text-muted">Yang akan selalu merindukan kalian,</p>
              <p className="mt-2 font-display text-4xl text-forest-900 italic">Ammar</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

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

      <SuratPerpisahan />
    </>
  );
}
