import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { site } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Kec. ${site.kecamatan}, Kab. ${site.kabupaten}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: ["Desa Bangkalaloe", "Pokobulo", "Bontoramba", "Jeneponto", "Sulawesi Selatan", "profil desa", "Toddo Appaka"],
  authors: [{ name: "Ammar Tyo Pasaribu" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0d3522",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: `Pemerintah ${site.name}`,
    url: site.url,
    logo: `${site.url}/images/brand/logo-desa.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkalaloe",
      addressRegion: site.provinsi,
      postalCode: site.kodePos,
      addressCountry: "ID",
    },
    sameAs: [site.social.instagram],
  };

  return (
    <html lang="id" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#konten"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-forest-950 shadow-lg transition-transform focus:translate-y-0"
        >
          Lewati ke konten
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
