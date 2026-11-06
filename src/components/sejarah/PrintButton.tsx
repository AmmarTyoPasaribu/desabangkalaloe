"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print grid size-12 place-items-center rounded-full border border-line bg-white text-forest-800 shadow-[var(--shadow-soft)] transition-colors hover:bg-sand"
      aria-label="Cetak atau simpan sebagai PDF"
      title="Cetak / simpan PDF"
    >
      <Printer size={18} />
    </button>
  );
}
