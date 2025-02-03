# oprec
BEM FILKOM Oprec Frontend Repository

# ⚠️ Warning
Push ke repository ini bisa men-trigger actions push ke FTP website BEM!

Alias => Kalau push ke sini, bisa langsung ke-push juga ke website. Jadi pastiin code-nya work di local sebelum dipush kesini ya!

Cara push ke website: tambahin kata `DEPLOY-TO-SITE` di commit message :)

# 🛠 Instructions:

- Edit file `.github/workflows/main.yml`
- Sesuaikan directory target push FTP di bagian ini:
  
  `dist_target_dir: "nama/folder/buat/push"`
  
  contoh: `dist_target_dir: "open/2021/OprecStaffAhli"`
  
- Ubah bagian `delete: "true"` jadi false kalau ga mau nimpa file lama.
