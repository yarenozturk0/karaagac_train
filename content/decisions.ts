import type { Decision } from "@/types/vote";

export const finalDecision: Decision = {
  id: "karagac-future",
  question: "Bu yapı, bundan sonra ne olmalı?",
  options: [
    {
      id: "museum",
      label: "Müze",
      blurb: "Hafızasını vitrinde saklasın.",
    },
    {
      id: "library",
      label: "Kütüphane",
      blurb: "Sessizliği, okumayla dolsun.",
    },
    {
      id: "cultural-center",
      label: "Kültür Merkezi",
      blurb: "Yeniden yankılansın, başka seslerle.",
    },
    {
      id: "as-is",
      label: "Olduğu Gibi",
      blurb: "Şimdiki işlevi yeterli. Zaman karar versin.",
    },
  ],
};
