export interface ScalePrinciple {
  letter: string;
  title: string;
  description: string;
  do: string;
  dont: string;
  color: string;
}

export interface PromptFeedback {
  original: string;
  improved: string;
  analysis: string;
}

export enum Section {
  HERO = 'HERO',
  SCALE = 'SCALE',
  GOLDEN_PROMPT = 'GOLDEN_PROMPT',
  REVIEW = 'REVIEW',
  WORKSHOP = 'WORKSHOP'
}