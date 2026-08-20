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
  questionsPerArea: 16,        // display target (bisa beda dari panjang bank)
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
      desc: "Lo cenderung mengejar justru ketika orang mulai menjauh.",
      lines: [
        "Ada pola yang cukup kuat dalam cara lo mendekati hubungan.",
        "Begitu jarak muncul, insting lo adalah menutup jarak itu — lebih cepat, lebih keras.",
        "Tapi semakin lo mengejar, semakin orang itu mundur. Dan lo makin panik.",
      ],
      loop_short: ["TRIGGER: DIA MENJAUH", "TAKUT DITINGGAL", "MENGECAR", "DIA MAKIN MUNDUR", "KEPANIKAN", "MENGECAR LAGI", "REPEAT"],
      loop_full: ["DIA MENJAUH", "TAKUT DITINGGAL", "PANIK", "MENGECAR / CHAT TERUS", "DIA MUNDUR", "KEPANIKAN MAKIN BESAR", "PERCAYA: 'GUE BAKAL DITINGGAL'", "MENGECAR LAGI"],
      why: "Lo membaca jarak sebagai tanda hubungan sekarat. Jadi lo mengisi kekosongan itu dengan kejar-kejaran, tanpa sadar membuat jarak itu makin lebar. Rasa takut ditinggal yang menggerakkan — bukan keinginan untuk dekat.",
      blind_spot: "Lo mengira masalahnya adalah orang yang 'dingin' atau 'hilang'. Tapi dari pola jawaban lo, yang bikin mereka makin jauh adalah tekanan yang lo berikan tepat saat mereka butuh ruang.",
      breaking_point: "Saat lo merasakan dorongan untuk mengejar — di situlah titik putusnya. Jangan kirim pesan itu. Tunggu 24 jam dulu.",
      new_old: "Kalau dia menjauh, gue harus mendekat.",
      new_new: "Kalau dia menjauh, gue biarkan. Kalau dia balik, baru gue tentukan mau lanjut atau tidak.",
    },
    rescuer: {
      name: "THE RESCUER",
      desc: "Lo merasa paling bernilai ketika dibutuhkan.",
      lines: [
        "Ada pola yang cukup kuat dalam cara lo membangun hubungan.",
        "Lo cenderung merasa paling bernilai ketika seseorang membutuhkan lo.",
        "Masalahnya bukan karena lo terlalu baik. Ada kemungkinan lo secara tidak sadar memilih situasi yang membuat kebaikan lo menjadi kebutuhan.",
      ],
      loop_short: ["TRIGGER: DIA BERMASALAH", "MERASA DIBUTUHKAN", "MENYELAMATKAN", "EKSPEKTASI", "KECEWA", "JARAK", "REPEAT"],
      loop_full: ["DIA BERMASALAH", "MERASA DIBUTUHKAN", "MERASA BERHARGA", "MEMPERBAIKI DIA", "BERHARAP DIBALAS", "KECEWA", "PERCAYA: 'GUE HARUS MENYELAMATKAN'", "DIA BERMASALAH LAGI"],
      why: "Nilai diri lo tersambung ke seberapa banyak masalah orang lain yang bisa lo selesaikan. Jadi tanpa sadar lo tertarik ke orang yang 'rusak', karena di situ lo merasa paling hidup — lalu kecewa saat pengorbanan lo tak dibalas.",
      blind_spot: "Lo mengira masalahnya adalah orang yang tak tahu terima kasih. Tapi jawaban lo menunjukkan lo bertahan lebih lama justru ketika tanda-tanda ketidakseimbangan sudah jelas terlihat.",
      breaking_point: "Sebelum lo menyelamatkan siapa pun, tanya satu hal: 'Dia minta tolong, atau gue yang nawarin diri?' Kalau lo yang nawarin — berhenti.",
      new_old: "Gue harus dibutuhkan agar merasa berharga.",
      new_new: "Gue berharga bahkan ketika gue tidak sedang menyelamatkan siapa pun.",
    },
    overgiver: {
      name: "THE OVERGIVER",
      desc: "Lo memberi terlalu banyak di awal, lalu kecewa karena tak dihargai.",
      lines: [
        "Lo sering menyebutnya sebagai 'terlalu baik'.",
        "Tapi dari pola jawaban lo, masalahnya mungkin bukan kebaikan.",
        "Lo mengukur nilai diri dari seberapa banyak yang bisa lo berikan — lalu marah saat tak ditakar dengan cara yang sama.",
      ],
      loop_short: ["TRIGGER: KONEKSI BARU", "MEMBERI 100%", "BERHARAP SEIMBANG", "TAK DIBALAS", "KESAL", "MENARIK DIRI", "REPEAT"],
      loop_full: ["KONEKSI BARU", "MEMBERI BERLEBIHAN", "BERHARAP DIBALAS", "TAK DIBALAS", "KESAL DIAM-DIAM", "MENARIK DIRI", "PERCAYA: 'GUE GAK DIHARGAI'", "KONEKSI BARU LAGI"],
      why: "Lo memberi di awal sebagai cara mengamankan kasih sayang — 'kalau gue kasih banyak, dia pasti balas'. Tapi memberi berlebihan sering menghapus ruang bagi orang lain untuk memberi balik, dan lo mengakhirinya dengan perasaan ditipu.",
      blind_spot: "Lo mengira masalahnya adalah orang yang 'gak niat'. Padahal lo yang menetapkan standar tak terucap — berharap orang membaca pikiran lo dan membalas dengan takaran yang sama.",
      breaking_point: "Beri 60%. Sisanya tunggu. Kalau dia tidak mengisi sisa 40% itu, lo tahu lebih cepat — tanpa harus bangkrut perasaan dulu.",
      new_old: "Kalau gue kasih semua, dia pasti balas.",
      new_new: "Gue kasih secukupnya, lalu lihat apa yang dia balas.",
    },
    avoider: {
      name: "THE AVOIDER",
      desc: "Lo ingin dekat, tapi mundur saat mulai serius.",
      lines: [
        "Ada kontradiksi dalam cara lo menjawab.",
        "Lo menginginkan kedekatan — tapi begitu kedekatan itu nyata, lo mencari jalan keluar.",
        "Bukan dia yang bikin lo lari. Kedekatan itu sendiri yang bikin lo gugup.",
      ],
      loop_short: ["TRIGGER: MAKIN DEKAT", "CEMAS", "MUNDUR", "KESEPIAN", "KEMBALI", "REPEAT"],
      loop_full: ["MULAI DEKAT", "MERASA TERANCAM", "CEMAS", "MUNDUR / JAGA JARAK", "KESEPIAN", "MENDEKAT LAGI", "PERCAYA: 'DEKAT = KEHILANGAN DIRI'", "MULAI DEKAT LAGI"],
      why: "Kedekatan terasa seperti ancaman terhadap kemandirian lo, jadi lo menarik diri untuk melindungi diri. Tapi penarikan itu yang membuat setiap hubungan gagal dengan cara yang sama persis.",
      blind_spot: "Lo mengira mundur adalah bentuk melindungi diri. Padahal itu pola yang membuat lo mengulang ending yang sama: sendirian, meski bukan itu yang lo mau.",
      breaking_point: "Saat mulai nyaman dan muncul dorongan untuk kabur — itulah sinyal untuk bertahan, bukan lari. Kenali kecemasan itu tanpa harus menuruti.",
      new_old: "Kalau makin dekat, gue harus jaga jarak.",
      new_new: "Gue bisa dekat tanpa kehilangan diri gue sendiri.",
    },
    repeater: {
      name: "THE REPEATER",
      desc: "Lo berulang kali memilih dinamika yang secara struktur mirip.",
      lines: [
        "Lo mungkin menyebutnya 'sial' atau 'selalu ketemu orang yang salah'.",
        "Tapi pola jawaban lo menunjukkan sesuatu yang lebih dalam.",
        "Orangnya ganti-ganti. Dinamikanya sama persis.",
      ],
      loop_short: ["TRIGGER: ORANG BARU", "TERTARIK KE TIPE SAMA", "DINAMIKA SAMA", "ENDING SAMA", "'KENAPA LAGI?'", "REPEAT"],
      loop_full: ["ORANG BARU", "TERTARIK KE TIPE YANG SAMA", "DINAMIKA LAMA MUNCUL", "RESPONS LAMA", "ENDING YANG SAMA", "'KENAPA LAGI?'", "PERCAYA: 'SEMUA ORANG GITU'", "ORANG BARU LAGI"],
      why: "Bukan orangnya yang sama — pola lo dalam memilih dan bertahan yang sama. Lo tertarik ke tipe yang sudah lo kenal, lalu merespons dengan cara yang sudah lo kenal, dan endingnya pun sudah lo kenal.",
      blind_spot: "Lo mengira masalahnya adalah tipe orang yang lo pilih. Tapi dari jawaban lo, lo cenderung mengabaikan tanda bahaya yang sama persis seperti di hubungan-hubungan sebelumnya.",
      breaking_point: "Tulis 3 ciri orang yang dulu bikin lo sakit. Kalau ciri itu muncul lagi di orang baru — jangan lanjut. Itu titik putusnya.",
      new_old: "Semua hubungan gue ujungnya sama.",
      new_new: "Gue memilih dengan sadar, bukan dengan pola lama yang gue ulang.",
    },
  },

  money: {
    debt_cycler: {
      name: "THE DEBT CYCLER",
      desc: "Income naik → longgar → utang → tekanan → recovery → ulang.",
      lines: [
        "Ada siklus yang cukup jelas dalam cara lo mengelola uang.",
        "Begitu merasa longgar, lo membuka keran — dan tekanan datang belakangan.",
        "Masalahnya bukan jumlah uangnya. Tapi apa yang lo lakukan tepat saat merasa longgar.",
      ],
      loop_short: ["TRIGGER: INCOME NAIK", "MERASA LONGGAR", "SPENDING / UTANG", "TEKANAN", "RECOVERY", "REPEAT"],
      loop_full: ["INCOME NAIK", "MERASA LONGGAR", "GAYA HIDUP NAIK", "UTANG MUNCUL", "TEKANAN", "RECOVERY / BAYAR", "PERCAYA: 'NANTI BISA KEBALIK LAGI'", "INCOME NAIK LAGI"],
      why: "Lo menganggap kelonggaran sebagai izin, bukan sebagai penyangga. Jadi setiap kenaikan income diterjemahkan jadi kenaikan gaya hidup — dan siklusnya kembali ke titik nol.",
      blind_spot: "Lo mengira masalahnya adalah penghasilan yang kurang. Tapi dari pola jawaban lo, saat uang masuk, lo menghabiskannya lebih cepat daripada membangun penyangga.",
      breaking_point: "Saat income naik, jangan naikkan gaya hidup di bulan pertama. Kunci selisihnya dulu selama 60 hari.",
      new_old: "Kalau ada uang, berarti boleh dipakai.",
      new_new: "Uang lebih = penyangga, bukan izin untuk longgar.",
    },
    reward_spender: {
      name: "THE REWARD SPENDER",
      desc: "Lo pakai belanja sebagai hadiah setelah tekanan.",
      lines: [
        "Lo mengelola tekanan dengan cara menghadiahi diri sendiri.",
        "Masalahnya, 'hadiah' itu justru yang menambah tekanan berikutnya.",
        "Lo capek, lalu belanja. Lalu saldo bikin lo makin capek.",
      ],
      loop_short: ["TRIGGER: STRES", "BERTAHAN", "'GUE PANTAS'", "BELANJA", "BERSALAH", "STRES LAGI", "REPEAT"],
      loop_full: ["STRES / CAPEK", "MENAHAN DIRI", "'GUE PANTAS INI'", "BELANJA / KONSUMSI", "SENANG SEBENTAR", "BERSALAH", "PERCAYA: 'BELANJA = SELF-CARE'", "STRES LAGI"],
      why: "Lo memakai konsumsi sebagai pelampiasan emosi. Itu memberi lega sesaat, tapi menumpuk beban finansial yang kemudian jadi sumber stres baru — dan lo kembali butuh 'hadiah'.",
      blind_spot: "Lo mengira ini tentang 'menghargai diri'. Tapi dari pola jawaban lo, konsumsi lo naik tepat setelah momen stres, bukan setelah pencapaian.",
      breaking_point: "Ganti reward-nya. Sesuatu yang menenangkan tapi tidak menghabiskan saldo: jalan kaki, tidur cukup, kontak orang terdekat.",
      new_old: "Gue capek, gue pantas beli ini.",
      new_new: "Gue capek, gue pantas istirahat — dengan cara yang tidak merusak keuangan gue.",
    },
    firefighter: {
      name: "THE FIREFIGHTER",
      desc: "Lo memadamkan api setelah kebakaran, bukan pasang alarm.",
      lines: [
        "Lo lebih sering menyelesaikan masalah setelah terjadi.",
        "Bukan karena malas — tapi karena lo tidak membangun sistem pencegahan.",
        "Ketenangan lo datang setelah krisis, bukan karena krisis dicegah.",
      ],
      loop_short: ["TRIGGER: KRISIS", "PANIK", "TAMBAL SULAM", "LEGA", "ABAIKAN", "KRISIS LAGI", "REPEAT"],
      loop_full: ["KRISIS DATANG", "PANIK", "TAMBAL SULAM", "LEGA SEBENTAR", "TIDAK ADA SISTEM", "KRISIS DATANG LAGI", "PERCAYA: 'NANTI GUE URUS'", "KRISIS BARU"],
      why: "Lo bereaksi terhadap masalah, bukan mencegahnya. Sistem terasa 'membosankan', jadi lo menundanya sampai jadi darurat — lalu lo jadi pahlawan pemadam kebakaran sendiri.",
      blind_spot: "Lo mengira lo 'gak bisa' disiplin. Tapi dari pola jawaban lo, lo cenderung baru bertindak ketika rasa sakitnya sudah tak tertahankan.",
      breaking_point: "Satu jam seminggu untuk cek keuangan — sebelum jadi darurat. Itu titik putusnya.",
      new_old: "Gue urus nanti kalau sudah kelihatan masalahnya.",
      new_new: "Gue urus sebelum jadi masalah, walau terasa membosankan.",
    },
    scarcity: {
      name: "THE SCARCITY SURVIVOR",
      desc: "Keputusan finansial lo digerakkan rasa takut kehilangan.",
      lines: [
        "Ada rasa takut yang cukup kuat di balik keputusan finansial lo.",
        "Lo menggenggam erat karena takut kehilangan — dan itu ada harganya.",
        "Aman terasa menenangkan, tapi kadang 'aman' itu yang bikin lo stuck.",
      ],
      loop_short: ["TRIGGER: KETAKUTAN", "MENGGENGGAM ERAT", "MELEWATKAN PELUANG", "'AMAN TAPI STUCK'", "TAKUT LAGI", "REPEAT"],
      loop_full: ["RASA TAKUT KEHILANGAN", "MENGGENGGAM ERAT", "HINDARI RISIKO", "MELEWATKAN PELUANG", "'AMAN TAPI STUCK'", "TAKUT MAKIN BESAR", "PERCAYA: 'GUE GAK MAMPU KEHILANGAN'", "TAKUT LAGI"],
      why: "Keputusan lo digerakkan rasa takut kehilangan keamanan, bukan oleh peluang. Menahan diri memang terasa aman, tapi terlalu erat menggenggam juga punya biaya yang tak terlihat.",
      blind_spot: "Lo mengira menahan = aman. Tapi dari pola jawaban lo, 'aman' itu sering berarti tidak tumbuh — dan itu risiko yang tak pernah lo hitung.",
      breaking_point: "Pisahkan uang 'aman' dan uang 'berani'. Selama dana darurat aman, izinkan sebagian kecil untuk bergerak.",
      new_old: "Jangan ambil risiko, gue gak mampu kehilangan.",
      new_new: "Gue siapkan dana darurat dulu, lalu gue berani mengambil langkah.",
    },
  },

  career: {
    escape: {
      name: "THE ESCAPE ARTIST",
      desc: "Masalah muncul → pindah → mulai lagi → pola sama muncul lagi.",
      lines: [
        "Lo menyelesaikan masalah dengan cara pindah.",
        "Tapi pola yang lo tinggalkan ikut pindah bersama lo.",
        "Lokasinya baru. Ceritanya lama.",
      ],
      loop_short: ["TRIGGER: MASALAH MUNCUL", "FRUSTRASI", "BERHENTI / PINDAH", "MULAI BARU", "MASALAH SAMA MUNCUL", "REPEAT"],
      loop_full: ["MASALAH MUNCUL", "FRUSTRASI", "INGIN KABUR", "RESIGN / PINDAH", "FRESH START", "MASALAH SAMA MUNCUL LAGI", "PERCAYA: 'PINDAH = BERES'", "MASALAH BARU"],
      why: "Lo pindah untuk kabur, bukan untuk tumbuh. Jadi masalah yang sebenarnya ikut terbawa — karena akarnya bukan di tempat, tapi di cara lo merespons.",
      blind_spot: "Lo mengira tempat yang salah. Tapi dari pola jawaban lo, tanda-tanda masalah muncul di tempat baru dengan bentuk yang sama persis.",
      breaking_point: "Sebelum resign, tulis satu hal yang bikin lo mau kabur. Coba perbaiki hal itu di tempat sekarang dulu.",
      new_old: "Pindah = mulai dari nol, bersih.",
      new_new: "Pindah = membawa diri yang sama. Gue beresin akarnya dulu.",
    },
    almost_winner: {
      name: "THE ALMOST WINNER",
      desc: "Lo mendekati breakthrough, lalu ambil keputusan yang merusak momentum.",
      lines: [
        "Lo sering sampai di ambang keberhasilan — lalu sesuatu merusaknya.",
        "Dan 'sesuatu' itu biasanya keputusan lo sendiri.",
        "Lo mungkin lebih takut sukses daripada takut gagal.",
      ],
      loop_short: ["TRIGGER: PROGRES BAGUS", "'INI TERLALU BAGUS'", "SELF-SABOTAGE", "MUNDUR", "BANGUN LAGI", "REPEAT"],
      loop_full: ["PROGRES BAGUS", "'INI TERLALU BAGUS'", "CEMAS / GAK PANTAS", "KEPUTUSAN MERUSAK", "SETBACK", "BANGUN LAGI", "PERCAYA: 'GUE GAK LAYAK SUKSES'", "PROGRES BAGUS LAGI"],
      why: "Begitu momentum mulai bagus, muncul kecemasan 'ini tidak akan bertahan' atau 'gue gak pantas'. Kecemasan itu mendorong lo mengambil keputusan yang merusak momentum — untuk membenarkan rasa takut lo.",
      blind_spot: "Lo mengira lo 'selalu sial di ujung'. Tapi dari pola jawaban lo, kemunduran itu sering datang tepat setelah lo merasa semua berjalan terlalu mulus.",
      breaking_point: "Saat semua mulai jalan dan lo merasa 'gak pantas' — teruskan. Jangan sentuh tombol penghancur.",
      new_old: "Begitu mulai bagus, gue gugup dan merusaknya.",
      new_new: "Bagus itu normal, bukan ancaman. Gue biarkan momentum itu selesai.",
    },
    validation: {
      name: "THE VALIDATION SEEKER",
      desc: "Lo menggantungkan arah pada pengakuan orang lain.",
      lines: [
        "Arah karier lo sering ditentukan oleh suara orang lain.",
        "Lo bekerja untuk tepuk tangan, bukan untuk hasil.",
        "Itu sebabnya tak peduli seberapa banyak lo capai, rasanya tak pernah cukup.",
      ],
      loop_short: ["TRIGGER: TANPA PUJIAN", "RAGU", "OVERWORK / PLEASING", "LELAH", "TETAP TAK CUKUP", "REPEAT"],
      loop_full: ["BEKERJA", "MENUNGGU PUJIAN", "TANPA PUJIAN", "RAGU DIRI", "OVERWORK / PLEASING", "LELAH", "PERCAYA: 'NILAI GUE = PENGKUAN ORANG'", "BEKERJA LAGI"],
      why: "Lo mengukur keberhasilan dari pengakuan eksternal. Ketika tak ada pujian, lo menggandakan usaha untuk mencarinya — bukan untuk menyelesaikan pekerjaan yang benar.",
      blind_spot: "Lo mengira lo 'butuh feedback untuk berkembang'. Tapi dari pola jawaban lo, lo sering kebingungan justru saat tak ada yang memberi tahu lo harus bagaimana.",
      breaking_point: "Tetapkan satu ukuran sukses yang tidak butuh orang lain mengiyakan. Mulai dari sana.",
      new_old: "Gue butuh orang bilang ini bagus.",
      new_new: "Gue yang menentukan apakah ini cukup baik.",
    },
    reset: {
      name: "THE RESET BUTTON",
      desc: "Lo lebih suka mulai ulang daripada memperbaiki yang ada.",
      lines: [
        "Saat kacau, insting lo adalah membuang semuanya dan mulai dari nol.",
        "Mulai ulang terasa bersih — tapi lo kehilangan semua yang sudah lo bangun.",
        "Nol itu menenangkan. Tapi lo selalu mulai dari nol lagi.",
      ],
      loop_short: ["TRIGGER: SEMUA KACAU", "OVERWHELM", "'MULAI DARI NOL'", "BUANG PROGRES", "KACAU LAGI", "REPEAT"],
      loop_full: ["SITUASI KACAU", "OVERWHELM", "'MULAI DARI NOL'", "BUANG PROGRES", "LEGA SEBENTAR", "KACAU LAGI", "PERCAYA: 'GAGAL = BUANG SEMUA'", "SITUASI KACAU BARU"],
      why: "Mulai dari nol terasa lebih mudah daripada memperbaiki bagian yang rusak. Tapi setiap reset membuang momentum, dan lo akhirnya mengulang fase awal berkali-kali tanpa pernah lewat.",
      blind_spot: "Lo mengira 'kacau berarti harus ganti total'. Tapi dari pola jawaban lo, yang sering perlu diperbaiki cuma satu bagian kecil — bukan semuanya.",
      breaking_point: "Sebelum reset, coba perbaiki satu hal kecil dulu selama seminggu. Kalau masih gagal, baru evaluasi.",
      new_old: "Kalau kacau, buang semua, mulai lagi.",
      new_new: "Kalau kacau, perbaiki bagian yang kacau saja.",
    },
  },

  life: {
    chaos: {
      name: "THE CHAOS MAGNET",
      desc: "Lo berulang kali ambil keputusan yang menambah exposure ke kekacauan.",
      lines: [
        "Lo sering merasa 'hidup gue selalu berantakan'.",
        "Tapi ini bukan tentang menarik kesialan.",
        "Ini tentang keputusan yang lo ambil tepat saat hidup mulai terasa tenang.",
      ],
      loop_short: ["TRIGGER: BOSAN / TENANG", "CARI SERU", "AMBIL RISIKO", "KACAU", "LELAH", "BOSAN LAGI", "REPEAT"],
      loop_full: ["HIDUP TENANG / BOSAN", "MERASA HAMPA", "CARI SERU / RISIKO", "KEPUTUSAN KACAU", "DRAMA / KEKACAUAN", "LELAH", "PERCAYA: 'HIDUP GUE EMANG GITU'", "BOSAN LAGI"],
      why: "Ketenangan terasa membosankan, jadi lo menciptakan kegaduhan untuk merasa hidup. Masalahnya, kegaduhan itu menambah beban yang kemudian lo sebut 'sial'.",
      blind_spot: "Lo mengira nasib yang sedang bermain. Tapi dari pola jawaban lo, keputusan berisiko sering lo ambil justru ketika hidup sedang stabil dan tenang.",
      breaking_point: "Saat merasa 'hidup membosankan', jangan ciptakan drama. Cari tantangan yang aman dan terukur.",
      new_old: "Hidup gue selalu berantakan, itu nasib.",
      new_new: "Gue memilih ketenangan, dan mencari seru lewat tantangan yang sehat.",
    },
    self_sacrificer: {
      name: "THE SELF-SACRIFICER",
      desc: "Lo korbankan diri sampai burnout, lalu reset dan ulang.",
      lines: [
        "Lo menyebutnya 'pengertian' atau 'tanggung jawab'.",
        "Tapi lo terus mengorbankan kebutuhan sendiri sampai habis.",
        "Lalu lo rebah, pulih, dan melakukannya lagi dari awal.",
      ],
      loop_short: ["TRIGGER: ADA YANG MINTA", "IYA-IN SEMUA", "ABAIKAN DIRI", "BURNOUT", "REBAH / PULIH", "IYA-IN LAGI", "REPEAT"],
      loop_full: ["ADA YANG BUTUH", "SULIT BILANG TIDAK", "MENGABAIKAN DIRI", "MENUMPUK", "BURNOUT", "REBAH / PULIH", "PERCAYA: 'GUE HARUS SELALU ADA'", "ADA YANG BUTUH LAGI"],
      why: "Lo menaruh kebutuhan orang lain di atas kebutuhan sendiri — bukan karena lo kuat, tapi karena lo takut mengecewakan. Sampai akhirnya lo kehabisan, lalu pulih, dan mengulang siklus yang sama.",
      blind_spot: "Lo mengira ini tentang 'menjadi orang baik'. Tapi dari pola jawaban lo, lo jarang mengiyakan diri sendiri — dan itu yang membuat lo terus kehabisan.",
      breaking_point: "Bilang 'tidak' sekali hari ini — untuk hal kecil. Itu titik awal memutus siklus.",
      new_old: "Gue harus selalu ada buat orang lain.",
      new_new: "Gue ada untuk diri gue dulu, baru bisa ada untuk orang lain.",
    },
    pattern_repeater: {
      name: "THE PATTERN REPEATER",
      desc: "Lo sadar masalahnya, tapi tetap pakai respons lama.",
      lines: [
        "Lo sebenarnya sudah tahu apa yang salah.",
        "Tapi tahu saja tidak mengubah apa pun.",
        "Lo merespons masalah yang sama dengan cara yang sama — dan berharap hasilnya beda.",
      ],
      loop_short: ["TRIGGER: MASALAH SAMA", "'TAU TAPI...'", "RESPONS LAMA", "HASIL SAMA", "FRUSTRASI", "REPEAT"],
      loop_full: ["MASALAH SAMA MUNCUL", "SADAR POLANYA", "'TAU TAPI...'", "RESPONS LAMA", "HASIL SAMA", "FRUSTRASI", "PERCAYA: 'GUE EMANG GINI'", "MASALAH MUNCUL LAGI"],
      why: "Insight tanpa perubahan hanyalah ilusi progres. Lo menyadari polanya, tapi ketika masalah muncul lagi, lo otomatis memakai respons lama yang sudah terlatih.",
      blind_spot: "Lo mengira 'sadar' itu cukup. Tapi dari pola jawaban lo, antara 'tahu' dan 'berhenti' ada jarak yang belum pernah lo lewati.",
      breaking_point: "Pilih satu respons lama. Ganti dengan respons baru hari ini — bukan besok. Sekali saja dulu.",
      new_old: "Gue sudah tahu kok, tapi gue begini terus.",
      new_new: "Tahu → berhenti → ganti. Satu respons lama, satu hari.",
    },
  },
};

/* ---------- QUESTION BANK V0.1 ----------
   Setiap option: { t: teks, s: { patternKey: weight } }
   area: 'love' | 'money' | 'career' | 'life'                          */

const QUESTIONS = {

  love: [
    { text: "Seseorang yang lo suka tiba-tiba mulai membalas chat lebih lama dan lebih dingin. Reaksi pertama lo biasanya…", options: [
      { t: "Ngejar: chat lebih sering, cari kepastian.", s: { chaser: 2 } },
      { t: "Mundur dulu, kasih ruang (tapi di dalam hati panik).", s: { avoider: 2, chaser: 1 } },
      { t: "Mikir 'dia lagi sibuk', lanjutin hidup.", s: {} },
      { t: "Langsung cari tahu ada yang salah apa.", s: { chaser: 2 } },
      { t: "Gak peduli, gue ikut jadi dingin.", s: { avoider: 1 } },
    ]},
    { text: "Pasangan atau teman dekat lo lagi punya masalah berat. Lo merasa paling…", options: [
      { t: "Dibutuhkan — dan itu terasa enak.", s: { rescuer: 2 } },
      { t: "Mau bantu, tapi takut keterlaluan.", s: { rescuer: 1 } },
      { t: "Kasihan, tapi gak mau ikut tenggelam.", s: {} },
      { t: "Capek, kok gue lagi yang harus.", s: {} },
    ]},
    { text: "Di awal hubungan atau pertemanan baru, lo biasanya…", options: [
      { t: "Kasih 100% langsung — waktu, energi, perhatian.", s: { overgiver: 2 } },
      { t: "Kasih secukupnya, lihat dulu.", s: {} },
      { t: "Tahan-tahan biar gak kelihatan butuh.", s: { avoider: 1 } },
      { t: "Nunggu dia yang mulai duluan.", s: {} },
    ]},
    { text: "Ketika mulai merasa dekat dan nyaman dengan seseorang, lo…", options: [
      { t: "Mulai cari alasan buat mundur.", s: { avoider: 2 } },
      { t: "Makin dekat, makin sayang.", s: {} },
      { t: "Takut ini bakal rusak.", s: { repeater: 1 } },
      { t: "Santai aja.", s: {} },
    ]},
    { text: "Hubungan lo sebelumnya biasanya berakhir karena…", options: [
      { t: "Dia yang pergi.", s: { chaser: 1, repeater: 1 } },
      { t: "Gue yang pergi.", s: { avoider: 1, repeater: 1 } },
      { t: "Habis gue kasih banyak, tapi gak dibales.", s: { overgiver: 2 } },
      { t: "Orangnya selalu 'kayak gitu'.", s: { repeater: 2 } },
    ]},
    { text: "Kalimat mana yang paling sering lo ucapin (atau pikirin)?", options: [
      { t: "\"Kenapa gue selalu ketemu orang yang salah?\"", s: { repeater: 2 } },
      { t: "\"Gue terlalu baik sama orang.\"", s: { overgiver: 1, rescuer: 1 } },
      { t: "\"Begitu gue care, dia malah pergi.\"", s: { chaser: 2 } },
      { t: "\"Gue gak pernah bisa lepas sepenuhnya.\"", s: { avoider: 1 } },
    ]},
    { text: "Saat butuh sesuatu dari pasangan, lo cenderung…", options: [
      { t: "Gak minta, berharap dia sadar sendiri.", s: { overgiver: 1 } },
      { t: "Minta langsung, jelas.", s: {} },
      { t: "Nunggu sampai gak tahan baru ngomong.", s: { avoider: 1, overgiver: 1 } },
      { t: "Bilang 'gak apa-apa' padahal gak.", s: { overgiver: 2 } },
    ]},
    { text: "Kalau dia gak bales pesan berjam-jam, di kepala lo…", options: [
      { t: "\"Dia pasti udah gak suka gue.\"", s: { chaser: 2 } },
      { t: "\"Gue salah apa ya?\"", s: { chaser: 1, repeater: 1 } },
      { t: "\"Santai, orang bisa sibuk.\"", s: {} },
      { t: "\"Fine, gue juga gak bales.\"", s: { avoider: 1 } },
    ]},
    { text: "Peran lo di sebagian besar hubungan biasanya…", options: [
      { t: "Yang menyelamatkan / memperbaiki.", s: { rescuer: 2 } },
      { t: "Yang lebih banyak memberi.", s: { overgiver: 2 } },
      { t: "Yang menjaga jarak.", s: { avoider: 2 } },
      { t: "Yang mengejar.", s: { chaser: 2 } },
    ]},
    { text: "Ketika tanda-tanda gak sehat mulai muncul, lo biasanya…", options: [
      { t: "Bertahan lebih lama.", s: { chaser: 1, repeater: 2 } },
      { t: "Langsung cut off.", s: { avoider: 1 } },
      { t: "Meyakinkan diri dia bisa berubah.", s: { rescuer: 2 } },
      { t: "Bingung, tapi tetap jalan.", s: { repeater: 1 } },
    ]},
    { text: "Orang yang lo pilih biasanya…", options: [
      { t: "Perlu diselamatkan.", s: { rescuer: 2 } },
      { t: "Susah didapet.", s: { chaser: 2 } },
      { t: "Mirip-mirip orang sebelumnya.", s: { repeater: 2 } },
      { t: "Aman dan gak nuntut.", s: { avoider: 1 } },
    ]},
    { text: "Setelah berkorban banyak dan gak dihargai, lo…", options: [
      { t: "Marah tapi diam.", s: { overgiver: 2 } },
      { t: "Makin berusaha.", s: { chaser: 1, rescuer: 1 } },
      { t: "Mundur pelan-pelan.", s: { avoider: 1 } },
      { t: "Ngungkit-ngungkit.", s: { overgiver: 1 } },
    ]},
    { text: "Hal yang paling lo takutin dalam hubungan…", options: [
      { t: "Ditinggal.", s: { chaser: 2 } },
      { t: "Kehilangan diri sendiri.", s: { avoider: 1 } },
      { t: "Gak dihargai.", s: { overgiver: 1 } },
      { t: "Mengulang kesalahan yang sama.", s: { repeater: 2 } },
    ]},
    { text: "Kalau orang bilang 'lo terlalu baik', lo merasa…", options: [
      { t: "Dihargai.", s: { overgiver: 1, rescuer: 1 } },
      { t: "Itu sebenarnya sebuah masalah.", s: {} },
      { t: "Gak, gue cuma normal.", s: {} },
      { t: "Iya, dan itu bikin gue capek.", s: { overgiver: 1 } },
    ]},
  ],

  money: [
    { text: "Income lo tiba-tiba naik cukup besar. Yang biasanya berubah lebih dulu…", options: [
      { t: "Gaya hidup naik.", s: { debt_cycler: 2 } },
      { t: "Gue belanja 'reward' buat diri sendiri.", s: { reward_spender: 2 } },
      { t: "Gue simpan / tabung dulu.", s: {} },
      { t: "Gue bayar utang.", s: {} },
    ]},
    { text: "Setelah seminggu kerja keras dan stres, lo cenderung…", options: [
      { t: "Belanja barang yang 'gue pantas'.", s: { reward_spender: 2 } },
      { t: "Makan enak / jajan yang mahal.", s: { reward_spender: 1 } },
      { t: "Istirahat aja, gak keluar duit.", s: {} },
      { t: "Nabung biar merasa aman.", s: { scarcity: 1 } },
    ]},
    { text: "Ketika tagihan atau masalah finansial muncul, lo biasanya…", options: [
      { t: "Urus dadakan pas udah parah.", s: { firefighter: 2 } },
      { t: "Panik dulu, baru cari jalan.", s: { firefighter: 1 } },
      { t: "Udah ada sistem dari awal.", s: {} },
      { t: "Hindari, gak mau lihat.", s: { firefighter: 2 } },
    ]},
    { text: "Punya uang nganggur, pikiran lo…", options: [
      { t: "Harus dipake sebelum hilang.", s: { debt_cycler: 1 } },
      { t: "Harus disimpen erat-erat.", s: { scarcity: 2 } },
      { t: "Harus diputer / diinvestasikan.", s: {} },
      { t: "Bingung, takut salah.", s: { scarcity: 1 } },
    ]},
    { text: "Soal investasi atau peluang, lo biasanya…", options: [
      { t: "Takut, jadi gak ambil.", s: { scarcity: 2 } },
      { t: "Ambil gegabah pas lagi semangat.", s: { debt_cycler: 1 } },
      { t: "Hitung dulu matang-matang.", s: {} },
      { t: "Ikut-ikutan orang.", s: {} },
    ]},
    { text: "Ungkapan yang paling ngegambarin lo soal uang…", options: [
      { t: "\"Hidup cuma sekali.\"", s: { reward_spender: 1, debt_cycler: 1 } },
      { t: "\"Gue gak boleh sampe gak punya.\"", s: { scarcity: 2 } },
      { t: "\"Nanti gue urus.\"", s: { firefighter: 2 } },
      { t: "\"Kalau ada, ya gue pake.\"", s: { debt_cycler: 2 } },
    ]},
    { text: "Setelah berhasil lunasi utang / beresin masalah, yang terjadi…", options: [
      { t: "Longgar, terus kebablasan lagi.", s: { debt_cycler: 2 } },
      { t: "Gue rayain dengan belanja.", s: { reward_spender: 1 } },
      { t: "Gue bangun penyangga biar gak kejadian lagi.", s: {} },
      { t: "Takut banget kejadian lagi, jadi gue kunci semua.", s: { scarcity: 1 } },
    ]},
    { text: "Kalau ada promo atau diskon, lo…", options: [
      { t: "Beli walau gak butuh.", s: { debt_cycler: 1, reward_spender: 1 } },
      { t: "Mikir 'hemat' padahal keluar duit.", s: { debt_cycler: 1 } },
      { t: "Butuh baru beli.", s: {} },
      { t: "Takut kelewatan.", s: { scarcity: 1 } },
    ]},
    { text: "Budget bulanan lo…", options: [
      { t: "Gak ada, mengalir aja.", s: { firefighter: 2 } },
      { t: "Ada tapi jarang diturutin.", s: { firefighter: 1, reward_spender: 1 } },
      { t: "Ketat dan bikin tegang.", s: { scarcity: 2 } },
      { t: "Ada dan berjalan.", s: {} },
    ]},
    { text: "Hal yang bikin lo paling cemas soal uang…", options: [
      { t: "Tiba-tiba gak punya.", s: { scarcity: 2 } },
      { t: "Gak bisa menikmati hidup.", s: { reward_spender: 1 } },
      { t: "Utang numpuk lagi.", s: { debt_cycler: 2 } },
      { t: "Masalah datang mendadak.", s: { firefighter: 1 } },
    ]},
  ],

  career: [
    { text: "Ketika kerjaan mulai jalan bagus dan tanggung jawab naik, respons lo…", options: [
      { t: "Deg-degan, mulai ngerasa gak pantes.", s: { almost_winner: 2 } },
      { t: "Tambah semangat, gas terus.", s: {} },
      { t: "Mulai cari alasan kenapa ini bakal gagal.", s: { almost_winner: 2 } },
      { t: "Nunggu pengakuan dari atasan.", s: { validation: 1 } },
    ]},
    { text: "Saat muncul masalah besar di kerjaan, lo cenderung…", options: [
      { t: "Langsung mikir pindah.", s: { escape: 2 } },
      { t: "Hadapi sampai selesai.", s: {} },
      { t: "Buang semua dan mulai dari nol.", s: { reset: 2 } },
      { t: "Ngarep ada yang muji atau menolong.", s: { validation: 1 } },
    ]},
    { text: "Kepuasan kerja lo paling ditentukan oleh…", options: [
      { t: "Pujian dan pengakuan orang.", s: { validation: 2 } },
      { t: "Hasil yang gue capai sendiri.", s: {} },
      { t: "Gaji dan rasa aman.", s: {} },
      { t: "Apakah orang lain senang sama gue.", s: { validation: 1 } },
    ]},
    { text: "Lo udah deket banget sama promosi / hasil besar, lalu…", options: [
      { t: "Gue bikin satu keputusan yang ngerusak.", s: { almost_winner: 2 } },
      { t: "Gue makin fokus.", s: {} },
      { t: "Gue overthinking sampai salah langkah.", s: { almost_winner: 1 } },
      { t: "Gue tanya semua orang, jadi bingung.", s: { validation: 1 } },
    ]},
    { text: "Riwayat pindah kerja / berhenti gue biasanya…", options: [
      { t: "Sering, dan alasannya mirip-mirip.", s: { escape: 2, reset: 1 } },
      { t: "Karena gue butuh 'awal yang baru'.", s: { reset: 2 } },
      { t: "Sesekali, dengan alasan jelas.", s: {} },
      { t: "Belum pernah.", s: {} },
    ]},
    { text: "Saat kerjaan kacau dan gak rapi, lo…", options: [
      { t: "Pingin buang semua, mulai lagi.", s: { reset: 2 } },
      { t: "Beresin sedikit-sedikit.", s: {} },
      { t: "Kabur ke hal baru.", s: { escape: 1 } },
      { t: "Nunggu dipuji dulu baru lanjut.", s: { validation: 1 } },
    ]},
    { text: "Kalau atasan / tim gak kasih feedback, lo merasa…", options: [
      { t: "Gak yakin kerjaan gue bener.", s: { validation: 2 } },
      { t: "Bagus, berarti gak ada masalah.", s: {} },
      { t: "Gue harus cari validasi di tempat lain.", s: { validation: 2 } },
      { t: "Santai aja.", s: {} },
    ]},
    { text: "Momentum lagi bagus, terus tiba-tiba lo…", options: [
      { t: "Merusaknya sendiri (nunda, konflik, resign).", s: { almost_winner: 2 } },
      { t: "Nikmatin dan maksimalin.", s: {} },
      { t: "Takut, terus melambat.", s: { almost_winner: 1 } },
      { t: "Nanya orang 'gue lanjut gak ya?'", s: { validation: 1 } },
    ]},
    { text: "Alasan lo biasanya resign…", options: [
      { t: "Masalah yang sama kayak tempat lama.", s: { escape: 2 } },
      { t: "Gue pengen 'reset' hidup.", s: { reset: 2 } },
      { t: "Mau pindah biar gak ngerasa terjebak.", s: { escape: 1 } },
      { t: "Alasan konkret dan sudah matang.", s: {} },
    ]},
    { text: "Yang paling bikin lo takut soal karier…", options: [
      { t: "Sukses yang bikin gue gak sanggup.", s: { almost_winner: 2 } },
      { t: "Tidak diakui.", s: { validation: 2 } },
      { t: "Terjebak di tempat yang sama.", s: { escape: 1, reset: 1 } },
      { t: "Gak stabil.", s: {} },
    ]},
  ],

  life: [
    { text: "Ketika masalah yang sama muncul untuk ketiga kalinya, lo mikir…", options: [
      { t: "\"Kenapa gue lagi?\"", s: { chaos: 1, pattern_repeater: 1 } },
      { t: "\"Gue pasti lagi melakukan hal yang sama.\"", s: { pattern_repeater: 2 } },
      { t: "\"Biarin, nanti juga lewat.\"", s: {} },
      { t: "\"Ini nasib gue.\"", s: { chaos: 2 } },
    ]},
    { text: "Soal membantu orang lain, lo biasanya…", options: [
      { t: "Iya-in semua permintaan.", s: { self_sacrificer: 2 } },
      { t: "Bantu kalau gue mampu.", s: {} },
      { t: "Ngorbanin diri sampai capek.", s: { self_sacrificer: 2 } },
      { t: "Tolak kalau gak sanggup.", s: {} },
    ]},
    { text: "Kalau hidup terasa datar atau bosan, lo cenderung…", options: [
      { t: "Cari drama / risiko biar seru.", s: { chaos: 2 } },
      { t: "Terima dan nikmatin ketenangan.", s: {} },
      { t: "Bikin masalah baru tanpa sadar.", s: { chaos: 1 } },
      { t: "Sibukin diri sampai lelah.", s: { self_sacrificer: 1 } },
    ]},
    { text: "Gue sering menggambarkan hidup gue sebagai…", options: [
      { t: "\"Berantakan terus.\"", s: { chaos: 2 } },
      { t: "\"Gue capek ngurusin orang.\"", s: { self_sacrificer: 1 } },
      { t: "\"Kayak muter di tempat.\"", s: { pattern_repeater: 2 } },
      { t: "\"Biasa aja.\"", s: {} },
    ]},
    { text: "Saat capek atau burnout, yang biasanya gue lakukan…", options: [
      { t: "Istirahat, terus balik ke pola lama.", s: { self_sacrificer: 1, pattern_repeater: 1 } },
      { t: "Jadi makin kacau.", s: { chaos: 1 } },
      { t: "Reset total, mulai dari nol.", s: {} },
      { t: "Refleksi dan ubah cara.", s: {} },
    ]},
    { text: "Ketika gue sudah TAHU pola buruk gue, gue biasanya…", options: [
      { t: "Tetap ngulang.", s: { pattern_repeater: 2 } },
      { t: "Sadar tapi gak bisa berhenti.", s: { pattern_repeater: 2 } },
      { t: "Berhenti pelan-pelan.", s: {} },
      { t: "Lupa lagi.", s: { pattern_repeater: 1 } },
    ]},
    { text: "Keputusan yang bikin hidup makin ribet biasanya gue ambil karena…", options: [
      { t: "Bosen.", s: { chaos: 2 } },
      { t: "Gak enakan nolak.", s: { self_sacrificer: 2 } },
      { t: "Takut kehilangan.", s: { self_sacrificer: 1 } },
      { t: "Gue gak mikir panjang.", s: { chaos: 1 } },
    ]},
    { text: "Prioritas gue di sebagian besar waktu…", options: [
      { t: "Orang lain dulu.", s: { self_sacrificer: 2 } },
      { t: "Diri sendiri dulu.", s: {} },
      { t: "Bikin hidup seru.", s: { chaos: 1 } },
      { t: "Ngulang rutinitas yang sama.", s: { pattern_repeater: 1 } },
    ]},
    { text: "Kalau ditanya 'kenapa lo masih begini-begini aja', jawaban gue…", options: [
      { t: "\"Gue juga gak tau.\"", s: { chaos: 1 } },
      { t: "\"Gue udah nyoba, tapi balik lagi.\"", s: { pattern_repeater: 2 } },
      { t: "\"Beban gue banyak, ngurusin orang.\"", s: { self_sacrificer: 1 } },
      { t: "\"Gue fine kok.\"", s: {} },
    ]},
    { text: "Perasaan yang paling sering lo rasain soal hidup…", options: [
      { t: "Kecapekan.", s: { self_sacrificer: 2 } },
      { t: "Bingung kenapa begini terus.", s: { pattern_repeater: 2 } },
      { t: "Hidup gue kacau tapi seru.", s: { chaos: 2 } },
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
  "Gak ada yang benar atau salah.",
  "Don't overthink it.",
];
