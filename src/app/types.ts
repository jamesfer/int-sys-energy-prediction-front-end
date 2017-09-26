export type Interval = 'hourly' | 'daily' | 'monthly';

export interface Settings {
  country: string;
  interval: Interval;
  lookbackWindow: number;
}

export interface DataSet<T = number> {
  [k: string]: T;
}

export interface PredictionResult {
  predicted: DataSet;
  actual: DataSet;
}
