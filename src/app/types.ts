export type Interval = 'hourly' | 'daily' | 'monthly';

export interface Settings {
  country: string;
  interval: Interval;
  lookback: number;
}

export interface DataSet<T = number> {
  [k: string]: T;
}

export interface PredictionResult {
  predicted: number[];
  expected: number[];
  keys: string[];
}
