import type { ComponentType, SVGProps } from "react";
import {
  Backpack,
  Baby,
  Blocks,
  BookOpen,
  Droplet,
  Droplets,
  GraduationCap,
  Hospital,
  Landmark,
  Milestone,
  Route,
  Signpost,
  Stethoscope,
  Store,
  Theater,
  Toilet,
  Volleyball,
  Waves,
  Warehouse,
  DoorOpen,
} from "lucide-react";
import {
  BadmintonIcon,
  BasketballIcon,
  BridgeIcon,
  MosqueIcon,
  MushollaIcon,
  SoccerIcon,
  WellIcon,
} from "@/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export type Datum = { label: string; value: number };

/** Penduduk berdasarkan pekerjaan (jiwa). Total = 3.107 */
export const pekerjaan: Datum[] = [
  { label: "Petani", value: 1521 },
  { label: "Tidak Bekerja", value: 340 },
  { label: "Wiraswasta / Pedagang", value: 331 },
  { label: "PNS", value: 247 },
  { label: "Peternak", value: 211 },
  { label: "Pensiunan", value: 206 },
  { label: "Swasta", value: 168 },
  { label: "TNI / POLRI", value: 41 },
  { label: "Jasa", value: 37 },
  { label: "Pekerja Seni", value: 5 },
];

/** Penduduk berdasarkan lulusan pendidikan umum (jiwa). */
export const pendidikan: Datum[] = [
  { label: "SD / Sederajat", value: 1072 },
  { label: "SMP / Sederajat", value: 551 },
  { label: "Taman Kanak-Kanak", value: 510 },
  { label: "SMA / Sederajat", value: 497 },
  { label: "Sarjana (S1)", value: 225 },
  { label: "Akademi (D1–D3)", value: 98 },
  { label: "Magister (S2)", value: 9 },
];

export const pendidikanKhusus: Datum[] = [
  { label: "Pondok Pesantren", value: 2 },
  { label: "Pendidikan Keagamaan", value: 27 },
];

export const tidakSekolah: Datum[] = [
  { label: "Tidak Lulus", value: 9 },
  { label: "Tidak Bersekolah", value: 1017 },
];

export type Sarana = { label: string; value: number; unit: string; icon: Icon };
export type SaranaGroup = { title: string; items: Sarana[] };

export const sarana: SaranaGroup[] = [
  {
    title: "Pemerintahan & Kesehatan",
    items: [
      { label: "Kantor Desa", value: 1, unit: "unit", icon: Landmark },
      { label: "Puskesmas Pembantu", value: 1, unit: "buah", icon: Hospital },
      { label: "Poskesdes", value: 1, unit: "buah", icon: Stethoscope },
    ],
  },
  {
    title: "Pendidikan",
    items: [
      { label: "PAUD", value: 1, unit: "sekolah", icon: Baby },
      { label: "TK", value: 2, unit: "sekolah", icon: Blocks },
      { label: "SD", value: 3, unit: "sekolah", icon: Backpack },
      { label: "SMP", value: 2, unit: "sekolah", icon: BookOpen },
      { label: "SMK", value: 1, unit: "sekolah", icon: GraduationCap },
    ],
  },
  {
    title: "Ibadah",
    items: [
      { label: "Masjid", value: 3, unit: "buah", icon: MosqueIcon },
      { label: "Musholla", value: 3, unit: "buah", icon: MushollaIcon },
    ],
  },
  {
    title: "Olahraga, Budaya & Ekonomi",
    items: [
      { label: "Lapangan Sepak Bola", value: 1, unit: "buah", icon: SoccerIcon },
      { label: "Lapangan Bulutangkis", value: 1, unit: "buah", icon: BadmintonIcon },
      { label: "Lapangan Voli", value: 1, unit: "buah", icon: Volleyball },
      { label: "Lapangan Basket", value: 1, unit: "buah", icon: BasketballIcon },
      { label: "Sanggar Seni / Budaya", value: 1, unit: "buah", icon: Theater },
      { label: "Pasar Desa", value: 1, unit: "buah", icon: Store },
    ],
  },
  {
    title: "Transportasi",
    items: [
      { label: "Jalan Desa (aspal/beton)", value: 2, unit: "km", icon: Route },
      { label: "Jalan Kabupaten", value: 5, unit: "km", icon: Signpost },
      { label: "Jalan Provinsi", value: 5, unit: "km", icon: Milestone },
      { label: "Jembatan Besi", value: 1, unit: "buah", icon: BridgeIcon },
    ],
  },
  {
    title: "Air Bersih & Sanitasi",
    items: [
      { label: "Pengolahan Air Bersih", value: 4, unit: "buah", icon: Droplets },
      { label: "Sumur Desa", value: 2, unit: "buah", icon: WellIcon },
      { label: "Sumur Gali", value: 86, unit: "buah", icon: Droplet },
      { label: "MCK Umum", value: 2, unit: "buah", icon: Warehouse },
      { label: "Jamban Keluarga", value: 741, unit: "buah", icon: Toilet },
    ],
  },
  {
    title: "Irigasi & Drainase",
    items: [
      { label: "Saluran Drainase", value: 4000, unit: "meter", icon: Waves },
      { label: "Saluran Irigasi", value: 3500, unit: "meter", icon: Waves },
      { label: "Pintu Air", value: 5, unit: "buah", icon: DoorOpen },
    ],
  },
];

/* ---------------- APBDes T.A. 2024 ---------------- */

export const apbdesTahun = 2024;

export const pendapatan: Datum[] = [
  { label: "Dana Desa (DD)", value: 821_676_000 },
  { label: "Alokasi Dana Desa (ADD)", value: 851_994_958 },
  { label: "Bagi Hasil Pajak & Retribusi", value: 31_226_741 },
];

export type BidangBelanja = { bidang: string; kegiatan: Datum[] };

export const belanja: BidangBelanja[] = [
  {
    bidang: "Penyelenggaraan Pemerintahan Desa",
    kegiatan: [
      { label: "Belanja siltap, tunjangan & operasional pemerintah desa", value: 662_517_600 },
      { label: "Pemeliharaan sarana/prasarana kantor desa", value: 159_695_700 },
      { label: "Tata praja pemerintahan, perencanaan, keuangan & pelaporan", value: 31_000_000 },
    ],
  },
  {
    bidang: "Pelaksanaan Pembangunan Desa",
    kegiatan: [
      { label: "Penyelenggaraan PAUD/TK/TPA", value: 103_200_000 },
      { label: "Penyelenggaraan Posyandu", value: 36_000_000 },
      { label: "Pengadaan & pemeliharaan mobil desa", value: 10_000_000 },
      { label: "Pekerjaan umum & penataan ruang", value: 192_864_500 },
      { label: "Informasi publik & pemeliharaan hutan desa", value: 6_000_000 },
    ],
  },
  {
    bidang: "Pembinaan Kemasyarakatan",
    kegiatan: [
      { label: "Pembinaan keamanan, ketertiban & ketenteraman masyarakat", value: 8_600_000 },
      { label: "Dukungan kebudayaan dan keagamaan", value: 43_100_000 },
      { label: "Dukungan kegiatan lembaga kepemudaan", value: 5_000_000 },
      { label: "Dukungan kegiatan lembaga kemasyarakatan", value: 10_000_000 },
    ],
  },
  {
    bidang: "Pemberdayaan Masyarakat",
    kegiatan: [
      { label: "Penguatan ketahanan pangan tingkat desa", value: 218_945_000 },
      { label: "Peningkatan kapasitas aparatur desa", value: 8_000_000 },
      { label: "Kapasitas kelompok pemerhati & perlindungan anak", value: 35_600_000 },
      { label: "Pengelolaan Badan Usaha Milik Desa", value: 2_500_000 },
    ],
  },
  {
    bidang: "Penanggulangan Bencana, Darurat & Mendesak",
    kegiatan: [
      { label: "Penanganan keadaan darurat (biaya tak terduga)", value: 10_000_000 },
      { label: "BLT Dana Desa (keadaan mendesak)", value: 144_000_000 },
    ],
  },
];

export const pembiayaan = {
  penerimaan: 7_169_649,
  pengeluaran: 25_000_000,
};

/** Ringkasan dihitung otomatis supaya angka selalu konsisten. */
export function ringkasanApbdes() {
  const totalPendapatan = pendapatan.reduce((a, d) => a + d.value, 0);
  const totalBelanja = belanja.reduce((a, b) => a + b.kegiatan.reduce((x, k) => x + k.value, 0), 0);
  const surplus = totalPendapatan - totalBelanja;
  const pembiayaanNetto = pembiayaan.penerimaan - pembiayaan.pengeluaran;
  const silpa = surplus + pembiayaanNetto;
  return { totalPendapatan, totalBelanja, surplus, pembiayaanNetto, silpa };
}
