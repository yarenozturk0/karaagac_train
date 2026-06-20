export interface NarrativeSegment {
  /** Saniye cinsinden, ses oynatımı ile senkron */
  startAt: number;
  /** Binanın birinci tekil şahıs sesinden bir cümle/paragraf */
  text: string;
}

export interface AudioAsset {
  label: string;
  description?: string;
  durationSec: number;
  /** İçerik hazır olduğunda doldurulur; yokluğunda placeholder görünür */
  src?: string;
}

export interface VideoAsset {
  label: string;
  description?: string;
  aspect?: "16/9" | "4/3" | "1/1";
  /** Video kaynağı hazır olduğunda doldurulur */
  src?: string;
  posterSrc?: string;
}

export interface PhotoAsset {
  caption: string;
  /** Arşiv tarihi — örn. "1920" ya da "c. 1955" */
  year?: string;
  /** Görsel kaynağı hazır olduğunda doldurulur */
  src?: string;
  source?: string;
}

export interface NarrativeMedia {
  audio?: AudioAsset;
  video?: VideoAsset;
  photos?: PhotoAsset[];
}

export interface Narrative {
  id: string;
  title: string;
  /** Birinci tekil şahıs; bina konuşuyor */
  voice: "building";
  durationSec: number;
  segments: NarrativeSegment[];
  media?: NarrativeMedia;
  suggestsNext?: string;
}
