import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { navItems } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-forest-950 pt-28 pb-20 text-white">
      <div className="bg-weave absolute inset-0 -z-10" aria-hidden />
      <div className="container-page text-center">
        <p className="font-display text-[8rem] leading-none font-semibold text-gold-300/90 sm:text-[12rem]">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Sepertinya Anda tersesat di hutan Mattatakang. Mari kembali ke jalan setapak.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-gold px-6 py-3">
            <ArrowLeft size={18} /> Kembali ke Beranda
          </Link>
        </div>
        <nav aria-label="Halaman lain" className="mt-12">
          <p className="mb-4 inline-flex items-center gap-2 text-sm text-white/50">
            <Compass size={14} aria-hidden /> Atau kunjungi
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {navItems.slice(1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-full px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/10">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
