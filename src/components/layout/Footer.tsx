import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/data/site";
import { InstagramIcon, MapPinIcon } from "@/components/icons";
import { QrCard } from "./QrCard";

const partnerLogos = [
  { src: "/images/brand/logo-desa.png", alt: "Logo Desa Bangkalaloe", w: 613, h: 407 },
  { src: "/images/brand/logo-jeneponto.png", alt: "Logo Kabupaten Jeneponto", w: 1080, h: 1080 },
  { src: "/images/brand/logo-unhas.png", alt: "Logo Universitas Hasanuddin", w: 1080, h: 1080 },
  { src: "/images/brand/logo-kkn.png", alt: "Logo Posko KKN Unhas Desa Bangkalaloe", w: 807, h: 807 },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-forest-950 text-white">
      <div className="bg-weave absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-forest-600/30 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/images/brand/logo-desa.png" alt="" width={613} height={407} className="h-14 w-auto" />
              <div>
                <p className="font-display text-2xl font-semibold">{site.name}</p>
                <p className="text-sm text-white/60">
                  Kec. {site.kecamatan}, Kab. {site.kabupaten}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md font-display text-lg leading-relaxed text-white/80 italic">
              “{site.tagline}”
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram KKN Desa Bangkalaloe"
                className="grid size-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:text-forest-950"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={site.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokasi di Google Maps"
                className="grid size-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:text-forest-950"
              >
                <MapPinIcon size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Jelajahi</p>
              <ul className="mt-5 space-y-3">
                {navItems.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {n.label}
                      <ArrowUpRight
                        size={14}
                        className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Alamat</p>
              <address className="mt-5 space-y-1 text-sm leading-relaxed text-white/70 not-italic">
                <p>Desa Bangkalaloe</p>
                <p>Kec. {site.kecamatan}</p>
                <p>Kab. {site.kabupaten}</p>
                <p>{site.provinsi} {site.kodePos}</p>
              </address>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">Kode QR</p>
              <div className="mt-5 flex gap-4">
                <QrCard src="/images/brand/qr-website.jpg" label="Website" />
                <QrCard src="/images/brand/qr-whatsapp.jpg" label="WhatsApp" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
          <ul className="flex items-center gap-6" aria-label="Mitra">
            {partnerLogos.map((l) => (
              <li key={l.src}>
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={l.w}
                  height={l.h}
                  className="h-11 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
          <div className="text-center text-xs leading-relaxed text-white/50 md:text-right">
            <p>© {new Date().getFullYear()} Pemerintah Desa Bangkalaloe. Hak cipta dilindungi.</p>
            <p>
              Dikembangkan oleh{" "}
              <Link href="/tentang" className="text-white/70 underline-offset-4 hover:text-gold-300 hover:underline">
                Ammar Tyo Pasaribu
              </Link>{" "}
              · KKN Unhas Gel. 113
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
