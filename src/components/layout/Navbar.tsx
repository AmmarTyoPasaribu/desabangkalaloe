"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/data/site";
import { InstagramIcon, MapPinIcon } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu saat pindah halaman
  useEffect(() => setOpen(false), [pathname]);

  // Kunci scroll body + tutup dengan Escape saat menu mobile terbuka
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-3 transition-all duration-500 sm:pl-4 ${
          solid
            ? "border border-line/80 bg-paper/85 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Beranda Desa Bangkalaloe">
          <Image
            src="/images/brand/logo-desa.png"
            alt=""
            width={613}
            height={407}
            priority
            className="h-9 w-auto object-contain transition-transform duration-500 group-hover:-rotate-6 sm:h-10"
          />
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-semibold transition-colors ${
                solid ? "text-forest-900" : "text-white"
              }`}
            >
              Bangkalaloe
            </span>
            <span
              className={`block text-[11px] font-medium tracking-wide transition-colors ${
                solid ? "text-muted" : "text-white/70"
              }`}
            >
              Kab. {site.kabupaten}
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      solid
                        ? active
                          ? "text-forest-900"
                          : "text-muted hover:text-forest-900"
                        : active
                          ? "text-forest-950"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 -z-10 rounded-full ${solid ? "bg-gold-100" : "bg-gold-300"}`}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.social.maps}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all sm:inline-flex ${
              solid
                ? "bg-forest-800 text-white hover:bg-forest-700"
                : "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
            }`}
          >
            <MapPinIcon size={16} /> Lokasi
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className={`grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
              solid ? "bg-forest-900 text-white" : "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.75rem] border border-line bg-paper/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navigasi mobile">
              <ul className="grid gap-1">
                {navItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl transition-colors ${
                          active ? "bg-forest-900 text-white" : "text-forest-900 hover:bg-sand"
                        }`}
                      >
                        {item.label}
                        <ArrowUpRight size={18} className={active ? "text-gold-300" : "text-muted"} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-line pt-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-sand px-4 py-3 text-sm font-semibold text-forest-900"
              >
                <InstagramIcon size={18} /> Instagram
              </a>
              <a
                href={site.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-sand px-4 py-3 text-sm font-semibold text-forest-900"
              >
                <MapPinIcon size={18} /> Google Maps
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
