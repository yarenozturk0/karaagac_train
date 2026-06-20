export interface Place {
  id: string;
  titleKey: string;
  descKey: string;
  category: "museum" | "landmark" | "nature" | "culture";
  icon: string;
  durationMin: number;
  coords: { lat: number; lng: number };
  image?: string;
  bestTimeKey: string;
  tipKeys: string[];
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
    bestTimeKey: "route.place5.bestTime",
    tipKeys: ["route.place5.tips.0", "route.place5.tips.1", "route.place5.tips.2"],
  },
  {
    id: "lozan-monument",
    titleKey: "route.place4.title",
    descKey: "route.place4.desc",
    category: "landmark",
    icon: "🗿",
    durationMin: 15,
    coords: { lat: 41.652659, lng: 26.520027 },
    bestTimeKey: "route.place4.bestTime",
    tipKeys: ["route.place4.tips.0", "route.place4.tips.1"],
  },
  {
    id: "lozan-museum",
    titleKey: "route.place1.title",
    descKey: "route.place1.desc",
    category: "museum",
    icon: "🏛️",
    durationMin: 45,
    coords: { lat: 41.6528, lng: 26.5203 },
    bestTimeKey: "route.place1.bestTime",
    tipKeys: ["route.place1.tips.0", "route.place1.tips.1"],
  },
  {
    id: "train-station",
    titleKey: "route.place3.title",
    descKey: "route.place3.desc",
    category: "landmark",
    icon: "🚂",
    durationMin: 30,
    coords: { lat: 41.6517, lng: 26.5212 },
    image: "/assets/images/tren-gari.jpg",
    bestTimeKey: "route.place3.bestTime",
    tipKeys: ["route.place3.tips.0", "route.place3.tips.1"],
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
    bestTimeKey: "route.place2.bestTime",
    tipKeys: ["route.place2.tips.0", "route.place2.tips.1"],
  },
  {
    id: "doga-tarihi-museum",
    titleKey: "route.place9.title",
    descKey: "route.place9.desc",
    category: "museum",
    icon: "🦴",
    durationMin: 35,
    coords: { lat: 41.6522, lng: 26.5206 },
    image: "/assets/images/doga-tarihi-muzesi.jpg",
    bestTimeKey: "route.place9.bestTime",
    tipKeys: ["route.place9.tips.0", "route.place9.tips.1"],
  },
  {
    id: "trakya-campus",
    titleKey: "route.place8.title",
    descKey: "route.place8.desc",
    category: "culture",
    icon: "🎓",
    durationMin: 45,
    coords: { lat: 41.6530, lng: 26.5220 },
    image: "/assets/images/karaagac-yerleskesi.jpg",
    bestTimeKey: "route.place8.bestTime",
    tipKeys: ["route.place8.tips.0", "route.place8.tips.1"],
  },
  {
    id: "historic-houses",
    titleKey: "route.place6.title",
    descKey: "route.place6.desc",
    category: "culture",
    icon: "🏘️",
    durationMin: 30,
    coords: { lat: 41.6538, lng: 26.5225 },
    bestTimeKey: "route.place6.bestTime",
    tipKeys: ["route.place6.tips.0", "route.place6.tips.1"],
  },
  {
    id: "jandarma-memorial",
    titleKey: "route.place7.title",
    descKey: "route.place7.desc",
    category: "landmark",
    icon: "⭐",
    durationMin: 20,
    coords: { lat: 41.65914, lng: 26.53777 },
    bestTimeKey: "route.place7.bestTime",
    tipKeys: ["route.place7.tips.0", "route.place7.tips.1"],
  },
];

export const CATEGORY_COLORS: Record<Place["category"], string> = {
  museum: "#A0242A",
  landmark: "#B08D3C",
  nature: "#2D6A4F",
  culture: "#8A6A22",
};
