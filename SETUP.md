# Kurulum Rehberi — Başka Bir Bilgisayara Taşıma

GitHub olmadan proje transferi için.

---

## 📦 1. Neyi taşıyacağız (ve neyi taşımayacağız)

**Taşınacak** (tüm dosya ve klasörler):
- ✅ `app/`, `components/`, `content/`, `hooks/`, `lib/`, `types/`
- ✅ `public/` (ek medya dosyaları dahil)
- ✅ `styles/`
- ✅ Kök dizindeki **tüm** dosyalar: `package.json`, `package-lock.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`, `postcss.config.mjs`, `.clinerules`, `.gitignore`, `README.md`, `project_context.md`, `tech_stack.md`, `MEDIA_GUIDE.md`, `SETUP.md`

**Taşınmayacak** (atla — gereksiz, platforma bağımlı, yeniden üretilir):
- ❌ `node_modules/` — Hedef makinede `npm install` otomatik kurar
- ❌ `.next/` — Build cache, hedef makinede yeniden üretilir
- ❌ `.git/` (varsa)

---

## 📤 2. Kaynak makinede — ZIP oluşturma

### Yöntem A — PowerShell (önerilen, tek satır)

Karaağaç projesi dizininin **üstündeki** klasörde PowerShell aç, çalıştır:

```powershell
# c:\Users\Alpkan\Desktop\ dizininde çalıştırın
Compress-Archive `
  -Path (Get-ChildItem "karagac_train" -Exclude "node_modules",".next",".git" | Select-Object -ExpandProperty FullName) `
  -DestinationPath "karagac_train.zip" `
  -Force
```

Sonuç: `c:\Users\Alpkan\Desktop\karagac_train.zip` (birkaç MB — node_modules yoksa proje küçüktür).

> ⚠️ Dev server çalışıyorsa önce durdurun (`Ctrl+C`), aksi halde `.next/` kilitli kalabilir.

### Yöntem B — Windows Explorer (manuel)

1. Proje klasörünü aç: `c:\Users\Alpkan\Desktop\karagac_train`
2. İçeride `node_modules` ve `.next` klasörlerini **geçici olarak başka yere taşı** (veya sil — `npm install` geri getirir).
3. `karagac_train` klasörüne sağ tık → **Send to → Compressed (zipped) folder**.

### Yöntem C — 7-Zip ile (en temiz)

7-Zip kuruluysa:
```powershell
7z a -tzip karagac_train.zip karagac_train -xr!node_modules -xr!.next -xr!.git
```

---

## 🚚 3. Transfer

ZIP'i hedef makineye şunlardan biriyle götür:
- USB bellek
- Google Drive / Dropbox / OneDrive
- WeTransfer (10 GB'a kadar ücretsiz)
- Yerel ağ üzerinden dosya paylaşımı
- E-posta (küçük olursa)

---

## 💻 4. Hedef makinede — Kurulum

### 4.1. Node.js kur (eğer yoksa)

Hedef makinede terminalden test et:

```bash
node --version   # v18.17+ veya v20+ olmalı
npm --version    # v9+ olmalı
```

Yoksa **https://nodejs.org/** adresinden **LTS** sürümü indir ve kur. Kurulum sonrası yeni bir terminal aç.

### 4.2. ZIP'i aç

ZIP'i istediğin yere çıkar. Örnek:
```
C:\Users\<kullanici>\Desktop\karagac_train\
```

### 4.3. Bağımlılıkları kur + başlat

Proje klasörüne gir ve çalıştır:

```bash
# Bash veya CMD fark etmez
cd C:\Users\<kullanici>\Desktop\karagac_train
npm install
npm run dev
```

`npm install` ilk kez çalışırken **30–60 saniye** sürer (yaklaşık 394 paket indirilir).

Terminal şunu yazdığında hazır:
```
  ▲ Next.js 14.2.15
  - Local:        http://localhost:3000
 ✓ Ready in 1.8s
```

### 4.4. Tarayıcıyla aç

**http://localhost:3000**

---

## 🔍 5. Sık karşılaşılan sorunlar

### "npm komutu bulunamadı"
Node.js kurulmamış veya PATH'e eklenmemiş. Kurulumdan sonra **yeni bir terminal aç**.

### `npm install` sırasında EPERM / EACCES hatası
Proje klasörü kullanıcının ev dizininde (`C:\Users\<siz>\...`) olsun, `Program Files` altında olmasın.

### "Port 3000 already in use"
Başka bir uygulama 3000'i kullanıyor. Farklı port:
```bash
npm run dev -- -p 3001
```

### Font yüklenemiyor (internet gerekli)
[app/layout.tsx](./app/layout.tsx) Google Fonts'tan Cormorant Garamond + Inter çekiyor. İlk açılışta internet gerekir; sonra Next.js cache'ler. Offline kalıcı çözüm gerekirse `next/font/local` ile local `.woff2` kullanılır.

### "Module not found" hataları
`npm install` tamamlanmamış olabilir. Şunu dene:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 6. Hızlı özet kartı (hedef makinedeki kişiye ver)

```
1. Node.js LTS kur (nodejs.org)
2. ZIP'i aç
3. Proje klasörüne gir
4. npm install       ← ilk seferde 30-60 saniye
5. npm run dev       ← her seferinde
6. http://localhost:3000
```

---

## 📎 7. Ekstra — Production build (opsiyonel)

Yerel deneyim yerine optimize build test etmek için:

```bash
npm run build       # Build dosyalarını .next/'e üretir
npm start           # Üretim modunda serve eder (daha hızlı)
```

Bu, dev server'dan farklı: hot reload yok, ama gerçek kullanıcının göreceği hıza yakın.
