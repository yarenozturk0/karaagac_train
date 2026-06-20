export interface Place {
  id: string;
  titleKey: string;
  descKey: string;
  category: "museum" | "landmark" | "nature" | "culture";
  icon: string;
  durationMin: number;
  coords: { lat: number; lng: number };
  image?: string;
  stopLabel: string;
  bestTime: string;
  tips: string[];
}

export const PLACES: Place[] = [
  {
    id: "meric-river",
    titleKey: "route.place5.title",
    descKey: "route.place5.desc",
    category: "nature",
    icon: "🌊",
    durationMin: 40,
    coords: { lat: 41.6478, lng: 26.5355 },
    stopLabel: "1. Durak",
    bestTime: "Gün batımı (18:00–20:00)",
    tips: ["Bisiklet yolu mevcut", "Kuş gözlemi için sabah saatleri ideal", "Piknik alanları var"],
  },
  {
    id: "lozan-monument",
    titleKey: "route.place4.title",
    descKey: "route.place4.desc",
    category: "landmark",
    icon: "🗿",
    durationMin: 15,
    coords: { lat: 41.652659, lng: 26.520027 },
    stopLabel: "2. Durak",
    bestTime: "Her saatte",
    tips: ["Lozan Müzesi ile birlikte ziyaret edin", "Fotoğraf için açık alan"],
  },
  {
    id: "lozan-museum",
    titleKey: "route.place1.title",
    descKey: "route.place1.desc",
    category: "museum",
    icon: "🏛️",
    durationMin: 45,
    coords: { lat: 41.6526, lng: 26.5200 },
    stopLabel: "3. Durak",
    bestTime: "09:00–17:00 (Pts kapalı)",
    tips: ["Ücretsiz giriş", "Rehberli tur mevcut"],
  },
  {
    id: "train-station",
    titleKey: "route.place3.title",
    descKey: "route.place3.desc",
    category: "landmark",
    icon: "🚂",
    durationMin: 30,
    coords: { lat: 41.6517, lng: 26.5219 },
    image: "/assets/images/edirne-gar.jpg",
    stopLabel: "4. Durak",
    bestTime: "Sabah erken (08:00–10:00)",
    tips: ["Tarihi peron hâlâ görülebilir", "Kampüs ile birleştirin"],
  },
  {
    id: "ilhan-koman",
    titleKey: "route.place2.title",
    descKey: "route.place2.desc",
    category: "museum",
    icon: "🎨",
    durationMin: 40,
    coords: { lat: 41.65167, lng: 26.52278 },
    image: "/assets/images/ilhan-koman-museum.jpg",
    stopLabel: "5. Durak",
    bestTime: "10:00–16:00",
    tips: ["Açık alanda da eserler var", "Kampüs içinde yürüyerek ulaşılır"],
  },
  {
    id: "doga-tarihi-museum",
    titleKey: "route.place9.title",
    descKey: "route.place9.desc",
    category: "museum",
    icon: "🦴",
    durationMin: 35,
    coords: { lat: 41.6513, lng: 26.5238 },
    stopLabel: "6. Durak",
    bestTime: "10:00–16:00",
    tips: ["Çocuklar için eğitici", "Fosil koleksiyonu dikkat çekici"],
  },
  {
    id: "trakya-campus",
    titleKey: "route.place8.title",
    descKey: "route.place8.desc",
    category: "culture",
    icon: "🎓",
    durationMin: 45,
    coords: { lat: 41.652261, lng: 26.520260 },
    image: "/assets/images/karagac-faculty.png",
    stopLabel: "7. Durak",
    bestTime: "Hafta içi 09:00–17:00",
    tips: ["Güzel Sanatlar Fakültesi binaları muhteşem", "Kafeterya mevcut"],
  },
  {
    id: "historic-houses",
    titleKey: "route.place6.title",
    descKey: "route.place6.desc",
    category: "culture",
    icon: "🏘️",
    durationMin: 30,
    coords: { lat: 41.6538, lng: 26.5225 },
    stopLabel: "8. Durak",
    bestTime: "Sabah veya öğleden sonra",
    tips: ["Eski konsolosluklar görülmeli", "Yürüyüş ayakkabısı önerilir"],
  },
  {
    id: "jandarma-memorial",
    titleKey: "route.place7.title",
    descKey: "route.place7.desc",
    category: "landmark",
    icon: "⭐",
    durationMin: 20,
    coords: { lat: 41.65914, lng: 26.53777 },
    stopLabel: "9. Durak",
    bestTime: "Her saatte",
    tips: ["Sessiz ve saygılı ziyaret", "Tarihi bağlamı okuyun"],
  },
];

export const CATEGORY_COLORS: Record<Place["category"], string> = {
  museum: "#A0242A",
  landmark: "#B08D3C",
  nature: "#2D6A4F",
  culture: "#8A6A22",
};
