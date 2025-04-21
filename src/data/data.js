import { Link } from "react-router-dom";

const LOGO_BEM =
  "https://res.cloudinary.com/ddlo3v9hx/image/upload/v1738910400/Logo_SGE_for_Web_yieqge.svg";
  // "https://res.cloudinary.com/dnnznx7sj/image/upload/v1738926431/bwrve3haa0ys0ih0vpae.png";

export const oprecInfo = [ 
  
  
  // // Opreg Mawapres 2024 ✅✅
  // {

  //   id: "2024-OpregMawapres", // id oprec formatnya tahun-oprec
  //   name: "Opreg Mawapres 2024", // nama buat di tentang
  //   title: [
  //     "Open Registration", // line 1
  //     "Mawapres FILKOM", // line 2
  //   ],
  //   description: [
  //     "Mawapres FILKOM merupakan kegiatan tahunan yang bertujuan untuk mencari, memilih, dan memberikan penghargaan kepada mahasiswa FILKOM yang berprestasi, baik di bidang akademik dan non-akademik. Kegiatan Mawapres ini dilakukan secara terbuka dan berdasarkan kriteria yang ditetapkan oleh Fakultas Ilmu Komputer Universitas Brawijaya.", //paragraf 1
  //   ],
  //   logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //   landingImage: `https://res.cloudinary.com/djpkvtoql/image/upload/v1727707915/mawapres.jpg`,
  //   openDate: new Date("2024-10-07T15:00:00.999+07:00"),
  //   closeDate: new Date("2024-10-16T00:00:00.999+07:00"),
  //   announceDate: new Date("2024-10-16T19:00:00.999+07:00"),
  //   onlyFor: [22, 23], // Angkatan berapa yg diterima
  //   extends: true, //Timeline Extends atau tidak
  //   timeline: [
  //     {
  //       date: "7 - 12 Oktober 2024",
  //       description: "Open Registration",
  //     },
  //     {
  //       date: "16 Oktober 2024",
  //       description: "Close Registration",
  //     },
  //     // nanti yang close diatas ini aja yang dikomen ketika extend
  //     // {
  //     //  date: "13 Oktober 2024",
  //     //  description: "Extend Registration",
  //     // },
  //     // {
  //     //  date: "16 Oktober 2024",
  //     //  description: "Close Registration",
  //     // },
  //     {
  //       date: "16 Oktober 2024",
  //       description: "Pengumuman 📢",
  //     },
  //   ], //semisal extends timelinenya diubah juga

  //   quotes:
  //     "Success isn't just about what you accomplish in your life, it's about what you inspire others to do.", //kalo gaada quotes bisa dikosongkan
  //   options: [
  //     " MawaPres",
  //   ], //pilihan divisi
  //   formatDrive: "NamaLengkap_NIM", //format google drive yang tampil di form pendaftaran
  //   alur: [
  //     {
  //       description: "1. Mahasiswa membuka link pendaftaran yang telah disediakan oleh BEM FILKOM (website ini)",
  //     },
  //     {
  //       description:
  //         "2. Mahasiswa menyiapkan berkas pendukung. Berkas dalam bentuk softcopy, dan dimasukkan dalam google drive masing-masing dan bersifat publik.",
  //       titleLink: "Download berkas soft file (email UB)",
  //       link: "https://drive.google.com/drive/folders/120_qEjapFd1s-iVeCj1srGq3foYIyp9D?usp=sharing",
  //     },
  //     {
  //       description:
  //         "3.  Mahasiswa menyerahkan berkas pendukung melalui link pendaftaran dengan batas waktu yang telah ditentukan.",
  //     },
  //     {
  //       description:
  //         "4. Mahasiswa menyiapkan diri untuk mengikuti rangkaian Mawapres.",
  //     },
  //   ], //isi dari alur pendaftaran
  //   formFields: [
  //     {
  //       is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //       questions:
  //         "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //     },
  //     {
  //       name: "ipk", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "berapa IPK mu?", //pertanyaan yang ditampilin
  //       placeholder: "cth: 3.9",
  //     },
  //     {
  //       name: "no_hp", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "nomor hp kamu dong?", //pertanyaan yang ditampilin
  //       placeholder: "cth: 081234567890",
  //     },
  //     {
  //       is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //       questions:
  //         "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //     },
  //     {
  //       name: "id_line", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
  //       placeholder: "cth: jalalludin87",
  //     },
  //     {
  //       name: "alamat", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Di mana alamat kamu?", //pertanyaan yang ditampilin
  //       placeholder: "cth: Timika, Papua",
  //     },
  //     {
  //       name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //       questions:
  //         "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
  //       placeholder: "cth: https://drive.google.com/xxxxx",
  //       pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //     },
  //   ], //isi dari form field chat
  //   api: {
  //     auth: "https://bemfilkom-rest.vercel.app/auth",
  //     check: "https://bemfilkom-rest.vercel.app/check/2024/OpregMawapres", // Check if registrant is already registered
  //     register:
  //       "https://bemfilkom-rest.vercel.app/register/2024/OpregMawapres", // Input registrant data
  //     announce:
  //       "https://bemfilkom-rest.vercel.app/announce/2024/OpregMawapres", // Check registrant's acceptance status
  //   },
  //   afterMessage: [
  //     "Terima kasih!",
  //     "Selamat kamu telah berhasil terdaftar sebagai calon peserta MAWAPRES FILKOM 2024. 🥰",
  //   ],
  //   closedMessage: [
  //     "Maaf!",
  //     "Pendaftaran sudah ditutup 🙏",
  //     "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //   ],
  //   acceptMessage: [
  //     "Selamat!!!", // !!JANGAN DIGANTI
  //     "SELAMAT KAMU MENJADI PESERTA MAWAPRES FILKOM 2024 👑 🥳\n\n",
  //     "Untuk selanjutnya, silahkan untuk bergabung grub pada link berikut: \n <a target='_blank' href='https://line.me/ti/g/jGkXJCnGip' class='text-blue-800 font-bold'>Klik disini</a> !!! \n",
  //   ],
  //   rejectMessage: [
  //     "Mohon maaf", // !!JANGAN DIGANTI
  //     "kamu belum lolos tahap seleksi kami.",
  //     // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
  //   ],
  // },

  
  // // Oprec Staff Ahli SGE FILKOM UB 2025 ✅✅
  // {
  //   id: "2025-OprecStaffAhli", // id oprec formatnya tahun-oprec
  //   name: "Grand Recruitment Staff", // nama buat di tentang
  //   title: [
  //     "Grand Recruitment", // line 1
  //     "Staff SGE FILKOM 2025", // line 2
  //   ],
  //   description: [
  //     "Open Recruitment of Staff SGE FILKOM 2025 is one of SGE FILKOM's work programmes to attract staff members of SGE FILKOM. This work programme can be registered by all KBMFILKOM who have passed the Startup Academy FILKOM.", //paragraf 1
  //   ],
  //   logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //   landingImage: `https://res.cloudinary.com/dnyrrcacd/image/upload/v1707910169/OPREC%202024/staff_ahli_wn6vut.jpg`,
  //   openDate: new Date("2025-02-07T00:00:00.000+07:00"),
  //   closeDate: new Date("2025-02-17T06:00:00.000+07:00"),
  //   announceDate: new Date("2025-02-24T19:00:00.000+07:00"),
  //   onlyFor: [23, 24], // Angkatan berapa yg diterima
  //   extends: true, //Timeline Extends atau tidak
  //   timeline: [
  //      {
  //        date: "03 Februari 2025",
  //        description: "Coming Soon 🚀",
  //      },
  //      {
  //        date: "07 - 16 Februari 2025",
  //        description: "Open Recruitment 📝",
  //      },
  //      {
  //        date: "22 Februari 2025",
  //        description: "Leaderless Group Discussion 💬",
  //      },
  //      {
  //        date: "10 - 18 Februari 2025",
  //        description: "Screening 👨‍💻",
  //      },
  //      {
  //        date: "24 Februari 2025",
  //        description: "Pengumuman 📢",
  //      },
  //   ], 

  //   quotes:
  //     "", //kalo gaada quotes bisa dikosongkan
  //   options: [
  //     " Human Capital Ministry",
  //     " Creative Enterprise",
  //     " Talent Growth Ministry",
  //     " Student Advocacy and Welfare Ministry",
  //     " Inter-Agency Affairs Ministry",
  //     " Studies and Strategic Action",
  //     " Social Equity and Environment",
  //     " Administration and Finance Bureau",
  //     " Creative Media and Information Bureau",
  //     " IT Solution Bureau",
  //   ], //pilihan divisi
  //   formatDrive: "Pilihan1_Pilihan2_NamaLengkap", //format google drive yang tampil di form pendaftaran
  //   alur: [
  //     {
  //       description: "1. Participants register on the SGE FILKOM Website",
  //     },
  //     {
  //       description:
  //         "a. Participants open the registration link provided by SGE FILKOM.",
  //     },
  //     {
  //       description:
  //         "b. Participants download and fill in the registration file.",
  //       titleLink: "Access the soft file (UB email)",
  //       link: "https://linktr.ee/grandrecruitmentsgefilkomub",
  //     },
  //     {
  //       description:
  //         "c. Participants read the Open Recruitment Guidebook, Provisions, General Regulations, and Code of Ethics.",
  //     },
  //     {
  //       description:
  //         "d. Participants read the Grand Recruitment Guide, Terms, and General Rules. Participants download the twibbon & snapgram campaign provided, upload a photo of yourself on your personal Instagram account, and tag @bemfilkomub.",
  //     },
  //     {
  //       description:
  //         "e. Participants upload their completed registration documents to their personal Google Drive folder (make sure the folder link is public/shareable).",

  //       note: "(access to the Google Drive folder link must be public/shareable).",
  //     },
  //     {
  //       description:
  //         "f. Participants sign the Commitment Agreement Letter and agree to the General Rules of SGE FILKOM 2025.",
  //     },
  //     {
  //       description:
  //         "g. Participants fill in their personal data and upload the Google Drive link containing the registration file on the SGE FILKOM website.",
  //     },
  //     {
  //       description:
  //         "h. Participants must join the LINE group for Staff Candidates of SGE FILKOM 2025 (the group link will appear after submitting the registration form).",
  //     },
  //     {
  //       description:
  //         "2. Participants must join the next stage, which is the Screening/Interview. The schedule will be announced at the latest one day before the interview.",
  //     },
  //     {
  //       description:
  //         "a. The committee will confirm attendance on the interview day.",
  //     },
  //     {
  //       description:
  //         "b. Participants must arrive 30 minutes before their scheduled interview time.",
  //     },
  //     {
  //       description:
  //         "3. Participants are required to attend the Leaderless Group Discussion (LGD) whose schedule will be announced in the LINE group. LGD will be held offline. all information related to LGD will be informed no later than H-1 before the implementation.",
  //     },
  //   ], //isi dari alur pendaftaran
  //   formFields: [
  //     {
  //       is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //       questions:
  //         "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //     },
  //     {
  //       name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Kamu biasa dipanggil gimana?", //pertanyaan yang ditampilin
  //       placeholder: "cth: Achmal",
  //     },
  //     {
  //       name: "email", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Apa email kamu? (email UB)", //pertanyaan yang ditampilin
  //       placeholder: "cth: achmal@student.ub.ac.id",
  //       pattern: "[a-z0-9]+@student.ub.ac.id", //pattern regex kalo perlu
  //     },
  //     {
  //       name: "tanggal_lahir", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Kapan tanggal lahir kamu? (format: DD Month YYYY)", //pertanyaan yang ditampilin
  //       placeholder: "cth: 23 Februari 2004",
  //     },
  //     {
  //       is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //       questions:
  //         "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //     },
  //     {
  //       name: "alamat", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Di mana alamat rumah kamu (di malang)?", //pertanyaan yang ditampilin
  //       placeholder:
  //         "cth: Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur",
  //     },
  //     {
  //       name: "asal", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Di mana alamat asal kamu?", //pertanyaan yang ditampilin
  //       placeholder: "cth: Jalan Veteran Nomor 8, Bekasi, Jawa Barat",
  //     },
  //     {
  //       name: "id_line", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
  //       placeholder: "cth: achmal111",
  //     },
  //     {
  //       name: "motto", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Apa motto hidup kamu?", //pertanyaan yang ditampilin
  //       placeholder: "cth: Jangan pernah menyerah apapun yang terjadi.",
  //     },
  //     {
  //       name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
  //       questions:
  //         "Apa motivasi kamu untuk mendaftarkan diri sebagai calon staff ahli BEM FILKOM UB 2023?", //pertanyaan yang ditampilin
  //       placeholder: "cth: Saya ingin menambah pengalaman berorganisasi.",
  //     },
  //     {
  //       name: "pilihan1", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Pilih Kementerian/Kebiroan Pilihan Pertama kamu!", //pertanyaan yang ditampilin
  //       placeholder: "Klik/tap untuk melihat dropdown...",
  //     },
  //     {
  //       name: "alasan1", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
  //       placeholder:
  //         "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
  //     },
  //     {
  //       name: "pilihan2", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Pilih Kementerian/Kebiroan Pilihan Kedua kamu!", //pertanyaan yang ditampilin
  //       placeholder: "Klik/tap untuk melihat dropdown...",
  //     },
  //     {
  //       name: "alasan2", //name nya disesuain sama nama kolom yang di supabase
  //       questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
  //       placeholder:
  //         "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
  //     },

  //     {
  //       name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //       questions:
  //         "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
  //       placeholder: "cth: https://drive.google.com/xxxxx",
  //       pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //     },
  //   ], //isi dari form field chat
  //   api: {
  //     auth: "https://bemfilkom.ddns.net:8443/",
  //     check: "https://bemfilkom-rest.vercel.app/check/2025/OprecStaffAhli", // Check if registrant is already registered
  //     register:
  //       "https://bemfilkom-rest.vercel.app/register/2025/OprecStaffAhli", // Input registrant data
  //     announce:
  //       "https://bemfilkom-rest.vercel.app/announce/2025/OprecStaffAhli", // Check registrant's acceptance status
  //   },
  //   afterMessage: [
  //     "Terima kasih!",
  //     "Kamu telah berhasil terdaftar sebagai calon Staff SGE FILKOM 2025!",
  //     "Link Grup : <a target='_blank' href='https://line.me/ti/g/NmGPR2BcxF' class='text-yellow-200 font-bold'>Klik di sini!</a> \n",
  //   ],
  //   closedMessage: [
  //     "Maaf!",
  //     "Pendaftaran sudah ditutup 🙏",
  //     "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya!\n Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //   ],
  //   acceptMessage: [
  //     "Selamat!!!", // !!JANGAN DIGANTI
  //     "Dear Future Executive 👋🏻\n",
  //     "🎉 𝘾𝙊𝙉𝙂𝙍𝘼𝙏𝙐𝙇𝘼𝙏𝙄𝙊𝙉𝙎! 🎉\n",
  //     "We really appreciate your enthusiasm for the whole recruitment process!\n",
  //     "✅ 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿 ✅\n",
  //     "As a 𝗦𝘁𝗮𝗳𝗳 of 𝗦𝘁𝘂𝗱𝗲𝗻𝘁 𝗚𝗼𝘃𝗲𝗿𝗻𝗺𝗲𝗻𝘁 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝘃𝗲 (𝗦𝗚𝗘) 𝗙𝗜𝗟𝗞𝗢𝗠 𝗨𝗕 𝟮𝟬𝟮𝟱! 🥳\n",
  //     "This is your chance to be part of the #VoxAeterna family. We believe you’ll bring positive energy and meaningful contributions to this incredible journey.\n",
  //     "𝗪𝗵𝗮𝘁'𝘀 𝗻𝗲𝘅𝘁?\n",
  //     "Join the Vox Aeterna Cabinet Group through the following link: <a target='_blank' href='https://clips.id/JoinVoxAeternaGroupChat' class='text-blue-800 font-bold'>clips.id/JoinVoxAeternaGroupChat</a>\n",
  //     "Stay tune and be prepared for Onboarding Staff information that will be informed in the cabinet group, so please join the group 𝗮𝘀 𝘀𝗼𝗼𝗻 𝗮𝘀 𝗽𝗼𝘀𝘀𝗶𝗯𝗹𝗲! 😉\n",
  //     "If you have any questions, don’t hesitate to reach out to us okeyy.\n",
  //     "Once again, congratulations! Let’s work together to make SGE FILKOM UB even more amazing ✨\n",
  //     "𝗦𝗲𝗲 𝘆𝗼𝘂 𝗼𝗻 𝗢𝗻𝗯𝗼𝗮𝗿𝗱𝗶𝗻𝗴 𝗦𝘁𝗮𝗳𝗳 𝗦𝗚𝗘 𝗙𝗜𝗟𝗞𝗢𝗠 𝗨𝗕 𝟮𝟬𝟮𝟱! 🚀\n",
  //     "Cheers,\n",
  //     "𝗦𝗚𝗘 𝗙𝗜𝗟𝗞𝗢𝗠 𝗨𝗕 𝟮𝟬𝟮𝟱\n",
  //   ],
  //   rejectMessage: [
  //     "Mohon maaf", // !!JANGAN DIGANTI
  //     "Dear registrant,",
  //     "Thank you for applying to 𝗚𝗿𝗮𝗻𝗱 𝗥𝗲𝗰𝗿𝘂𝗶𝘁𝗺𝗲𝗻𝘁 𝗦𝘁𝗮𝗳𝗳 𝗦𝗚𝗘 𝗙𝗜𝗟𝗞𝗢𝗠 𝗨𝗕 𝟮𝟬𝟮𝟱✨",
  //     "Thank you very much for your enthusiasm and passion in following this selection process. After carefully consideration, we must inform you that you are:",
  //     "❌ 𝙉𝙊𝙏 𝙋𝘼𝙎𝙎𝙀𝘿 ❌",
  //     "as a 𝗦𝘁𝗮𝗳𝗳 of 𝗦𝘁𝘂𝗱𝗲𝗻𝘁 𝗚𝗼𝘃𝗲𝗿𝗻𝗺𝗲𝗻𝘁 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝘃𝗲 (𝗦𝗚𝗘) 𝗙𝗜𝗟𝗞𝗢𝗠 𝗨𝗕 𝟮𝟬𝟮𝟱.",
  //     "After thorough and careful consideration, regretfully, we have come to the conclusion that we will not move forward with your application. This decision was not made lightly, as the selection process was highly competitive.",
  //     "While your qualifications are impressive, we would like to express our gratitude for your interest in joining our Staff SGE FILKOM UB 2025. Your application has been noted, and we will keep it on file for future opportunities that match your profile. We know this is not the news you were hoping for, but we really appreciate all the effort, time, and energy you put in during this selection process. Don't be discouraged, because 𝗲𝘃𝗲𝗿𝘆 𝘀𝘁𝗲𝗽 𝗶𝘀 𝗽𝗮𝗿𝘁 𝗼𝗳 𝘁𝗵𝗲 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝘁𝗸 𝘀𝘂𝗰𝗰𝗲𝘀𝘀 🌱",
  //     "Keep your spirits up to continue learning, developing, and reaching for other opportunities in the future. We're sure your potential and dedication will lead you to great things! 🌟",
  //     "If you have any questions, don't hesitate to contact us okeyy.",
  //     "Thank you once again for being part of this process with us. 𝗦𝘁𝗮𝘆 𝗰𝗼𝗻𝗳𝗶𝗱𝗲𝗻𝘁 and 𝗸𝗲𝗲𝗽 𝘀𝗵𝗶𝗻𝗶𝗻𝗴! ✨",
  //     "Best wishes,",
  //     "𝗦𝗚𝗘 𝗙𝗜𝗟𝗞𝗢𝗠 𝗨𝗕 𝟮𝟬𝟮𝟱",
  //   ],
  // },

    
  // // Oprec KETUPEL PKKMB & SA. ✅✅
  // /*
  // Catatan:
  // */
  // {
  //     id: "2025-OpenTenderKetuaPelaksanaPKKMB&SA", // id oprec formatnya tahun-oprec
  //     name: "OPEN TENDER KETUA PELAKSANA PKKMB & SA 2025", // nama buat di tentang
  //     title: [
  //       "Open Tender Ketua Pelaksana", // line 1
  //       "PKKMB & SA 2025", // line 2
  //     ],
  //     description: [
  //       "Open Tender Ketua Pelaksana PKKMB & SA 2025 merupakan kegiatan yang bertujuan untuk memilih ketua pelaksana PKKMB (Pengenalan Kehidupan Kampus Mahasiswa Baru) & Startup Academy (Krida Mahasiswa) Fakultas Ilmu Komputer 2025"
  //     ],
  //     logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //     landingImage: `https://res.cloudinary.com/dks74omr4/image/upload/v1743056136/urkoowhdkpnbmoehw1qc.jpg`,
  //     openDate: new Date("2025-03-11T11:00:00.999+07:00"), //aslinya 11 april
  //     closeDate: new Date("2025-04-17T23:59:00.999+07:00"),
  //     announceDate: new Date("2025-04-22T19:00:00.999+07:00"),
  //     onlyFor: [23, 24], // Angkatan berapa yg diterima
  //     extends: false, //Timeline Extends atau tidak
  //     timeline: [
  //       {
  //         date: "11 - 15 April 2025",
  //         description: "Open Registration",
  //       },
  //       {
  //         date: "15 April 2025",
  //         description: "Close Registration", 
  //       },
  //       {
  //         date: "18 - 20 April 2025",
  //         description: "Fit and Proper Test",
  //       },
  
  //       // nanti yang close diatas ini aja yang dikomen ketika extend
  //       // {
  //       //  date: "16 - 17 April 2025",
  //       //  description: "Extend Registration",
  //       // },
  //       // {
  //       //  date: "17 April 2025", 23.59
  //       //  description: "Close Registration",
  //       // },
  //       {
  //         date: "22 April 2025",   
  //         description: "Pengumuman 📢",
  //       },
  //     ], //semisal extends timelinenya diubah juga
  
  //     quotes:
  //       "Every great journey begins with a small step.", //kalo gaada quotes bisa dikosongkan
  //     options: [
  //       " Ketua Pelaksana",
  //     ], //pilihan divisi
  //     formatDrive: "NamaLengkap_Cakapel_PKKMB&SA", //format google drive yang tampil di form pendaftaran
  //     alur: [
  //       {
  //         description: 
  //           "1. Mahasiswa membuka link pendaftaran yang telah disediakan oleh BEM FILKOM (website ini)",
  //       },
  //       {
  //         description:
  //           "2. Peserta membaca panduan Alur Pendaftaran Open Tender di",
  //         titleLink: "Buku panduan OPTEND25",
  //         link: "https://drive.google.com/drive/folders/1COTq1aBABEM-2ECGiGWeG67cDnjA2ghY?usp=drive_link",
  //       },
  //       {
  //         description:
  //           "3. Peserta mengunduh dan mengisi berkas pendaftaran (dalam bentuk soft file).",
  //         titleLink: "Berkas Pendaftaran",
  //         link: "https://drive.google.com/drive/folders/118MsgGBBhXZ-RXFMfw24UA3icc9lyY7q?usp=sharing",
  //       },

  //       {
  //         description:
  //           "4. Peserta mengunggah berkas pendaftaran ke dalam Google Drive pribadi (akses link folder Google Drive wajib public/shareable).",
  //       },
  //       {
  //         description:
  //           "5. Peserta menyetujui surat pernyataan komitmen yang telah disediakan.",
  //       },
  //       {
  //         description:
  //           "6. Peserta mengisi data diri dan mengunggah link Google Drive yang berisi berkas pendaftaran pada website SGE FILKOM 2025.",
  //       },
  //       {
  //         description:
  //           "7. Peserta akan mendapatkan informasi terkait jadwal fit and proper test.",
  //       },
  //       {
  //         description:
  //           "NB: Pemberitahuan tentang jadwal interview akan diinformasikan paling lambat H+2 setelah peserta mendaftarkan diri melalui website SGE  FILKOM 2025.",
  //       },
  //     ], //isi dari alur pendaftaran
  //     formFields: [
  //       {
  //         is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //         questions:
  //           "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //       },
  //       {
  //         name: "nama", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Nama lengkap", //pertanyaan yang ditampilin
  //         placeholder: "cth: Sulthon Ihsan ",
  //       },
  //       {
  //         name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "kamu biasa dipanggil siapa?", //pertanyaan yang ditampilin
  //         placeholder: "cth: Audrey",
  //       }, 
  //       {
  //         name: "prodi", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Program studimu apa?", //pertanyaan yang ditampilin
  //         placeholder: "cth: Sistem Informasi",
  //       },
  //       {
  //         name: "ttl", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Tempat dan tanggal lahirmu bagaimana?", //pertanyaan yang ditampilin
  //         placeholder: "Malang, 1 Januari 2006",
  //       },
  //       {
  //         name: "no_hp", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Nomor hp kamu dong?", //pertanyaan yang ditampilin
  //         placeholder: "cth: 081234567890",
  //       },
  //       {
  //         name: "alamat_asal", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Alamat asalmu?", //pertanyaan yang ditampilin
  //         placeholder: "cth: Jl. Candi No. 10, Bali",
  //       },
  //       {
  //         name: "alamat_di_malang", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "kalau alamatmu di Malang?", //pertanyaan yang ditampilin
  //         placeholder: "cth: Jl. Veteran No. 16",
  //       },
  //       {
  //         name: "alasan", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Boleh tau alasan ingin menjadi ketua pelaksana?", //pertanyaan yang ditampilin
  //         placeholder: " ",
  //       },
  //       {
  //         name: "usulan", //name nya disesuain sama nama kolom yang di supabase
  //         questions: "Konsep keren seperti apa yang ingin kamu usulkan jika menjadi ketua pelaksana?", //pertanyaan yang ditampilin
  //         placeholder: " "
  //       },
  //       {
  //         is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //         questions:
  //           "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //       },
  //       {
  //         name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //         questions:
  //           "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
  //         placeholder: "cth: https://drive.google.com/xxxxx",
  //         pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //       },
  //     ], //isi dari form field chat
  //     api: {
  //       auth: "https://bemfilkom.ddns.net:8443/",
  //       check: "https://bem-rest.vercel.app/check/2025/OptendKetupelPKKMBSA", // Check if registrant is already registered
  //       register:
  //         "https://bem-rest.vercel.app/register/2025/OptendKetupelPKKMBSA", // Input registrant data
  //       announce:
  //         "https://bem-rest.vercel.app/announce/2025/OptendKetupelPKKMBSA", // Check registrant's acceptance status
  //     },
  //     afterMessage: [
  //       "Terima kasih!",
  //       "Selamat kamu telah berhasil terdaftar sebagai calon Ketua Pelaksana PKKMB & SA 2025🥰",
  //     ],
  //     closedMessage: [
  //       "Maaf!",
  //       "Pendaftaran sudah ditutup 🙏",
  //       "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //     ],
  //     acceptMessage: [
  //       "Selamat!!!", // !!JANGAN DIGANTI
  //       "Congratulation! Kamu telah berhasil diterima. Terima kasih atas partisipasimu. Setelah ini, kamu akan dihubungi untuk pemberitahuan lebih lanjut.",
  //      // "Untuk selanjutnya, silahkan untuk bergabung grub pada link berikut: \n <a target='_blank' href='https://line.me/ti/g/jGkXJCnGip' class='text-blue-800 font-bold'>Klik disini</a> !!! \n",
  //     ],
  //     rejectMessage: [
  //       "Mohon maaf", // !!JANGAN DIGANTI
  //       "kamu belum lolos tahap seleksi kami.",
  //       "Terima kasih atas partisipasimu dan semangatmu yang luar biasa untuk mendaftar pada pendaftaran open tender PKKMB FILKOM 2025.",
  //       "Mohon maaf, kamu belum berkesempatan untuk lolos ke tahap berikutnya. Jangan berkecil hati , teruslah berkembang dan raih kesempatan terbaik di masa depan.”",
  //       // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
  //     ],
  // },

  // // Hology 8.0 ✅✅
  // /*
  // Catatan: 
  // */
  // {
  //         id: "2025-OpenTenderKetuaPelaksanaHOLOGY", // id oprec formatnya tahun-oprec
  //         name: "OPEN TENDER KETUA PELAKSANA HOLOGY 8.0", // nama buat di tentang
  //         title: [
  //           "Open Tender Ketua Pelaksana", // line 1
  //           "Hology 8.0", // line 2
  //         ],
  //         description: [
  //           "House of Technology (HOLOGY) adalah kompetisi tingkat nasional tahunan untuk menjadi wadah mahasiswa/i dari berbagai Perguruan Tinggi Negeri, Swasta, dan juga Politeknik di seluruh negeri dalam menunjukkan kualitas dan supremasinya di bidang IT. HOLOGY, yang tahun ini masuk edisi ke-8, bukanlah sekadar kompetisi, namun juga festival dan ajang edukasi bagi seluruh insan pencinta IT."
  //         ],
  //         logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //         landingImage: `https://res.cloudinary.com/dks74omr4/image/upload/v1743129634/j4t6zcofsk8bbenjio6p.jpg`,
  //         openDate: new Date("2025-03-11T15:00:00.999+07:00"), //ini nanti diganti 7 April
  //         closeDate: new Date("2025-04-12T23:59:00.999+07:00"),
  //         announceDate: new Date("2025-04-14T16:00:00.999+07:00"),
  //         onlyFor: [23, 24], // Angkatan berapa yg diterima
  //         extends: false, //Timeline Extends atau tidak
  //         timeline: [
  //           {
  //             date: "7 - 10 April 2025",
  //             description: "Open Tender",
  //           },
  //           {
  //            date: "7 - 12 April 2025",
  //            description: "Extend Registration",
  //           },
  //           {
  //            date: "12 April 2025",
  //            description: "Close Registration",
  //           },
  //           {
  //             date: "8 - 13 April 2025",
  //             description: "Fit and Proper Test",
  //           },
      
  //           // nanti yang close diatas ini aja yang dikomen ketika extend
  //           {
  //             date: "14 April 2025",
  //             description: "Pengumuman 📢",
  //           },
  //         ], //semisal extends timelinenya diubah juga
      
  //         quotes:
  //           "Hidup adalah 10% apa yang terjadi pada kita dan 90% bagaimana kita meresponsnya. - Charles R. Swindoll", //kalo gaada quotes bisa dikosongkan
  //         options: [
  //         ], //pilihan divisi
  //         formatDrive: "KAPEL_HOLOGY_NamaLengkap", //format google drive yang tampil di form pendaftaran
  //         alur: [
  //           {
  //             description: 
  //             "1. Pendaftar membuka link pendaftaran di website SGE FILKOM UB.",
  //           },
  //           {
  //             description:
  //               "2. Pendaftar membuka dan membaca panduan alur pendaftaran open tender (gunakan akun UB).",
  //           },
  //           {
  //             description:
  //               "3. Pendaftar membuat salinan dari template yang disediakan dan mengisi berkas yang ditentukan.",
  //             titleLink: "Template Berkas Pendaftaran",
  //             link: "https://drive.google.com/drive/folders/1845BrgoMZaP9ESo1hIZTzd2msEhHEt1M?usp=sharing",
  //           },
  //           {
  //             description:
  //               "4. Pendaftar mengunggah berkas pendaftaran berformat pdf ke dalam Google Drive pribadi yang berisi berkas-berkas yang diperlukan (pastikan sudah di-set ke all can view).",
  //           },
  //           {
  //             description:
  //               "5. Pendaftar mengisi data dan mengunggah link Google Drive yang berisi berkas open tender di website SGE.",
  //           },
  //           {
  //             description:
  //               "6. Pendaftar akan mendapatkan pemberitahuan tentang jadwal Fit and Proper yang akan diinformasikan melalui Whatsapp setelah pendaftar telah resmi mendaftarkan diri melalui website SGE.",
  //           },
  //         ], //isi dari alur pendaftaran
  //         formFields: [
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "nama", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Siapa nama lengkapmu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: sulthon ihsan ",
  //           },
  //           {
  //             name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Nama panggilanmu siapa?", //pertanyaan yang ditampilin
  //             placeholder: "cth: ",
  //           }, 
  //           {
  //             name: "prodi", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Kamu dari program studi apa?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Sistem Informasi",
  //           },
  //           {
  //             name: "ttl", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Tempat dan tanggal lahir kamu?", //pertanyaan yang ditampilin
  //             placeholder: "Malang, 1 Januari 2005",
  //           },
  //           {
  //             name: "no_hp", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Nomor Whatsapp kamu berapa?", //pertanyaan yang ditampilin
  //             placeholder: "cth: 081234567890",
  //           },
  //           {
  //             name: "idline", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: @itsgacorr",
  //           },
  //           {
  //             name: "alamat_asl", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Dimana alamat asal kamu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Jl. Candi No. 1, Bali",
  //           },
  //           {
  //             name: "alamat_mlg", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Dimana alamat kamu di Malang?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Jl. Veteran No. 16",
  //           },
  //           {
  //             name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Apa yang membuatmu termotivasi jadi ketua pelaksana?", //pertanyaan yang ditampilin
  //             placeholder: " "
  //           },
  //           {
  //             name: "konsep", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Boleh jelasin konsep singkat HOLOGY 8.0 yang ingin kamu usung?", //pertanyaan yang ditampilin
  //             placeholder: " "
  //           },
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //             questions:
  //               "Terakhir, taruh link drive berkas kamu disini, jangan lupa set ke all can view, ya! 😃", //pertanyaan yang ditampilin
  //             placeholder: "cth: https://drive.google.com/xxxxx",
  //             pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //           },
  //         ], //isi dari form field chat
  //         api: {
  //           auth: "https://bemfilkom.ddns.net:8443/",
  //           check: "https://bem-rest.vercel.app/check/2025/OptendKetupelHology", // Check if registrant is already registered
  //           register:
  //             "https://bem-rest.vercel.app/register/2025/OptendKetupelHology", // Input registrant data
  //           announce:
  //             "https://bem-rest.vercel.app/announce/2025/OptendKetupelHology", // Check registrant's acceptance status
  //         },
  //         afterMessage: [
  //           "Terima kasih!",
  //           "SELAMAT KAMU TELAH BERHASIL TERDAFTAR SEBAGAI CALON KETUA PELAKSANA HOLOGY 8.0 🤩🥳",
  //         ],
  //         closedMessage: [
  //           "Maaf!",
  //           "Pendaftaran sudah ditutup 🙏",
  //           "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //         ],
  //         acceptMessage: [
  //           "Selamat!!!", // !!JANGAN DIGANTI
  //           "🎉SELAMAT! KAMU TERPILIH MENJADI KETUA PELAKSANA HOLOGY 8.0! 🎉\n",
  //           "Selamat! Kami dengan senang hati menginformasikan bahwa kamu telah TERPILIH sebagai Ketua Pelaksana HOLOGY 8.0! 🥳",
  //           "Kami sangat antusias menyambutmu dan tidak sabar untuk bekerja sama dalam event ini. Untuk info selanjutnya, panitia akan menghubungi Anda melalui WhatsApp. 💪🔥 \n\n",
  //           "Salam hangat, Talent Growth 2025",
  //         ],
  //         rejectMessage: [
  //           "Mohon maaf", // !!JANGAN DIGANTI
  //           "❌ MOHON MAAF, KAMU BELUM TERPILIH 😢",
  //           "Mohon maaf, Anda belum terpilih menjadi Ketua Pelaksana HOLOGY 8.0",
  //           "Jangan berkecil hati! Masih banyak peluang lain untuk berkembang dan berkontribusi. Untuk info selanjutnya, panitia akan menghubungi Anda melalui WhatsApp. Tetap semangat dan terus berkarya! 💪🔥",
  //           "Salam hangat, Talent Growth 2025"
  //           // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
  //         ],
  // },

  // // ARTROPOLIS 2025 ✅✅
  // /*
  // Catatan: 
  // */
  // {
  //         id: "2025-OpenTenderKetuaPelaksanaARTROPOLIS", // id oprec formatnya tahun-oprec
  //         name: "OPEN TENDER KETUA PELAKSANA ARTROPOLIS 2025", // nama buat di tentang
  //         title: [
  //           "Open Tender Ketua Pelaksana", // line 1
  //           "ARTROPOLIS", // line 2
  //         ],
  //         description: [
  //           "Artropolis hadir sebagai ruang kreasi bagi mahasiswa untuk mengekspresikan bakat dan keterampilan di bidang seni. Melalui empat kegiatan menarik, yaitu kompetisi seni, workshop, pameran seni, dan malam penganugrahan. Kompetisi seni menjadi wadah bagi mahasiswa untuk mengekspresikan bakat mereka sekaligus menumbuhkan jiwa kompetitif. Pameran seni dan workshop bertujuan untuk mengasah kreativitas, serta memperluas wawasan mahasiswa di bidang seni. Para pemenang kompetisi Artropolis akan berpartisipasi dalam PEKSIMINAS (Pekan Seni Mahasiswa Nasional)."
  //         ],
  //         logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //         landingImage: `https://res.cloudinary.com/dks74omr4/image/upload/v1743515487/skm95wtszqfdpvbqsea7.jpg`,
  //         openDate: new Date("2025-03-11T15:00:00.999+07:00"), //ini nanti diganti 7 April
  //         closeDate: new Date("2025-04-12T23:59:00.999+07:00"),
  //         announceDate: new Date("2025-04-14T19:00:00.999+07:00"),
  //         onlyFor: [23, 24], // Angkatan berapa yg diterima
  //         extends: false, //Timeline Extends atau tidak
  //         timeline: [
  //           {
  //             date: "7 - 10 April 2025",
  //             description: "Open Tender",
  //           },
  //           // {
  //           //   date: "10 April 2025",
  //           //   description: "Close Registration",
  //           // },
  //           {
  //            date: "7 - 12 April 2025",
  //            description: "Extend Registration",
  //           },
  //           {
  //            date: "12 April 2025",
  //            description: "Close Registration",
  //           },
  //           {
  //             date: "8 - 13 April 2025",
  //             description: "Fit and Proper Test",
  //           },
  //          // nanti yang close diatas ini aja yang dikomen ketika extend
  //           {
  //             date: "14 April 2025",
  //             description: "Pengumuman 📢",
  //           },
  //         ], //semisal extends timelinenya diubah juga
      
  //         quotes:
  //           "Inspire, Create, Lead the Art Wave!", //kalo gaada quotes bisa dikosongkan
  //         options: [
  //         ], //pilihan divisi                                     
  //         formatDrive: "KAPEL_Antropolis_NamaLengkap", //format google drive yang tampil di form pendaftaran
  //         alur: [
  //           {
  //             description: 
  //             "1. Pendaftar membuka link pendaftaran di website SGE FILKOM UB.",
  //           },
  //           {
  //             description:
  //               "2. Pendaftar membuka dan membaca panduan alur pendaftaran open tender",
  //           },
  //           {
  //             description:
  //               "3. Pendaftar membuat salinan dari template yang disediakan dan mengisi berkas yang ditentukan (gunakan akun UB).",
  //             titleLink: "Template Berkas Pendaftaran",
  //             link: "https://drive.google.com/drive/folders/1iDkD9ymuImjZSXJ9CbLmESqs302DO77V?usp=drive_link",
  //           },
  //           {
  //             description:
  //               "4. Pendaftar mengunggah berkas pendaftaran berformat pdf ke dalam Google Drive pribadi yang berisi berkas-berkas yang diperlukan (pastikan sudah di-set ke all can view).",
  //           },
  //           {
  //             description:
  //               "5. Pendaftar mengisi data dan mengunggah link Google Drive yang berisi berkas open tender di website SGE.",
  //           },
  //           {
  //             description:
  //               "6. Pendaftar akan mendapatkan pemberitahuan tentang jadwal Fit and Proper yang akan diinformasikan melalui LINE setelah pendaftar telah resmi mendaftarkan diri melalui website SGE.",
  //           },
  //         ], //isi dari alur pendaftaran
  //         formFields: [
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "nama", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Siapa nama lengkapmu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: sulthon ihsan ",
  //           },
  //           {
  //             name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Kalau nama panggilan?", //pertanyaan yang ditampilin
  //             placeholder: "cth: ",
  //           }, 
  //           {
  //             name: "prodi", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Program Studi?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Sistem Informasi",
  //           },
  //           {
  //             name: "ttl", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Tempat, Tanggal Lahir?", //pertanyaan yang ditampilin
  //             placeholder: "Malang, 1 Januari 2005",
  //           },
  //           {
  //             name: "no_hp", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Nomor HP?", //pertanyaan yang ditampilin
  //             placeholder: "cth: 081234567890",
  //           },
  //           {
  //             name: "idline", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "ID Line?", //pertanyaan yang ditampilin
  //             placeholder: "cth: @itsgacorr",
  //           },
  //           {
  //             name: "alamat_asl", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Alamat Asal?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Jl. Candi No. 1, Bali",
  //           },
  //           {
  //             name: "alamat_mlg", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Sekarang tinggal di mana (Malang)?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Jl. Veteran No. 16",
  //           },
  //           {
  //             name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Apa alasan kamu ingin menjadi ketua pelaksana?", //pertanyaan yang ditampilin
  //             placeholder: " "
  //           },
  //           {
  //             name: "konsep", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Bisa jelasin konsep menarik yang ingin kamu usung untuk Artropolis 2025?", //pertanyaan yang ditampilin
  //             placeholder: " "
  //           },
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //             questions:
  //               "Terakhir, Link berkas (pastikan sudah diatur ke “everyone can view” 😉)", //pertanyaan yang ditampilin
  //             placeholder: "cth: https://drive.google.com/xxxxx",
  //             pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //           },
  //         ], //isi dari form field chat
  //         api: {
  //           auth: "https://bemfilkom.ddns.net:8443/",
  //           check: "https://bem-rest.vercel.app/check/2025/OptendKetupelArtropolis", // Check if registrant is already registered
  //           register:
  //             "https://bem-rest.vercel.app/register/2025/OptendKetupelArtropolis", // Input registrant data
  //           announce:
  //             "https://bem-rest.vercel.app/announce/2025/OptendKetupelArtropolis", // Check registrant's acceptance status
  //         },
  //         afterMessage: [
  //           "Terima kasih!",
  //           "Selamat kamu telah berhasil terdaftar sebagai calon Ketua pelaksana Artropolis 2025🥰",
  //         ],
  //         closedMessage: [
  //           "Maaf!",
  //           "Pendaftaran sudah ditutup 🙏",
  //           "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //         ],
  //         acceptMessage: [
  //           "Selamat!!!", // !!JANGAN DIGANTI
  //           "Kami dengan penuh semangat mengumumkan bahwa kamu telah TERPILIH sebagai Ketua Pelaksana ARTROPOLIS 2025! 🎊👏\n",
  //           "Kami sangat antusias menyambutmu dalam tim dan tidak sabar untuk berkolaborasi dalam menyukseskan event luar biasa ini. 🌟🔥",
  //           "Tetap pantau LINE-mu ya! Panitia akan segera menghubungi untuk informasi lebih lanjut. 💬📲\n",
  //           "Sekali lagi, selamat dan semangat menjalankan amanah ini! 🚀💪✨5",
  //         ],
  //         rejectMessage: [
  //           "Mohon MAAF", // !!JANGAN DIGANTI
  //           "TERIMA KASIH ATAS PARTISIPASIMU!\n",
  //           "Kami sangat mengapresiasi antusiasme dan dedikasimu dalam proses seleksi Ketua Pelaksana Artropolis 2025. Namun, mohon maaf, kali ini kamu belum terpilih untuk posisi tersebut.\n",
  //           "Jangan berkecil hati! Masih banyak kesempatan lain untuk berkembang dan berkontribusi. Kami percaya potensimu akan bersinar di kesempatan berikutnya! 🌟✨\n",
  //           "Tetap semangat dan terus berkarya! 💪🚀 Untuk info lebih lanjut, panitia akan menghubungimu melalui LINE 📲",
  //           "Salam hangat, Talent Growth 2025",
  //           // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
  //         ],
  // },
  
  // // FILKOM GOES TO SCHOOL 2025 📌📌
  // /*
  // Catatan:
  // 1. Extend 28-29 April 2025
  // */
  // {
  //         id: "2025-VolunteerFilkomGoesToSchool", // id oprec formatnya tahun-oprec
  //         name: "FILKOM GOES TO SCHOOL 2025", // nama buat di tentang
  //         title: [
  //           "Open Recruitment Volunteer", // line 1
  //           "FILKOM GOES TO SCHOOL", // line 2
  //         ],
  //         description: [
  //           "FILKOM Goes To School merupakan kegiatan tahunan yang diadakan BEM FILKOM UB dengan dukungan langsung dari pihak Kemahasiswaan. Bertujuan untuk memperkenalkan dan mempromosikan Fakultas Ilmu Komputer (FILKOM) Universitas Brawijaya, kepada Siswa/Siswi SMA/MA/SMK sederajat khususnya kelas 12 sebagai target yang akan melanjutkan pendidikan ke perguruan tinggi."
  //         ],
  //         logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //         landingImage: `https://res.cloudinary.com/dks74omr4/image/upload/v1744296381/pzztkppanuuw7akpcgfm.jpg`,
  //         openDate: new Date("2025-04-10T15:00:01.999+07:00"), //ini nanti diganti 7 April
  //         closeDate: new Date("2025-04-27T23:59:00.999+07:00"),
  //         announceDate: new Date("2025-05-05T19:15:00.999+07:00"),
  //         onlyFor: [24], // Angkatan berapa yg diterima
  //         extends: false, //Timeline Extends atau tidak
  //         timeline: [
  //           {
  //             date: "25 - 27 April 2025",
  //             description: "Open recruitment",
  //           },
  //           {
  //             date: "27 April 2025",
  //             description: "Close Registration",
  //           },
  //           {
  //             date: "28 April - 2 Mei 2025",
  //             description: "Screening",
  //           },
      
  //           // nanti yang close diatas ini aja yang dikomen ketika extend
  //           // {
  //           //  date: "28 - 29 April 2025",
  //           //  description: "Extend Registration",
  //           // },
  //           // {
  //           //  date: "29 April 2025",
  //           //  description: "Close Registration",
  //           // },
  //           {
  //             date: "5 Mei 2025",
  //             description: "Announcement📢",
  //           },
  //         ], //semisal extends timelinenya diubah juga
      
  //         quotes:
  //           "Masa depan dimulai hari ini, dari sekolah menuju dunia digital bersama FILKOM!", //kalo gaada quotes bisa dikosongkan
  //         options: [
  //           "Volunteer Individu",
  //           "Volunteer Kelompok"
  //         ], //pilihan divisi                                     
  //         formatDrive: "Nama Lengkap_Domisili_Individu/NamaAnggotaKelompok", //format google drive yang tampil di form pendaftaran
          
  //         //alur pendaftaran

  //         //alur untuk individu
  //         alur: [
  //           {
  //             description:
  //               "1. Pendaftar membuka laman web portal pendaftaran Volunteer FGTS 2025",
  //           },
  //           {
  //             description:
  //               "2. Pendaftar diwajibkan membaca guidebook open recruitment Volunteer FGTS 2025",
  //             titleLink: "Guidebook Volunteer FGTS",
  //             link: "https://drive.google.com/drive/folders/1GSOhY3978ZDzXnjIE1fCDIZIhbCweLDd?usp=sharing",
  //           },
  //           {
  //             description:
  //               "3. Pendaftar melengkapi dokumen administrasi open recruitment sesuai ketentuan.",
  //           },
  //           {
  //             description:
  //               "4. Pendaftar mengunggah dokumen administrasi ke folder Google Drive dengan format: (Nama Lengkap_Domisili_Individu) atau (Nama Lengkap_Domisili_Nama Anggota 1, Nama Anggota 2, dst)",
  //           },
  //           {
  //             description:
  //               "5. Pendaftar mengisi formulir pendaftaran secara online dan menyertakan link folder Google Drive",
  //           },
  //           {
  //             description:
  //               "6. Jika berkelompok, setiap anggota kelompok tetap diwajibkan untuk melakukan perintah nomor 5 secara individu",
  //           },
  //           {
  //             description:
  //               "6. Pendaftar akan menerima pesan konfirmasi secara personal melalui LINE oleh panitia perihal informasi tahap screening",
  //           },
  //         ], 
  //         formFields: [
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "nama", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Siapa nama lengkapmu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Sulthon Ihsan ",
  //           },
  //           {
  //             name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Kalau nama panggilan?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Audrey",
  //           }, 
  //           {
  //             name: "prodi", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Program Studimu apa?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Sistem Informasi",
  //           },
  //           {
  //             name: "idline", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Boleh dong diketik ID LINE mu", //pertanyaan yang ditampilin
  //             placeholder: "cth: @itsgacorr",
  //           },
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //             questions:
  //               "Terakhir, Link berkas (pastikan sudah diatur ke “everyone can view”😉)", //pertanyaan yang ditampilin
  //             placeholder: "cth: https://drive.google.com/xxxxx",
  //             pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //           },
  //         ], //isi dari form field chat
  //         api: {
  //           auth: "https://bemfilkom.ddns.net:8443/",
  //           check: "https://bem-rest.vercel.app/check/2025/OpenVolunteerFGTS", // Check if registrant is already registered
  //           register:
  //             "https://bem-rest.vercel.app/register/2025/OpenVolunteerFGTS", // Input registrant data
  //           announce:
  //             "https://bem-rest.vercel.app/announce/2025/OpenVolunteerFGTS", // Check registrant's acceptance status
  //         },
  //         afterMessage: [
  //           "Terima kasih!",
  //           "Selamat kamu telah berhasil terdaftar sebagai calon Volunteer Filkom Goes To School 2025🤩🎉",
  //         ],
  //         closedMessage: [
  //           "Maaf!",
  //           "Pendaftaran sudah ditutup 🙏",
  //           "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //         ],
  //         acceptMessage: [
  //           "Selamat!!!", // !!JANGAN DIGANTI
  //           "Selamat Kamu Diterima Menjadi Bagian Volunteer FGTS 2025!!!!!!",
  //           "Silahkan Gabung Grup dari link di bawah ini:",
  //           "https://line.me/R/ti/g/rTg8jwgUYm"
  //         ],
  //         rejectMessage: [
  //           "Mohon maaf", // !!JANGAN DIGANTI
  //           "Mohon Maaf Kamu Belum Berkesempatan untuk Menjadi Volunteer FGTS 2025😔🙏 Tetap Semangat Yahhhh!!!😊"
  //           // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
  //         ],
  // },

  // // ENVIROACT 2025 📌📌
  // /*
  // Catatan:
  // 1. Extend 26 - 28 April 2025
  // */
  // {
  //         id: "2025-VolunteerENVIROACT", // id oprec formatnya tahun-oprec
  //         name: "ENVIROACT 2025", // nama buat di tentang
  //         title: [
  //           "Open Recruitment Volunteer", // line 1
  //           "Environmental Awareness and Conservation Together", // line 2
  //         ],
  //         description: [
  //           "ENVIROACT(Environmental Awareness and Conservation Together) adalah sebuah gerakan yang dilakukan oleh mahasiswa FILKOM sebagai bentuk kepedulian terhadap kebersihan dan isu-isu lingkungan. "
  //         ],
  //         logo: LOGO_BEM, // gambar logo di home, login, dan robot image
  //         landingImage: `https://res.cloudinary.com/dks74omr4/image/upload/v1744631072/bwpuvrkrtzprtvuvztme.jpg`,
  //         openDate: new Date("2025-03-21T15:13:00.999+07:00"), //ini nanti diganti 7 April
  //         closeDate: new Date("2025-04-25T23:59:00.999+07:00"),
  //         announceDate: new Date("2025-04-30T18:00:00.999+07:00"),
  //         onlyFor: [24], // Angkatan berapa yg diterima
  //         extends: false, //Timeline Extends atau tidak
  //         timeline: [
  //           {
  //             date: "21 - 25 April 2025",
  //             description: "Open recruitment",
  //           },
  //           {
  //             date: "25 April 2025",
  //             description: "Close Registration",
  //           },
  //           {
  //             date: "22 April - 25 April 2025",
  //             description: "Screening",
  //           },
      
  //           // nanti yang close diatas ini aja yang dikomen ketika extend
  //           // {
  //           //  date: "26 - 28 April 2025",
  //           //  description: "Extend Registration",
  //           // },
  //           // {
  //           //  date: "28 April 2025",
  //           //  description: "Close Registration",
  //           // },
  //           //  date: "27 - 28 April 2025",
  //           //  description: "Screening",
  //           // },
  //           {
  //             date: "30 April 2025",
  //             description: "Announcement📢",
  //           },
  //         ], //semisal extends timelinenya diubah juga
      
  //         quotes:
  //           "Ditolak sekali, mencoba beribu kali. gagal sesekali, sukses pasti menanti.", //kalo gaada quotes bisa dikosongkan
  //         options: [
  //           "Acara",
  //           "PDD",
  //           "Humas",
  //           "Perlengkapan"
  //         ], //pilihan divisi                                     
  //         formatDrive: "Nama Lengkap_Domisili_Individu/NamaAnggotaKelompok", //format google drive yang tampil di form pendaftaran
          
  //         //alur pendaftaran

  //         //alur untuk individu
  //         alur: [
  //           {
  //             description:
  //               "1. Peserta diwajibkan mengikuti akun Instagram resmi @filkom_enviroact dan @bemfilkomub.",
  //           },
  //           {
  //             description:
  //               "2. Peserta membuka link berkas pendaftaran yang telah disediakan oleh SGE FILKOM.",
  //             titleLink: "Guidebook ENVIROACT",
  //             link: "https://drive.google.com/drive/folders/1ZYLDUnamjB-EONWXrqPuP6OLj1q3Zsv2?usp=sharing",
  //           },
  //           {
  //             description:
  //               "3. Unduh dan lengkapi berkas pendaftaran sesuai dengan format (EV_PIL1_PIL2_NamaLengkap). (contoh: EV_Acara_PDD_Zanita Alya Khairunnisa)",
  //           },
  //           {
  //             description:
  //               "4. Peserta diminta untuk me-repost poster Open Recruitment melalui Instagram Story serta dan men-tag akun @filkom_enviroact dan @bemfilkomub.",
  //           },
  //           {
  //             description:
  //               "5. Bacalah guidebook Open Recruitment secara menyeluruh sebagai standar dalam proses seleksi.",
  //           },
  //           {
  //             description:
  //               "6. Unggah seluruh berkas yang telah dilengkapi ke Google Drive pribadi, dengan pengaturan akses public atau shareable.",
  //           },
  //           {
  //             description:
  //               "7. Isi biodata diri melalui SGE FILKOM Website yang tersedia, serta lampirkan tautan Google Drive berisi berkas pendaftaran.",
  //           },
  //           {
  //             description:
  //               "8. Informasi terkait jadwal wawancara akan disampaikan oleh panitia melalui aplikasi LINE."
  //           },
  //         ], 
  //         formFields: [
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "nama", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Siapa nama lengkapmu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Sulthon Ihsan ",
  //           },
  //           {
  //             name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Kalau nama panggilan?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Audrey",
  //           }, 
  //           {
  //             name: "prodi", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Program Studimu apa?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Sistem Informasi",
  //           },
  //           {
  //             name: "no_wa", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Boleh minta nomor wa mu?", //pertanyaan yang ditampilin
  //             placeholder: "cth: 08123456789",
  //           },
  //           {
  //             name: "idline", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Boleh dong diketik ID LINE mu", //pertanyaan yang ditampilin
  //             placeholder: "cth: @itsgacorr",
  //           },
  //           {
  //             name: "alamat_asl", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Alamat asalmu dimana?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Jl. Candi no. 10, Bali ",
  //           },
  //           {
  //             name: "alamat_mlg", //name nya disesuain sama nama kolom yang di supabase
  //             questions: "Alamat kamu di Malang?", //pertanyaan yang ditampilin
  //             placeholder: "cth: Jl. Veteram no. 10",
  //           },
  //           {
  //             is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
  //             questions:
  //               "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
  //           },
  //           {
  //             name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
  //             questions:
  //               "Terakhir, Link berkas (pastikan sudah diatur ke “everyone can view”😉)", //pertanyaan yang ditampilin
  //             placeholder: "cth: https://drive.google.com/xxxxx",
  //             pattern: "/(drive.google.com)/", //pattern regex kalo perlu
  //           },
  //         ], //isi dari form field chat
  //         api: {
  //           auth: "https://bemfilkom.ddns.net:8443/",
  //           check: "https://bem-rest.vercel.app/check/2025/OpenVolunteerENVIROACT", // Check if registrant is already registered
  //           register:
  //             "https://bem-rest.vercel.app/register/2025/OpenVolunteerENVIROACT", // Input registrant data
  //           announce:
  //             "https://bem-rest.vercel.app/announce/2025/OpenVolunteerENVIROACT", // Check registrant's acceptance status
  //         },
  //         afterMessage: [
  //           "Terima kasih!",
  //           "Selamat kamu telah berhasil terdaftar sebagai calon staff EnviroACT 2025🤩",
  //         ],
  //         closedMessage: [
  //           "Maaf!",
  //           "Pendaftaran sudah ditutup 🙏",
  //           "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
  //         ],
  //         acceptMessage: [
  //           "Selamat!!!", // !!JANGAN DIGANTI
  //           "🌱SELAMATTT KAMU DITERIMAA 🌱",
  //           "Kami ucapkan selamat atas lolos nya kamu untuk menjadi staff ENVIROACT, Semoga kamu bisa berdedikasi dan bertanggung jawab dalam mengemban tugas yang akan diberikan nantinya dan kami juga berharap kamu juga bisa mendapatkan dampak yang baik karena telah menjadi staff ENVIROACT.",
  //           "Silakan gabung kedalam grup whatsapp berikut: ",
  //           "https://chat.whatsapp.com/LIa6dNcqPr8IAbDYJgKqmz"
  //         ],
  //         rejectMessage: [
  //           "Mohon maaf", // !!JANGAN DIGANTI
  //           "🙏MOHON MAAF🙏",
  //           "Kamu belum bisa menjadi staff ENVIROACT tetapi jangan berkecil hati dan selalu semangat karena masi banyak kesempatan di luar sana"
  //           // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
  //         ],
  // },

  // SCHOTIVAL 
  /*
  Catatan:
  1. Alur pendaftaran belum jelas. Masih konfirmasi
  2. Extend 1 - 3 Mei 2025
  */
  {
          id: "2025-SCHOTIVAL", // id oprec formatnya tahun-oprec
          name: "SCHOTIVAL 2025", // nama buat di tentang
          title: [
            "Open Recruitment Staff SCHOTIVAL 2025", // line 1
          ],
          description: [
            "SCHOTIVAL (Scholarship Festival) 2025 merupakan sebuah rangkaian acara sebagai wadah bagi mahasiswa khususnya mahasiswa Universitas Brawijaya dalam mendapatkan informasi seputar beasiswa. Yang berisikan rangkaian talkshow dan expo beasiswa yang akan menghadirkan pembicara untuk berbagi motivasi serta tips and trik memperoleh beasiswa juga mengadakan expo untuk bisa sharing langsung dengan awardee beasiswa tersebut."
          ],
          logo: LOGO_BEM, // gambar logo di home, login, dan robot image
          landingImage: `https://res.cloudinary.com/dks74omr4/image/upload/v1745165340/t8r3evsu0rzb8qnog6jr.jpg`,
          openDate: new Date("2025-03-25T09:00:00.999+07:00"), //ini nanti diganti jadi April
          closeDate: new Date("2025-04-30T23:59:00.999+07:00"),
          announceDate: new Date("2025-05-06T12:00:00.999+07:00"),
          onlyFor: [23, 24], // Angkatan berapa yg diterima
          extends: false, //Timeline Extends atau tidak
          timeline: [
            {
              date: "25 - 30 April 2025",
              description: "Open Recruitment",
            },
            {
              date: "30 April 2025",
              description: "Close Registration",
            },
            {
              date: "26 April - 3 Mei 2025",
              description: "Screening",
            },
      
            // nanti yang close diatas ini aja yang dikomen ketika extend
            // {
            //  date: "1 - 3 Mei 2025",
            //  description: "Extend Registration",
            // },
            // {
            //  date: "3 Mei 2025", pukul 23.59
            //  description: "Close Registration",
            // },
            //  date: "2 - 3 Mei 2025",
            //  description: "Screening",
            // },
            {
              date: "6 Mei 2025",
              description: "Announcement📢",
            },
          ], //semisal extends timelinenya diubah juga
      
          quotes:
            "Elevate Your Journey, Empower Your Future.", //kalo gaada quotes bisa dikosongkan
          options: [
            "Event Management",
            "Publication and Public Relation",
            "Equipment and Logistic",
            "Documentation and Digital Media Production",
            "Sponsorship and Fundraising"
          ], //pilihan divisi                                     
          formatDrive: "Pilihan1_Pilihan2_Nama Lengkap_SCHTL ‘25", //format google drive yang tampil di form pendaftaran
          
          //alur pendaftaran

          //alur untuk individu
          alur: [
            {
              description:
                "1. Pendaftar membuka link pendaftaran yang telah disediakan oleh SGE FILKOM (website ini).",
            },
            {
              description:
                "2. Pendaftar membaca Guidebook Open Recruitment Organizing Committee SCHOTIVAL 2025",
              titleLink: "Guidebook SCHOTIVAL",
              link: "https://www.canva.com/design/DAGkVW9j1KE/IVCsnIFwUxqMBJp3f-tSCg/edit?utm_content=DAGkVW9j1KE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            },
            {
              description:
                "3. Pendaftar menyiapkan seluruh ketentuan dan berkas berkas yang dapat di unduh pada link berikut lalu pilih link Berkas Pendaftaran dengan Make a copy.",
              titleLink: "Berkas Pendaftaran",
              link: "http://linktr.ee/SCHOTIVAL2025",
            },
            {
              description:
                "4. Pendaftar mengunggah seluruh berkas kedalam Google Drive Pribadi (akses wajib public) dengan format : PIL 1_PIL 2_NAMA LENGKAP_SCHTV'25. Contoh: Event Management_Sponshorship and Fundraising_Anindhita Faiza Aulia_SCHTV'25.",
            },
            {
              description:
                "5. Khusus pendaftar yang memilih divisi DDM, wajib menyertakan portofolio hasil karya berupa desain /multimedia ke dalam folder Google Drive.",
            },
            {
              description:
                "6. Pendaftar akan diumumkan informasi mengenai screening selambat-lambatnya H+2 setelah mendaftarkan diri melalui website SGE FILKOM",
            },
          ], 
          formFields: [
            {
              is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
              questions:
                "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
            },
            {
              name: "nama", //name nya disesuain sama nama kolom yang di supabase
              questions: "Siapa nama lengkapmu?", //pertanyaan yang ditampilin
              placeholder: "cth: Sulthon Ihsan ",
            },
            {
              name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
              questions: "Kalau nama panggilan?", //pertanyaan yang ditampilin
              placeholder: "cth: Audrey",
            }, 
            {
              name: "prodi", //name nya disesuain sama nama kolom yang di supabase
              questions: "Program Studimu apa?", //pertanyaan yang ditampilin
              placeholder: "cth: Sistem Informasi",
            },
            {
              name: "ttl", //name nya disesuain sama nama kolom yang di supabase
              questions: "Tempat, Tanggal Lahirmu?", //pertanyaan yang ditampilin
              placeholder: "cth: Malang, 29 Febreuari 2005",
            },
            {
              name: "no_hp", //name nya disesuain sama nama kolom yang di supabase
              questions: "Nomor HP kamu berapa?", //pertanyaan yang ditampilin
              placeholder: "cth: 08991234567",
            },
            {
              name: "idline", //name nya disesuain sama nama kolom yang di supabase
              questions: "Boleh dong diketik ID LINE mu", //pertanyaan yang ditampilin
              placeholder: "cth: @itsgacorr",
            },
            {
              name: "asal", //name nya disesuain sama nama kolom yang di supabase
              questions: "Silahkan masukkan alamat asalmu", //pertanyaan yang ditampilin
              placeholder: "cth: Jalan Veteran Nomor 8, Bekasi, Jawa Barat",
            },
            {
              name: "alamat", //name nya disesuain sama nama kolom yang di supabase
              questions: "Alamat kamu di Malang?", //pertanyaan yang ditampilin
              placeholder: "cth: Jalan Veteran Nomor 10, Malang, Jawa Timur",
            },
            {
              name: "pil1", //name nya disesuain sama nama kolom yang di supabase
              questions: "Masukkan pilihan pertama kamu", //pertanyaan yang ditampilin
              placeholder: "cth: Publication and Public Relation",
            },
            {
              name: "alasan1", //name nya disesuain sama nama kolom yang di supabase
              questions: "Alasan kamu memilih divisi ini?", //pertanyaan yang ditampilin
              placeholder: "cth: Karena sudah berpengalaman di bidang ini",
            },
            {
              name: "pil2", //name nya disesuain sama nama kolom yang di supabase
              questions: "Masukkan pilihan kedua kamu", //pertanyaan yang ditampilin
              placeholder: "cth: Event Management",
            },
            {
              name: "alasan2", //name nya disesuain sama nama kolom yang di supabase
              questions: "Alasan kamu memilih divisi ini?", //pertanyaan yang ditampilin
              placeholder: "cth: Ingin mencoba hal baru",
            },
            {
              name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
              questions: "Apa motivasi dan tujuan kamu mengikuti kepanitiaan SCHOTIVAL 2025?", //pertanyaan yang ditampilin
              placeholder: "cth: Ingin menambah pengalaman dan mengasah soft skills",
            },
            {
              name: "komitmen", //name nya disesuain sama nama kolom yang di supabase
              questions: "Jabarkan komitmen kamu jika terpilih menjadi staff SCHOTIVAL 2025?", //pertanyaan yang ditampilin
              placeholder: "cth: Saya akan bertanggung jawab atas tugas yang diberikan",
            },
            {
              name: "penilaian", //name nya disesuain sama nama kolom yang di supabase
              questions: "Alasan anda layak menjadi staff SCHOTIVAL 2025?", //pertanyaan yang ditampilin
              placeholder: "cth: Karena saya sudah memiliki banyak pengalaman",
            },
            {
              is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
              questions:
                "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
            },
            {
              name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
              questions:
                "Terakhir, Link berkas (pastikan sudah diatur ke “everyone can view”😉)", //pertanyaan yang ditampilin
              placeholder: "cth: https://drive.google.com/xxxxx",
              pattern: "/(drive.google.com)/", //pattern regex kalo perlu
            },
          ], //isi dari form field chat
          api: {
            auth: "https://bemfilkom.ddns.net:8443/",
            check: "https://bem-rest.vercel.app/check/2025/OptendKetupelSCHOTIVAL", // Check if registrant is already registered
            register:
              "https://bem-rest.vercel.app/register/2025/OptendKetupelSCHOTIVAL", // Input registrant data
            announce:
              "https://bem-rest.vercel.app/announce/2025/OptendKetupelSCHOTIVAL", // Check registrant's acceptance status
          },
          afterMessage: [
            "Terima kasih!",
            "Selamat kamu telah berhasil terdaftar sebagai Calon Staff SCHOTIVAL 2025🤩🎉",
          ],
          closedMessage: [
            "Maaf!",
            "Pendaftaran sudah ditutup 🙏",
            "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
          ],
          acceptMessage: [
            "Selamat!!!", // !!JANGAN DIGANTI
            "🌟 SELAMAT!!! 🌟",
            "Kamu resmi DITERIMA sebagai bagian dari SCHOTEAM! 🎉✨",
            "Terima kasih sudah melewati proses seleksi dengan semangat dan usaha terbaikmu. Kami tahu ini bukan perjalanan yang mudah, tapi kamu berhasil membuktikan kalau kamu pantas jadi bagian dari tim ini!",
            "Kami benar-benar nggak sabar buat kenalan lebih dekat sama kamu, dengar cerita-ceritamu, dan pastinya lihat potensi luar biasa yang kamu bawa. Di sinilah tempat kamu untuk berkembang, berkarya, dan bersinar bareng orang-orang hebat lainnya! 🚀",
            "Akan ada banyak kegiatan seru, tantangan seru, dan momen-momen tak terlupakan menanti. So, siapkan energi terbaikmu ya!",
            "Langsung aja gabung ke grup berikut untuk informasi lebih lanjut:",
            "https://chat.whatsapp.com/BxTLvjiSFk33Oe1bNbDiAi",
            "Welcome to SCHOTEAM!",
            "Let's create something amazing, together. 💪🔥",
          ],
          rejectMessage: [
            "Mohon maaf", // !!JANGAN DIGANTI
            "Hai, terima kasih banyak ya atas partisipasimu dalam open recruitment kali ini 💫",
            "Kami benar-benar menghargai waktu, usaha, dan semangat yang kamu tunjukkan selama proses seleksi. Namun setelah melalui pertimbangan yang matang, dengan berat hati kami sampaikan bahwa kamu belum bisa bergabung di kesempatan ini 😢",
            "Tapi jangan patah semangat ya! Kami percaya kamu punya potensi besar! Mungkin kali ini belum waktunya, tapi bukan berarti selamanya.", 
            "Tetap semangat berkarya, terus berkembang, dan sampai jumpa di kesempatan berikutnya! 💪✨", 
            "#KamuHebat #SampaiJumpaLagi" 
            // "Jangan patah semangat teruslah mencoba dan menyalaa🔥",
          ],
  },
  
];
