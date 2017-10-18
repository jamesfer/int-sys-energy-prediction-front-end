import { Injectable } from '@angular/core';
import { Interval, Settings } from '../types';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';

@Injectable()
export class SettingsService {
  protected _country = 'DE';
  protected _interval: Interval = 'hourly';
  protected _lookback = 3;
  protected _settings = new Subject<Settings>();

  settings() {
    return this._settings.startWith(this.makeSettings());
  }

  get country() {
    return this._country;
  }
  set country(value: string) {
    this._country = value;
    this.emitUpdate();
  }

  get interval() {
    return this._interval;
  }
  set interval(value: Interval) {
    this._interval = value;
    this.emitUpdate();
  }

  get lookback() {
    return this._lookback;
  }
  set lookback(value: number) {
    this._lookback = value;
    this.emitUpdate();
  }

  private makeSettings(): Settings {
    return {
      country: this.country,
      interval: this.interval,
      lookback: this.lookback,
    };
  }

  private emitUpdate() {
    this._settings.next(this.makeSettings());
  }
}
