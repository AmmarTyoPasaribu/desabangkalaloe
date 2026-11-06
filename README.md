# Website Profil Desa Bangkalaloe

Website resmi profil **Desa Bangkalaloe**, Kecamatan Bontoramba, Kabupaten Jeneponto, Sulawesi Selatan.
Dibangun dengan **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, dan **Motion**.

## Menjalankan secara lokal

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

| Target | Perintah | Keterangan |
| --- | --- | --- |
| **Vercel** (disarankan) | `npm run build` | Impor repo di vercel.com, tanpa konfigurasi tambahan. Optimasi gambar dan redirect URL lama aktif. |
| **Hosting statis / GitHub Pages** | `npm run build:static` | Hasil di folder `out/`. Redirect `.html` lama tidak berlaku di mode ini. |

Atur `NEXT_PUBLIC_SITE_URL` (misal `https://desabangkalaloe.id`) agar sitemap, robots, dan meta Open Graph memakai domain yang benar.

## Mengubah data

Semua isi disimpan terpisah dari tampilan, jadi **tidak perlu menyentuh layout**:

| File | Isi |
| --- | --- |
| `src/data/site.ts` | Nama desa, alamat, link sosial media, monografi, batas wilayah |
| `src/data/struktur.ts` | Kepala desa, visi-misi, aparat desa, kepala dusun & RK |
| `src/data/infografis.ts` | Pekerjaan, pendidikan, sarana prasarana, APBDes (ringkasan dihitung otomatis) |
| `src/data/umkm.ts` | Daftar UMKM per dusun |
| `src/data/potensi.ts` | Potensi alam/budaya, galeri foto, komoditas |
| `src/content/sejarah.tsx` | Naskah sejarah lengkap & daftar isi |

Gambar ada di `public/images/` dan sudah dioptimasi (maks 2000px).

## Struktur

```
src/
  app/            # route: /, /profil, /sejarah, /infografis, /umkm, /potensi, /tentang
  components/     # layout (navbar, footer), ui (reveal, lightbox, counter), charts, dll.
  content/        # naskah panjang (sejarah)
  data/           # data desa
public/images/    # aset gambar
```

---

Dikembangkan oleh Ammar Tyo Pasaribu — KKN Universitas Hasanuddin Gelombang 113, Desa Bangkalaloe.
