/**
 * Naskah "Sejarah Desa Bangkalaloe" — ditulis oleh Fahridenai (Fahri AB), Jeneponto, 22 Januari 2025.
 * Isi mengikuti naskah asli; hanya ejaan/typo yang dirapikan.
 */
import { DataTable, Note, PullQuote, Verse } from "@/components/sejarah/parts";

export type TocItem = { id: string; label: string; children?: TocItem[] };

export const toc: TocItem[] = [
  { id: "prakata", label: "Prakata" },
  { id: "landasan", label: "Landasan dan Alasan" },
  {
    id: "paccinongang",
    label: "Bermula dari Paccinongang",
    children: [
      { id: "tumanurunga", label: "Tumanurunga ri Marrung" },
      { id: "bangsa-awan", label: "Bangsa dari Awan" },
      { id: "prahara", label: "Prahara Bercahaya" },
      { id: "perempuan-empu", label: "Perempuan Empu" },
      { id: "toddo-pelaku", label: "Toddo sebagai Pelaku" },
      { id: "manangga-salamung", label: "Masa Manangga sampai Salamung" },
      { id: "nama-toddo", label: "Nama-Nama Toddo Bangkalaloe" },
    ],
  },
  {
    id: "toddo-appa",
    label: "Toddo Appa",
    children: [
      { id: "toddo-appaka-binamu", label: "Toddo Appaka ri Binamu" },
      { id: "pengukuhan", label: "Pengukuhan Toddo Appaka" },
      { id: "daftar-toddo-appaka", label: "Daftar Nama Toddo Appaka" },
      { id: "daftar-karaeng", label: "Daftar Nama Karaeng Binamu" },
    ],
  },
  {
    id: "burung-emas",
    label: "Burung Emas",
    children: [
      { id: "pokobulo", label: "Sejarah Pokobulo" },
      { id: "desa-bangkalaloe", label: "Desa Bangkalaloe" },
      { id: "momen", label: "Momen Monumental" },
      { id: "tempat", label: "Tempat Bersejarah" },
    ],
  },
  { id: "penulis", label: "Profil Penulis" },
  { id: "lampiran", label: "Lampiran" },
];

const namaToddo: (string | number)[][] = [
  [1, "Manangga", "Putra dari Puanta ri Bongki; cucu dari Tumanurunga ri Marrung"],
  [2, "Manurung", "Putra dari Manangga; dikenal pula dengan nama Danto Mumba"],
  [3, "Salamung", "Putra dari Manurung"],
  [4, "Mangngani", "Putra dari Salamung"],
  [5, "Tona", "Putra dari Salamung"],
  [6, "Manggappa", "Putra dari Salamung"],
  [7, "Bago", "Dimakamkan di Kompleks Makam Joko"],
  [8, "Lawarri", "Dimakamkan di Kompleks Makam Joko"],
  [9, "Manriakki", "Dimakamkan di Kompleks Makam Joko"],
  [10, "Patiadang", "Daeng Sarro; Danto Cappimata. Dimakamkan di Kompleks Makam Joko"],
  [11, "Radeng", "Radeng Daeng Nyitto; ayah dari Tago dan H. Maggu"],
  [12, "Tago", "Putra dari Radeng. Dimakamkan di Kompleks Makam Joko"],
  [13, "H. Maggu", "Putra dari Radeng; Danto Janggo"],
  [14, "H. Badi", "Daeng Lolo; putra dari Tago; bergelar Punggawayya"],
  [15, "H. Loko", "Turunan dari Patiadang; ipar dari H. Badi"],
  [
    16,
    "H. Badi",
    "Menjabat kembali setelah kondisi keamanan membaik. Wafat tak lama setelah pertemuannya dengan Nabi Khaidir di daerah Sidenre. Dimakamkan di kompleks masjid Pokobulo, berdekatan dengan makam H. Loko dan H. Maggu",
  ],
];

const toddoAppaka: (string | number)[][] = [
  [1, "Na'na", "Sangaji", "Lihong", "Manangga"],
  [2, "Tungka", "Sadullah", "Patto", "Manurung"],
  [3, "Bagga", "Sinai", "Mappare", "Salamung"],
  [4, "Lollah", "Pasi", "Santa", "Mangngani"],
  [5, "Laccu", "Patau (I)", "Manggayuni", "Tona"],
  [6, "Jakkolo", "Patta", "Manessa (I)", "Manggappa"],
  [7, "Jaleko", "Tahere", "Ruma", "Bago"],
  [8, "Santa", "Patta (II)", "Manessa (II)", "Lawarri"],
  [9, "Mangngakkasang", "", "Muhammad", "Manriakki"],
  [10, "Patto", "", "", "Patiadang"],
  [11, "Manggappa", "", "", "Radeng"],
  [12, "Tanjeng Dg. Ada", "", "", "Tago"],
  [13, "Tanikulle Dg. Nanggung", "", "", "H. Maggu"],
  [14, "Rantu", "", "", "H. Badi (I)"],
  [15, "Simbung Dg. Pato", "", "", "H. Loko"],
  [16, "Rampasang Dg. Rewa", "", "", "H. Badi (II)"],
  [17, "Radja Dg. Nyarrang (I)", "", "", ""],
  [18, "Su'ru Dg. Tinggi", "", "", ""],
  [19, "Patte Dg. Naro", "", "", ""],
  [20, "Radja Dg. Nyarrang (II)", "", "", ""],
  [21, "Passukku Dg. Beta", "", "", ""],
];

const karaengBinamu: (string | number)[][] = [
  [1, "Maninggau / Gaukang Dg. Riolo", "1607–1631"],
  [2, "Bakiri Dg. Lalang", "1631–1660"],
  [3, "Paungga Dg. Gassing", "1660–1678"],
  [4, "Datu Muthara", "1678–1696"],
  [5, "Lapalalang Dg. Mase", "1696–1713"],
  [6, "Patokkoi Dg. Ujung", "1713–1731"],
  [7, "Jakkolo Dg. Rangka", "1731–1747"],
  [8, "Padewakkang Dg. Lurang", "1747–1763"],
  [9, "I Ronggo Dg. Bani", "1763–1780"],
  [10, "Sanre Dg. Nyikko", "1780–1796"],
  [11, "Bebasa Dg. Lalo", "1796–1814"],
  [12, "Badullah Dg. Tinggi", "1814–1834"],
  [13, "Palanrangi Dg. Liu", "1834–1852"],
  [14, "Patima Dg. Sakking", "1852–1869"],
  [15, "I Tia Dg. Ni'ni", "1869–1884"],
  [16, "Mattewakkang Dg. Jungge", "1884–1900"],
  [17, "Sanre Dg. Nyikko", "1900–1911"],
  [18, "Langke Dg. Lagu", "1911–1921"],
  [19, "I Lompo Dg. Raja", "1921–1923"],
  [20, "Maggau Dg. Sanggu", "1923–1929"],
  [21, "Mattewakkang Dg. Raja", "1929–1946"],
];

export function SejarahContent() {
  return (
    <>
      {/* ============ PRAKATA ============ */}
      <h2 id="prakata">Prakata</h2>
      <p className="first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:font-semibold first-letter:text-gold-500">
        Tulisan adalah sebuah fenomena yang mewujudkan transformasi bahasa dan pemikiran manusia ke dalam
        realitas abadi yang nyata. Berbeda dengan ucapan yang bersifat sementara dan terikat pada momen,
        tulisan menciptakan ruang di mana gagasan dapat melampaui batas waktu dan kehadiran fisik. Tulisan
        adalah teks yang tertulis dan berbicara tanpa membutuhkan kehadiran pembicaranya, membawa makna
        tersendiri dari penulisnya. Tulisan dapat menjadi utusan yang tidak mati, atau camilan yang tak bakal
        basi. Ia bertugas menyampaikan pesan lintas waktu; bilamana tulisan itu bertahan sebagai sebuah
        prasasti atau dokumen (lembaran, gulungan, buku, file, dst.).
      </p>
      <p>
        Berbeda dengan kata-kata yang diucapkan, yang terikat pada kefanaan para pembicara, tulisan akan tetap
        ada menghadirkan fakta dan data yang menyediakan wadah tempat informasi tersimpan yang dapat dikunjungi
        atau ditinjau kembali. Melalui tulisan, manusia berikhtiar melawan lupa dan mengupayakan ingatan yang
        hidup. Melalui tulisan, manusia mampu melestarikan sejarahnya, menyampaikan pengetahuannya, dan
        mengartikulasikan aspirasinya dengan cara yang lebih kompleks serta membuka banyak potensi dan medan
        interpretasi. Setiap kata yang tertulis menjadi saksi dari sebuah kelahiran dan kehadiran, di mana
        gagasan dapat terus berdialog dengan dunia melampaui pengalaman individu, bahkan sejarah sebuah bangsa
        yang belum terungkap.
      </p>
      <p className="text-right font-display text-lg italic text-forest-800">
        Jeneponto, 22 Januari 2025
        <br />
        Fahridenai
      </p>

      {/* ============ LANDASAN ============ */}
      <h2 id="landasan">Landasan dan Alasan</h2>
      <p>
        Setiap peristiwa sejarah memiliki jejak yang dapat diteliti kebenarannya. Jejak peristiwa ada yang
        berbentuk lisan, tulisan, maupun benda. Jejak-jejak sejarah inilah yang kemudian digunakan sebagai dasar
        untuk merekonstruksi peristiwa sejarah sehingga menemukan kebenaran masa lalu. Menurut Peraturan Menteri
        Pendidikan dan Kebudayaan Republik Indonesia Nomor 69 Tahun 2016 tentang Pedoman Penulisan Peristiwa
        Sejarah disebutkan bahwa sumber sejarah adalah kumpulan hasil kebudayaan, baik bersifat fisik atau
        artefak, lisan, maupun audiovisual untuk membuktikan suatu peristiwa sejarah. Dalam penulisan
        historiografi ini, sumber utamanya dari tradisi lisan (<em>oral tradition</em>), yaitu narasi dan
        deskripsi dari orang-orang dan peristiwa-peristiwa pada masa lalu yang disampaikan dari mulut ke mulut
        selama beberapa generasi. Manakala tidak diselamatkan menjadi tulisan, kita bisa kehilangan aset.
      </p>
      <p>
        Peristiwa sejarah yang diurai tidak terlepas dari konsep ruang dan waktu (dimensi spasial dan temporal).
        Ruang merupakan tempat suatu peristiwa terjadi, sedangkan waktu adalah saat terjadinya peristiwa. Oleh
        karena itu, konsep berpikir diperlukan untuk membantu proses interpretasi yang tepat dalam merekonstruksi
        pembuktian sejarah. Konsep berpikir diakronis menekankan aspek kronologis, sedangkan konsep berpikir
        sinkronis berfokus pada penguraian masalah yang dibahas pada suatu peristiwa. Jadi, diakronis cenderung
        memanjang, sedangkan sinkronis cenderung melebar.
      </p>
      <p>
        Informasi bersejarah penting untuk diketahui karena dapat membangun pemahaman yang lebih dalam tentang
        manusia dan masyarakat. Meski bias bisa saja muncul, belajar sejarah dapat memberi faedah bagi mereka
        yang ingin melakukan evaluasi untuk memperbaiki situasi. Sejarah pun mampu mempertebal rasa nasionalisme
        dan memberikan ketegasan identitas nasional dan kepribadian suatu bangsa. Selaras dengan pernyataan
        Marcus Garvey dari Jamaika:
      </p>
      <PullQuote cite="Marcus Garvey">
        A people without the knowledge of their past history, origin, and culture is like a tree without roots.
      </PullQuote>

      {/* ============ PACCINONGANG ============ */}
      <h2 id="paccinongang">Bermula dari Paccinongang</h2>
      <p>
        Paccinongang adalah permukiman kuno yang pertama didiami sekelompok komunitas yang memulai sebuah
        peradaban pada zaman feodal. Merupakan hamparan tanah datar yang lembap karena berada di tepi hutan dan
        di daerah aliran sungai. Bekas lokasinya masih dapat dilihat, namun hanya berupa semak belukar dan
        sebagian berubah menjadi lahan pertanian. Letaknya tidak jauh dari pohon raksasa bernama Puipuia di jalan
        poros perbatasan Dusun Joko dengan Dusun Linrungloe, Desa Bangkalaloe.
      </p>
      <p>
        Selain dinamakan Paccinongang, sering juga disebut Galemboro ‘air yang diobok-obok’. Hal ini dinamakan
        untuk menandai sebuah peristiwa ketika warga mencari ikan di sungai, melejitlah seekor ikan besar.
        Penasaran untuk menangkapnya, air diaduk/diobok-obok dengan harapan ikannya mabuk, kemudian didiamkan
        menunggu hingga bening agar ikannya dapat terlihat. Itulah mula penamaan Paccinongang ‘penjernihan’.
        Setelah ikan tertangkap, di dalam perut ikan ditemukan sebuah material logam menyerupai bentuk ikan itu
        sendiri yang kelak dijadikan artefak pusaka Toddo Bangkala bernama <em>betebetea</em> ‘ikan bawal’.
      </p>
      <p>
        Diceritakan, benda itu pernah diambil/dibawa oleh Belanda untuk diteliti di Bandung melalui pelabuhan
        Batavia, namun dilaporkan bahwa struktur material pembentuknya bukan berasal dari serat bumi. Itulah yang
        melatarbelakangi adanya asumsi keterkaitan penamaan Kampung Pacenongan di kawasan Gambir, Jakarta Pusat,
        yang konon memiliki korelasi ‘benang merah’ dengan Paccinongang dalam cerita ini, termasuk Paccinongan di
        Kecamatan Somba Opu, Kabupaten Gowa. (Tentu diperlukan penelitian lebih dalam.)
      </p>

      <h3 id="tumanurunga">Tumanurunga ri Marrung</h3>
      <p>
        Senja pada musim basah itu terasa lain dari biasanya. Samar-samar terdengar suara gemuruh dari arah
        sungai. Setelah diusut, ternyata banjir bandang yang baru saja surut menyeret banyak material dari hulu.
        Seonggok rumpun bambu terdampar melintang menghambat arus, menyebabkan aliran yang tertahan meluap
        menciptakan gejolak riuh. Sensasi yang mengusik itu berlangsung selama tiga hari. Suara berisik terbawa
        bayu dan mengundang rasa ingin tahu warga Paccinongang. Gerangan apa yang terjadi di sana? Maka
        diselidikilah! Setelah diamati, mereka terperanjat karena rumpun bambu yang mengapung itu memuat sesuatu
        yang aneh. “Ada boneka hidup menumpangi rakit bambu,” teriak warga yang menyaksikan. Setelah didekati,
        ternyata seorang bocah perempuan mungil berkisar umur dua tahun.
      </p>
      <p>
        Lantaran asal-usul anak itu tidak diketahui, maka dinamakanlah Tumanurung ‘orang yang turun’. Sedangkan
        tempat penemuan anak itu dinamakan Marrung ‘gemuruh’, sebuah lubuk di cekungan sungai bagian selatan
        Allu Tangngayya (tengah kampung Pokobulo). Atas alasan tersebut dinamakanlah ia dengan nama{" "}
        <strong>Tumanurunga ri Marrung</strong>.
      </p>
      <p>
        Keluarga Lompo Simboleng dari Paccinongang berbaik hati mengambil bidadari kecil itu untuk dipelihara
        sebagai anak angkatnya hingga dewasa. Tumanurunga dibesarkan dalam asuhan penuh kasih sayang yang
        dilukiskan dengan kalimat metafora <em>ta nairi anging ta nararang allo</em> ‘tak tersentuh angin,
        tiada terjamah mentari’.
      </p>
      <Note>
        <p>
          Tokoh revolusioner Bangkalaloe, Alm. H. Laho Suhafid bin Haji Loko, memperkirakan peradaban
          Paccinongang kuno dimulai sekitar tahun 500–1500 Masehi. Beliau banyak memperoleh informasi dari Teko,
          keturunan Toddo Bangkala III.
        </p>
      </Note>

      <h3 id="bangsa-awan">Bangsa dari Awan</h3>
      <p>
        Menurut kepercayaan masyarakat Yoruba, sebuah daerah di Nigeria Barat Daya, Oduduwa adalah nenek moyang
        dan pendiri peradaban mereka. Dia diyakini turun dari langit dengan rantai, disertai seekor ayam jantan
        dan merpati. Oduduwa dikatakan memiliki beberapa anak, yang kemudian menjadi penguasa Yoruba.
      </p>
      <p>
        Fragmen sejarah di atas adalah salah satu contoh dari sekian banyak cerita yang dimiliki oleh bangsa lain
        di sudut bumi yang jauh, namun terjadi pula di sini. Sungguh, tak perlu terlalu jauh, saudara kita di
        Tanah Luwu mengakui jika orang yang dianggap mula membangun kebudayaan mereka adalah Batara Guru atau
        Tomanurung yang turun dari kayangan. Begitu pun dengan tetangga kita di Gowa, percaya bahwa yang pertama
        menjadi raja di Kerajaan Gowa ialah Tomanurung Bainea, sedangkan di Butta Toa Bantaeng adalah Tumanurunga
        ri Onto. Demikian pula dengan Bangkalaloe meyakini jika awal peradabannya dimulai oleh orang langit;
        bangsa dari awan, dan juga bernama Tumanurung.
      </p>
      <p>
        Mengapa bisa terjadi pola serupa? Apakah itu sebuah kebenaran atau kebetulan? Mari kita bernalar tanpa
        mengabaikan nurani serta naluri!
      </p>
      <ol>
        <li>
          <strong>Bangsa Awan</strong>
          <p>
            Menurut Kiai Haji LaLa, seorang ulama sepuh mantan kepala Kantor Urusan Agama Kecamatan Bontoramba,
            Kab. Jeneponto, ketika terjadi banjir global pada zaman Nabi Nuh a.s., tatkala semua manusia dan
            makhluk lainnya digiring menaiki bahtera, sesungguhnya tidak semua orang beriman termuat dalam perahu
            itu. Lalu, Yang Kuasa ‘turun tangan’ mengangkat langsung orang-orang suci dan beriman itu ke atas awan
            agar selamat dan luput dari kepunahan massal.
          </p>
          <p>
            Setelah ‘kiamat pertama’ usai dan ‘kehidupan kedua’ hendak dimulai, Sang Sutradara menurunkan mereka
            kembali ke bumi dengan cara yang fantastis, bukan secara drastis. Tidak dengan terjun bebas dari
            langit yang tentu dapat memicu kepanikan, melainkan diturunkan secara eksklusif dengan skenario
            situasional yang mengagumkan. Umumnya pada saat sebuah komunitas sedang sibuk mencari figur pemimpin.
            Kemunculan sosok asing yang misterius manjur menjadi solusi aklamasi. Orang-orang akan bangga
            memiliki atasan yang menyatakan dirinya dari atas; manusia setengah dewa. Demikianlah awal munculnya
            istilah (bhs. Nusantara) gelar bangsawan, kata yang merujuk kepada orang/golongan kelas sosial tinggi
            yang mengklaim dirinya keturunan bangsa dari awan.
          </p>
        </li>
        <li>
          <strong>Alat Legitimasi</strong>
          <p>
            Sebuah kepentingan tidak menutup kemungkinan mengembuskan intrik sebagai katalisator meraih
            kekuasaan. Mengingat untuk meraih supremasi butuh perjuangan. Harus memenuhi standar kualitas, lolos
            seleksi, uji kelayakan, termasuk pemeriksaan sidik jari ‘barcode’. Modifikasi cerita yang terasa
            tidak logis bisa saja dikemas menjadi berkesan realistis supaya suksesi menjadi superior tidak
            menghadapi banyak birokrasi dan perdebatan. Dalam urusan politik, hal demikian merupakan strategi
            yang berpotensi. Isu tentang orang langit yang absurd efektif dijadikan alat legitimasi kekuasaan.
          </p>
        </li>
      </ol>

      <h3 id="prahara">Prahara Bercahaya</h3>
      <p>
        Setelah dewasa dalam asuhan Lompo Simboleng di Paccinongang, warga dibuat gempar karena Tumanurunga
        diketahui hamil tanpa perkawinan atau tanpa tersentuh laki-laki. Masalah ini merupakan perkara besar yang
        mencoreng kehormatan keluarga. Disangka skandal aib (<em>siri’</em>) yang memalukan, maka disepakati
        untuk dieksekusi. Ketika luapan amarah warga hampir tak terbendung, Tumanurunga mengajukan pembelaan diri
        dan permohonan. Dengan wajah yang lara ia berkata, “Tuanku, janganlah hamba dibunuh, hamba hamil oleh
        suamiku sendiri yang turun dari langit. Bilakah Tuanku tidak percaya, izinkan hamba membuktikannya.”
      </p>
      <p>
        Merasa dipermainkan dengan pernyataan yang tidak masuk akal, warga justru semakin geram dan nyaris hilang
        kendali. Tetapi, di antara mereka ada yang iba (<em>pacce</em>) dan dengan bijak mampu meredakan emosi
        massa seraya memberi kesempatan Tumanurunga memberikan pembuktian. Dinarasikan dalam riwayat bahwa
        Tumanurunga berhasil meyakinkan warga. Mereka menyaksikan cahaya terang turun dari langit pada setiap
        tengah malam Jumat. Tampak serupa lentera menyala turun dari angkasa menuju ke peraduan Tumanurunga. Bak
        kembang api mengambang di atas bubungan rumah, lalu terangkat melayang ke arah utara, dan menghilang
        ketika sejajar Hutan Mattatakang.
      </p>
      <p>
        Setelah persaksian itu warga menjadi lebih lega meski tetap diselimuti tanda tanya. Rencana eksekusi pun
        diurungkan. Kejadian aneh itu berlangsung beberapa kali pada setiap malam dan waktu yang sama disaksikan
        oleh khalayak sampai Tumanurunga melahirkan anak tiga kali. Setelah memiliki tiga anak yang kesemuanya
        perempuan, peristiwa bercahaya itu tak pernah lagi terulang sampai menjelang Tumanurunga kembali pulang ke
        kayangan (moksa). Dideskripsikan bahwa perjumpaan terakhir Tumanurunga dengan terang yang ditahbiskan
        sebagai suaminya itu menjadi elegi yang paling dramatis. Pada penghabisan kunjungannya, kemilau pelita itu
        meredup laksana kunang-kunang kehilangan cahaya. Hanya beberapa menit sinar itu berangsur sirna membuat
        suasana menjadi kelam dan mencekam. Dan, dalam senyap itulah ia pun lenyap meninggalkan sebilah{" "}
        <em>takala</em> ‘keris bergagang kepala manusia’ tergeletak di sisi pembaringan Tumanurunga. Keris titisan
        itu menjadi benda kebesaran (<em>pangngadakkang</em>) Toddo Bangkalaloe yang disimpan dalam sebuah peti
        bersama <em>betebetea</em>.
      </p>

      <h3 id="perempuan-empu">Perempuan Empu</h3>
      <p>
        Menurut kajian etimologi, kata ‘perempuan’ berakar pada kata ‘empu’ yang berarti ‘ahli atau tuan yang
        terhormat’, kemudian mengalami proses afiksasi sehingga maknanya menjadi ‘tuan induk tempat bertumpu’.
        Dalam berbagai mitologi, perempuan diagungkan sebagai dewi yang memiliki kekuatan adikodrati. Tak hanya
        fungsi feminin yang menjadi tugasnya, namun sejatinya perempuan adalah per-empu-an (<em>anrong tau</em>).
        Ibarat tangan yang memiliki jempol sebagai empu jari atau ibu jari. Demikian rupanya dengan Tumanurunga
        dalam cerita ini yang menjadi hulu tempat ber-empu dan mengalirkan darah biru yang kelak bermuara di
        berbagai penjuru.
      </p>
      <p>
        Seperti diterangkan sebelumnya, Tumanurunga melahirkan tiga anak perempuan dan semuanya diberi nama depan{" "}
        <em>punta</em>, singkatan dari <em>puangta/puang kita</em> ‘tuan kita’.
      </p>
      <ol>
        <li>
          <strong>Punta ri Ulu</strong>
          <p>
            Putri sulung yang dipinang oleh pemuda dari Balumbungang bernama Jaeng Daeng Timung (keluarga/saudara
            dengan Karaeng Layu). Dari perkawinannya dikaruniai sepasang anak; pertama bernama Mottiara
            (perempuan) dan satunya lagi laki-laki.
          </p>
        </li>
        <li>
          <strong>Punta ri Tangnga</strong>
          <p>Putri tengah yang dipinang oleh pemuda dari Bontotangnga. Dari garis inilah yang menurunkan keluarga besar Djalle.</p>
        </li>
        <li>
          <strong>Punta ri Bongki</strong>
          <p>
            Putri bungsu yang dipinang oleh pemuda dari Layu bernama Gunturu Kare Manuju. Dari perkawinannya
            lahir anak sejoli, yaitu Manangga (laki-laki) dan Puanta Paccinongang (perempuan). Manangga kelak
            menjadi Toddo Bangkala yang pertama di Bangkalaloe.
          </p>
        </li>
      </ol>

      <h3 id="toddo-pelaku">Toddo sebagai Pelaku</h3>
      <h4>Terbentuknya Toddo</h4>
      <p>
        Diketahui bahwa tugas utama bagi toddo (Toddo Appa) adalah memilih dan menetapkan raja. Lalu bagaimana
        toddo itu terbentuk? Bayangkan seorang ibu menabur benih bunga ke taman. Biji-biji halus dijatuhkan ke
        tanah (<em>top-down</em>). Saat bibit menyentuh bumi akan mengalami proses untuk tumbuh. Tidak semua
        berhasil menjadi bunga-bunga dewasa yang indah. Namun, uniknya justru ada yang berkembang unggul melebihi
        yang lain. Yah, mungkin hanya satu atau empat saja. Keempat batang ini memiliki warna kelopak mencolok dan
        elok. Ketika mekar, mereka saling memandang dan menyadari bahwa mereka akan terlihat lebih memikat jika
        saling bersanding (bukan bertanding) menjalin ikatan menjadi karangan bunga. Dan, rangkaian bunga itu pun
        belum memberi nikmat jika belum dikalungkan kepada orang yang istimewa. Tentu saja yang dimaksud adalah
        orang yang terpilih menjadi tempat untuk berkhidmat (<em>bottom-up</em>).
      </p>
      <p>
        Insting manusia secara alamiah selalu ingin terhubung membentuk suatu kelompok masyarakat dalam bentuk
        lembaga (pranata sosial). Selanjutnya, lembaga yang terbentuk diharap mampu menjamin ketertiban,
        mengatasi pertentangan, dan memilih pemimpin yang berwibawa (pranata politik). Pranata tumbuh pada level
        bawah sebagai institusi dasar yang berpotensi menjadi tiang penopang bangunan yang besar. Keputusan untuk
        berserikat dipengaruhi oleh adanya kesamaan dalam berbagai hal seperti kesejajaran, bentuk, status,
        sejarah, ideologi, visi dan misi, dan sebagainya.
      </p>
      <p>
        Demikian halnya dengan kelahiran dan kehadiran toddo-toddo sebagai pranata yang membangun hierarki
        masing-masing. Bila ditinjau dari keberadaannya yang tidak saling berjauhan secara koordinat, dimungkinkan
        mereka berasal dari leluhur yang sama. Jika nominalnya terbilang terbatas, bisa jadi itu adalah hasil
        evolusi atau revolusi jangka panjang yang telah dilaluinya, atau memang hanya sekian jumlahnya.
      </p>
      <p>
        Kata ‘toddo’ secara harfiah dalam bahasa Makassar berarti ‘tusuk/coblos’. Dalam komunikasi harian umumnya
        dipakai mewakili makna denotasi saja. Namun, seiring meluasnya aktivitas peradaban manusia, kata ‘toddo’
        mengalami mutasi semantik sehingga bermakna ‘orang yang melakukan/memilih/menentukan’, kemudian digunakan
        untuk menunjukkan seseorang yang memiliki wewenang untuk menentukan. Toddo adalah gelar/jabatan yang
        disandang oleh seseorang yang berkuasa/memimpin sebuah domain atau wilayah. Misalnya Toddo Layu di
        Karelayu, Toddo Lentu di Lentu, Toddo Batujala di Batujala, dan Toddo Bangkala di Bangkalaloe.
      </p>
      <p>
        Satuan toddo dipimpin oleh orang yang paling berpengaruh (<em>anrong tau</em>) dalam wilayah itu.
        Selanjutnya, jabatan toddo diserahkan atau dilanjutkan oleh keturunan/keluarga mereka. Calon yang
        diusulkan harus dipastikan garis asal-usulnya (politik dinasti). Musyawarah terbatas dilakukan sekadar
        mencari mufakat siapa yang dinilai memiliki integritas untuk menerima jabatan tersebut. Pada awal uraian
        dipaparkan ilustrasi pemantik, semacam hipotesis yang dapat menstimulasi pikiran kita untuk mengambil
        kesimpulan (induktif). Adapun eksistensi toddo (Toddo Appa) sebagai sebuah entitas yang independen sudah
        ada (minimal sezaman) masa berdirinya <em>kakaraengang</em> (untuk bekerja memilih karaeng).
      </p>
      <Note>
        <p>Secara kebetulan, arti kata <em>to do</em> dalam bahasa Inggris adalah ‘melakukan’ (verba/kata kerja).</p>
      </Note>

      <h3 id="manangga-salamung">Masa Manangga sampai Salamung</h3>
      <h4>Manangga (Toddo Bangkala I)</h4>
      <p>
        Perkawinan Puanta ri Bongki dengan Gunturu Kare Manuju menghasilkan dua buah hati, yaitu seorang
        laki-laki bernama Manangga dan seorang perempuan bernama Puanta Paccinongang. Setelah dianggap sudah
        matang, Manangga dikawinkan dengan sepupu satu kalinya dari Balumbungang bernama Mottiara, dan pesta
        perkawinannya dilaksanakan di Paccinongang. Dari sini lahirlah putra tunggal bernama Manurung.
      </p>

      <h4>Manurung (Toddo Bangkala II)</h4>
      <p>
        Manurung dikawinkan dengan putri dari Lompo Simboleng bernama Ci’nong. Perempuan itulah yang menjadi orang
        pertama mengetahui adanya aktivitas kawanan burung tekukur di sebuah gundukan tanah. Selama membina
        keluarga di Paccinongang, berbagai kejadian mewarnai perjalanan hidup Manurung, di antaranya:
      </p>
      <ul>
        <li>Pada usianya masih balita (2–3 tahun) diculik oleh buaya ketika dibawa mandi oleh ibunya di sungai.</li>
        <li>Menghilang selama sekitar 7 tahun dan hidup dalam asuhan tiga ekor buaya dalam sebuah gua/liang.</li>
        <li>
          Genap tujuh tahun setelah diculik, sekawanan burung tekukur yang mengais tanah mencari makan menjadi
          penyebab terkikisnya langit-langit gua sehingga membentuk celah yang membuka jalan bagi Manurung lepas
          dari penyanderaan buaya. Peristiwa itulah yang menyebabkan beliau dikenal dengan nama{" "}
          <strong>Danto Mumba</strong> ‘yang muncul kembali’.
        </li>
      </ul>
      <p>
        Sebagai ungkapan rasa syukur atas kemunculannya kembali, ayahnya selaku kepala negeri mengikrarkan janji
        di tengah rakyatnya. Janji yang dipesankan untuk ditaati oleh keturunannya yaitu:
      </p>
      <ul>
        <li>
          Mulai saat itu keturunannya dilarang mengurung/memelihara tekukur serta memakan dagingnya. Pantang pula
          menyakiti atau membunuh buaya (dalam sungai itu).
        </li>
        <li>
          Orang-orang yang akan melakukan perhelatan, terutama pesta sukacita, diharap sebelum memulai acara
          berziarah ke Paccinongang menyajikan ketan dan telur demi mengenang jasa sang buaya. Upacara tersebut
          dinamakan <em>appasorong</em> ‘menyodorkan’ atau <em>assare</em> ‘memberikan’.
        </li>
        <li>
          Hendaklah keluargaku memiliki seperangkat alat bunyi-bunyian serta berbagai perhiasan/dekorasi yang bisa
          memeriahkan hari-hari perayaan, hajatan, dan pesta.
        </li>
      </ul>
      <p>
        Informasi dari orang-orang terdahulu, dari perkawinan Manurung dengan putri Lompo Simboleng dianugerahi
        empat anak, yaitu:
      </p>
      <ol>
        <li>
          <strong>Salamung (Toddo Bangkala III)</strong>
          <p>
            Salamung dua kali beristri. Pertama, perempuan dari Kapasang dan dianugerahi seorang putri bernama
            Nadji. Dari istrinya yang kedua, diberkahi lima orang putra: Manggappa (Toddo Bangkala VI), Mangngani
            (Toddo Bangkala IV), Paggasa, Mangngurangi, dan Tona (Toddo Bangkala V).
          </p>
        </li>
        <li>
          <strong>Maisa</strong> (perempuan)
          <p>Dipersunting oleh pemuda bernama Jala dari Kalumpang.</p>
        </li>
        <li>
          <strong>Rasia</strong> (perempuan)
          <p>Dipersunting oleh pemuda (<em>gallarrang</em>) dari Balang.</p>
        </li>
        <li>
          <strong>Sia</strong> (perempuan)
          <p>Dipersunting oleh pemuda dari Parangbulu, Paitana.</p>
        </li>
      </ol>
      <p>
        Ditambahkan bahwa dalam menjalankan tugasnya sebagai Toddo Bangkala, secara berkala beliau harus
        bolak-balik dari kediamannya di Paccinongang ke Maero (kantor Karaeng Binamu). Dalam keseharian itulah
        beliau terpikat lagi pada gadis Padengpadeng (daerah sekitar Bontoramba), namun dikabarkan tidak ada
        keturunan dari garis ini.
      </p>

      <h4>Salamung (Toddo Bangkala III)</h4>
      <p>
        Buah jatuh tidak jauh dari pohonnya. Demikian peribahasa tersebut layak disematkan kepadanya. Banyak
        kemajuan yang tercapai pada masa Salamung menjabat Toddo Bangkala III. Sistem pemerintahan dan
        kesejahteraan rakyat semakin ditingkatkan. Hal ini didukung oleh pendampingan ayahnya yang dijadikan
        penasihat. Meskipun Manurung sudah pensiun, lelaki tua yang masyhur disapa Danto Mumba itu adalah seorang
        negarawan yang visioner. Andilnya sangat membantu putranya dalam mengendalikan pemerintahan. Dari lima
        bersaudara putra Salamung, tercatat tiga orang berhasil duduk menjabat toddo.
      </p>
      <p>
        Dalam bidang kemasyarakatan, Salamung berhasil menanamkan semangat kerukunan <em>assamaturu</em>{" "}
        ‘kerja sama’ yang dinamakan <em>raungloeng</em> ‘gotong royong’. Sistem saling membantu ini diterapkan
        secara teratur dalam setiap kepentingan yang menyangkut hajat hidup orang banyak, mulai dari urusan
        kehidupan sampai pemakaman.
      </p>

      <h3 id="nama-toddo">Nama-Nama Toddo Bangkalaloe</h3>
      <DataTable caption="Nama-nama Toddo Bangkalaloe" head={["No.", "Nama", "Keterangan"]} rows={namaToddo} />
      <p>
        Setelah Radeng Daeng Nyitto (Toddo Bangkala XI) wafat, jabatan toddo dipegang oleh anaknya bernama Tago
        bin Radeng, Toddo Bangkala XII, kisaran tahun 1900. Pada masa tersebut suasana negeri dilanda
        ketidakstabilan; kekacauan merajalela, perampokan di Karampuang oleh gerombolan Tolo yang disinyalir
        didalangi oleh Belanda, tetapi Belanda menuding komplotan pengacau itu adalah kongkalikong Karaeng
        Lompoa (Raja Binamu). Hal itu menyebabkan Sang Raja diasingkan ke Gunungsitoli, Pulau Nias, Sumatera
        Utara.
      </p>
      <p>
        Setelah Tago bin Radeng meninggal, jabatan toddo dipangku oleh saudaranya, H. Maggu (Toddo Bangkala XIII).
        Menjelang masa tuanya, H. Maggu menyerahkan jabatan toddo kepada kemenakannya, H. Badi Dg. Lolo (Toddo
        Bangkala XIV), kira-kira tahun 1923. Oleh karena H. Badi waktu itu dianggap masih muda, beliau didampingi
        oleh H. Loko, yang tak lain adalah iparnya sendiri, sebagai wakil toddo.
      </p>
      <p>
        Pada masa pemerintahan H. Badi, tahun 1927 diadakan upacara pelantikan Toddo Bangkalaloe secara definitif
        serta ditetapkan H. Loko sebagai Wakil Toddo Bangkalaloe. Upacara pelantikan tersebut dilangsungkan
        secara adat, dihadiri dan disaksikan oleh raja-raja dalam distrik Binamu, unsur pemerintah Toddo Appaka,
        juga oleh <em>Controleur Onderafdeling</em> Jeneponto–Takalar.
      </p>

      {/* ============ TODDO APPA ============ */}
      <h2 id="toddo-appa">Toddo Appa</h2>
      <h3 id="toddo-appaka-binamu">Toddo Appaka ri Binamu</h3>
      <p>
        Frasa Toddo Appa terdiri dari dua kata dasar yang artinya ‘empat toddo’. Frasa Toddo Appa sebagai bentuk
        dasar dipakai dalam kalimat deklaratif, yaitu kalimat berita biasa yang ditanggapi secara datar.
        Sedangkan frasa Toddo Appaka sudah mendapat imbuhan berupa sufiks atau akhiran <em>-ka</em> yang dalam
        tata bahasa Makassar akhiran <em>-a</em> atau <em>-ka</em> berfungsi untuk:
      </p>
      <ul>
        <li>memberi tekanan/penegasan terhadap keadaan/keterangan/jumlah,</li>
        <li>kata ganti penunjuk orang pertama yang disesuaikan dengan kelas katanya.</li>
      </ul>
      <p>
        Contoh: <em>appa</em> = empat, <em>appaka</em> = yang empat; <em>ero</em> = mau, <em>eroka</em> = saya
        mau. Jadi sebutan Toddo Appaka menunjukkan penegasan keadaan jumlah yang lazim digunakan dalam kalimat
        emfatik (kalimat yang mengandung maksud memberikan penekanan khusus dan biasanya diletakkan pada awal
        kalimat).
      </p>
      <p>
        Toddo Appaka yang terdiri dari empat toddo pada suatu ketika sepakat untuk membangun sebuah lembaga yang
        diharap mampu memayungi dan mengayomi negeri dan masyarakat secara lebih luas dan berwibawa. Ide brilian
        itu mengantar Toddo Appaka untuk mendirikan sebuah <em>kakaraengang</em> ‘kerajaan’ yang akan dipimpin
        oleh seorang <em>karaeng</em> ‘raja’.
      </p>
      <p>
        Mula-mula dibentuklah tim/panitia yang akan bertugas mencari calon raja. Toddo Layu sebagai toddo yang
        tertua menyarankan untuk mencari dari keturunan mereka (masih berkerabat dengan Toddo Appa) yang telah
        tersebar di berbagai tempat/kampung.
      </p>
      <p>
        Maka dicarilah sesuai dengan kriteria yang telah ditentukan, termasuk tanda fisik yang perlu dikenali.
        Di antaranya, tidak boleh yang berleher panjang seperti rusa, karena ia akan gampang kaget. Jangan yang
        berleher ceper seperti kutu, karena ditakutkan bakal menyengsarakan rakyat.
      </p>
      <p>
        Singkat kisah, perjalanan pencarian menyisakan satu tempat yang perlu ditelusuri. Disusurilah daerah
        pesisir menuju Mannyumbeng. Sesampai di Mannyumbeng tampaklah sebuah gubuk reot yang didiami oleh seorang
        lelaki baya yang memiliki benjolan seperti bisul pada kakinya. Kondisi fisik tersebut menyebabkan ia
        memiliki cara berjalan yang menarik, karena satu kali kakinya melangkah, dua kali tangannya terayun.
        “Sungguh inilah yang kita cari, <em>sikalia jongka na pinruang turung soena</em>, pertanda ia akan bekerja
        dan mengayomi,” gumam mereka sebagai tim verifikasi. Sosok yang ditemukan sudah sesuai petunjuk dan
        gambaran dari Boto Jombe dan Boto Cabiri. <em>Boto</em> artinya ‘tebak’, seseorang yang memiliki
        kemampuan intuitif yang bertugas sebagai konselor spiritual Toddo Appaka.
      </p>
      <p>
        Calon karaeng yang berasal dari pesisir tersebut masih berkerabat dengan Toddo Appaka, khususnya dari
        keluarga Toddo Layu. Beliau bernama Maninggau atau Gaukang Daeng Riolo. Maninggau kemudian diarak ke Layu
        dan dilantik di Balumbungang menjadi Karaeng Lompoa Pertama. Selanjutnya beliau menetap di Layu,
        sedangkan balai pemerintahannya bertempat di Maero.
      </p>
      <p>
        Dengan melewati bentangan tarikh dan lembaran kisah tersendiri, akhirnya terwujudlah{" "}
        <em>Kakaraengang ri Binamu</em> ‘Kerajaan Binamu’ dan rajanya disebut Karaeng Binamu.
      </p>

      <h3 id="pengukuhan">Pengukuhan Toddo Appaka</h3>
      <p>
        Pada saat Paungga Daeng Gassing (Raja Binamu ke-3) turun takhta, ia digantikan oleh iparnya, yaitu suami
        dari Lo’mo Sunni Daeng Memang bernama Datu Muthara, yang diangkat menjadi Raja Binamu ke-4 (1678–1696).
        Raja inilah yang memprakarsai pengukuhan/peresmian Toddo Appaka sebagai Dewan Adat yang berwenang memilih
        dan melantik raja, serta membantu pekerjaan raja dalam mengurusi masalah-masalah kerajaan. Dewan yang
        beranggotakan empat toddo tersebut dapat disejajarkan dengan DPR sekarang.
      </p>
      <p>
        Gagasan Datu Muthara cukup masuk akal. Beliau berasal dari Gowa yang mungkin terinspirasi oleh{" "}
        <em>Bate Salapanga</em> ‘Sembilan Panji’ di Kerajaan Gowa, yang mulanya merupakan <em>kasuwiang</em> atau
        kelompok kerajaan kecil terdiri dari sembilan kasuwiang yang kemudian sepakat bersatu membentuk sebuah
        Dewan Adat.
      </p>
      <Note>
        <ul className="list-disc space-y-2 pl-5">
          <li>Sekilas tampak adanya kode numerik: raja keempat → empat toddo.</li>
          <li>
            <em>Kakaraengang</em> adalah kerajaan yang dipimpin oleh Karaeng ‘Raja’ yang dijabat/dilantik,
            sehingga nama sesudah kata Karaeng adalah sebuah tempat/daerah. Contoh: Mallombasi Daeng Mattawang
            Karaeng Bontomangape, Mattewakkang Daeng Raja Karaeng Binamu.
          </li>
          <li>
            <em>Akkaraeng</em> adalah sapaan penghormatan (<em>honour of respect</em>) yang bersifat bebas
            penggunaannya terhadap orang yang dihormati.
          </li>
        </ul>
      </Note>
      <PullQuote>Bale maddaeng; pale makkaraeng — sopan berbicara, santun berkata.</PullQuote>

      <h3 id="daftar-toddo-appaka">Daftar Nama Toddo Appaka</h3>
      <DataTable
        caption="Daftar nama Toddo Appaka"
        head={["Ke-", "Toddo Layu", "Toddo Lentu", "Toddo Batujala", "Toddo Bangkalaloe"]}
        rows={toddoAppaka}
      />

      <h3 id="daftar-karaeng">Daftar Nama Karaeng Binamu</h3>
      <DataTable caption="Daftar nama Karaeng Binamu" head={["Ke-", "Nama", "Tahun"]} rows={karaengBinamu} />
      <Note>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>No. 14 dan 15 adalah raja perempuan (<em>Karaeng Baine</em>).</li>
          <li>I Tia Dg. Ni’ni (Raja ke-15) dimakamkan di Ci’nong.</li>
          <li>I Lompo Dg. Raja (Raja ke-19) diasingkan ke Nias, Sumatera Utara.</li>
          <li>Manggu Dg. Sanggu (Raja ke-20) dimakamkan di Bontang.</li>
          <li>
            Mattewakkang Dg. Raja, Karaeng Binamu terakhir (XXI), lahir di Maero, 10 Januari 1910. Dinobatkan
            menjadi raja pada usia 19 tahun, 27 Mei 1929. Beliau meletakkan jabatan sebagai Karaeng Binamu pada
            29 Mei 1949, dan mangkat pada usia 62 tahun, 19 Juli 1972; dimakamkan di Maccinibaji (Kota Lama).
          </li>
        </ul>
      </Note>

      {/* ============ BURUNG EMAS ============ */}
      <h2 id="burung-emas">Burung Emas</h2>
      <p>
        Tak hanya menjadi ikon Bangkalaloe, mitologi tentang burung emas di persada Toddo Appaka pada masa
        Manangga merupakan prosa lisan yang diwariskan, bahkan dipercaya turut memberi kontribusi/referensi
        penamaan beberapa tempat yang pernah dijelajahinya. Dituturkan bahwa Burung Emas{" "}
        <em>Jangang-Jangang Bulaeng</em> terbang mengitari cakrawala Toddo Appaka. Dilaporkan terlihat pertama
        kali di Hutan Mattatakang atau Karollea. Entah dari mana ia berasal masih menjadi hal yang misterius.
        Namun untuk apa ia muncul? Burung Dewata itu dianggap sebagai utusan Batara Guru untuk mengafirmasi tanah
        yang hendak diberi peran mewakili sejarah. Begitulah pesan nonverbal dari langit yang disampaikan oleh
        seekor burung sehingga menjadi kabar burung yang dipercaya.
      </p>
      <p>
        Sungguh, sebagai pemandangan langka yang nyata pada saat itu, Burung Emas pantas mengundang rasa heran
        bagi warga, dan penasaran bagi penguasa untuk memilikinya, lantas setiap saat selalu diintai. Sadar
        dirinya diminati, sang burung pun selalu berhati-hati. Dalam upaya waspada menghindari sergapan, ia
        kadang terbang membentuk pola sketsa yang kelak — di mana lokasi manuver itu terjadi — mengilhami
        cikal-bakal penamaan tempat tersebut.
      </p>
      <p>
        Kampung berikut diyakini sebagai salah satu jejak lintasan sang burung yang diterjemahkan sesuai gerakan
        tingkah yang disaksikan orang ketika itu.
      </p>
      <ul>
        <li><strong>Tanetea</strong> — terbang datar melayang menyongsong angin, itulah arti kata “tanete”.</li>
        <li><strong>Batujala</strong> — saat ia dijaring, walhasil hanya sebongkah batu yang tertangkap jala.</li>
        <li><strong>Bontocinde</strong> — di atas sebuah bukit ia beraksi, berkepak seolah melambaikan sehelai selendang atau cinde.</li>
        <li><strong>Bontoramba</strong> — menggambarkan gaya lunglai dengan selendang yang merumbai acak tak beraturan.</li>
        <li><strong>Parang Barata (Barobbo)</strong> — dikerahkannya pasukan jaga semacam ronda pagar betis di sebuah tanah yang lapang.</li>
        <li><strong>Ciniayo</strong> — terlihat kedua sayapnya diayun sambil melenggang begitu anggun.</li>
        <li>
          <strong>Mangepong (Bulusuka)</strong> — berhubung ia bertengger di ujung bambu yang sulit dijangkau
          karena berbatang tunggal, maka dirangkullah gerombol rumpun bambu itu disatukan dengan tali untuk
          memudahkan pemanjatan.
        </li>
      </ul>
      <p>
        Klimaks penasaran sekaligus dampak ketiadaan usaha yang berhasil menangkapnya mencetuskan lahirnya
        gagasan untuk meminimalisasi perseteruan. “Bagaimana jika dijadikan saja sayembara? Siapa di antara kita
        yang berhasil menangkapnya, maka itulah yang dituakan,” demikian usul salah seorang dari mereka.
      </p>
      <p>
        Seiring melajunya waktu, meskipun tempat kejadian tidak dijelaskan secara rinci, Toddo Layu sebagai yang
        tertua mendapat kesempatan pertama memulai sayembara. Memanjatlah Yang Mulia pada pohon tempat Burung
        Emas bertengger. Toddo Layu makin naik, makin naik pula sang burung ke ranting yang lebih tinggi sehingga
        sulit dijangkau. Berturut-turut majulah Toddo Lentu, disusul Toddo Batujala, namun mereka memperlihatkan
        hasil yang sama seperti yang pertama. Akhirnya, tibalah giliran Toddo Bangkala.
      </p>
      <p>
        Toddo Bangkala yang mengetahui bahwa Burung Emas itu berada di Hutan Mattatakang segera memanfaatkan
        kesempatan untuk menghampirinya. Hutan Mattatakang adalah kawasan hutan adat yang dilindungi, terletak di
        perbatasan Bangkalaloe dan Datara. Pada sisi barat laut hutan itu terdapat telaga bernama Talaka Sitoang
        yang menjadi kubangan seekor kerbau jantan bernama Tedong Palu (kerbau tak bertanduk) — makhluk astral
        yang kehadirannya kerap diharap oleh para penggembala sekitar hutan supaya mengawini kerbau betina mereka
        karena dipercaya dapat menyuburkan ternak.
      </p>
      <p>
        Setelah tampak sang burung hinggap di pucuk tajuk pohon randu <em>dande</em> (sejenis kapuk raksasa),
        memanjatlah Toddo Bangkala mendekatinya. Anehnya, semakin beliau naik, semakin turun pula burung itu
        sampai beliau berhasil mendapatkannya dan membawanya pulang. Dideskripsikan bahwa burung tersebut
        sebangsa burung dara; sejenis perkutut atau tekukur. Selanjutnya, burung itu dipersembahkan kepada Raja
        Binamu, Karaeng Lompoa di Maero, dan ditaruh dalam sebuah tudung saji <em>pattongko</em> ‘penutup
        hidangan yang terbuat dari rotan beranyam’. Ada pula yang mengatakan ditutupi dengan <em>katoang</em>{" "}
        ‘belanga’.
      </p>
      <p>
        Keberhasilan Toddo Bangkala mendapatkan burung emas itu telah diprediksi secara tersirat
        (<em>foreshadowing</em>) dalam pantun Makassar (<em>kelong tau ri olo</em>) yang biasa dikidungkan oleh
        orang tua-tua dulu, sebagaimana tertera pada Lontara Bilang Danto Karawang.
      </p>
      <Verse
        caption="Kelong tau ri olo — Lontara Bilang Danto Karawang"
        lines={[
          ["Bontoramba ta Dangkoa", "Bukan Bontoramba, bukan Dangko"],
          ["Tombolo ta Padengpadeng", "Bukan pula Tombolo atau Padengpadeng"],
          ["Ta Ta’binjai", "Ta’binjai juga bukan"],
          ["Ta Moci, ta Ciniayo", "Termasuk Moci dan Ciniayo"],
        ]}
      />
      <p>
        Dari keterangan Alm. Bungaloe Daeng Ramba, pemangku adat (<em>anrong bunting</em>), beliau mengaku pernah
        mendapat kesempatan istimewa melihat langsung Burung Emas itu saat pesta adat di Maero dan juga di Layu
        (diperkirakan tahun 1940-an). Menurut kesaksian beliau, ia melihat benda berkilau sebesar cangkir atau
        berupa cawan emas. Sayangnya, keberadaan mustika itu kini tidak diketahui dengan pasti, atau mungkin
        dirahasiakan.
      </p>
      <Note>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Pada Juli 2024, sekelompok peneliti dari KKN Jurusan Kehutanan UGM Yogyakarta secara tak sengaja
            menemukan jenis pohon langka di Hutan Mattatakang yang dilaporkan hanya terdapat di Amerika Latin,
            Nusa Tenggara, dan Jawa. Nama ilmiah pohon tersebut ialah <em>Gyrocarpus americanus</em>.
          </li>
          <li>
            Danto Karawang adalah seorang cendekia/pujangga era Toddo, salah seorang pemilik Lontara Bilang
            (gulungan lontara yang berisi pesan dan ramalan leluhur). Sayangnya, gulungan itu hangus ketika
            terjadi kebakaran besar pada tahun 1975.
          </li>
        </ul>
      </Note>

      <h3 id="pokobulo">Sejarah Pokobulo</h3>
      <p>
        Pokobulo terdiri dari gabungan dua kata, yaitu <em>poko</em> ‘bagian dasar dari batang’ dan{" "}
        <em>bulo</em> ‘bambu’. Jadi, Pokobulo berarti batang utama dari pohon bambu. Penamaan ini diambil untuk
        mengenang sebuah momen bersejarah, yaitu peristiwa penemuan seorang anak perempuan yang dibawa oleh
        aliran sungai dengan berpijak pada serumpun bonggol bambu yang terapung. Bidadari yang dinamakan
        Tumanurunga ri Marrung itulah yang dipercaya sebagai moyang leluhur orang Pokobulo.
      </p>
      <p>
        Sebelum kampung Pokobulo ada, orang-orang terdahulu telah memiliki kebudayaan kuno di Paccinongang.
        Kampung tua Paccinongang terletak di antara hutan dan tepi sungai, menjadikan kondisi tanahnya selalu
        lembap. Hal tersebut menjadikannya tempat yang disukai oleh binatang tingkat rendah seperti reptil dan
        serangga tanah.
      </p>
      <p>
        Suatu hari, sekawanan hewan lunak bernama <em>kalumeme</em> ‘pacet’ dan <em>senggulung</em> ‘kaki seribu’
        menyerbu permukiman. Meski invasi itu tidak sampai melukai, namun menciptakan fobia yang mengerikan.
        Hampir tak ada ruang yang bebas. Tiang, dinding, dipan, dan perabot rumah dipenuhi makhluk yang
        menggelikan itu.
      </p>
      <p>
        Nestapa tersebut yang menyebabkan warga akhirnya berpikir menyingkir dari Paccinongang. Mereka terpencar
        mencari tempat tinggal baru yang dianggap nyaman dan aman. Ada yang pindah ke desa tetangga mengikuti
        kerabatnya, namun sejumlah besar memilih ikut rombongan Salamung (Toddo Bangkala III) bergeser ke sebelah
        utara.
      </p>
      <p>
        Permukiman baru berdiri dan era baru pun dimulai. Namanya bukan lagi Paccinongang, tetapi disepakati
        dinamakan Pokobulo, dengan harapan supaya tidak melupakan sejarah asal-usul leluhur mereka. Harus
        dicermati bahwa perpindahan domisili penduduk tidak berpengaruh pada sistem dan kinerja Toddo. Walaupun
        terjadi pergeseran tempat tinggal dan perubahan nama, secara geografi dan pemerintahan tetap berada dalam
        wilayah Bangkalaloe, karena daulat Toddo Bangkalaloe saat itu terbentang dari Buttale’leng (Desa Datara)
        hingga Taipa Lampanga (Desa Balumbungang).
      </p>
      <p>
        Kemudian hari, muncul sebuah <em>fun fact</em> karena nama Pokobulo lebih populer dan familiar digunakan
        untuk menunjukkan Desa Bangkalaloe. Sebutan Pokobulo sudah dianggap mengacu kepada keseluruhan
        Bangkalaloe, terutama dalam ragam bahasa lisan. Sedangkan nama Bangkalaloe umumnya dipakai pada suasana
        formal saja, atau ketika berhubungan dengan informasi administratif dan semacamnya.
      </p>

      <h3 id="desa-bangkalaloe">Desa Bangkalaloe</h3>
      <p>
        Dalam bahasan ini, Desa Bangkalaloe diulas hanya secara historis. Maksudnya, yang diurai adalah ranah
        sejarahnya saja, tidak mengupas profil desa secara komprehensif seperti administrasi, pemerintahan,
        geografi, demografi, prestasi, potensi desa, dan seterusnya.
      </p>
      <p>
        Pada bagian awal telah dijelaskan bahwa Bangkalaloe berasal dari dua kata, yaitu <em>bangkala</em> yang
        berarti 1) sejenis pohon sebangsa ketapang, 2) mengkal atau bakal masak/matang, dan kata <em>loe</em>{" "}
        yang berarti banyak. Sehingga dimaknai sebagai sebuah lokasi di mana terdapat banyak pohon bangkala
        tumbuh; atau sebuah representasi simbolik bahwasanya biar pun banyak yang mengkal, tetapi pastikan satu
        yang matang.
      </p>
      <p>
        Ketika sistem pemerintahan Toddo yang telah tertanam di Bangkalaloe berakhir, babak baru reformasi
        pemerintahan kembali dimulai. Bila toddo lahir dari rasa cinta pada pertiwi, maka rasa cinta pula yang
        menyudahi, yaitu cinta kepada NKRI (Negara Kesatuan Republik Indonesia).
      </p>
      <p>
        Toddo Bangkalaloe pada tahun 1968 menyerahkan jabatan kepada H. Pamarriang Dg. Lontang. Hal ini menandai
        berakhirnya pemakaian istilah Toddo dan beralih nama menjadi Bori atau Lingkungan. Bori bekas Toddo
        Bangkalaloe berada di bawah naungan Bori Balumbungang yang dipimpin oleh Mustafa Kr. Liwang sebagai Kepala
        Bori. Tak lama kemudian, berubah menjadi Desa Balumbungang.
      </p>
      <p>
        Pada saat H. Pamarriang Dg. Lontang menjabat Kepala Lingkungan Pokobulo, Pemerintah Kabupaten Jeneponto
        melakukan pemekaran desa, sehingga Lingkungan Pokobulo menjadi desa persiapan bernama Desa Persiapan
        Bangkalaloe (tahun 1983) yang membawahi tiga dusun, yaitu:
      </p>
      <ul>
        <li>Dusun Pokobulo yang dikepalai oleh H. Pamarriang Dg. Lontang,</li>
        <li>Dusun Linrungloe yang dikepalai oleh H. Santari Bagenda, dan</li>
        <li>Dusun Joko yang dikepalai oleh Manakku.</li>
      </ul>
      <p>
        Bangkalaloe yang berstatus desa persiapan menetapkan Zainuddin Nuju Dg. Gassing sebagai Kepala Desa
        Persiapan (1983–1986). Pada tahun 1986 dilaksanakan pemilihan kepala desa, dan terpilih Zainuddin Nuju
        menjadi Kepala Desa secara definitif (mandiri), tepatnya pada tanggal <strong>2 Mei 1986</strong>.
      </p>
      <Note>
        <p>
          Penulisan Bangkalaloe pernah dengan huruf “E” kapital — <em>BangkalaloE</em> — yakni pada masa
          berlakunya Ejaan Republik/Soewandi (1947). Hal ini diusulkan oleh Toddo Bangkala H. Badi Dg. Lolo untuk
          menghindari salah baca [bang-kala-lu].
        </p>
      </Note>

      <h3 id="momen">Momen Monumental</h3>
      <p>
        Selain peristiwa bersejarah yang diturunkan secara lisan dari generasi ke generasi yang menjadi bahan
        utama tulisan ini, penulis nukilkan pula beberapa momen berisi informasi penting yang diambil dari
        catatan/ingatan orang terdahulu. Dikatakan momen monumental karena momen tersebut menciptakan suatu
        komitmen untuk mewujudkan suatu karya atau jasa yang bisa disaksikan/dinikmati saat ini.
      </p>
      <ol>
        <li>Tahun 1948, H. Maggu (Toddo Bangkala XIII) mewakafkan tanahnya untuk pembangunan masjid, yang sekarang berdampingan dengan Taman Kanak-Kanak.</li>
        <li>Tahun 1955, beliau mewakafkan lagi tanah untuk pembangunan Sekolah Dasar Pokobulo.</li>
        <li>Tahun 1956, H. Badi bersama Teko, atas anjuran H. Maggu, menyediakan tanah untuk lokasi pasar.</li>
        <li>Tahun 1955–1956, pada masa pergolakan DI/TII, rumah-rumah yang letaknya terpencar disatukan. Kebun milik H. Loko, Japa, dan H. Maggu direlakan untuk dijadikan lokasi permukiman.</li>
        <li>Tahun 1957, masih dari perintis dan tanah wakaf yang sama, termasuk penyerahan sebidang kebun dari Daeng Taje, untuk lokasi pendirian SPI (Sekolah Pertama Islam) yang sekarang menjadi MTs Pokobulo.</li>
        <li>Tahun 1963, dipersembahkan lahan untuk lapangan olahraga dan salat Id. Belakangan dinamakan Lapangan Mattatakang.</li>
        <li>
          Dari informasi lisan, sekitar akhir tahun 1970-an menjadi momen terakhir pelaksanaan acara adat
          <em> Apparawang Kakaraengang</em> di Maero. Seremoni tersebut merupakan perjamuan para
          pembesar/bangsawan sebagai silaturahmi sekaligus ritual pembersihan benda-benda pusaka kerajaan. Dari
          pihak keluarga Toddo Bangkalaloe dihadiri oleh Suhafid Radeng Dg. Tarang, Ramlah Dg. Asi binti Haji
          Maddo, dan Hafsa binti Sahu.
        </li>
      </ol>
      <Note>
        <p>
          Sampai sekitar tahun 1900-an, dikatakan hanya ada tiga bangsawan dari luar yang masuk menetap di
          Bangkalaloe, yaitu: 1) Timbangang Dg. Lewa (putra Karaeng Paitana), 2) Mangga Dg. Lulung (sepupu
          Karaeng Rumbia), 3) Galandeng Dg. Rapa (keluarga Karaeng Bontolebang/Tolo).
        </p>
      </Note>

      <h3 id="tempat">Tempat Bersejarah</h3>
      <p>
        Bila ada saat yang dipandang bersejarah, maka terdapat pula tempat yang mengandung sejarah. Disertakan
        dalam tulisan ini sebagai upaya melawan lupa bagi generasi masa kini. Dengan mengetahui titik bersejarah
        di tanah yang mereka pijak, diharapkan semakin mendalam pula rasa cinta mereka kepada bumi pertiwi.
        Berikut beberapa tempat yang diuraikan dalam konteks fungsinya pada masa lalu.
      </p>
      <ol>
        <li>
          <strong>Paccinongang</strong>
          <p>
            Permukiman kuno tempat peradaban Bangkalaloe berawal. Sering pula dinamakan Galemboro. Kedua nama ini
            memiliki cerita sejarah yang sejalan. Sekarang hanya tinggal bekas-bekasnya saja; selain karena dampak
            kegiatan manusia, juga diperparah oleh perubahan geologis. Galemboro adalah tempat melakukan ritual
            adat <em>appasorong</em> atau <em>assare</em>.
          </p>
          <p className="text-sm text-muted">Lokasi: sektor selatan desa, jalan poros perbatasan Dusun Joko dan Dusun Linrungloe.</p>
        </li>
        <li>
          <strong>Makam Urutaua</strong> ‘orang pertama’
          <p>
            Dinamakan makam urutaua karena dipercaya merupakan kuburan pertama, atau orang yang pertama dikuburkan
            di tempat tersebut. Ada pula yang menganggap itu adalah kuburan salah seorang anak dari Tumanurunga.
            Makam tersebut terletak sendirian dan dibangunkan rumah kecil sebagai naungannya, berada di antara
            lahan pertanian/kebun warga sekitar 100 m dari jalan (batas Dusun Joko–Linrungloe/sekitar
            Paccinongang).
          </p>
        </li>
        <li>
          <strong>Kompleks Makam Kuno, Joko</strong>
          <p>
            Situs purbakala dari zaman megalitikum atau zaman batu besar. Tempat pemakaman para Toddo Bangkalaloe
            dan keluarganya yang kini menjadi cagar budaya.
          </p>
          <p className="text-sm text-muted">Lokasi: Dusun Joko.</p>
        </li>
        <li>
          <strong>Hutan Adat Mattatakang</strong>
          <p>
            Warga biasa pula menyebutnya Karollea. Merupakan hutan suaka di perbukitan bagian utara desa. Pada masa
            pra-Islam, Karollea adalah pusat kegiatan upacara pemujaan (animisme–dinamisme) sehingga masih
            cenderung dikeramatkan.
          </p>
          <p className="text-sm text-muted">Lokasi: Bukit Datara, perbatasan Desa Datara dan Desa Bangkalaloe.</p>
        </li>
        <li>
          <strong>Batuleppa</strong>
          <p>
            Batuleppa berarti batu yang datar atau pipih. Diperkirakan terbentuk oleh pembekuan magma pada periode
            Pleistosen. Batuleppa yang berada di ketinggian merupakan salah satu titik untuk melihat pemandangan
            kampung dari atas, sehingga cocok untuk kegiatan wisata alam.
          </p>
          <p className="text-sm text-muted">Lokasi: sebelah barat desa di Dusun Linrungloe.</p>
        </li>
        <li>
          <strong>Tuang</strong>
          <p>
            Sepetak tanah hunian yang ditandai oleh sebuah makam di tengah permukiman serta memiliki kisah
            tersendiri. Dikatakan bahwa dulu hiduplah seorang sufi yang terkenal dengan nama Tuan Syekh. Beliau
            berasal dari Cikoang/Laikang dan menetap di Tamanroya. Menjelang tutup usia, ia berpesan agar kelak
            jika wafat dimakamkan di tengah Pokobulo. Wasiat yang dianggap janggal itu tetap diindahkan sebagai
            penghormatan atas amanat sang ulama. Dalam suasana penasaran, jenazah diusung menggunakan keranda
            dengan berjalan kaki dari Tamanroya menuju Pokobulo. Pada saat itu hujan turun sangat deras, dan
            sungai di Alluka yang hendak diseberangi pun sedang banjir. Dilema pun terjadi, antara melanjutkan
            iring-iringan atau mengurungkannya. Di antara mereka ada yang berkata bahwa bila jenazah ini sungguh
            orang yang memiliki karamah, maka kita pasti memperoleh kemudahan. Perjalanan pun dilanjutkan, dan
            anehnya rombongan tidak terkena hujan. Hujan hanya mengguyur bagian depan dan belakang mereka. Begitu
            pun sungai yang hendak dilintasi, surut di saat diseberangi, dan air bah kembali meluap setelah
            dilalui. Peristiwa di luar nalar itu terjadi sampai akhirnya mereka tiba di tempat yang dituju,
            Pokobulo.
          </p>
          <p>
            Makam itu masih terpelihara sampai sekarang, berada di jantung Pokobulo, di antara rumah-rumah warga
            yang padat. Dulu ada tradisi, bila hendak berziarah ke makam sanak famili, sebelumnya berkunjung dulu
            ke Makam Tuang menabur bunga. Orang tua dulu mengenang kisah Tuang dalam bentuk pantun daerah berikut.
          </p>
          <Verse
            lines={[
              ["Tamanroya ta kampongku", "Tamanroya bukan kampungku"],
              ["Boyong ta pa’rasangangku", "Boyong bukan tanah airku"],
              ["Eranga rai", "Bawa aku ke hulu"],
              ["Ri tangngana Pokobulo", "Di tengahnya Pokobulo"],
            ]}
          />
          <p>
            Berdasarkan informasi terpisah, ketika terjadi bencana <em>Labboroka ri Tambora</em> ‘Gunung Tambora
            meletus’ pada tahun 1815, banyak korban Tambora yang terdampar di Bungeng dan sampai ke Paitana. Dari
            Paitana, Toddo Bangkala mengambil beberapa orang untuk diberi tanah tempat tinggal di Tuang dan
            berakulturasi dengan penduduk lokal yang sudah ada.
          </p>
        </li>
        <li>
          <strong>Kelong</strong>
          <p>
            <em>Kelong</em> artinya ‘bernyanyi’. Sebuah tempat berupa bagian sungai yang agak dalam (lubuk), tampak
            sebagai bendungan besar yang tenang dengan pepohonan dan semak di kedua sisinya. Tempat tersebut
            merupakan tempat favorit bagi Toddo Bangkala bersama aparat dan kerabatnya untuk bersantai sambil
            menggelar acara bakar-bakar ikan. Uniknya, sebelum ikan ditangkap (dijala/dikail) dilakukan dulu ritual
            menyanyikan lagu-lagu khusus yang dimaksudkan untuk membujuk (semacam hipnotis) ikan-ikan agar menjadi
            jinak dan berkumpul supaya mudah ditangkap.
          </p>
          <p className="text-sm text-muted">
            Lokasi: bagian selatan desa pada bentangan sungai yang cekung di antara lahan perkebunan dan persawahan
            warga.
          </p>
        </li>
      </ol>
    </>
  );
}

export function ProfilPenulis() {
  return (
    <>
      <h2 id="penulis">Profil Penulis</h2>
      <div className="card not-prose my-6 p-6 sm:p-8">
        <p className="font-display text-2xl font-semibold text-forest-900">Fahri AB (Fahridenai)</p>
        <p className="mt-1 text-sm text-muted">Guru Bahasa Indonesia · SMKN 6 Jeneponto</p>
      </div>
      <p>
        Fahridenai hanyalah nama sebutan lokal atau panggilan akrab, singkatan dari Fahri Daeng Nai. Nama diri
        adalah Fahri AB. Lahir di Bantaeng, Sulawesi Selatan, pada tanggal 5 Februari 1974. Ketika masih duduk di
        kelas V SD sempat meraih juara pertama lomba melukis tingkat anak-anak se-Kabupaten Jeneponto. Setelah
        tamat SMPN Tamalatea, melanjutkan sekolah di STM Negeri 1 Ujungpandang jurusan gambar bangunan. Tahun 1992
        lulus UMPTN dan diterima di Universitas Hasanuddin jurusan Teknik Arsitektur. Tahun 1994 beralih ke
        Fakultas Sastra mengambil jurusan Bahasa Prancis. Dua tahun kemudian, tepatnya 2–6 Desember 1996,
        berhasil membawa tim Unhas meraih juara kedua tingkat universitas se-Indonesia pada{" "}
        <em>Séjour Olympique Français</em> di Universitas Gadjah Mada, Yogyakarta.
      </p>
      <p>
        Sejak tahun 2000 mengabdikan diri mengajar di MTs Muhammadiyah Pokobulo untuk mata pelajaran Bahasa
        Inggris. Sembari menjadi guru sukarela, ia mempersiapkan diri pada pendidikan keguruan S-1 Bahasa
        Indonesia di STKIP Yapti Jeneponto. Ijazah itulah yang mengantarkannya lulus tes CPNS pada tahun 2006 dan
        ditempatkan di SMKN 4 sebelum pindah ke SMKN 6 Jeneponto.
      </p>
      <p>
        Sebagai guru Bahasa Indonesia, pada tanggal 17 Agustus 2016, Pusat Pengembangan dan Pemberdayaan Pendidik
        dan Tenaga Kependidikan Bahasa memberikan penghargaan atas pencapaian kategori tertinggi nilai Uji
        Kompetensi Guru (UKG). Profesi sebagai abdi negara dijalani dengan penuh dedikasi; begitu pun sebagai
        pribumi, tulisan ini dipersembahkan dengan penuh cinta kasih. Surel:{" "}
        <a href="mailto:fahridenai@gmail.com" className="font-medium text-forest-700 underline underline-offset-4">
          fahridenai@gmail.com
        </a>
      </p>
    </>
  );
}
