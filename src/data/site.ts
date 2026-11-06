/**
 * Data umum desa. Ubah angka/teks di sini — semua halaman ikut ter-update.
 */

export const site = {
  name: "Desa Bangkalaloe",
  shortName: "Bangkalaloe",
  tagline: "Biarkan banyak yang mengkal, tetapi pastikan satu yang matang.",
  description:
    "Website resmi profil Desa Bangkalaloe, Kecamatan Bontoramba, Kabupaten Jeneponto, Sulawesi Selatan — sejarah, data desa, UMKM, dan potensi wisata.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://desabangkalaloe.vercel.app",
  kecamatan: "Bontoramba",
  kabupaten: "Jeneponto",
  provinsi: "Sulawesi Selatan",
  kodePos: "92351",
  berdiri: "2 Mei 1986",
  social: {
    instagram: "https://www.instagram.com/kkn113unhas.desabangkalaloe/",
    maps: "https://www.google.com/maps/place/Bangkalaloe,+Kec.+Bontoramba,+Kabupaten+Jeneponto,+Sulawesi+Selatan/",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63528.86884692953!2d119.50779397530912!3d-5.6458395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee1d4b4a993db%3A0x1daea3b37efcd95!2sBangkalaloe%2C%20Jeneponto%20Regency%2C%20South%20Sulawesi%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1719124800000!5m2!1sen!2sus",
} as const;

export const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/sejarah", label: "Sejarah" },
  { href: "/infografis", label: "Infografis" },
  { href: "/umkm", label: "UMKM" },
  { href: "/potensi", label: "Potensi" },
  { href: "/tentang", label: "Tentang" },
] as const;

export const monografi = {
  dusun: 3,
  rk: 16,
  penduduk: 3107,
  kepalaKeluarga: 939,
  keluargaPetani: 539,
  luasKm2: 7.85,
  luasHa: 782.2,
  lintang: "5°36'10.68\" LS",
  bujur: "119°43'7.30\" BT",
} as const;

export const batasWilayah = [
  { arah: "Utara", desa: "Desa Datara" },
  { arah: "Timur", desa: "Desa Jombe & Desa Tanjonga" },
  { arah: "Selatan", desa: "Desa Karelayu & Desa Balumbungang" },
  { arah: "Barat", desa: "Desa Balumbungang & Desa Barayya" },
] as const;

export const dusunList = ["Pokobulo", "Linrungloe", "Joko"] as const;
export type Dusun = (typeof dusunList)[number];
