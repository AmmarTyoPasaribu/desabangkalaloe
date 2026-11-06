"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

/**
 * Galeri dengan lightbox: klik thumbnail → tampilan layar penuh.
 * Keyboard: ← → untuk navigasi, Esc untuk tutup. Mendukung swipe di ponsel.
 */
export function Gallery({
  images,
  className,
  thumbClassName = "aspect-[4/3]",
  sizes = "(min-width:1024px) 25vw, 50vw",
}: {
  images: LightboxImage[];
  className?: string;
  thumbClassName?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <ul className={className}>
        {images.map((img, i) => (
          <li key={img.src} className={i === 0 && images.length % 2 === 1 ? "col-span-2" : undefined}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative block w-full overflow-hidden rounded-2xl bg-sand ${thumbClassName}`}
              aria-label={`Perbesar foto: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/35">
                <ZoomIn
                  size={26}
                  className="scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  aria-hidden
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={index} onChange={setIndex} />
    </>
  );
}

export function Lightbox({
  images,
  index,
  onChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const [dir, setDir] = useState(0);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      setDir(delta);
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [open, go, onChange]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Penampil foto"
          className="fixed inset-0 z-[90] flex flex-col bg-forest-950/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onChange(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between p-4 text-white sm:p-6">
            <p className="text-sm tabular-nums text-white/70">
              {index! + 1} / {images.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={() => onChange(null)}
              className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Tutup (Esc)"
            >
              <X size={22} />
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => e.target === e.currentTarget && onChange(null)}
          >
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.div
                key={current.src}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-4 sm:inset-x-20"
              >
                <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute top-1/2 left-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute top-1/2 right-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          <p className="px-6 pt-3 pb-6 text-center text-sm text-white/80">{current.alt}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
