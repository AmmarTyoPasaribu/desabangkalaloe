"use client";

import Image from "next/image";
import { useRef } from "react";
import { X, Expand } from "lucide-react";

/** Thumbnail QR yang bisa diperbesar (native <dialog>: Esc, fokus & backdrop sudah ditangani browser). */
export function QrCard({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="group flex flex-col items-center gap-2"
        aria-label={`Perbesar kode QR ${label}`}
      >
        <span className="relative block rounded-2xl bg-white p-2 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
          <Image src={src} alt={`Kode QR ${label}`} width={88} height={88} className="size-[88px] rounded-lg" />
          <span className="absolute inset-0 grid place-items-center rounded-2xl bg-forest-950/60 opacity-0 transition-opacity group-hover:opacity-100">
            <Expand size={20} className="text-white" aria-hidden />
          </span>
        </span>
        <span className="text-xs font-medium text-white/70">{label}</span>
      </button>

      <dialog
        ref={ref}
        onClick={(e) => e.target === ref.current && ref.current?.close()}
        className="m-auto rounded-3xl bg-white p-0 shadow-2xl backdrop:bg-forest-950/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-sand text-forest-900 hover:bg-line"
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
          <p className="mb-4 pr-10 font-display text-xl font-semibold text-forest-900">QR {label}</p>
          <Image src={src} alt={`Kode QR ${label}`} width={320} height={320} className="size-72 sm:size-80" />
          <p className="mt-3 text-center text-sm text-muted">Pindai dengan kamera ponsel Anda</p>
        </div>
      </dialog>
    </>
  );
}
