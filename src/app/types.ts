export type Interval = 'hourly' | 'monthly';

export interface Settings {
  country: string;
  interval: Interval;
  lookback: number | null;
  start: string;
  end: string;
  compressed: boolean;
  train: boolean;
  tts: boolean;
}

export interface DataSet<T = number> {
  [k: string]: T;
}

export interface PredictionResult {
  predicted: number[];
  expected: number[];
  keys: string[];
  settings: Settings;
  trained: boolean;
  ems: number;
}

export interface GraphResult {
  labels: string[];
  datasets: { data: number[], label: string }[];
  settings: Settings;
  trained: boolean;
  meanPercentError: number;
  meanSquaredError: number;
}
