/* ============================================================
   PATTERN ZERO — data layer (v0.1)
   Content editable tanpa menyentuh logic.
   → Nantinya bisa dipindah ke patterns.json / questions.json / scoring.json
   ============================================================ */

/* ---------- CONFIG (harga dll configurable) ---------- */
const CONFIG = {
  name: "PATTERN ZERO",
  tagline: "Find the pattern. Break the cycle.",
  priceLabel: "Rp49.000",
  priceAmount: 49000,
  questionsPerArea: 16,        // display target (bisa berbeda dari panjang bank)
};

/* ---------- AREA MAPPING ---------- */
const AREAS = {
  love:     { label: "LOVE",     bank: "love",   patterns: "love" },
  money:    { label: "MONEY",    bank: "money",  patterns: "money" },
  career:   { label: "CAREER",   bank: "career", patterns: "career" },
  business: { label: "BUSINESS", bank: "career", patterns: "career" },
  life:     { label: "LIFE",     bank: "life",   patterns: "life" },
  unknown:  { label: "LIFE",     bank: "life",   patterns: "life" },
};

/* ---------- PATTERN TAXONOMY V0.1 ---------- */
/* Setiap pattern: name, desc, lines (free result "kena"), loop_short,
   loop_full, why, blind_spot, breaking_point, new_old, new_new */

const PATTERNS = {
  love: {
    chaser: {
      name: "THE CHASER",
      desc: "Kamu cenderung mengejar justru ketika orang mulai menjauh.",
      lines: [
        "Ada pola yang cukup kuat dalam cara kamu mendekati hubungan.",
        "Begitu jarak muncul, insting kamu adalah menutup jarak itu — lebih cepat, lebih keras.",
        "Tapi semakin kamu mengejar, semakin orang itu mundur. Dan kamu semakin panik.",
      ],
      loop_short: ["TRIGGER: DIA MENJAUH", "TAKUT DITINGGAL", "MENGECAR", "DIA SEMAKIN MUNDUR", "KEPANIKAN", "MENGECAR LAGI", "REPEAT"],
      loop_full: ["DIA MENJAUH", "TAKUT DITINGGAL", "PANIK", "MENGECAR / CHAT TERUS", "DIA MUNDUR", "KEPANIKAN SEMAKIN BESAR", "PERCAYA: 'SAYA AKAN DITINGGAL'", "MENGECAR LAGI"],
      why: "Kamu membaca jarak sebagai tanda hubungan sekarat. Jadi kamu mengisi kekosongan itu dengan kejar-kejaran, tanpa sadar membuat jarak itu semakin lebar. Rasa takut ditinggal yang menggerakkan — bukan keinginan untuk dekat.",
      blind_spot: "Kamu mengira masalahnya adalah orang yang 'dingin' atau 'hilang'. Tapi dari pola jawaban kamu, yang membuat mereka semakin jauh adalah tekanan yang kamu berikan tepat saat mereka butuh ruang.",
      breaking_point: "Saat kamu merasakan dorongan untuk mengejar — di situlah titik putusnya. Jangan kirim pesan itu. Tunggu 24 jam dulu.",
      new_old: "Kalau dia menjauh, saya harus mendekat.",
      new_new: "Kalau dia menjauh, saya biarkan. Kalau dia kembali, baru saya tentukan mau lanjut atau tidak.",
    },
    rescuer: {
      name: "THE RESCUER",
      desc: "Kamu merasa paling bernilai ketika dibutuhkan.",
      lines: [
        "Ada pola yang cukup kuat dalam cara kamu membangun hubungan.",
        "Kamu cenderung merasa paling bernilai ketika seseorang membutuhkan kamu.",
        "Masalahnya bukan karena kamu terlalu baik. Ada kemungkinan kamu secara tidak sadar memilih situasi yang membuat kebaikan kamu menjadi kebutuhan.",
      ],
      loop_short: ["TRIGGER: DIA BERMASALAH", "MERASA DIBUTUHKAN", "MENYELAMATKAN", "EKSPEKTASI", "KECEWA", "JARAK", "REPEAT"],
      loop_full: ["DIA BERMASALAH", "MERASA DIBUTUHKAN", "MERASA BERHARGA", "MEMPERBAIKI DIA", "BERHARAP DIBALAS", "KECEWA", "PERCAYA: 'SAYA HARUS MENYELAMATKAN'", "DIA BERMASALAH LAGI"],
      why: "Nilai diri kamu tersambung ke seberapa banyak masalah orang lain yang bisa kamu selesaikan. Jadi tanpa sadar kamu tertarik ke orang yang 'rusak', karena di situ kamu merasa paling hidup — lalu kecewa saat pengorbanan kamu tak dibalas.",
      blind_spot: "Kamu mengira masalahnya adalah orang yang tak tahu terima kasih. Tapi jawaban kamu menunjukkan kamu bertahan lebih lama justru ketika tanda-tanda ketidakseimbangan sudah jelas terlihat.",
      breaking_point: "Sebelum kamu menyelamatkan siapa pun, tanya satu hal: 'Dia minta tolong, atau saya yang nawarin diri?' Kalau kamu yang nawarin — berhenti.",
      new_old: "Saya harus dibutuhkan agar merasa berharga.",
      new_new: "Saya berharga bahkan ketika saya tidak sedang menyelamatkan siapa pun.",
    },
    overgiver: {
      name: "THE OVERGIVER",
      desc: "Kamu memberi terlalu banyak di awal, lalu kecewa karena tak dihargai.",
      lines: [
        "Kamu sering menyebutnya sebagai 'terlalu baik'.",
        "Tapi dari pola jawaban kamu, masalahnya mungkin bukan kebaikan.",
        "Kamu mengukur nilai diri dari seberapa banyak yang bisa kamu berikan — lalu marah saat tak ditakar dengan cara yang sama.",
      ],
      loop_short: ["TRIGGER: KONEKSI BARU", "MEMBERI 100%", "BERHARAP SEIMBANG", "TAK DIBALAS", "KESAL", "MENARIK DIRI", "REPEAT"],
      loop_full: ["KONEKSI BARU", "MEMBERI BERLEBIHAN", "BERHARAP DIBALAS", "TAK DIBALAS", "KESAL DIAM-DIAM", "MENARIK DIRI", "PERCAYA: 'SAYA tidak DIHARGAI'", "KONEKSI BARU LAGI"],
      why: "Kamu memberi di awal sebagai cara mengamankan kasih sayang — 'kalau saya memberi banyak, dia pasti balas'. Tapi memberi berlebihan sering menghapus ruang bagi orang lain untuk memberi kembali, dan kamu mengakhirinya dengan perasaan ditipu.",
      blind_spot: "Kamu mengira masalahnya adalah orang yang 'tidak niat'. Padahal kamu yang menetapkan standar tak terucap — berharap orang membaca pikiran kamu dan membalas dengan takaran yang sama.",
      breaking_point: "Beri 60%. Sisanya tunggu. Kalau dia tidak mengisi sisa 40% itu, kamu tahu lebih cepat — tanpa harus bangkrut perasaan dulu.",
      new_old: "Kalau saya memberi semua, dia pasti balas.",
      new_new: "Saya memberi secukupnya, lalu lihat apa yang dia balas.",
    },
    avoider: {
      name: "THE AVOIDER",
      desc: "Kamu ingin dekat, tapi mundur saat mulai serius.",
      lines: [
        "Ada kontradiksi dalam cara kamu menjawab.",
        "Kamu menginginkan kedekatan — tapi begitu kedekatan itu nyata, kamu mencari jalan keluar.",
        "Bukan dia yang membuat kamu lari. Kedekatan itu sendiri yang membuat kamu gugup.",
      ],
      loop_short: ["TRIGGER: SEMAKIN DEKAT", "CEMAS", "MUNDUR", "KESEPIAN", "KEMBALI", "REPEAT"],
      loop_full: ["MULAI DEKAT", "MERASA TERANCAM", "CEMAS", "MUNDUR / JAGA JARAK", "KESEPIAN", "MENDEKAT LAGI", "PERCAYA: 'DEKAT = KEHILANGAN DIRI'", "MULAI DEKAT LAGI"],
      why: "Kedekatan terasa seperti ancaman terhadap kemandirian kamu, jadi kamu menarik diri untuk melindungi diri. Tapi penarikan itu yang membuat setiap hubungan gagal dengan cara yang sama persis.",
      blind_spot: "Kamu mengira mundur adalah bentuk melindungi diri. Padahal itu pola yang membuat kamu mengulang ending yang sama: sendirian, meski bukan itu yang kamu mau.",
      breaking_point: "Saat mulai nyaman dan muncul dorongan untuk kabur — itulah sinyal untuk bertahan, bukan lari. Kenali kecemasan itu tanpa harus menuruti.",
      new_old: "Kalau semakin dekat, saya harus jaga jarak.",
      new_new: "Saya bisa dekat tanpa kehilangan diri saya sendiri.",
    },
    repeater: {
      name: "THE REPEATER",
      desc: "Kamu berulang kali memilih dinamika yang secara struktur mirip.",
      lines: [
        "Kamu mungkin menyebutnya 'sial' atau 'selalu bertemu orang yang salah'.",
        "Tapi pola jawaban kamu menunjukkan sesuatu yang lebih dalam.",
        "Orangnya ganti-ganti. Dinamikanya sama persis.",
      ],
      loop_short: ["TRIGGER: ORANG BARU", "TERTARIK KE TIPE SAMA", "DINAMIKA SAMA", "ENDING SAMA", "'KENAPA LAGI?'", "REPEAT"],
      loop_full: ["ORANG BARU", "TERTARIK KE TIPE YANG SAMA", "DINAMIKA LAMA MUNCUL", "RESPONS LAMA", "ENDING YANG SAMA", "'KENAPA LAGI?'", "PERCAYA: 'SEMUA ORANG BEGITU'", "ORANG BARU LAGI"],
      why: "Bukan orangnya yang sama — pola kamu dalam memilih dan bertahan yang sama. Kamu tertarik ke tipe yang sudah kamu kenal, lalu merespons dengan cara yang sudah kamu kenal, dan endingnya pun sudah kamu kenal.",
      blind_spot: "Kamu mengira masalahnya adalah tipe orang yang kamu pilih. Tapi dari jawaban kamu, kamu cenderung mengabaikan tanda bahaya yang sama persis seperti di hubungan-hubungan sebelumnya.",
      breaking_point: "Tulis 3 ciri orang yang dulu membuat kamu sakit. Kalau ciri itu muncul lagi di orang baru — jangan lanjut. Itu titik putusnya.",
      new_old: "Semua hubungan saya ujungnya sama.",
      new_new: "Saya memilih dengan sadar, bukan dengan pola lama yang saya ulang.",
    },
  },

  money: {
    debt_cycler: {
      name: "THE DEBT CYCLER",
      desc: "Income naik → longgar → utang → tekanan → recovery → ulang.",
      lines: [
        "Ada siklus yang cukup jelas dalam cara kamu mengelola uang.",
        "Begitu merasa longgar, kamu membuka keran — dan tekanan datang belakangan.",
        "Masalahnya bukan jumlah uangnya. Tapi apa yang kamu lakukan tepat saat merasa longgar.",
      ],
      loop_short: ["TRIGGER: INCOME NAIK", "MERASA LONGGAR", "SPENDING / UTANG", "TEKANAN", "RECOVERY", "REPEAT"],
      loop_full: ["INCOME NAIK", "MERASA LONGGAR", "GAYA HIDUP NAIK", "UTANG MUNCUL", "TEKANAN", "RECOVERY / BAYAR", "PERCAYA: 'NANTI BISA KEBALIK LAGI'", "INCOME NAIK LAGI"],
      why: "Kamu menganggap kelonggaran sebagai izin, bukan sebagai penyangga. Jadi setiap kenaikan income diterjemahkan jadi kenaikan gaya hidup — dan siklusnya kembali ke titik nol.",
      blind_spot: "Kamu mengira masalahnya adalah penghasilan yang kurang. Tapi dari pola jawaban kamu, saat uang masuk, kamu menghabiskannya lebih cepat daripada membangun penyangga.",
      breaking_point: "Saat income naik, jangan naikkan gaya hidup di bulan pertama. Kunci selisihnya dulu selama 60 hari.",
      new_old: "Kalau ada uang, berarti boleh dipakai.",
      new_new: "Uang lebih = penyangga, bukan izin untuk longgar.",
    },
    reward_spender: {
      name: "THE REWARD SPENDER",
      desc: "Kamu pakai belanja sebagai hadiah setelah tekanan.",
      lines: [
        "Kamu mengelola tekanan dengan cara menghadiahi diri sendiri.",
        "Masalahnya, 'hadiah' itu justru yang menambah tekanan berikutnya.",
        "Kamu lelah, lalu belanja. Lalu saldo membuat kamu semakin lelah.",
      ],
      loop_short: ["TRIGGER: STRES", "BERTAHAN", "'SAYA PANTAS'", "BELANJA", "BERSALAH", "STRES LAGI", "REPEAT"],
      loop_full: ["STRES / LELAH", "MENAHAN DIRI", "'SAYA PANTAS INI'", "BELANJA / KONSUMSI", "SENANG SEBENTAR", "BERSALAH", "PERCAYA: 'BELANJA = SELF-CARE'", "STRES LAGI"],
      why: "Kamu memakai konsumsi sebagai pelampiasan emosi. Itu memberi lega sesaat, tapi menumpuk beban finansial yang kemudian jadi sumber stres baru — dan kamu kembali butuh 'hadiah'.",
      blind_spot: "Kamu mengira ini tentang 'menghargai diri'. Tapi dari pola jawaban kamu, konsumsi kamu naik tepat setelah momen stres, bukan setelah pencapaian.",
      breaking_point: "Ganti reward-nya. Sesuatu yang menenangkan tapi tidak menghabiskan saldo: jalan kaki, tidur cukup, kontak orang terdekat.",
      new_old: "Saya lelah, saya pantas beli ini.",
      new_new: "Saya lelah, saya pantas istirahat — dengan cara yang tidak merusak keuangan saya.",
    },
    firefighter: {
      name: "THE FIREFIGHTER",
      desc: "Kamu memadamkan api setelah kebakaran, bukan pasang alarm.",
      lines: [
        "Kamu lebih sering menyelesaikan masalah setelah terjadi.",
        "Bukan karena malas — tapi karena kamu tidak membangun sistem pencegahan.",
        "Ketenangan kamu datang setelah krisis, bukan karena krisis dicegah.",
      ],
      loop_short: ["TRIGGER: KRISIS", "PANIK", "TAMBAL SULAM", "LEGA", "ABAIKAN", "KRISIS LAGI", "REPEAT"],
      loop_full: ["KRISIS DATANG", "PANIK", "TAMBAL SULAM", "LEGA SEBENTAR", "TIDAK ADA SISTEM", "KRISIS DATANG LAGI", "PERCAYA: 'NANTI SAYA URUS'", "KRISIS BARU"],
      why: "Kamu bereaksi terhadap masalah, bukan mencegahnya. Sistem terasa 'membosankan', jadi kamu menundanya sampai jadi darurat — lalu kamu jadi pahlawan pemadam kebakaran sendiri.",
      blind_spot: "Kamu mengira kamu 'tidak bisa' disiplin. Tapi dari pola jawaban kamu, kamu cenderung baru bertindak ketika rasa sakitnya sudah tak tertahankan.",
      breaking_point: "Satu jam seminggu untuk cek keuangan — sebelum jadi darurat. Itu titik putusnya.",
      new_old: "Saya urus nanti kalau sudah terlihat masalahnya.",
      new_new: "Saya urus sebelum jadi masalah, walau terasa membosankan.",
    },
    scarcity: {
      name: "THE SCARCITY SURVIVOR",
      desc: "Keputusan finansial kamu digerakkan rasa takut kehilangan.",
      lines: [
        "Ada rasa takut yang cukup kuat di kembali keputusan finansial kamu.",
        "Kamu menggenggam erat karena takut kehilangan — dan itu ada harganya.",
        "Aman terasa menenangkan, tapi kadang 'aman' itu yang membuat kamu stuck.",
      ],
      loop_short: ["TRIGGER: KETAKUTAN", "MENGGENGGAM ERAT", "MELEWATKAN PELUANG", "'AMAN TAPI STUCK'", "TAKUT LAGI", "REPEAT"],
      loop_full: ["RASA TAKUT KEHILANGAN", "MENGGENGGAM ERAT", "HINDARI RISIKO", "MELEWATKAN PELUANG", "'AMAN TAPI STUCK'", "TAKUT SEMAKIN BESAR", "PERCAYA: 'SAYA tidak MAMPU KEHILANGAN'", "TAKUT LAGI"],
      why: "Keputusan kamu digerakkan rasa takut kehilangan keamanan, bukan oleh peluang. Menahan diri memang terasa aman, tapi terlalu erat menggenggam juga punya biaya yang tak terlihat.",
      blind_spot: "Kamu mengira menahan = aman. Tapi dari pola jawaban kamu, 'aman' itu sering berarti tidak tumbuh — dan itu risiko yang tak pernah kamu hitung.",
      breaking_point: "Pisahkan uang 'aman' dan uang 'berani'. Selama dana darurat aman, izinkan sebagian kecil untuk bergerak.",
      new_old: "Jangan ambil risiko, saya tidak mampu kehilangan.",
      new_new: "Saya siapkan dana darurat dulu, lalu saya berani mengambil langkah.",
    },
  },

  career: {
    escape: {
      name: "THE ESCAPE ARTIST",
      desc: "Masalah muncul → pindah → mulai lagi → pola sama muncul lagi.",
      lines: [
        "Kamu menyelesaikan masalah dengan cara pindah.",
        "Tapi pola yang kamu tinggalkan ikut pindah bersama kamu.",
        "Lokasinya baru. Ceritanya lama.",
      ],
      loop_short: ["TRIGGER: MASALAH MUNCUL", "FRUSTRASI", "BERHENTI / PINDAH", "MULAI BARU", "MASALAH SAMA MUNCUL", "REPEAT"],
      loop_full: ["MASALAH MUNCUL", "FRUSTRASI", "INGIN KABUR", "RESIGN / PINDAH", "FRESH START", "MASALAH SAMA MUNCUL LAGI", "PERCAYA: 'PINDAH = BERES'", "MASALAH BARU"],
      why: "Kamu pindah untuk kabur, bukan untuk tumbuh. Jadi masalah yang sebenarnya ikut terbawa — karena akarnya bukan di tempat, tapi di cara kamu merespons.",
      blind_spot: "Kamu mengira tempat yang salah. Tapi dari pola jawaban kamu, tanda-tanda masalah muncul di tempat baru dengan bentuk yang sama persis.",
      breaking_point: "Sebelum resign, tulis satu hal yang membuat kamu mau kabur. Coba perbaiki hal itu di tempat sekarang dulu.",
      new_old: "Pindah = mulai dari nol, bersih.",
      new_new: "Pindah = membawa diri yang sama. Saya bereskan akarnya dulu.",
    },
    almost_winner: {
      name: "THE ALMOST WINNER",
      desc: "Kamu mendekati breakthrough, lalu ambil keputusan yang merusak momentum.",
      lines: [
        "Kamu sering sampai di ambang keberhasilan — lalu sesuatu merusaknya.",
        "Dan 'sesuatu' itu biasanya keputusan kamu sendiri.",
        "Kamu mungkin lebih takut sukses daripada takut gagal.",
      ],
      loop_short: ["TRIGGER: PROGRES BAGUS", "'INI TERLALU BAGUS'", "SELF-SABOTAGE", "MUNDUR", "BANGUN LAGI", "REPEAT"],
      loop_full: ["PROGRES BAGUS", "'INI TERLALU BAGUS'", "CEMAS / tidak PANTAS", "KEPUTUSAN MERUSAK", "SETBACK", "BANGUN LAGI", "PERCAYA: 'SAYA tidak LAYAK SUKSES'", "PROGRES BAGUS LAGI"],
      why: "Begitu momentum mulai bagus, muncul kecemasan 'ini tidak akan bertahan' atau 'saya tidak pantas'. Kecemasan itu mendorong kamu mengambil keputusan yang merusak momentum — untuk membenarkan rasa takut kamu.",
      blind_spot: "Kamu mengira kamu 'selalu sial di ujung'. Tapi dari pola jawaban kamu, kemunduran itu sering datang tepat setelah kamu merasa semua berjalan terlalu mulus.",
      breaking_point: "Saat semua mulai jalan dan kamu merasa 'tidak pantas' — teruskan. Jangan sentuh tombol penghancur.",
      new_old: "Begitu mulai bagus, saya gugup dan merusaknya.",
      new_new: "Bagus itu normal, bukan ancaman. Saya biarkan momentum itu selesai.",
    },
    validation: {
      name: "THE VALIDATION SEEKER",
      desc: "Kamu menggantungkan arah pada pengakuan orang lain.",
      lines: [
        "Arah karier kamu sering ditentukan oleh suara orang lain.",
        "Kamu bekerja untuk tepuk tangan, bukan untuk hasil.",
        "Itu sebabnya tak peduli seberapa banyak kamu capai, rasanya tak pernah cukup.",
      ],
      loop_short: ["TRIGGER: TANPA PUJIAN", "RAGU", "OVERWORK / PLEASING", "LELAH", "TETAP TAK CUKUP", "REPEAT"],
      loop_full: ["BEKERJA", "MENUNGGU PUJIAN", "TANPA PUJIAN", "RAGU DIRI", "OVERWORK / PLEASING", "LELAH", "PERCAYA: 'NILAI SAYA = PENGKUAN ORANG'", "BEKERJA LAGI"],
      why: "Kamu mengukur keberhasilan dari pengakuan eksternal. Ketika tak ada pujian, kamu menggandakan usaha untuk mencarinya — bukan untuk menyelesaikan pekerjaan yang benar.",
      blind_spot: "Kamu mengira kamu 'butuh feedback untuk berkembang'. Tapi dari pola jawaban kamu, kamu sering kebingungan justru saat tak ada yang memberi tahu kamu harus bagaimana.",
      breaking_point: "Tetapkan satu ukuran sukses yang tidak butuh orang lain mengiyakan. Mulai dari sana.",
      new_old: "Saya butuh orang berkata ini bagus.",
      new_new: "Saya yang menentukan apakah ini cukup baik.",
    },
    reset: {
      name: "THE RESET BUTTON",
      desc: "Kamu lebih suka mulai ulang daripada memperbaiki yang ada.",
      lines: [
        "Saat kacau, insting kamu adalah membuang semuanya dan mulai dari nol.",
        "Mulai ulang terasa bersih — tapi kamu kehilangan semua yang sudah kamu bangun.",
        "Nol itu menenangkan. Tapi kamu selalu mulai dari nol lagi.",
      ],
      loop_short: ["TRIGGER: SEMUA KACAU", "OVERWHELM", "'MULAI DARI NOL'", "BUANG PROGRES", "KACAU LAGI", "REPEAT"],
      loop_full: ["SITUASI KACAU", "OVERWHELM", "'MULAI DARI NOL'", "BUANG PROGRES", "LEGA SEBENTAR", "KACAU LAGI", "PERCAYA: 'GAGAL = BUANG SEMUA'", "SITUASI KACAU BARU"],
      why: "Mulai dari nol terasa lebih mudah daripada memperbaiki bagian yang rusak. Tapi setiap reset membuang momentum, dan kamu akhirnya mengulang fase awal berkali-kali tanpa pernah lewat.",
      blind_spot: "Kamu mengira 'kacau berarti harus ganti total'. Tapi dari pola jawaban kamu, yang sering perlu diperbaiki hanya satu bagian kecil — bukan semuanya.",
      breaking_point: "Sebelum reset, coba perbaiki satu hal kecil dulu selama seminggu. Kalau masih gagal, baru evaluasi.",
      new_old: "Kalau kacau, buang semua, mulai lagi.",
      new_new: "Kalau kacau, perbaiki bagian yang kacau saja.",
    },
  },

  life: {
    chaos: {
      name: "THE CHAOS MAGNET",
      desc: "Kamu berulang kali ambil keputusan yang menambah exposure ke kekacauan.",
      lines: [
        "Kamu sering merasa 'hidup saya selalu berantakan'.",
        "Tapi ini bukan tentang menarik kesialan.",
        "Ini tentang keputusan yang kamu ambil tepat saat hidup mulai terasa tenang.",
      ],
      loop_short: ["TRIGGER: BOSAN / TENANG", "CARI SERU", "AMBIL RISIKO", "KACAU", "LELAH", "BOSAN LAGI", "REPEAT"],
      loop_full: ["HIDUP TENANG / BOSAN", "MERASA HAMPA", "CARI SERU / RISIKO", "KEPUTUSAN KACAU", "DRAMA / KEKACAUAN", "LELAH", "PERCAYA: 'HIDUP SAYA MEMANG BEGITU'", "BOSAN LAGI"],
      why: "Ketenangan terasa membosankan, jadi kamu menciptakan kegaduhan untuk merasa hidup. Masalahnya, kegaduhan itu menambah beban yang kemudian kamu sebut 'sial'.",
      blind_spot: "Kamu mengira nasib yang sedang bermain. Tapi dari pola jawaban kamu, keputusan berisiko sering kamu ambil justru ketika hidup sedang stabil dan tenang.",
      breaking_point: "Saat merasa 'hidup membosankan', jangan ciptakan drama. Cari tantangan yang aman dan terukur.",
      new_old: "Hidup saya selalu berantakan, itu nasib.",
      new_new: "Saya memilih ketenangan, dan mencari seru lewat tantangan yang sehat.",
    },
    self_sacrificer: {
      name: "THE SELF-SACRIFICER",
      desc: "Kamu korbankan diri sampai burnout, lalu reset dan ulang.",
      lines: [
        "Kamu menyebutnya 'pengertian' atau 'tanggung jawab'.",
        "Tapi kamu terus mengorbankan kebutuhan sendiri sampai habis.",
        "Lalu kamu rebah, pulih, dan melakukannya lagi dari awal.",
      ],
      loop_short: ["TRIGGER: ADA YANG MINTA", "IYA-IN SEMUA", "ABAIKAN DIRI", "BURNOUT", "REBAH / PULIH", "IYA-IN LAGI", "REPEAT"],
      loop_full: ["ADA YANG BUTUH", "SULIT MENOLAK", "MENGABAIKAN DIRI", "MENUMPUK", "BURNOUT", "REBAH / PULIH", "PERCAYA: 'SAYA HARUS SELALU ADA'", "ADA YANG BUTUH LAGI"],
      why: "Kamu menaruh kebutuhan orang lain di atas kebutuhan sendiri — bukan karena kamu kuat, tapi karena kamu takut mengecewakan. Sampai akhirnya kamu kehabisan, lalu pulih, dan mengulang siklus yang sama.",
      blind_spot: "Kamu mengira ini tentang 'menjadi orang baik'. Tapi dari pola jawaban kamu, kamu jarang mengiyakan diri sendiri — dan itu yang membuat kamu terus kehabisan.",
      breaking_point: "Berkata 'tidak' sekali hari ini — untuk hal kecil. Itu titik awal memutus siklus.",
      new_old: "Saya harus selalu ada buat orang lain.",
      new_new: "Saya ada untuk diri saya dulu, baru bisa ada untuk orang lain.",
    },
    pattern_repeater: {
      name: "THE PATTERN REPEATER",
      desc: "Kamu sadar masalahnya, tapi tetap pakai respons lama.",
      lines: [
        "Kamu sebenarnya sudah tahu apa yang salah.",
        "Tapi tahu saja tidak mengubah apa pun.",
        "Kamu merespons masalah yang sama dengan cara yang sama — dan berharap hasilnya berbeda.",
      ],
      loop_short: ["TRIGGER: MASALAH SAMA", "'TAHU TAPI...'", "RESPONS LAMA", "HASIL SAMA", "FRUSTRASI", "REPEAT"],
      loop_full: ["MASALAH SAMA MUNCUL", "SADAR POLANYA", "'TAHU TAPI...'", "RESPONS LAMA", "HASIL SAMA", "FRUSTRASI", "PERCAYA: 'SAYA MEMANG BEGINI'", "MASALAH MUNCUL LAGI"],
      why: "Insight tanpa perubahan hanyalah ilusi progres. Kamu menyadari polanya, tapi ketika masalah muncul lagi, kamu otomatis memakai respons lama yang sudah terlatih.",
      blind_spot: "Kamu mengira 'sadar' itu cukup. Tapi dari pola jawaban kamu, antara 'tahu' dan 'berhenti' ada jarak yang belum pernah kamu lewati.",
      breaking_point: "Pilih satu respons lama. Ganti dengan respons baru hari ini — bukan besok. Sekali saja dulu.",
      new_old: "Saya sudah tahu, tapi saya begini terus.",
      new_new: "Tahu → berhenti → ganti. Satu respons lama, satu hari.",
    },
  },
};

/* ---------- QUESTION BANK V0.1 ----------
   Setiap option: { t: teks, s: { patternKey: weight } }
   area: 'love' | 'money' | 'career' | 'life'                          */

const QUESTIONS = {

  love: [
    { text: "Seseorang yang kamu suka tiba-tiba mulai membalas chat lebih lama dan lebih dingin. Reaksi pertama kamu biasanya…", options: [
      { t: "Mengejar: chat lebih sering, cari kepastian.", s: { chaser: 2 } },
      { t: "Mundur dulu, memberi ruang (tapi di dalam hati panik).", s: { avoider: 2, chaser: 1 } },
      { t: "Berpikir 'dia lagi sibuk', lanjutkan hidup.", s: {} },
      { t: "Langsung cari tahu ada yang salah apa.", s: { chaser: 2 } },
      { t: "tidak peduli, saya ikut jadi dingin.", s: { avoider: 1 } },
    ]},
    { text: "Pasangan atau teman dekat kamu lagi punya masalah berat. Kamu merasa paling…", options: [
      { t: "Dibutuhkan — dan itu terasa enak.", s: { rescuer: 2 } },
      { t: "Mau bantu, tapi takut keterlaluan.", s: { rescuer: 1 } },
      { t: "Kasihan, tapi tidak mau ikut tenggelam.", s: {} },
      { t: "Lelah, mengapa saya lagi yang harus.", s: {} },
    ]},
    { text: "Di awal hubungan atau pertemanan baru, kamu biasanya…", options: [
      { t: "Memberi 100% langsung — waktu, energi, perhatian.", s: { overgiver: 2 } },
      { t: "Memberi secukupnya, lihat dulu.", s: {} },
      { t: "Tahan-tahan agar tidak terlihat butuh.", s: { avoider: 1 } },
      { t: "Nunggu dia yang mulai duluan.", s: {} },
    ]},
    { text: "Ketika mulai merasa dekat dan nyaman dengan seseorang, kamu…", options: [
      { t: "Mulai cari alasan buat mundur.", s: { avoider: 2 } },
      { t: "Semakin dekat, semakin sayang.", s: {} },
      { t: "Takut ini akan rusak.", s: { repeater: 1 } },
      { t: "Santai saja.", s: {} },
    ]},
    { text: "Hubungan kamu sebelumnya biasanya berakhir karena…", options: [
      { t: "Dia yang pergi.", s: { chaser: 1, repeater: 1 } },
      { t: "Saya yang pergi.", s: { avoider: 1, repeater: 1 } },
      { t: "Habis saya memberi banyak, tapi tidak dibalas.", s: { overgiver: 2 } },
      { t: "Orangnya selalu 'seperti itu'.", s: { repeater: 2 } },
    ]},
    { text: "Kalimat mana yang paling sering kamu ucapin (atau pikirin)?", options: [
      { t: "\"Kenapa saya selalu bertemu orang yang salah?\"", s: { repeater: 2 } },
      { t: "\"Saya terlalu baik sama orang.\"", s: { overgiver: 1, rescuer: 1 } },
      { t: "\"Begitu saya care, dia malah pergi.\"", s: { chaser: 2 } },
      { t: "\"Saya tidak pernah bisa lepas sepenuhnya.\"", s: { avoider: 1 } },
    ]},
    { text: "Saat butuh sesuatu dari pasangan, kamu cenderung…", options: [
      { t: "tidak minta, berharap dia sadar sendiri.", s: { overgiver: 1 } },
      { t: "Minta langsung, jelas.", s: {} },
      { t: "Nunggu sampai tidak tahan baru berbicara.", s: { avoider: 1, overgiver: 1 } },
      { t: "Berkata 'tidak apa-apa' padahal tidak.", s: { overgiver: 2 } },
    ]},
    { text: "Kalau dia tidak membalas pesan berjam-jam, di kepala kamu…", options: [
      { t: "\"Dia pasti sudah tidak suka saya.\"", s: { chaser: 2 } },
      { t: "\"Saya salah apa ya?\"", s: { chaser: 1, repeater: 1 } },
      { t: "\"Santai, orang bisa sibuk.\"", s: {} },
      { t: "\"Fine, saya juga tidak membalas.\"", s: { avoider: 1 } },
    ]},
    { text: "Peran kamu di sebagian besar hubungan biasanya…", options: [
      { t: "Yang menyelamatkan / memperbaiki.", s: { rescuer: 2 } },
      { t: "Yang lebih banyak memberi.", s: { overgiver: 2 } },
      { t: "Yang menjaga jarak.", s: { avoider: 2 } },
      { t: "Yang mengejar.", s: { chaser: 2 } },
    ]},
    { text: "Ketika tanda-tanda tidak sehat mulai muncul, kamu biasanya…", options: [
      { t: "Bertahan lebih lama.", s: { chaser: 1, repeater: 2 } },
      { t: "Langsung cut off.", s: { avoider: 1 } },
      { t: "Meyakinkan diri dia bisa berubah.", s: { rescuer: 2 } },
      { t: "Bingung, tapi tetap jalan.", s: { repeater: 1 } },
    ]},
    { text: "Orang yang kamu pilih biasanya…", options: [
      { t: "Perlu diselamatkan.", s: { rescuer: 2 } },
      { t: "Susah didapet.", s: { chaser: 2 } },
      { t: "Mirip-mirip orang sebelumnya.", s: { repeater: 2 } },
      { t: "Aman dan tidak nuntut.", s: { avoider: 1 } },
    ]},
    { text: "Setelah berkorban banyak dan tidak dihargai, kamu…", options: [
      { t: "Marah tapi diam.", s: { overgiver: 2 } },
      { t: "Semakin berusaha.", s: { chaser: 1, rescuer: 1 } },
      { t: "Mundur pelan-pelan.", s: { avoider: 1 } },
      { t: "Ngungkit-ngungkit.", s: { overgiver: 1 } },
    ]},
    { text: "Hal yang paling kamu takutin dalam hubungan…", options: [
      { t: "Ditinggal.", s: { chaser: 2 } },
      { t: "Kehilangan diri sendiri.", s: { avoider: 1 } },
      { t: "tidak dihargai.", s: { overgiver: 1 } },
      { t: "Mengulang kesalahan yang sama.", s: { repeater: 2 } },
    ]},
    { text: "Kalau orang berkata 'kamu terlalu baik', kamu merasa…", options: [
      { t: "Dihargai.", s: { overgiver: 1, rescuer: 1 } },
      { t: "Itu sebenarnya sebuah masalah.", s: {} },
      { t: "tidak, saya hanya normal.", s: {} },
      { t: "Iya, dan itu membuat saya lelah.", s: { overgiver: 1 } },
    ]},
  ],

  money: [
    { text: "Income kamu tiba-tiba naik cukup besar. Yang biasanya berubah lebih dulu…", options: [
      { t: "Gaya hidup naik.", s: { debt_cycler: 2 } },
      { t: "Saya belanja 'reward' buat diri sendiri.", s: { reward_spender: 2 } },
      { t: "Saya simpan / tabung dulu.", s: {} },
      { t: "Saya bayar utang.", s: {} },
    ]},
    { text: "Setelah seminggu kerja keras dan stres, kamu cenderung…", options: [
      { t: "Belanja barang yang 'saya pantas'.", s: { reward_spender: 2 } },
      { t: "Makan enak / jajan yang mahal.", s: { reward_spender: 1 } },
      { t: "Istirahat saja, tidak keluar uang.", s: {} },
      { t: "Menabung agar merasa aman.", s: { scarcity: 1 } },
    ]},
    { text: "Ketika tagihan atau masalah finansial muncul, kamu biasanya…", options: [
      { t: "Urus mendadak saat sudah parah.", s: { firefighter: 2 } },
      { t: "Panik dulu, baru cari jalan.", s: { firefighter: 1 } },
      { t: "Sudah ada sistem dari awal.", s: {} },
      { t: "Hindari, tidak mau lihat.", s: { firefighter: 2 } },
    ]},
    { text: "Punya uang nganggur, pikiran kamu…", options: [
      { t: "Harus dipakai sebelum hilang.", s: { debt_cycler: 1 } },
      { t: "Harus disimpan erat-erat.", s: { scarcity: 2 } },
      { t: "Harus diputer / diinvestasikan.", s: {} },
      { t: "Bingung, takut salah.", s: { scarcity: 1 } },
    ]},
    { text: "Soal investasi atau peluang, kamu biasanya…", options: [
      { t: "Takut, jadi tidak ambil.", s: { scarcity: 2 } },
      { t: "Ambil gegabah pas lagi semangat.", s: { debt_cycler: 1 } },
      { t: "Hitung dulu matang-matang.", s: {} },
      { t: "Ikut-ikutan orang.", s: {} },
    ]},
    { text: "Ungkapan yang paling ngegambarin kamu soal uang…", options: [
      { t: "\"Hidup hanya sekali.\"", s: { reward_spender: 1, debt_cycler: 1 } },
      { t: "\"Saya tidak boleh sampai tidak punya.\"", s: { scarcity: 2 } },
      { t: "\"Nanti saya urus.\"", s: { firefighter: 2 } },
      { t: "\"Kalau ada, ya saya pakai.\"", s: { debt_cycler: 2 } },
    ]},
    { text: "Setelah berhasil melunasi utang / membereskan masalah, yang terjadi…", options: [
      { t: "Longgar, terus berlebihan lagi.", s: { debt_cycler: 2 } },
      { t: "Saya rayain dengan belanja.", s: { reward_spender: 1 } },
      { t: "Saya bangun penyangga agar tidak terjadi lagi.", s: {} },
      { t: "Takut sangat terjadi lagi, jadi saya kunci semua.", s: { scarcity: 1 } },
    ]},
    { text: "Kalau ada promo atau diskon, kamu…", options: [
      { t: "Beli walau tidak butuh.", s: { debt_cycler: 1, reward_spender: 1 } },
      { t: "Berpikir 'hemat' padahal keluar uang.", s: { debt_cycler: 1 } },
      { t: "Butuh baru beli.", s: {} },
      { t: "Takut kelewatan.", s: { scarcity: 1 } },
    ]},
    { text: "Budget bulanan kamu…", options: [
      { t: "tidak ada, mengalir saja.", s: { firefighter: 2 } },
      { t: "Ada tapi jarang diturutin.", s: { firefighter: 1, reward_spender: 1 } },
      { t: "Ketat dan membuat tegang.", s: { scarcity: 2 } },
      { t: "Ada dan berjalan.", s: {} },
    ]},
    { text: "Hal yang membuat kamu paling cemas soal uang…", options: [
      { t: "Tiba-tiba tidak punya.", s: { scarcity: 2 } },
      { t: "tidak bisa menikmati hidup.", s: { reward_spender: 1 } },
      { t: "Utang menumpuk lagi.", s: { debt_cycler: 2 } },
      { t: "Masalah datang mendadak.", s: { firefighter: 1 } },
    ]},
  ],

  career: [
    { text: "Ketika kerjaan mulai jalan bagus dan tanggung jawab naik, respons kamu…", options: [
      { t: "Gugup, mulai merasa tidak pantas.", s: { almost_winner: 2 } },
      { t: "Tambah semangat, gas terus.", s: {} },
      { t: "Mulai cari alasan kenapa ini akan gagal.", s: { almost_winner: 2 } },
      { t: "Nunggu pengakuan dari atasan.", s: { validation: 1 } },
    ]},
    { text: "Saat muncul masalah besar di kerjaan, kamu cenderung…", options: [
      { t: "Langsung berpikir pindah.", s: { escape: 2 } },
      { t: "Hadapi sampai selesai.", s: {} },
      { t: "Buang semua dan mulai dari nol.", s: { reset: 2 } },
      { t: "Berharap ada yang memuji atau menolong.", s: { validation: 1 } },
    ]},
    { text: "Kepuasan kerja kamu paling ditentukan oleh…", options: [
      { t: "Pujian dan pengakuan orang.", s: { validation: 2 } },
      { t: "Hasil yang saya capai sendiri.", s: {} },
      { t: "Gaji dan rasa aman.", s: {} },
      { t: "Apakah orang lain senang sama saya.", s: { validation: 1 } },
    ]},
    { text: "Kamu sudah deket sangat sama promosi / hasil besar, lalu…", options: [
      { t: "Saya membuat satu keputusan yang ngerusak.", s: { almost_winner: 2 } },
      { t: "Saya semakin fokus.", s: {} },
      { t: "Saya overthinking sampai salah langkah.", s: { almost_winner: 1 } },
      { t: "Saya tanya semua orang, jadi bingung.", s: { validation: 1 } },
    ]},
    { text: "Riwayat pindah kerja / berhenti saya biasanya…", options: [
      { t: "Sering, dan alasannya mirip-mirip.", s: { escape: 2, reset: 1 } },
      { t: "Karena saya butuh 'awal yang baru'.", s: { reset: 2 } },
      { t: "Sesekali, dengan alasan jelas.", s: {} },
      { t: "Belum pernah.", s: {} },
    ]},
    { text: "Saat kerjaan kacau dan tidak rapi, kamu…", options: [
      { t: "Pingin buang semua, mulai lagi.", s: { reset: 2 } },
      { t: "Merapikan sedikit-sedikit.", s: {} },
      { t: "Kabur ke hal baru.", s: { escape: 1 } },
      { t: "Nunggu dipuji dulu baru lanjut.", s: { validation: 1 } },
    ]},
    { text: "Kalau atasan / tim tidak memberi feedback, kamu merasa…", options: [
      { t: "tidak yakin kerjaan saya bener.", s: { validation: 2 } },
      { t: "Bagus, berarti tidak ada masalah.", s: {} },
      { t: "Saya harus cari validasi di tempat lain.", s: { validation: 2 } },
      { t: "Santai saja.", s: {} },
    ]},
    { text: "Momentum lagi bagus, terus tiba-tiba kamu…", options: [
      { t: "Merusaknya sendiri (menunda, konflik, resign).", s: { almost_winner: 2 } },
      { t: "Nikmatin dan maksimalin.", s: {} },
      { t: "Takut, terus melambat.", s: { almost_winner: 1 } },
      { t: "bertanya orang 'saya lanjut tidak ya?'", s: { validation: 1 } },
    ]},
    { text: "Alasan kamu biasanya resign…", options: [
      { t: "Masalah yang sama seperti tempat lama.", s: { escape: 2 } },
      { t: "Saya ingin 'reset' hidup.", s: { reset: 2 } },
      { t: "Mau pindah agar tidak merasa terjebak.", s: { escape: 1 } },
      { t: "Alasan konkret dan sudah matang.", s: {} },
    ]},
    { text: "Yang paling membuat kamu takut soal karier…", options: [
      { t: "Sukses yang membuat saya tidak sanggup.", s: { almost_winner: 2 } },
      { t: "Tidak diakui.", s: { validation: 2 } },
      { t: "Terjebak di tempat yang sama.", s: { escape: 1, reset: 1 } },
      { t: "tidak stabil.", s: {} },
    ]},
  ],

  life: [
    { text: "Ketika masalah yang sama muncul untuk ketiga kalinya, kamu berpikir…", options: [
      { t: "\"Kenapa saya lagi?\"", s: { chaos: 1, pattern_repeater: 1 } },
      { t: "\"Saya pasti lagi melakukan hal yang sama.\"", s: { pattern_repeater: 2 } },
      { t: "\"Biarkan, nanti juga lewat.\"", s: {} },
      { t: "\"Ini nasib saya.\"", s: { chaos: 2 } },
    ]},
    { text: "Soal membantu orang lain, kamu biasanya…", options: [
      { t: "Iya-in semua permintaan.", s: { self_sacrificer: 2 } },
      { t: "Bantu kalau saya mampu.", s: {} },
      { t: "Mengorbankan diri sampai lelah.", s: { self_sacrificer: 2 } },
      { t: "Tolak kalau tidak sanggup.", s: {} },
    ]},
    { text: "Kalau hidup terasa datar atau bosan, kamu cenderung…", options: [
      { t: "Cari drama / risiko agar seru.", s: { chaos: 2 } },
      { t: "Terima dan nikmatin ketenangan.", s: {} },
      { t: "Membuat masalah baru tanpa sadar.", s: { chaos: 1 } },
      { t: "Sibukin diri sampai lelah.", s: { self_sacrificer: 1 } },
    ]},
    { text: "Saya sering menggambarkan hidup saya sebagai…", options: [
      { t: "\"Berantakan terus.\"", s: { chaos: 2 } },
      { t: "\"Saya lelah ngurusin orang.\"", s: { self_sacrificer: 1 } },
      { t: "\"Seperti berputar di tempat.\"", s: { pattern_repeater: 2 } },
      { t: "\"Biasa saja.\"", s: {} },
    ]},
    { text: "Saat lelah atau burnout, yang biasanya saya lakukan…", options: [
      { t: "Istirahat, terus kembali ke pola lama.", s: { self_sacrificer: 1, pattern_repeater: 1 } },
      { t: "Jadi semakin kacau.", s: { chaos: 1 } },
      { t: "Reset total, mulai dari nol.", s: {} },
      { t: "Refleksi dan ubah cara.", s: {} },
    ]},
    { text: "Ketika saya sudah TAHU pola buruk saya, saya biasanya…", options: [
      { t: "Tetap mengulang.", s: { pattern_repeater: 2 } },
      { t: "Sadar tapi tidak bisa berhenti.", s: { pattern_repeater: 2 } },
      { t: "Berhenti pelan-pelan.", s: {} },
      { t: "Lupa lagi.", s: { pattern_repeater: 1 } },
    ]},
    { text: "Keputusan yang membuat hidup semakin rumit biasanya saya ambil karena…", options: [
      { t: "Bosen.", s: { chaos: 2 } },
      { t: "tidak enakan nolak.", s: { self_sacrificer: 2 } },
      { t: "Takut kehilangan.", s: { self_sacrificer: 1 } },
      { t: "Saya tidak berpikir panjang.", s: { chaos: 1 } },
    ]},
    { text: "Prioritas saya di sebagian besar waktu…", options: [
      { t: "Orang lain dulu.", s: { self_sacrificer: 2 } },
      { t: "Diri sendiri dulu.", s: {} },
      { t: "Membuat hidup seru.", s: { chaos: 1 } },
      { t: "Mengulang rutinitas yang sama.", s: { pattern_repeater: 1 } },
    ]},
    { text: "Kalau ditanya 'kenapa kamu masih begini-begini saja', jawaban saya…", options: [
      { t: "\"Saya juga tidak tahu.\"", s: { chaos: 1 } },
      { t: "\"Saya sudah mencoba, tapi kembali lagi.\"", s: { pattern_repeater: 2 } },
      { t: "\"Beban saya banyak, ngurusin orang.\"", s: { self_sacrificer: 1 } },
      { t: "\"Saya baik-baik saja.\"", s: {} },
    ]},
    { text: "Perasaan yang paling sering kamu rasain soal hidup…", options: [
      { t: "Kecapekan.", s: { self_sacrificer: 2 } },
      { t: "Bingung kenapa begini terus.", s: { pattern_repeater: 2 } },
      { t: "Hidup saya kacau tapi seru.", s: { chaos: 2 } },
      { t: "Tenang.", s: {} },
    ]},
  ],
};

/* ---------- MICROCOPY POOL ---------- */
const MICROCOPY = [
  "Keep going.",
  "This one matters.",
  "Jangan overthink.",
  "Jawaban pertama biasanya cukup.",
  "Almost there.",
  "tidak ada yang benar atau salah.",
  "Don't overthink it.",
];
