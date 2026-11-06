"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const fmt = (n: number, decimals: number) =>
  n.toLocaleString("id-ID", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** Angka yang menghitung naik saat terlihat. Teks awal = nilai akhir (aman untuk SEO & tanpa JS). */
export function Counter({
  value,
  decimals = 0,
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = fmt(v, decimals) + suffix),
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals, suffix]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {fmt(value, decimals) + suffix}
    </span>
  );
}
