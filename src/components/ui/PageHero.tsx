import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/** Hero untuk halaman dalam: foto latar + breadcrumb + judul. */
export function PageHero({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  crumb,
  children,
}: {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  crumb: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/80 to-transparent" />

      <div className="container-page pt-36 pb-16 sm:pt-44 sm:pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-gold-300">
            Beranda
          </Link>
          <ChevronRight size={14} aria-hidden />
          <span className="text-white/90" aria-current="page">
            {crumb}
          </span>
        </nav>
        {eyebrow && <p className="eyebrow mb-4 text-gold-300">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
