export type Lang = "tr" | "en" | "bg" | "el";

export interface LangOption {
  code: Lang;
  label: string;
  flag: string;
}

export const LANGUAGES: LangOption[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "bg", label: "Български", flag: "🇧🇬" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
];

const translations: Record<Lang, Record<string, string>> = {
  tr: {
    /* ─── Header / Nav ─── */
    "nav.home": "Ana Sayfa",
    "nav.experience": "Rota",
    "nav.mekan": "Mekanlar",
    "nav.cta": "Rotayı Keşfet",

    /* ─── Hero ─── */
    "hero.tag": "Karaağaç / 2026",
    "hero.subtitle": "Bir kentsel hafıza projesi",
    "hero.caption": "Duvarların dili olsa",
    "hero.heading": "Şehrin Unutulmuş Hikâyelerine Hazır Mısınız?",
    "hero.body":
      "Bu proje, yıkılmaya yüz tutmuş ya da işlevi değişmiş tarihi yapıların izini sürerek, onların geçmişten bugüne taşıdığı hikâyeleri kendi 'sesinden' anlatır. Harita üzerinden dilediğin yapıyı seç, etkileşimli içeriklerle detayları keşfet ve şehrin kolektif hafızasında kendi yolculuğunu oluştur. Çünkü bazı hikâyeler, sadece duvarlar konuştuğunda duyulur.",
    "hero.cta": "Deneyime Başla",
    "hero.cta.note":
      "Yaklaşık 8 dakika. Sesli anlatı içerir. Kendi rotanızı çizersiniz.",

    /* ─── Hero footer stats ─── */
    "stat.location.label": "Konum",
    "stat.location.value": "Edirne / Karaağaç",
    "stat.year.label": "Yapım Yılı",
    "stat.year.value": "1914",
    "stat.current.label": "Şimdiki Hali",
    "stat.current.value": "Trakya Ü. Rektörlüğü",
    "stat.narrator.label": "Anlatıcı",
    "stat.narrator.value": "Binanın kendisi",

    /* ─── Media Archive Section ─── */
    "media.tag": "Bölüm 02 — Medya Arşivi",
    "media.title.1": "Üç katman,",
    "media.title.2": "tek bir yüzey.",
    "media.body":
      "Binayı üç katmanda birlikte okuyacağız: sesinde, görüntüsünde, hafızasında. Aşağıdaki slotlar tasarımda hazır — içerik geldiğinde sadece yerlerini alırlar.",
    "media.slot.sound": "Ses",
    "media.slot.video": "",
    "media.slot.photo": "Fotoğraf",
    "media.sound.tag": "01 · Nefes",
    "media.sound.title": "Duvarlarımın sesi",
    "media.sound.body":
      "Meriç rüzgârı, peron uğultusu, saatimin çanı. Saha kayıtları bu dalga formunun yerine gelecek.",
    "media.video.tag": "01",
    "media.video.title": "Yüzümün hareketi",
    "media.video.body":
      "Sabit video akışı değil — hotspot'larla tetiklenen kısa, atmosferik kareler.",
    "media.photo.tag": "02 · Hafıza",
    "media.photo.title": "Arşivin dokunulabilir hali",
    "media.photo.body":
      "Eski fotoğraflar, belgeler, pul ve biletler. Arşiv parçaları yerlerine oturduğunda hafıza somutlaşır.",

    /* ─── Journey Section ─── */
    "journey.tag": "Bölüm 03 — Yolculuk",
    "journey.title": "Kendi rotanı çiz.",
    "journey.body":
      "Doğrusal bir belgesel değil. Harita üzerinde özgürce dolaş, duvarları seç, binanın sana anlatacaklarını kendi sıranla dinle.",
    "journey.step1.title": "Yüzey",
    "journey.step1.body": "Binanın şematik haritasında noktalar keşfet.",
    "journey.step2.title": "Anlatı",
    "journey.step2.body": "Seçtiğin noktada bina birinci ağızdan konuşsun.",
    "journey.step3.title": "Karar",
    "journey.step3.body":
      "Deneyim sonunda binanın geleceğine dair söz söyle.",
    "journey.cta.text": "Hazırsan, Karaağaç'ı keşfetmeye?",
    "journey.cta.button": "Yüzeye Git →",

    /* ─── Footer ─── */
    "footer.copyright": "© 2026 · Karaağaç Projesi · Kentsel Hafıza Arşivi",
    "footer.note": "Tüm görsel · ses · video alanları placeholder",

    /* ─── Route Page ─── */
    "route.back": "Girişe dön",
    "route.tag": "Karaağaç Rotası",
    "route.title": "Karaağaç'ta gezilecek yerler.",
    "route.body": "Meriç kıyısında tarih, sanat ve doğa bir arada. Müzelerden tarihi evlere, nehir kenarından anıtlara — kendi rotanı oluştur.",
    "route.stops": "durak",
    "route.hours": "s ",
    "route.min": "dk",
    "route.filter.all": "Tümü",
    "route.filter.museum": "Müze",
    "route.filter.landmark": "Anıt",
    "route.filter.nature": "Doğa",
    "route.filter.culture": "Kültür",
    "route.viewMap": "Haritada Gör",
    "route.place1.title": "Milli Mücadele ve Lozan Müzesi",
    "route.place1.desc": "Lozan Barış Antlaşması'na dair belgeler, İsmet İnönü'ye ait eşyalar ve döneme ait tarihi materyaller sergilenmektedir.",
    "route.place2.title": "İlhan Koman Heykel ve Resim Müzesi",
    "route.place2.desc": "Ünlü heykeltıraş İlhan Koman'ın eserlerinin sergilendiği, Trakya Üniversitesi yerleşkesi içindeki sanat müzesi.",
    "route.place3.title": "Tarihi Karaağaç Tren Garı",
    "route.place3.desc": "1914'te inşa edilen, Osmanlı-Avrupa hattının son durağı olan ikonik gar binası. Bugün üniversite yerleşkesi olarak kullanılıyor.",
    "route.place4.title": "Lozan Anıtı",
    "route.place4.desc": "1923 Lozan Antlaşması ile Karaağaç'ın Türkiye sınırlarına dahil edilmesini simgeleyen anıt.",
    "route.place5.title": "Meriç Nehri Sahili",
    "route.place5.desc": "Nehir boyunca uzanan ağaçlık yürüyüş yolu. Gün batımında muhteşem manzara, kuş gözlemi ve huzurlu bir atmosfer sunar.",
    "route.place6.title": "Tarihi Karaağaç Evleri",
    "route.place6.desc": "'Küçük Paris' olarak anılan semtteki tescilli Osmanlı tarzı ahşap evler ve eski konsolosluk binaları.",
    "route.place7.title": "Jandarma Şehitliği",
    "route.place7.desc": "Bölgenin tarihi önemiyle bağlantılı, saygıyla ziyaret edilmesi gereken anlamlı bir anıt alan.",
    "route.place8.title": "Trakya Üniversitesi Karaağaç Yerleşkesi",
    "route.place8.desc": "Tarihi dokusu ve peyzajıyla bir 'müze kampüs' niteliğinde. İçerisinde çeşitli müze ve tarihi köşkleri barındırır.",
    "route.place9.title": "Trakya Üniversitesi Doğa Tarihi Müzesi",
    "route.place9.desc": "Trakya bölgesinin zengin biyolojik çeşitliliğini sergileyen doğa tarihi müzesi. Fosiller, mineral koleksiyonları ve yöresel fauna örnekleri ile doğanın hikâyesini anlatır.",
    "route.summary.tag": "Rota Özeti",
    "route.summary.text": "Karaağaç, bir günlük yürüyüşe sığacak kadar küçük, bir ömre yetecek kadar derin.",
    "route.summary.cta": "← Ana Sayfaya Dön",
    "route.footer.hint": "Kartlara tıklayarak detayları ve harita bağlantılarını görebilirsiniz",

    "route.bestTimeLabel": "En iyi ziyaret saati",
    "route.tipsLabel": "İpuçları",
    "route.placesCount": "Yer · Sıra ile takip et",
    "route.clear": "Temizle",
    "route.footerHint": "Meriç Nehri'nden başlayarak coğrafi sıraya göre",
    "route.total": "Toplam",
    "route.stopSingle": "Durak",
    "route.clickToListen": "Karta tıkla → sesli tanıtım",
    "route.categoryLabel": "Kategori",
    "route.audioNarrative": "Sesli Anlatım",
    "route.stopAudio": "Durdur",
    "route.audioIntro": "Sesli tanıtım",
    "route.stop": "DUR",
    "route.map.street": "Sokak",
    "route.map.satellite": "Uydu",

    "route.place5.bestTime": "Gün batımı (18:00–20:00)",
    "route.place5.tips.0": "Bisiklet yolu mevcut",
    "route.place5.tips.1": "Kuş gözlemi için sabah saatleri ideal",
    "route.place5.tips.2": "Piknik alanları var",

    "route.place4.bestTime": "Her saatte",
    "route.place4.tips.0": "Lozan Müzesi ile birlikte ziyaret edin",
    "route.place4.tips.1": "Fotoğraf için açık alan",

    "route.place1.bestTime": "09:00–17:00 (Pts kapalı)",
    "route.place1.tips.0": "Ücretsiz giriş",
    "route.place1.tips.1": "Rehberli tur mevcut",

    "route.place3.bestTime": "Sabah erken (08:00–10:00)",
    "route.place3.tips.0": "Tarihi peron hâlâ görülebilir",
    "route.place3.tips.1": "Kampüs ile birleştirin",

    "route.place2.bestTime": "10:00–16:00",
    "route.place2.tips.0": "Açık alanda da eserler var",
    "route.place2.tips.1": "Kampüs içinde yürüyerek ulaşılır",

    "route.place9.bestTime": "10:00–16:00",
    "route.place9.tips.0": "Çocuklar için eğitici",
    "route.place9.tips.1": "Fosil koleksiyonu dikkat çekici",

    "route.place8.bestTime": "Hafta içi 09:00–17:00",
    "route.place8.tips.0": "Güzel Sanatlar Fakültesi binaları muhteşem",
    "route.place8.tips.1": "Kafeterya mevcut",

    "route.place6.bestTime": "Sabah veya öğleden sonra",
    "route.place6.tips.0": "Eski konsolosluklar görülmeli",
    "route.place6.tips.1": "Yürüyüş ayakkabısı önerilir",

    "route.place7.bestTime": "Her saatte",
    "route.place7.tips.0": "Sessiz ve saygılı ziyaret",
    "route.place7.tips.1": "Tarihi bağlamı okuyun",

    /* ─── Narrative Player ─── */
    "narrative.back": "Yüzeye Dön",
    "narrative.voice": "Binanın sesinden",
    "narrative.mediaLayer": "Medya Katmanı",
    "narrative.backToMap": "Haritaya Dön",
    "narrative.next": "Sonraki Bölüm →",
  },

  en: {
    /* ─── Header / Nav ─── */
    "nav.home": "Home",
    "nav.experience": "Route",
    "nav.mekan": "Places",
    "nav.cta": "Explore Route",

    /* ─── Hero ─── */
    "hero.tag": "Karaağaç / 2026",
    "hero.subtitle": "An urban memory project",
    "hero.caption": "If walls could speak",
    "hero.heading": "Are you ready to listen to the forgotten stories of the city?",
    "hero.body":
      "This project traces the footsteps of historic buildings that have been abandoned or repurposed, telling their stories from the past to the present in their own 'voice.' Choose any building on the map, explore details through interactive content, and create your own journey within the collective memory of the city. Because some stories can only be heard when the walls speak.",
    "hero.cta": "Start Experience",
    "hero.cta.note":
      "About 8 minutes. Includes narration. You create your own path.",

    /* ─── Hero footer stats ─── */
    "stat.location.label": "Location",
    "stat.location.value": "Edirne / Karaağaç",
    "stat.year.label": "Year Built",
    "stat.year.value": "1914",
    "stat.current.label": "Current Use",
    "stat.current.value": "Trakya Uni. Rectorate",
    "stat.narrator.label": "Narrator",
    "stat.narrator.value": "The building itself",

    /* ─── Media Archive Section ─── */
    "media.tag": "Chapter 02 — Media Archive",
    "media.title.1": "Three layers,",
    "media.title.2": "one surface.",
    "media.body":
      "We will read the building together in three layers: its sound, its image, its memory. The slots below are ready in the design — when the content arrives, they simply take their places.",
    "media.slot.sound": "Sound",
    "media.slot.video": "",
    "media.slot.photo": "Photo",
    "media.sound.tag": "01 · Breath",
    "media.sound.title": "The voice of my walls",
    "media.sound.body":
      "Maritsa wind, platform hum, the chime of my clock. Field recordings will replace this waveform.",
    "media.video.tag": "01",
    "media.video.title": "The movement of my face",
    "media.video.body":
      "Not a static video stream — short, atmospheric frames triggered by hotspots.",
    "media.photo.tag": "02 · Memory",
    "media.photo.title": "The tangible archive",
    "media.photo.body":
      "Old photographs, documents, stamps and tickets. Memory becomes concrete when archival pieces find their place.",

    /* ─── Journey Section ─── */
    "journey.tag": "Chapter 03 — Journey",
    "journey.title": "Draw your own path.",
    "journey.body":
      "Not a linear documentary. Explore freely on the map, choose walls, listen to what the building has to tell you in your own order.",
    "journey.step1.title": "Surface",
    "journey.step1.body": "Discover points on the building's schematic map.",
    "journey.step2.title": "Narrative",
    "journey.step2.body":
      "Let the building speak in first person at the point you choose.",
    "journey.step3.title": "Decision",
    "journey.step3.body":
      "At the end of the experience, have your say about the building's future.",
    "journey.cta.text": "Ready for a walk between the walls?",
    "journey.cta.button": "Go to Surface →",

    /* ─── Footer ─── */
    "footer.copyright": "© 2026 · Karaağaç Project · Urban Memory Archive",
    "footer.note": "All visual · audio · video areas are placeholders",

    /* ─── Route Page ─── */
    "route.back": "Back to intro",
    "route.tag": "Karaağaç Route",
    "route.title": "Places to visit in Karaağaç.",
    "route.body": "History, art and nature come together along the Maritsa. From museums to historic houses, from the riverbank to monuments — create your own route.",
    "route.stops": "stops",
    "route.hours": "h ",
    "route.min": "min",
    "route.filter.all": "All",
    "route.filter.museum": "Museum",
    "route.filter.landmark": "Landmark",
    "route.filter.nature": "Nature",
    "route.filter.culture": "Culture",
    "route.viewMap": "View on Map",
    "route.place1.title": "National Struggle & Lausanne Museum",
    "route.place1.desc": "Documents related to the Treaty of Lausanne, personal belongings of İsmet İnönü, and historical materials from the era.",
    "route.place2.title": "İlhan Koman Sculpture & Painting Museum",
    "route.place2.desc": "Art museum within Trakya University campus featuring works of renowned sculptor İlhan Koman.",
    "route.place3.title": "Historic Karaağaç Train Station",
    "route.place3.desc": "The iconic station built in 1914, the last stop on the Ottoman-European line. Now serves as university campus.",
    "route.place4.title": "Lausanne Monument",
    "route.place4.desc": "Monument symbolizing Karaağaç's inclusion within Turkey's borders through the 1923 Treaty of Lausanne.",
    "route.place5.title": "Maritsa Riverbank",
    "route.place5.desc": "Tree-lined walking path along the river. Stunning sunset views, birdwatching and a peaceful atmosphere.",
    "route.place6.title": "Historic Karaağaç Houses",
    "route.place6.desc": "Registered Ottoman-style wooden houses and former consulate buildings in the district known as 'Little Paris'.",
    "route.place7.title": "Gendarmerie Memorial",
    "route.place7.desc": "A meaningful memorial site connected to the historical significance of the region.",
    "route.place8.title": "Trakya University Karaağaç Campus",
    "route.place8.desc": "A 'museum campus' with historic architecture and landscape. Houses various museums and historic mansions.",
    "route.place9.title": "Trakya University Natural History Museum",
    "route.place9.desc": "A natural history museum showcasing the rich biodiversity of the Thrace region. Tells the story of nature through fossils, mineral collections and local fauna specimens.",
    "route.summary.tag": "Route Summary",
    "route.summary.text": "Karaağaç is small enough for a day's walk, deep enough for a lifetime.",
    "route.summary.cta": "← Back to Home",
    "route.footer.hint": "Click cards for details and map links",

    "route.bestTimeLabel": "Best time to visit",
    "route.tipsLabel": "Tips",
    "route.placesCount": "Places · Follow in order",
    "route.clear": "Clear",
    "route.footerHint": "Geographical order starting from Maritsa River",
    "route.total": "Total",
    "route.stopSingle": "Stop",
    "route.clickToListen": "Click card → audio guide",
    "route.categoryLabel": "Category",
    "route.audioNarrative": "Audio Narrative",
    "route.stopAudio": "Stop",
    "route.audioIntro": "Audio guide",
    "route.stop": "STOP",
    "route.map.street": "Street",
    "route.map.satellite": "Satellite",

    "route.place5.bestTime": "Sunset (18:00–20:00)",
    "route.place5.tips.0": "Bicycle path available",
    "route.place5.tips.1": "Morning hours are ideal for bird watching",
    "route.place5.tips.2": "Picnic areas available",

    "route.place4.bestTime": "Anytime",
    "route.place4.tips.0": "Visit together with the Lausanne Museum",
    "route.place4.tips.1": "Open area for photography",

    "route.place1.bestTime": "09:00–17:00 (Closed Mon)",
    "route.place1.tips.0": "Free entry",
    "route.place1.tips.1": "Guided tour available",

    "route.place3.bestTime": "Early morning (08:00–10:00)",
    "route.place3.tips.0": "Historic platform is still visible",
    "route.place3.tips.1": "Combine with campus",

    "route.place2.bestTime": "10:00–16:00",
    "route.place2.tips.0": "There are also artworks in the open area",
    "route.place2.tips.1": "Reachable by walking within the campus",

    "route.place9.bestTime": "10:00–16:00",
    "route.place9.tips.0": "Educational for children",
    "route.place9.tips.1": "Fossil collection is remarkable",

    "route.place8.bestTime": "Weekdays 09:00–17:00",
    "route.place8.tips.0": "Fine Arts Faculty buildings are magnificent",
    "route.place8.tips.1": "Cafeteria available",

    "route.place6.bestTime": "Morning or afternoon",
    "route.place6.tips.0": "Old consulates are a must-see",
    "route.place6.tips.1": "Walking shoes recommended",

    "route.place7.bestTime": "Anytime",
    "route.place7.tips.0": "Quiet and respectful visit",
    "route.place7.tips.1": "Read the historical context",

    /* ─── Narrative Player ─── */
    "narrative.back": "Back to Surface",
    "narrative.voice": "From the building's voice",
    "narrative.mediaLayer": "Media Layer",
    "narrative.backToMap": "Back to Map",
    "narrative.next": "Next Chapter →",
  },

  bg: {
    /* ─── Header / Nav ─── */
    "nav.home": "Начало",
    "nav.experience": "Маршрут",
    "nav.mekan": "Места",
    "nav.cta": "Открий маршрута",

    /* ─── Hero ─── */
    "hero.tag": "Караагач / 2026",
    "hero.subtitle": "Проект за градска памет",
    "hero.caption": "Ако стените можеха да говорят",
    "hero.heading": "Готов ли си да чуеш забравените истории на града?",
    "hero.body":
      "Този проект проследява стъпките на исторически сгради, които са изоставени или са сменили предназначението си, разказвайки техните истории от миналото до днес с техния собствен 'глас.' Изберете сграда на картата, открийте подробности чрез интерактивно съдържание и създайте собственото си пътешествие в колективната памет на града.",
    "hero.cta": "Започни преживяването",
    "hero.cta.note":
      "Около 8 минути. Включва разказ. Вие начертавате своя маршрут.",

    /* ─── Hero footer stats ─── */
    "stat.location.label": "Местоположение",
    "stat.location.value": "Одрин / Караагач",
    "stat.year.label": "Година на построяване",
    "stat.year.value": "1914",
    "stat.current.label": "Настоящо ползване",
    "stat.current.value": "Ректорат на Тракийски Университет",
    "stat.narrator.label": "Разказвач",
    "stat.narrator.value": "Самата сграда",

    /* ─── Media Archive Section ─── */
    "media.tag": "Глава 02 — Медиен архив",
    "media.title.1": "Три слоя,",
    "media.title.2": "една повърхност.",
    "media.body":
      "Ще прочетем сградата заедно в три слоя: нейният звук, нейното изображение, нейната памет. Слотовете по-долу са готови в дизайна — когато съдържанието пристигне, те просто заемат местата си.",
    "media.slot.sound": "Звук",
    "media.slot.video": "",
    "media.slot.photo": "Снимка",
    "media.sound.tag": "01 · Дъх",
    "media.sound.title": "Гласът на стените ми",
    "media.sound.body":
      "Вятър от Марица, шум от перона, камбаната на часовника ми. Теренните записи ще заменят тази вълнова форма.",
    "media.video.tag": "01",
    "media.video.title": "Движението на лицето ми",
    "media.video.body":
      "Не статичен видео поток — кратки, атмосферни кадри, задействани от горещи точки.",
    "media.photo.tag": "02 · Памет",
    "media.photo.title": "Осезаемият архив",
    "media.photo.body":
      "Стари фотографии, документи, печати и билети. Паметта се материализира, когато архивните части намерят мястото си.",

    /* ─── Journey Section ─── */
    "journey.tag": "Глава 03 — Пътуване",
    "journey.title": "Начертай своя маршрут.",
    "journey.body":
      "Не линеен документален филм. Разглеждай свободно картата, избирай стени, слушай какво сградата има да ти каже в своя ред.",
    "journey.step1.title": "Повърхност",
    "journey.step1.body": "Открий точки на схематичната карта на сградата.",
    "journey.step2.title": "Разказ",
    "journey.step2.body":
      "Нека сградата говори от първо лице в точката, която избереш.",
    "journey.step3.title": "Решение",
    "journey.step3.body":
      "В края на преживяването кажи своето мнение за бъдещето на сградата.",
    "journey.cta.text": "Готов ли си за разходка между стените?",
    "journey.cta.button": "Към повърхността →",

    /* ─── Footer ─── */
    "footer.copyright": "© 2026 · Проект Караагач · Архив на градска памет",
    "footer.note": "Всички визуални · аудио · видео области са заместители",

    /* ─── Route Page ─── */
    "route.back": "Обратно към въведението",
    "route.tag": "Маршрут Караагач",
    "route.title": "Места за посещение в Караагач.",
    "route.body": "История, изкуство и природа заедно край Марица. От музеи до исторически къщи — създай свой маршрут.",
    "route.stops": "спирки",
    "route.hours": "ч ",
    "route.min": "мин",
    "route.filter.all": "Всички",
    "route.filter.museum": "Музей",
    "route.filter.landmark": "Паметник",
    "route.filter.nature": "Природа",
    "route.filter.culture": "Култура",
    "route.viewMap": "Виж на картата",
    "route.place1.title": "Музей на националната борба и Лозана",
    "route.place1.desc": "Документи от Лозанския договор, лични вещи на Исмет Иньоню и исторически материали от епохата.",
    "route.place2.title": "Музей за скулптура и живопис Илхан Коман",
    "route.place2.desc": "Художествен музей в кампуса на Тракийския университет с произведения на известния скулптор.",
    "route.place3.title": "Историческа жп гара Караагач",
    "route.place3.desc": "Емблематичната гара, построена през 1914 г. — последната спирка по османско-европейската линия.",
    "route.place4.title": "Паметник на Лозана",
    "route.place4.desc": "Паметник, символизиращ включването на Караагач в границите на Турция чрез Лозанския договор от 1923 г.",
    "route.place5.title": "Бряг на река Марица",
    "route.place5.desc": "Алея за разходка край реката. Зашеметяващи залези, наблюдение на птици и спокойна атмосфера.",
    "route.place6.title": "Исторически къщи в Караагач",
    "route.place6.desc": "Регистрирани османски дървени къщи и бивши консулски сгради в квартала, известен като 'Малък Париж'.",
    "route.place7.title": "Мемориал на жандармерията",
    "route.place7.desc": "Значим мемориален обект, свързан с историческото значение на региона.",
    "route.place8.title": "Кампус Караагач на Тракийски университет",
    "route.place8.desc": "'Музеен кампус' с историческа архитектура. Съдържа различни музеи и исторически конаци.",
    "route.place9.title": "Музей по естествена история на Тракийски университет",
    "route.place9.desc": "Музей по естествена история, представящ богатото биологично разнообразие на Тракия. Разказва историята на природата чрез фосили, минерални колекции и местна фауна.",
    "route.summary.tag": "Резюме на маршрута",
    "route.summary.text": "Караагач е достатъчно малък за еднодневна разходка, достатъчно дълбок за цял живот.",
    "route.summary.cta": "← Обратно към началото",
    "route.footer.hint": "Кликнете върху картите за детайли и връзки към карта",

    "route.bestTimeLabel": "Най-добро време за посещение",
    "route.tipsLabel": "Съвети",
    "route.placesCount": "Места · Следвайте по ред",
    "route.clear": "Изчисти",
    "route.footerHint": "Географски ред, започващ от река Марица",
    "route.total": "Общо",
    "route.stopSingle": "Спирка",
    "route.clickToListen": "Кликнете върху картата → аудио гид",
    "route.categoryLabel": "Категория",
    "route.audioNarrative": "Аудио разказ",
    "route.stopAudio": "Спри",
    "route.audioIntro": "Аудио гид",
    "route.stop": "СПРИ",
    "route.map.street": "Улица",
    "route.map.satellite": "Сателит",

    "route.place5.bestTime": "Залез слънце (18:00–20:00)",
    "route.place5.tips.0": "Има велосипедна алея",
    "route.place5.tips.1": "Сутрешните часове са идеални за наблюдение на птици",
    "route.place5.tips.2": "Има зони за пикник",

    "route.place4.bestTime": "По всяко време",
    "route.place4.tips.0": "Посетете заедно с музея в Лозана",
    "route.place4.tips.1": "Отворена зона за фотография",

    "route.place1.bestTime": "09:00–17:00 (затворено в понеделник)",
    "route.place1.tips.0": "Безплатен вход",
    "route.place1.tips.1": "Предлага се екскурзовод",

    "route.place3.bestTime": "Рано сутрин (08:00–10:00)",
    "route.place3.tips.0": "Историческата платформа все още се вижда",
    "route.place3.tips.1": "Комбинирайте с кампуса",

    "route.place2.bestTime": "10:00–16:00",
    "route.place2.tips.0": "Има и произведения на изкуството на открито",
    "route.place2.tips.1": "Достъпно пеша в рамките на кампуса",

    "route.place9.bestTime": "10:00–16:00",
    "route.place9.tips.0": "Образователно за деца",
    "route.place9.tips.1": "Колекцията от фосили е забележителна",

    "route.place8.bestTime": "Делници 09:00–17:00",
    "route.place8.tips.0": "Сградите на Факултета по изящни изкуства са великолепни",
    "route.place8.tips.1": "Има кафене",

    "route.place6.bestTime": "Сутрин или следобед",
    "route.place6.tips.0": "Старите консулства задължително трябва да се видят",
    "route.place6.tips.1": "Препоръчват се обувки за ходене",

    "route.place7.bestTime": "По всяко време",
    "route.place7.tips.0": "Тихо и уважително посещение",
    "route.place7.tips.1": "Прочетете историческия контекст",

    /* ─── Narrative Player ─── */
    "narrative.back": "Обратно към повърхността",
    "narrative.voice": "От гласа на сградата",
    "narrative.mediaLayer": "Медиен слой",
    "narrative.backToMap": "Обратно към картата",
    "narrative.next": "Следваща глава →",
  },

  el: {
    /* ─── Header / Nav ─── */
    "nav.home": "Αρχική",
    "nav.experience": "Διαδρομή",
    "nav.mekan": "Μέρη",
    "nav.cta": "Εξερεύνησε",

    /* ─── Hero ─── */
    "hero.tag": "Καραάγατς / 2026",
    "hero.subtitle": "Ένα έργο αστικής μνήμης",
    "hero.caption": "Αν οι τοίχοι μπορούσαν να μιλήσουν",
    "hero.heading": "Είσαι έτοιμος να ακούσεις τις ξεχασμένες ιστορίες της πόλης;",
    "hero.body":
      "Αυτό το έργο ακολουθεί τα βήματα ιστορικών κτιρίων που έχουν εγκαταλειφθεί ή αλλάξει χρήση, αφηγούμενο τις ιστορίες τους από το παρελθόν μέχρι σήμερα με τη δική τους 'φωνή.' Επιλέξτε ένα κτίριο στον χάρτη, εξερευνήστε λεπτομέρειες μέσω διαδραστικού περιεχομένου και δημιουργήστε το δικό σας ταξίδι στη συλλογική μνήμη της πόλης.",
    "hero.cta": "Ξεκίνα την εμπειρία",
    "hero.cta.note":
      "Περίπου 8 λεπτά. Περιλαμβάνει αφήγηση. Χαράζεις τη δική σου διαδρομή.",

    /* ─── Hero footer stats ─── */
    "stat.location.label": "Τοποθεσία",
    "stat.location.value": "Αδριανούπολη / Καραάγατς",
    "stat.year.label": "Έτος κατασκευής",
    "stat.year.value": "1914",
    "stat.current.label": "Σημερινή χρήση",
    "stat.current.value": "Πρυτανεία Παν. Θράκης",
    "stat.narrator.label": "Αφηγητής",
    "stat.narrator.value": "Το ίδιο το κτίριο",

    /* ─── Media Archive Section ─── */
    "media.tag": "Κεφάλαιο 02 — Αρχείο Μέσων",
    "media.title.1": "Τρία στρώματα,",
    "media.title.2": "μία επιφάνεια.",
    "media.body":
      "Θα διαβάσουμε το κτίριο μαζί σε τρία στρώματα: τον ήχο του, την εικόνα του, τη μνήμη του. Οι θέσεις παρακάτω είναι έτοιμες στο σχέδιο — όταν το περιεχόμενο φτάσει, απλά παίρνουν τη θέση τους.",
    "media.slot.sound": "Ήχος",
    "media.slot.video": "",
    "media.slot.photo": "Φωτογραφία",
    "media.sound.tag": "01 · Ανάσα",
    "media.sound.title": "Η φωνή των τοίχων μου",
    "media.sound.body":
      "Ο αέρας του Έβρου, ο βόμβος της αποβάθρας, ο ήχος του ρολογιού μου. Οι ηχογραφήσεις πεδίου θα αντικαταστήσουν αυτή την κυματομορφή.",
    "media.video.tag": "01",
    "media.video.title": "Η κίνηση του προσώπου μου",
    "media.video.body":
      "Όχι στατική ροή βίντεο — σύντομα, ατμοσφαιρικά καρέ που ενεργοποιούνται από hotspots.",
    "media.photo.tag": "02 · Μνήμη",
    "media.photo.title": "Το απτό αρχείο",
    "media.photo.body":
      "Παλιές φωτογραφίες, έγγραφα, γραμματόσημα και εισιτήρια. Η μνήμη γίνεται συγκεκριμένη όταν τα αρχειακά κομμάτια βρουν τη θέση τους.",

    /* ─── Journey Section ─── */
    "journey.tag": "Κεφάλαιο 03 — Ταξίδι",
    "journey.title": "Χάραξε τη δική σου διαδρομή.",
    "journey.body":
      "Δεν είναι γραμμικό ντοκιμαντέρ. Εξερεύνησε ελεύθερα στον χάρτη, επίλεξε τοίχους, άκουσε τι έχει να σου πει το κτίριο με τη δική σου σειρά.",
    "journey.step1.title": "Επιφάνεια",
    "journey.step1.body":
      "Ανακάλυψε σημεία στον σχηματικό χάρτη του κτιρίου.",
    "journey.step2.title": "Αφήγηση",
    "journey.step2.body":
      "Άσε το κτίριο να μιλήσει σε πρώτο πρόσωπο στο σημείο που επιλέγεις.",
    "journey.step3.title": "Απόφαση",
    "journey.step3.body":
      "Στο τέλος της εμπειρίας, πες τη γνώμη σου για το μέλλον του κτιρίου.",
    "journey.cta.text": "Έτοιμος για μια βόλτα ανάμεσα στους τοίχους;",
    "journey.cta.button": "Πήγαινε στην επιφάνεια →",

    /* ─── Footer ─── */
    "footer.copyright":
      "© 2026 · Έργο Καραάγατς · Αρχείο Αστικής Μνήμης",
    "footer.note":
      "Όλες οι οπτικές · ηχητικές · βίντεο περιοχές είναι placeholders",

    /* ─── Route Page ─── */
    "route.back": "Πίσω στην εισαγωγή",
    "route.tag": "Διαδρομή Καραάγατς",
    "route.title": "Μέρη για επίσκεψη στο Καραάγατς.",
    "route.body": "Ιστορία, τέχνη και φύση μαζί κατά μήκος του Έβρου. Από μουσεία σε ιστορικά σπίτια — δημιούργησε τη δική σου διαδρομή.",
    "route.stops": "στάσεις",
    "route.hours": "ω ",
    "route.min": "λεπ",
    "route.filter.all": "Όλα",
    "route.filter.museum": "Μουσείο",
    "route.filter.landmark": "Μνημείο",
    "route.filter.nature": "Φύση",
    "route.filter.culture": "Πολιτισμός",
    "route.viewMap": "Δες στον χάρτη",
    "route.place1.title": "Μουσείο Εθνικού Αγώνα & Λωζάνης",
    "route.place1.desc": "Έγγραφα της Συνθήκης της Λωζάνης, προσωπικά αντικείμενα του Ισμέτ Ινονού και ιστορικά υλικά της εποχής.",
    "route.place2.title": "Μουσείο Γλυπτικής & Ζωγραφικής Ιλχάν Κομάν",
    "route.place2.desc": "Μουσείο τέχνης στην πανεπιστημιούπολη με έργα του διάσημου γλύπτη Ιλχάν Κομάν.",
    "route.place3.title": "Ιστορικός Σιδηροδρομικός Σταθμός Καραάγατς",
    "route.place3.desc": "Ο εμβληματικός σταθμός του 1914, η τελευταία στάση στη γραμμή Οθωμανικής-Ευρωπαϊκής σύνδεσης.",
    "route.place4.title": "Μνημείο της Λωζάνης",
    "route.place4.desc": "Μνημείο που συμβολίζει την ένταξη του Καραάγατς στα τουρκικά σύνορα μέσω της Συνθήκης της Λωζάνης του 1923.",
    "route.place5.title": "Όχθη ποταμού Έβρου",
    "route.place5.desc": "Δεντροφυτεμένο μονοπάτι κατά μήκος του ποταμού. Εκπληκτικά ηλιοβασιλέματα και γαλήνια ατμόσφαιρα.",
    "route.place6.title": "Ιστορικά Σπίτια Καραάγατς",
    "route.place6.desc": "Καταγεγραμμένα οθωμανικά ξύλινα σπίτια στη συνοικία γνωστή ως 'Μικρό Παρίσι'.",
    "route.place7.title": "Μνημείο Χωροφυλακής",
    "route.place7.desc": "Ένας σημαντικός μνημειακός χώρος συνδεδεμένος με την ιστορική σημασία της περιοχής.",
    "route.place8.title": "Πανεπιστημιούπολη Καραάγατς",
    "route.place8.desc": "'Πανεπιστημιούπολη-μουσείο' με ιστορική αρχιτεκτονική. Φιλοξενεί μουσεία και ιστορικά αρχοντικά.",
    "route.place9.title": "Μουσείο Φυσικής Ιστορίας Πανεπιστημίου Θράκης",
    "route.place9.desc": "Μουσείο φυσικής ιστορίας που παρουσιάζει την πλούσια βιοποικιλότητα της Θράκης. Αφηγείται την ιστορία της φύσης μέσα από απολιθώματα, ορυκτά και τοπική πανίδα.",
    "route.summary.tag": "Σύνοψη Διαδρομής",
    "route.summary.text": "Το Καραάγατς είναι αρκετά μικρό για μια ημερήσια βόλτα, αρκετά βαθύ για μια ζωή.",
    "route.summary.cta": "← Πίσω στην αρχική",
    "route.footer.hint": "Κλικ στις κάρτες για λεπτομέρειες και συνδέσμους χάρτη",

    "route.bestTimeLabel": "Καλύτερη ώρα επίσκεψης",
    "route.tipsLabel": "Συμβουλές",
    "route.placesCount": "Μέρη · Ακολουθήστε με σειρά",
    "route.clear": "Καθαρισμός",
    "route.footerHint": "Γεωγραφική σειρά ξεκινώντας από τον ποταμό Έβρο",
    "route.total": "Σύνολο",
    "route.stopSingle": "Στάση",
    "route.clickToListen": "Κάντε κλικ στην κάρτα → ηχητικός οδηγός",
    "route.categoryLabel": "Κατηγορία",
    "route.audioNarrative": "Ηχητική αφήγηση",
    "route.stopAudio": "Διακοπή",
    "route.audioIntro": "Ηχητικός οδηγός",
    "route.stop": "STOP",
    "route.map.street": "Δρόμος",
    "route.map.satellite": "Δορυφόρος",

    "route.place5.bestTime": "Ηλιοβασίλεμα (18:00–20:00)",
    "route.place5.tips.0": "Διατίθεται ποδηλατόδρομος",
    "route.place5.tips.1": "Οι πρωινές ώρες είναι ιδανικές για παρατήρηση πουλιών",
    "route.place5.tips.2": "Διατίθενται χώροι για πικνίκ",

    "route.place4.bestTime": "Οποιαδήποτε ώρα",
    "route.place4.tips.0": "Επισκεφθείτε μαζί με το Μουσείο της Λωζάνης",
    "route.place4.tips.1": "Ανοιχτός χώρος για φωτογραφία",

    "route.place1.bestTime": "09:00–17:00 (Κλειστά Δευτέρα)",
    "route.place1.tips.0": "Δωρεάν είσοδος",
    "route.place1.tips.1": "Διατίθεται ξενάγηση",

    "route.place3.bestTime": "Νωρίς το πρωί (08:00–10:00)",
    "route.place3.tips.0": "Η ιστορική πλατφόρμα είναι ακόμα ορατή",
    "route.place3.tips.1": "Συνδυάστε με την πανεπιστημιούπολη",

    "route.place2.bestTime": "10:00–16:00",
    "route.place2.tips.0": "Υπάρχουν επίσης έργα τέχνης στον ανοιχτό χώρο",
    "route.place2.tips.1": "Προσβάσιμο με τα πόδια μέσα στην πανεπιστημιούπολη",

    "route.place9.bestTime": "10:00–16:00",
    "route.place9.tips.0": "Εκπαιδευτικό για παιδιά",
    "route.place9.tips.1": "Η συλλογή απολιθωμάτων είναι αξιοσημείωτη",

    "route.place8.bestTime": "Καθημερινές 09:00–17:00",
    "route.place8.tips.0": "Τα κτίρια της Σχολής Καλών Τεχνών είναι υπέροχα",
    "route.place8.tips.1": "Διατίθεται καφετέρια",

    "route.place6.bestTime": "Πρωί ή απόγευμα",
    "route.place6.tips.0": "Τα παλιά προξενεία είναι ένα πρέπει να δείτε",
    "route.place6.tips.1": "Συνιστώνται παπούτσια πεζοπορίας",

    "route.place7.bestTime": "Οποιαδήποτε ώρα",
    "route.place7.tips.0": "Ήσυχη και σεβαστή επίσκεψη",
    "route.place7.tips.1": "Διαβάστε το ιστορικό πλαίσιο",

    /* ─── Narrative Player ─── */
    "narrative.back": "Πίσω στην επιφάνεια",
    "narrative.voice": "Από τη φωνή του κτιρίου",
    "narrative.mediaLayer": "Στρώμα Μέσων",
    "narrative.backToMap": "Πίσω στον χάρτη",
    "narrative.next": "Επόμενο κεφάλαιο →",
  },
};

export default translations;
