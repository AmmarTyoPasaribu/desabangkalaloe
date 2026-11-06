"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

/** Tombol kembali ke atas dengan cincin progres scroll. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      tabIndex={show ? 0 : -1}
      className={`no-print fixed right-4 bottom-4 z-40 grid size-12 place-items-center rounded-full bg-forest-900 text-gold-300 shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-1 hover:bg-forest-800 sm:right-6 sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r="22" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="2" />
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
      </svg>
      <ArrowUp size={18} />
    </button>
  );
}
