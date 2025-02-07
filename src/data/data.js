const LOGO_BEM =
  "https://res.cloudinary.com/ddlo3v9hx/image/upload/v1738910400/Logo_SGE_for_Web_yieqge.svg";

export const oprecInfo = [ 
  // Opreg Mawapres 2024
  {

    id: "2024-OpregMawapres", // id oprec formatnya tahun-oprec
    name: "Opreg Mawapres 2024", // nama buat di tentang
    title: [
      "Open Registration", // line 1
      "Mawapres FILKOM", // line 2
    ],
    description: [
      "Mawapres FILKOM merupakan kegiatan tahunan yang bertujuan untuk mencari, memilih, dan memberikan penghargaan kepada mahasiswa FILKOM yang berprestasi, baik di bidang akademik dan non-akademik. Kegiatan Mawapres ini dilakukan secara terbuka dan berdasarkan kriteria yang ditetapkan oleh Fakultas Ilmu Komputer Universitas Brawijaya.", //paragraf 1
    ],
    logo: LOGO_BEM, // gambar logo di home, login, dan robot image
    landingImage: `https://res.cloudinary.com/djpkvtoql/image/upload/v1727707915/mawapres.jpg`,
    openDate: new Date("2024-10-07T15:00:00.999+07:00"),
    closeDate: new Date("2024-10-16T00:00:00.999+07:00"),
    announceDate: new Date("2024-10-16T19:00:00.999+07:00"),
    onlyFor: [22, 23], // Angkatan berapa yg diterima
    extends: true, //Timeline Extends atau tidak
    timeline: [
      {
        date: "7 - 12 Oktober 2024",
        description: "Open Registration",
      },
      {
        date: "16 Oktober 2024",
        description: "Close Registration",
      },
      // nanti yang close diatas ini aja yang dikomen ketika extend
      // {
      //  date: "13 Oktober 2024",
      //  description: "Extend Registration",
      // },
      // {
      //  date: "16 Oktober 2024",
      //  description: "Close Registration",
      // },
      {
        date: "16 Oktober 2024",
        description: "Pengumuman 📢",
      },
    ], //semisal extends timelinenya diubah juga

    quotes:
      "Success isn't just about what you accomplish in your life, it's about what you inspire others to do.", //kalo gaada quotes bisa dikosongkan
    options: [
      " MawaPres",
    ], //pilihan divisi
    formatDrive: "NamaLengkap_NIM", //format google drive yang tampil di form pendaftaran
    alur: [
      {
        description: "1. Mahasiswa membuka link pendaftaran yang telah disediakan oleh BEM FILKOM (website ini)",
      },
      {
        description:
          "2. Mahasiswa menyiapkan berkas pendukung. Berkas dalam bentuk softcopy, dan dimasukkan dalam google drive masing-masing dan bersifat publik.",
        titleLink: "Download berkas soft file (email UB)",
        link: "https://drive.google.com/drive/folders/120_qEjapFd1s-iVeCj1srGq3foYIyp9D?usp=sharing",
      },
      {
        description:
          "3.  Mahasiswa menyerahkan berkas pendukung melalui link pendaftaran dengan batas waktu yang telah ditentukan.",
      },
      {
        description:
          "4. Mahasiswa menyiapkan diri untuk mengikuti rangkaian Mawapres.",
      },
    ], //isi dari alur pendaftaran
    formFields: [
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
      },
      {
        name: "ipk", //name nya disesuain sama nama kolom yang di supabase
        questions: "berapa IPK mu?", //pertanyaan yang ditampilin
        placeholder: "cth: 3.9",
      },
      {
        name: "no_hp", //name nya disesuain sama nama kolom yang di supabase
        questions: "nomor hp kamu dong?", //pertanyaan yang ditampilin
        placeholder: "cth: 081234567890",
      },
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
      },
      {
        name: "id_line", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: jalalludin87",
      },
      {
        name: "alamat", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Timika, Papua",
      },
      {
        name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
        placeholder: "cth: https://drive.google.com/xxxxx",
        pattern: "/(drive.google.com)/", //pattern regex kalo perlu
      },
    ], //isi dari form field chat
    api: {
      auth: "https://bemfilkom-rest.vercel.app/auth",
      check: "https://bemfilkom-rest.vercel.app/check/2024/OpregMawapres", // Check if registrant is already registered
      register:
        "https://bemfilkom-rest.vercel.app/register/2024/OpregMawapres", // Input registrant data
      announce:
        "https://bemfilkom-rest.vercel.app/announce/2024/OpregMawapres", // Check registrant's acceptance status
    },
    afterMessage: [
      "Terima kasih!",
      "Selamat kamu telah berhasil terdaftar sebagai calon peserta MAWAPRES FILKOM 2024. 🥰",
    ],
    closedMessage: [
      "Maaf!",
      "Pendaftaran sudah ditutup 🙏",
      "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
    ],
    acceptMessage: [
      "Selamat!!!", // !!JANGAN DIGANTI
      "SELAMAT KAMU MENJADI PESERTA MAWAPRES FILKOM 2024 👑 🥳\n\n",
      "Untuk selanjutnya, silahkan untuk bergabung grub pada link berikut: \n <a target='_blank' href='https://line.me/ti/g/jGkXJCnGip' class='text-blue-800 font-bold'>Klik disini</a> !!! \n",
    ],
    rejectMessage: [
      "Mohon maaf", // !!JANGAN DIGANTI
      "kamu belum lolos tahap seleksi kami.",
      // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
    ],
  },

  // Oprec Staff Ahli BEM FILKOM UB 2024
  {
    id: "2024-OprecStaffAhli", // id oprec formatnya tahun-oprec
    name: "Oprec Staff Ahli", // nama buat di tentang
    title: [
      "Open Recruitment", // line 1
      "Staf Ahli BEM FILKOM 2024", // line 2
    ],
    description: [
      "Open Recruitment Staff Ahli BEM FILKOM 2024 merupakan salah satu program kerja BEM FILKOM untuk menarik anggota staff ahli BEM FILKOM. Program Kerja ini dapat didaftari oleh seluruh KBMFILKOM yang TELAH LULUS Startup Academy FILKOM.", //paragraf 1
    ],
    logo: LOGO_BEM, // gambar logo di home, login, dan robot image
    landingImage: `https://res.cloudinary.com/dnyrrcacd/image/upload/v1707910169/OPREC%202024/staff_ahli_wn6vut.jpg`,
    openDate: new Date("2024-02-15T00:00:00.000+07:00"),
    // closeDate: new Date("2024-02-17T23:59:59.999+07:00"),
    //  * *FOR EXTEND
    closeDate: new Date("2024-02-18T23:59:59.999+07:00"),
    announceDate: new Date("2024-02-25T20:15:00.000+07:00"),
    onlyFor: [22, 23], // Angkatan berapa yg diterima
    extends: true, //Timeline Extends atau tidak
    timeline: [
      // {
      //   date: "15 - 17 Februari 2024",
      //   description: "Pendaftaran Online 📝",
      // },
      // {
      //   date: "19 Februari 2024",
      //   description: "Focus Group Discussion 💬",
      // },
      // { date: "20 - 24 Februari 2024", description: "Screening 👨‍💻" },

      // { date: "25 Februari 2024", description: "Pengumuman 📢" },
      // ], //semisal extends timelinenya diubah juga

      /**
       * *TIMELINE --EXTEND--
       */

      {
        date: "17 - 18 Februari 2024",
        description: "Open Recruitment 📝",
      },
      {
        date: "19 Februari 2024",
        description: "Focus Group Discussion 💬",
      },
      { date: "20 - 24 Februari 2024", description: "Screening 👨‍💻" },
      { date: "25 Februari 2024", description: "Pengumuman 📢" },
    ], //semisal extends timelinenya diubah juga

    quotes:
      "Don't block your potential by limiting expectations. Dare to try and see what you can.", //kalo gaada quotes bisa dikosongkan
    options: [
      " KEMENTERIAN PENGEMBANGAN SUMBER DAYA MANUSIA",
      " KEMENTERIAN MINAT DAN BAKAT",
      " KEMENTERIAN EKONOMI KREATIF",
      " KEMENTERIAN ADVOKESMA",
      " KEMENTERIAN KASTRAT",
      " KEMENTERIAN SOSLING",
      " BIRO MEDINKRAF",
      " BIRO ADKEU",
      " BIRO PIT",
    ], //pilihan divisi
    formatDrive: "Pilihan1_Pilihan2_NamaLengkap", //format google drive yang tampil di form pendaftaran
    alur: [
      {
        description: "1. Peserta melakukan pendaftaran di Website BEM FILKOM",
      },
      {
        description:
          "a. Peserta membuka link pendaftaran yang telah disediakan oleh BEM FILKOM",
      },
      {
        description:
          "b. Peserta mengunduh dan mengisi berkas pendaftaran (dalam bentuk soft file).",
        titleLink: "Download berkas soft file (email UB)",
        link: "http://tinyurl.com/BerkasPendaftaranStaffAhli2024",
      },
      {
        description:
          "c. Peserta membaca Buku Panduan Open Recruitment, serta Peraturan Umum dan Kode Etik.",
      },
      {
        description:
          "d. Peserta mengunduh twibbon yang telah disediakan lalu mengunggah foto diri melalui media sosial Instagram pribadi, serta tag akun Instagram @bemfilkomub (sesuai ketentuan twibbon).",
      },
      {
        description:
          "e. Peserta mengunggah berkas pendaftaran ke dalam Google Drive pribadi",

        note: "(akses link folder Google Drive wajib public/shareable)",
      },
      {
        description:
          "f. Peserta menyetujui surat pernyataan komitmen yang telah diisi serta menyetujui Peraturan Umum dan Kode Etik BEM FILKOM 2024.",
      },
      {
        description:
          "g. Peserta mengisi data diri dan mengunggah link Google Drive yang berisi berkas pendaftaran pada website BEM FILKOM 2024.",
      },
      {
        description:
          "h. Peserta diwajibkan untuk masuk ke grup LINE Open Recruitment Staff Ahli BEM FILKOM 2024 (Link Grup akan muncul setelah peserta submit pendaftaran di web).",
      },
      {
        description:
          "2. Peserta diwajibkan mengikuti Focus Group Discussion (FGD) yang bersifat daring dengan jadwal yang akan diinformasikan melalui grup LINE Open Recruitment Staff Ahli BEM FILKOM 2024.",
      },
      {
        description:
          "3. Peserta diwajibkan mengikuti tahap selanjutnya, yaitu Screening/Interview yang bersifat luring setelah tahapan Focus Group Discussion (FGD) dengan jadwal yang akan diinformasikan selambat-lambatnya H-1 dari jadwal interview.",
      },
      {
        description:
          "4. Panitia akan melakukan konfirmasi mengenai kehadiran interview pada hari-H interview dilaksanakan.",
      },
      {
        description:
          "5. Peserta wajib hadir 30 menit sebelum jadwal interview yang telah diinformasikan.",
      },
    ], //isi dari alur pendaftaran
    formFields: [
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
      },
      {
        name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kamu biasa dipanggil gimana?", //pertanyaan yang ditampilin
        placeholder: "cth: Dymi",
      },
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
      },
      {
        name: "email", //name nya disesuain sama nama kolom yang di supabase
        type: "email", // type defaultnya text (kalo ga diisi otomatis jadi text)
        questions: "Apa email kamu? (email UB)", //pertanyaan yang ditampilin
        placeholder: "cth: dymikavindra725@student.ub.ac.id",
        pattern: "[a-z0-9]+@student.ub.ac.id", //pattern regex kalo perlu
      },
      {
        name: "tanggal_lahir", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kapan tanggal lahir kamu? (format: DD Month YYYY)", //pertanyaan yang ditampilin
        placeholder: "cth: 09 Juli 2004",
      },
      {
        name: "alamat", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat rumah kamu (di malang)?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur",
      },
      {
        name: "asal", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat asal kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Jalan Veteran Nomor 8, Bekasi, Jawa Barat",
      },
      {
        name: "id_line", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: dymi123",
      },
      {
        name: "motto", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa motto hidup kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Jangan pernah menyerah apapun yang terjadi.",
      },
      {
        name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Apa motivasi kamu untuk mendaftarkan diri sebagai calon staff ahli BEM FILKOM UB 2023?", //pertanyaan yang ditampilin
        placeholder: "cth: Saya ingin menambah pengalaman berorganisasi.",
      },
      {
        name: "pilihan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Pertama kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },
      {
        name: "pilihan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Kedua kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },

      {
        name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
        placeholder: "cth: https://drive.google.com/xxxxx",
        pattern: "/(drive.google.com)/", //pattern regex kalo perlu
      },
    ], //isi dari form field chat
    api: {
      auth: "https://bemfilkom-rest.vercel.app/auth",
      check: "https://bemfilkom-rest.vercel.app/check/2024/OprecStaffAhli", // Check if registrant is already registered
      register:
        "https://bemfilkom-rest.vercel.app/register/2024/OprecStaffAhli", // Input registrant data
      announce:
        "https://bemfilkom-rest.vercel.app/announce/2024/OprecStaffAhli", // Check registrant's acceptance status
    },
    afterMessage: [
      "Terima kasih!",
      "Kamu telah berhasil terdaftar sebagai calon Staff Ahli BEM FILKOM 2024!",
      "Link Grup : <a target='_blank' href='https://line.me/ti/g/WJYxgm2k9D' class='text-yellow-200 font-bold'>Klik di sini!</a> \n <img class='w-48 h-48 ml-36' src='https://res.cloudinary.com/dnyrrcacd/image/upload/v1707927654/OPREC%202024/Screenshot_2024-02-14_231955_wvomo5.png'> \n",
    ],
    closedMessage: [
      "Maaf!",
      "Pendaftaran sudah ditutup 🙏",
      "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya!\n Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
    ],
    acceptMessage: [
      "Selamat!!!", // !!JANGAN DIGANTI
      "Selamat abangkuh kamu jadi golongan kami🎉🔥.\n\n",
      // "Silahkan gabung grup berikut : \n <a target='_blank' href='https://line.me/R/ti/g/PT45nECM7Z' class='text-blue-800 font-bold'>Klik di sini!</a> ",
    ],
    rejectMessage: [
      "Mohon maaf", // !!JANGAN DIGANTI
      "Mohon maaf anda belum lolos tahap seleksi kami.",
      // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
    ],
  },

  // Oprec Staff Ahli BEM FILKOM UB 2025
  {
    id: "2025-OprecStaffAhli", // id oprec formatnya tahun-oprec
    name: "Oprec Staff Ahli", // nama buat di tentang
    title: [
      "Open Recruitment", // line 1
      "Staff SGE FILKOM 2025", // line 2
    ],
    description: [
      "Open Recruitment of Staff SGE FILKOM 2025 is one of SGE FILKOM's work programmes to attract staff members of SGE FILKOM. This work programme can be registered by all KBMFILKOM who have passed the Startup Academy FILKOM.", //paragraf 1
    ],
    logo: LOGO_BEM, // gambar logo di home, login, dan robot image
    landingImage: `https://res.cloudinary.com/dnyrrcacd/image/upload/v1707910169/OPREC%202024/staff_ahli_wn6vut.jpg`,
    openDate: new Date("2025-02-03T00:00:00.000+07:00"),
    closeDate: new Date("2025-02-13T23:59:59.999+07:00"),
    //  * *FOR EXTEND
    // closeDate: new Date("2025-02-14T23:00:00.000+07:00"),
    announceDate: new Date("2025-02-23T20:15:00.000+07:00"),
    onlyFor: [23, 24], // Angkatan berapa yg diterima
    extends: false, //Timeline Extends atau tidak
    timeline: [
      {
        date: "03 Februari 2025",
        description: "Coming Soon 🚀",
      },
      {
        date: "07 - 12 Februari 2025",
        description: "Open Recruitment 📝",
      },
      {
        date: "16 Februari 2025",
        description: "Leaderless Group Discussion 💬",
      },
      {
        date: "10 - 15 Februari 2025",
        description: "Screening 👨‍💻",
      },
      {
        date: "23 Februari 2025",
        description: "Pengumuman 📢",
      },

      /** *TIMELINE --EXTEND-- */
      // {
      //   date: "03 Februari 2025",
      //   description: "Coming Soon 🚀",
      // },
      // {
      //   date: "07 - 13 Februari 2025",
      //   description: "Open Recruitment 📝",
      // },
      // {
      //   date: "16 Februari 2025",
      //   description: "Leaderless Group Discussion 💬",
      // },
      // {
      //   date: "10 - 15 Februari 2025",
      //   description: "Screening 👨‍💻",
      // },
      // {
      //   date: "23 Februari 2025",
      //   description: "Pengumuman 📢",
      // },
    ], //semisal extends timelinenya diubah juga

    quotes:
      "", //kalo gaada quotes bisa dikosongkan
    options: [
      " Human Capital Ministry",
      " Creative Enterprise",
      " Talent Growth Ministry",
      " Student Advocacy and Welfare Ministry",
      " Inter-Agency Affairs Ministry",
      " Studies and Strategic Action",
      " Social Equity and Environment",
      " Administration and Finance Bureau",
      " Creative Media and Information Bureau",
      " IT Solution Bureau",
    ], //pilihan divisi
    formatDrive: "Pilihan1_Pilihan2_NamaLengkap", //format google drive yang tampil di form pendaftaran
    alur: [
      {
        description: "1. Participants register on the SGE FILKOM Website",
      },
      {
        description:
          "a. Participants open the registration link provided by SGE FILKOM.",
      },
      {
        description:
          "b. Participants download and fill in the registration file.",
        titleLink: "Download the soft file (UB email)",
        link: "https://clips.id/SGE_GrandRecruitment_File",
      },
      {
        description:
          "c. Participants read the Open Recruitment Guidebook, Provisions, General Regulations, and Code of Ethics.",
      },
      {
        description:
          "d. Participants read the Grand Recruitment Guide, Terms, and General Rules. Participants download the twibbon provided, upload a photo of themselves on their personal Instagram account, and tag @bemfilkomub.",
      },
      {
        description:
          "e. Participants upload their completed registration documents to their personal Google Drive folder (make sure the folder link is public/shareable).",

        note: "(access to the Google Drive folder link must be public/shareable).",
      },
      {
        description:
          "f. Participants sign the Commitment Agreement Letter and agree to the General Rules of SGE FILKOM 2025.",
      },
      {
        description:
          "g. Participants fill in their personal data and upload the Google Drive link containing the registration file on the SGE FILKOM website.",
      },
      {
        description:
          "h. Participants must join the LINE group for Staff Candidates of SGE FILKOM 2025 (the group link will appear after submitting the registration form).",
      },
      {
        description:
          "2. Participants must join the next stage, which is the Screening/Interview. The schedule will be announced at the latest one day before the interview.",
      },
      {
        description:
          "a. The committee will confirm attendance on the interview day.",
      },
      {
        description:
          "b. Participants must arrive 30 minutes before their scheduled interview time.",
      },
      {
        description:
          "3. Participants are required to attend the Leaderless Group Discussion (LGD) whose schedule will be announced in the LINE group. LGD will be held offline. all information related to LGD will be informed no later than H-1 before the implementation.",
      },
    ], //isi dari alur pendaftaran
    formFields: [
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
      },
      {
        name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kamu biasa dipanggil gimana?", //pertanyaan yang ditampilin
        placeholder: "cth: Achmal",
      },
      {
        name: "email", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa email kamu? (email UB)", //pertanyaan yang ditampilin
        placeholder: "cth: achmal@student.ub.ac.id",
        pattern: "[a-z0-9]+@student.ub.ac.id", //pattern regex kalo perlu
      },
      {
        name: "tanggal_lahir", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kapan tanggal lahir kamu? (format: DD Month YYYY)", //pertanyaan yang ditampilin
        placeholder: "cth: 23 Februari 2004",
      },
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
      },
      {
        name: "alamat", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat rumah kamu (di malang)?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur",
      },
      {
        name: "asal", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat asal kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Jalan Veteran Nomor 8, Bekasi, Jawa Barat",
      },
      {
        name: "id_line", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: achmal111",
      },
      {
        name: "motto", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa motto hidup kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Jangan pernah menyerah apapun yang terjadi.",
      },
      {
        name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Apa motivasi kamu untuk mendaftarkan diri sebagai calon staff ahli BEM FILKOM UB 2023?", //pertanyaan yang ditampilin
        placeholder: "cth: Saya ingin menambah pengalaman berorganisasi.",
      },
      {
        name: "pilihan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Pertama kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },
      {
        name: "pilihan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Kedua kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },

      {
        name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
        placeholder: "cth: https://drive.google.com/xxxxx",
        pattern: "/(drive.google.com)/", //pattern regex kalo perlu
      },
    ], //isi dari form field chat
    api: {
      auth: "https://bemfilkom-rest.vercel.app/auth",
      check: "https://bemfilkom-rest.vercel.app/check/2025/OprecStaffAhli", // Check if registrant is already registered
      register:
        "https://bemfilkom-rest.vercel.app/register/2025/OprecStaffAhli", // Input registrant data
      announce:
        "https://bemfilkom-rest.vercel.app/announce/2025/OprecStaffAhli", // Check registrant's acceptance status
    },
    afterMessage: [
      "Terima kasih!",
      "Kamu telah berhasil terdaftar sebagai calon Staff SGE FILKOM 2025!",
      "Link Grup : <a target='_blank' href='https://line.me/ti/g/NmGPR2BcxF' class='text-yellow-200 font-bold'>Klik di sini!</a> \n",
    ],
    closedMessage: [
      "Maaf!",
      "Pendaftaran sudah ditutup 🙏",
      "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya!\n Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
    ],
    acceptMessage: [
      "Selamat!!!", // !!JANGAN DIGANTI
      "Welcome to SGE FILKOM 2025!! 🎉🔥\n\n",
      "Please join the following group : \n <a target='_blank' href='' class='text-blue-800 font-bold'>Klik di sini!</a> ",
      "disini ada berkas transparansi?"
    ],
    rejectMessage: [
      "Mohon maaf", // !!JANGAN DIGANTI
      "Thank you for your participation in the Interview and LGD phase. After considering all the applications submitted in the recruitment, interviews, and LGD it is with a heavy heart that we inform you that you didn’t pass the process.",
      "We truly appreciate your interest in SGE FILKOM and wish you the very best in your future endeavors.🔥",
      "disini ada berkas transparansi?"
    ],
  },
];
