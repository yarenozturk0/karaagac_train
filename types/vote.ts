export type DecisionOptionId =
  | "museum"
  | "library"
  | "cultural-center"
  | "as-is";

export interface DecisionOption {
  id: DecisionOptionId;
  label: string;
  blurb: string;
}

export interface Decision {
  id: string;
  question: string;
  options: DecisionOption[];
}

export interface VoteRecord {
  decisionId: string;
  optionId: DecisionOptionId;
  reasoning?: string;
  createdAt: string;
}
