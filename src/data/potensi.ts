export type Potensi = {
  slug: string;
  nama: string;
  subjudul: string;
  kategori: "Alam" | "Budaya";
  lokasi?: string;
  cover: string;
  paragraf: string[];
  galeri: string[];
};

const gallery = (key: string, n = 6) =>
  Array.from({ length: n }, (_, i) => `/images/potensi/${key}-${i + 1}.jpg`);

export const potensiList: Potensi[] = [
  {
    slug: "hutan-mattatakang",
    nama: "Hutan Mattatakang",
    subjudul: "Hutan adat bersejarah & kawasan flora langka",
    kategori: "Alam",
    lokasi: "Perbukitan utara desa, perbatasan Desa Datara",
    cover: "/images/potensi/hutan-cover.jpg",
    paragraf: [
      "Hutan Mattatakang adalah kawasan hutan bersejarah di perbukitan bagian utara Desa Bangkalaloe. Masyarakat setempat menyebutnya “Karollea”. Pada masa pra-Islam, Karollea menjadi pusat upacara ritual pemujaan (animisme–dinamisme), sehingga hingga kini masih dikeramatkan.",
      "Hutan ini juga kaya keanekaragaman hayati. Pada Juli 2024, mahasiswa KKN Jurusan Kehutanan Universitas Gadjah Mada menemukan pohon langka dari spesies Gyrocarpus americanus — jenis yang umumnya hanya dijumpai di Amerika Latin, Nusa Tenggara, dan Jawa. Temuan ini menunjukkan potensi besar Hutan Mattatakang sebagai kawasan konservasi.",
    ],
    galeri: gallery("hutan"),
  },
  {
    slug: "batu-leppa",
    nama: "Batu Leppa",
    subjudul: "Batu pipih purba dengan panorama kampung",
    kategori: "Alam",
    lokasi: "Dusun Linrungloe, sisi barat desa",
    cover: "/images/potensi/batuleppa-cover.jpg",
    paragraf: [
      "Batu Leppa berarti batu yang datar atau pipih. Diperkirakan terbentuk dari pembekuan magma pada periode Pleistosen. Letaknya yang tinggi menjadikannya titik terbaik untuk menikmati panorama kampung dari atas — cocok untuk wisata alam.",
      "Lokasinya dikelilingi perkebunan yang subur dengan suasana tenang dan udara segar. Batu Leppa dapat dicapai dari pusat Kota Jeneponto dengan kendaraan pribadi maupun transportasi umum; akses jalan cukup baik, namun disarankan memakai kendaraan yang sesuai medan.",
    ],
    galeri: gallery("batuleppa"),
  },
  {
    slug: "sungai",
    nama: "Sungai Bangkalaloe",
    subjudul: "Aliran sepanjang ±5 km yang menghidupi sawah",
    kategori: "Alam",
    lokasi: "Membentang dari timur laut hingga selatan desa",
    cover: "/images/potensi/sungai-cover.jpg",
    paragraf: [
      "Sungai sepanjang sekitar 5 km ini membentang dari sisi timur laut hingga sebelah selatan Desa Bangkalaloe, mengairi persawahan dan perkebunan warga.",
      "Sungai ini juga lekat dengan sejarah desa: di lubuk Marrung-lah, menurut tutur lisan, Tumanurunga ri Marrung ditemukan terapung di atas rumpun bambu — kisah yang melahirkan nama Pokobulo.",
    ],
    galeri: gallery("sungai"),
  },
  {
    slug: "makam-prasejarah",
    nama: "Kompleks Makam Kuno Joko",
    subjudul: "Situs megalitikum para leluhur Toddo Bangkalaloe",
    kategori: "Budaya",
    lokasi: "Dusun Joko",
    cover: "/images/potensi/makam-cover.jpg",
    paragraf: [
      "Kompleks Makam Kuno Joko merupakan situs purbakala dari zaman megalitikum (zaman batu besar). Di sinilah para Toddo Bangkalaloe dan keluarganya dimakamkan, dan kini kompleks ini berstatus cagar budaya.",
    ],
    galeri: gallery("makam"),
  },
  {
    slug: "balla-lompoa",
    nama: "Balla' Lompoa",
    subjudul: "Rumah adat Desa Bangkalaloe",
    kategori: "Budaya",
    cover: "/images/potensi/rumah-cover.jpg",
    paragraf: [
      "Balla' Lompoa — secara harfiah “rumah besar” dalam bahasa Makassar — adalah rumah adat Desa Bangkalaloe dan menjadi simbol kesinambungan warisan adat para Toddo Bangkalaloe.",
    ],
    galeri: gallery("rumah"),
  },
  {
    slug: "sejarah-toddo",
    nama: "Jejak To'do Bangkalaloe",
    subjudul: "Warisan dewan adat pemilih Raja Binamu",
    kategori: "Budaya",
    cover: "/images/potensi/sejarah-cover.jpg",
    paragraf: [
      "To'do Bangkalaloe bermula pada masa Manangga memegang pemerintahan. Pada era itu terjadi perseteruan di Hutan Mattatakang untuk mendapatkan Burung Emas di antara empat daerah perintis — To'do Appaka: Layu, Lentu, Batujala, dan Bangkalaloe.",
      "Untuk mencegah sengketa yang lebih parah, dicetuskanlah gagasan membentuk Kerajaan Binamu. Dari sinilah lahir istilah “Toddo” sebagai dewan adat yang menetapkan dan melantik raja. Manangga adalah Toddo Bangkalaloe pertama.",
    ],
    galeri: ["/images/potensi/sejarah-1.jpg", "/images/potensi/sejarah-2.jpg", "/images/potensi/sejarah-3.jpg"],
  },
];

export type Komoditas = { nama: string; deskripsi: string; img: string };

export const komoditasLuasTanam: Komoditas[] = [
  { nama: "Padi", deskripsi: "Tanaman pangan utama yang tersebar di seluruh penjuru desa.", img: "/images/komoditas/padi.jpg" },
  { nama: "Jagung", deskripsi: "Komoditas luas tanam unggulan yang juga tersebar di seluruh penjuru desa.", img: "/images/komoditas/jagung.jpg" },
];

export const komoditasEkonomi: Komoditas[] = [
  { nama: "Bawang Merah", deskripsi: "Komoditas penting yang banyak digunakan dalam masakan Indonesia.", img: "/images/komoditas/bawang-merah.jpg" },
  { nama: "Cabai", deskripsi: "Memberi rasa pedas yang khas dan menjadi bahan utama banyak hidangan.", img: "/images/komoditas/cabai.jpg" },
  { nama: "Gula Merah", deskripsi: "Pemanis alami dari pohon lontar yang dipakai dalam beragam resep tradisional.", img: "/images/komoditas/gula-merah.jpg" },
];
