import type { Dusun } from "./site";

export type Kategori =
  | "Toko Kelontong"
  | "Bengkel & Otomotif"
  | "ATK & Percetakan"
  | "Kebutuhan Pokok"
  | "Fesyen"
  | "Pulsa"
  | "Obat Pertanian"
  | "Lainnya";

export type Umkm = {
  id: string;
  nama: string;
  jk: "L" | "P";
  pekerjaan: string;
  usaha: string;
  kategori: Kategori;
  dusun: Dusun;
};

// [nama, jk, pekerjaan, bidang usaha]
type Row = [string, "L" | "P", string, string];

const kategoriOf: Record<string, Kategori> = {
  "Barang Campuran": "Toko Kelontong",
  "Jual Pulsa": "Pulsa",
  "Usaha Pengelasan": "Bengkel & Otomotif",
  Perbengkelan: "Bengkel & Otomotif",
  "Perbengkelan / Las": "Bengkel & Otomotif",
  "Jual Alat Motor": "Bengkel & Otomotif",
  "ATK / Fotocopy": "ATK & Percetakan",
  "ATK / Percetakan": "ATK & Percetakan",
  "Foto Studio / Percetakan": "ATK & Percetakan",
  "Jual Beras": "Kebutuhan Pokok",
  "Jual Gula Pasir": "Kebutuhan Pokok",
  "Jual Tabung Gas": "Kebutuhan Pokok",
  "Usaha Butik": "Fesyen",
  "Jual Pakaian": "Fesyen",
  "Jual Obat Pertanian": "Obat Pertanian",
  "Jual Kaca": "Lainnya",
};

const pokobulo: Row[] = [
  ["Hasmaniar", "P", "Wiraswasta", "Barang Campuran"],
  ["Bale", "L", "Petani", "Barang Campuran"],
  ["Rinawati", "P", "IRT", "Barang Campuran"],
  ["Muhammadong", "L", "Wiraswasta", "Jual Pulsa"],
  ["Salasari", "P", "IRT", "Barang Campuran"],
  ["Syahnaedi Syam", "L", "Wiraswasta", "Usaha Pengelasan"],
  ["Sabir Bani, S.Pd.I", "L", "Wiraswasta", "Perbengkelan"],
  ["Muhammad Sarbini, S.E.", "L", "Wiraswasta", "Barang Campuran"],
  ["Saripuddin", "L", "Petani", "Barang Campuran"],
  ["Nompo", "L", "Petani", "Barang Campuran"],
  ["Harianto", "L", "Wiraswasta", "Barang Campuran"],
  ["Jumarang", "L", "Petani", "Barang Campuran"],
  ["M. Risal Mandang", "L", "Petani", "Usaha Pengelasan"],
  ["Hj. Sohobsinah, S.Pd.", "P", "PNS", "Barang Campuran"],
  ["Hj. Rosni", "P", "IRT", "Barang Campuran"],
  ["Sriyati, A.Ma.", "P", "Pensiunan", "Barang Campuran"],
  ["Idrus, S.Pd.", "L", "Wiraswasta", "Barang Campuran"],
  ["Riswan R.", "L", "Petani", "Barang Campuran"],
  ["Rosdiana Yadil", "P", "IRT", "Barang Campuran"],
  ["Amaluddin Tawang", "L", "Wiraswasta", "Barang Campuran"],
  ["Hj. Nursyam", "P", "PNS", "ATK / Fotocopy"],
  ["Lenteng", "P", "IRT", "Barang Campuran"],
  ["Muh. Arwin", "L", "Wiraswasta", "Perbengkelan"],
  ["Surintang", "P", "IRT", "Barang Campuran"],
  ["Sarina", "P", "IRT", "Barang Campuran"],
  ["Rapiuddin, S.H.", "L", "Wiraswasta", "ATK / Fotocopy"],
  ["Pujianti", "P", "IRT", "Barang Campuran"],
  ["Hasan Syam", "L", "Wiraswasta", "Barang Campuran"],
];

const linrungloe: Row[] = [
  ["Hasnandar", "L", "Wiraswasta", "Barang Campuran"],
  ["Sariambong", "P", "IRT", "Jual Obat Pertanian"],
  ["Nurlaela", "P", "IRT", "Barang Campuran"],
  ["Sonda", "L", "Petani", "Barang Campuran"],
  ["Hj. Dahlia", "P", "IRT", "Barang Campuran"],
  ["Seniwati", "P", "IRT", "Barang Campuran"],
  ["Hatija", "P", "IRT", "Barang Campuran"],
  ["Pasarudding Mangong", "L", "Wiraswasta", "Barang Campuran"],
  ["Sinar J.", "P", "IRT", "Barang Campuran"],
  ["Hj. Basse", "P", "IRT", "Barang Campuran"],
  ["Saprianto", "L", "Petani", "Barang Campuran"],
  ["Baharuddin B.", "L", "Wiraswasta", "Barang Campuran"],
  ["Parawangsa", "L", "Wiraswasta", "Barang Campuran"],
  ["Ramlianto", "L", "Wiraswasta", "Jual Obat Pertanian"],
  ["Husman Jalling", "L", "Wiraswasta", "Barang Campuran"],
  ["Sudirman", "L", "Wiraswasta", "Barang Campuran"],
  ["Manisi", "P", "IRT", "Jual Beras"],
  ["Harma Lalo", "P", "IRT", "Jual Beras"],
  ["Aripuddin", "L", "Wiraswasta", "Perbengkelan / Las"],
  ["H. Sampara Lili", "L", "Wiraswasta", "Barang Campuran"],
  ["Ramlah", "P", "IRT", "Usaha Butik"],
  ["Hj. Suriani Syamsul", "P", "IRT", "Usaha Butik"],
  ["Rosmiati Simba", "P", "IRT", "Barang Campuran"],
  ["Darmi", "P", "IRT", "Jual Pakaian"],
  ["Nurintang", "P", "IRT", "Jual Alat Motor"],
  ["Hamsiah", "P", "IRT", "Barang Campuran"],
];

const joko: Row[] = [
  ["Sahabuddin", "L", "Petani", "Barang Campuran"],
  ["Awing Manggo", "L", "Petani", "Barang Campuran"],
  ["Suhapid Tarang", "L", "Petani", "Barang Campuran"],
  ["Sumantri Bumbung", "L", "Wiraswasta", "Jual Kaca"],
  ["Sariambong", "P", "IRT", "Barang Campuran"],
  ["Pa'gama", "L", "Petani", "Jual Tabung Gas"],
  ["Haru", "L", "Wiraswasta", "Jual Pulsa"],
  ["Manra", "L", "Petani", "Barang Campuran"],
  ["Tiga", "P", "IRT", "Barang Campuran"],
  ["Mutiara Lobo", "P", "Petani", "Barang Campuran"],
  ["Musrawati", "P", "IRT", "ATK / Fotocopy"],
  ["Syamsuddin", "L", "Wiraswasta", "Perbengkelan"],
  ["Kamiluddin", "L", "Petani", "Perbengkelan"],
  ["Sudirman", "L", "Wiraswasta", "Perbengkelan"],
  ["Ahmad Syam Fajar", "L", "Wiraswasta", "Foto Studio / Percetakan"],
  ["Asdar", "L", "Wiraswasta", "ATK / Percetakan"],
  ["Ammar Husain", "L", "Wiraswasta", "Barang Campuran"],
  ["Suriati Bombang", "P", "IRT", "Jual Gula Pasir"],
  ["Saparuddin S.", "L", "Petani", "Barang Campuran"],
  ["Baji", "P", "IRT", "Barang Campuran"],
  ["Rahmawati", "P", "IRT", "Jual Pakaian"],
];

function build(rows: Row[], dusun: Dusun): Umkm[] {
  return rows.map(([nama, jk, pekerjaan, usaha], i) => ({
    id: `${dusun.toLowerCase()}-${i + 1}`,
    nama,
    jk,
    pekerjaan,
    usaha,
    kategori: kategoriOf[usaha] ?? "Lainnya",
    dusun,
  }));
}

export const umkm: Umkm[] = [
  ...build(pokobulo, "Pokobulo"),
  ...build(linrungloe, "Linrungloe"),
  ...build(joko, "Joko"),
];
