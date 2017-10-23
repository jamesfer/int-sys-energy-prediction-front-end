export type Interval = 'hourly' | 'monthly';

export interface Settings {
  country: string;
  interval: Interval;
  lookback: number | null;
  start: string;
  end: string;
  compressed: boolean;
}

export interface DataSet<T = number> {
  [k: string]: T;
}

export interface PredictionResult {
  predicted: number[];
  expected: number[];
  keys: string[];
}
