# Project Karaağaç — The Soul of the Station

## 1. Projenin Kalbi

Bu proje bir belgesel değildir. Bir **köprüdür**.

Edirne Karaağaç Tren Garı, 1914'te İsviçreli mimar A. Kemâleddin'in çizgileriyle değil, Fransız mimar tarafından tasarlanmış; Şark Demiryolları'nın Avrupa'ya açılan kapısı olarak inşa edilmiştir. Bir zamanlar Meriç'in kenarında buharlı trenleri karşılayan bu yapı; cumhuriyet sonrası sınırların yeniden çizilmesiyle işlevini kaybetmiş, bir süre âtıl kalmış, bugün ise Trakya Üniversitesi Rektörlüğü olarak işlev değiştirmiştir.

Yapı hâlâ ayaktadır — ama **"eski kendisi" değildir**. Duvarları, kendi dilinden konuşamadığı için suskundur.

Biz bu projede o duvarlara ses vermek istiyoruz.

## 2. "Duvarların Dili Olsa" — Metafor

Proje boyunca tek bir anlatıcı vardır: **binanın kendisi**.

Bina birinci tekil şahısla konuşur:
> *"1914'te doğdum. Meriç'in ıslak nefesini ilk kez ustalar temelimi atarken duydum..."*
> *"Son treni 1971 kışında uğurladım. Perondaki kar, o günden beri erimedi içimde."*

Bu ses; nostaljik değil, **tanıklık eden** bir sestir. Kullanıcı izleyici değildir, bir **tanıktır**. Binaya değil, binanın yanında durur.

## 3. Kolektif Hafıza ve Urban Memory

Karaağaç Garı, sadece bir yapı değil; Edirne'nin Balkanlar'la, göçle, mübadeleyle, savaşla, ticaretle kurduğu ilişkinin **mekânsal bir arşividir**. Yıkılmaya yüz tutmuş ya da işlevi değişmiş tarihi yapıların hafızası genellikle iki arşivde yaşar:

1. **Resmi arşiv**: Planlar, kararnameler, gazete küpürleri, kartpostallar.
2. **Gayri-resmi arşiv**: Anneannenin treni beklediği bir öğleden sonrasının anısı, bir demiryolu işçisinin çocuğunun peronda oynadığı oyunun sesi.

Proje, bu iki arşivi **aynı yüzey üzerinde** — binanın sanal haritası üzerinde — buluşturur. Kullanıcı bir pencereye tıkladığında hem o pencerenin mimari detayını, hem de o pencereden bakan birinin 1952'deki anısını görebilir.

## 4. Kullanıcı Yolculuğu (User Journey)

```
Açılış Sahnesi (Atmosferik Intro)
         │
         ▼
   Ana Canvas / Harita
   (Binanın görsel haritası + hotspot'lar)
         │
         ▼
 ┌───────┴────────┐
 │                │
Hotspot A      Hotspot B     ...  (Kullanıcı kendi rotasını çizer)
 │                │
 ▼                ▼
Multimedya     Arşiv Katmanı
Anlatısı       (eski/yeni overlay)
 │                │
 └───────┬────────┘
         │
         ▼
   Karar Anı (Decision Moment)
   "Bu yapının geleceği ne olmalı?"
   [Müze] [Kütüphane] [Kültür Merkezi] [Olduğu Gibi Kalsın]
         │
         ▼
   Global İstatistik & Paylaşım
```

**Doğrusal değildir**: Kullanıcı sabit bir video izlemez. Harita üzerinde serbestçe dolaşır, kendi keşif sırasını oluşturur. Anlatı, seçimleriyle şekillenir.

## 5. Deneyimin Üç Katmanı

### Katman 1 — Görsel (The Skin)
Binanın 4K drone çekimleri ve detay fotoğrafları. Mimari çizimlerin şeffaf overlay'leri. "Şimdi/O zaman" kaydırıcıları (aynı açıdan 1920 vs. 2025).

### Katman 2 — Ses (The Breath)
Mekân odaklı **soundscape**: Meriç'in rüzgârı, metalin genleşme sesi, uzak bir tren düdüğü, perondan yükselen fısıltılar. Ses; müzik değil, **atmosferdir**. Binanın kendi sesidir.

### Katman 3 — Metin (The Voice)
Binanın monologları. Arşiv belgelerinden alıntılar. Gazete küpürleri. Mübadele dönemi yolcu listeleri. Hepsi modern, temiz bir UI içinde sergilenir — müze vitrini gibi değil, **yaşayan bir sayfa** gibi.

## 6. Karar Anı ve Toplumsal Katılım

Deneyimin sonunda kullanıcıya bir soru sorulur:
> *"Benim geleceğim ne olsun?"*

Seçenekler basit değildir — her seçimin ardından o seçimi daha önce yapmış olanların oranı ve kısa gerekçeleri görünür. Kullanıcı kendi gerekçesini yazabilir. Böylece proje; sadece bir anma değil, **katılımcı bir kentsel hafıza arşivi** haline gelir.

Bu veriler Supabase/Firebase üzerinde real-time toplanır ve gelecekte araştırmacılara/belediyelere açık bir veri seti olarak sunulabilir.

## 7. Projenin Etik Çerçevesi

- **Sahiplenmeci değiliz**: Bina kimsenin değil, şehrindir. Anlatı buna saygı duyar.
- **Nostaljiye teslim olmayız**: Geçmişi yüceltmek değil, hatırlamak ve soru sormak amacımızdır.
- **Erişilebilirdir**: Görme engelli bir kullanıcı da binayı "dinleyerek" gezebilmelidir.
- **Çok dilli olacaktır**: TR birincil, EN ikincil; ilerleyen fazlarda BG/GR (komşu hafızalar).

## 8. Vizyon Cümlesi

> *Karaağaç, bir zamanlar insanları sınırın öte yakasına taşırdı.*
> *Bugün biz onu, zamanın öte yakasından bu yakaya taşıyoruz.*
