/** Struktur Organisasi Pemerintahan Desa Bangkalaloe (sumber: bagan aparat desa). */

export type Jabatan = { jabatan: string; nama: string };

export const kepalaDesa = {
  nama: "Hj. St. Syamsiah Saad, S.Pd.I",
  jabatan: "Kepala Desa Bangkalaloe",
  foto: "/images/struktur/kepala-desa.jpg",
};

export const sekretaris: Jabatan = { jabatan: "Sekretaris Desa", nama: "Umariyadi Rasyid, S.T." };

export const seksi: Jabatan[] = [
  { jabatan: "Seksi Pemerintahan", nama: "Hamzah Mahasani" },
  { jabatan: "Seksi Pembangunan", nama: "Muh. Jufri Hakim" },
  { jabatan: "Seksi Kesejahteraan", nama: "Mustakim T." },
];

export const kaur: Jabatan[] = [
  { jabatan: "Kaur Umum", nama: "Ramlianto, S.P." },
  { jabatan: "Kaur Keuangan", nama: "M. Arfan Azis, S.Pd.I" },
  { jabatan: "Kaur Perencanaan", nama: "Muh. Rusli, S.Pd." },
];

export const dusunStruktur: { dusun: string; kepala: string; rk: string[] }[] = [
  {
    dusun: "Pokobulo",
    kepala: "Ahmad Yani",
    rk: ["Sarama", "Hamzah S.", "Irfan", "Rustam Miri", "Mustari"],
  },
  {
    dusun: "Linrungloe",
    kepala: "Wardan Mustari, S.T.",
    rk: ["Rustam", "Hasnandar", "Kalida", "Yusuf B.", "Pasaruddin Mangong", "Kammisi", "Abd. Azis Liong"],
  },
  {
    dusun: "Joko",
    kepala: "Arman Nur",
    rk: ["Lahoddin", "Hamiluddin", "Imbar Bani", "Sampara"],
  },
];

export const visi = {
  judul: "JULUBORITTA PLUS",
  // Huruf kapital yang membentuk akronim ditandai dengan [ ]
  akronim:
    "Ma[ju], Ink[lu]sif, [B]ersih, In[o]vatif, [R]el[i]gius, dan [T]erta[ta] sesuai prinsip [P]embangunan Berke[l]anjutan melal[u]i [S]DGs Desa",
};

export const misi = [
  "Membangun mental, fisik, dan spiritual desa dan masyarakat.",
  "Meningkatkan tata kelola penyelenggaraan pemerintahan desa yang baik dan bersih.",
  "Meningkatkan akses dan kualitas pelayanan dasar secara inklusif.",
  "Meningkatkan perekonomian desa berbasis potensi lokal dan inovasi.",
  "Meningkatkan dan meratakan pembangunan infrastruktur perdesaan.",
  "Meningkatkan kemitraan dan perluasan jejaring dalam percepatan pembangunan desa.",
  "Meningkatkan pembinaan kemasyarakatan dan pemberdayaan masyarakat desa.",
];
