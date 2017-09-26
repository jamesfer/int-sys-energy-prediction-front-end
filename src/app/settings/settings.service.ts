import { Injectable } from '@angular/core';
import { Interval, Settings } from '../types';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';

@Injectable()
export class SettingsService {
  protected _country = '';
  protected _interval: Interval = 'hourly';
  protected _lookbackWindow = 3;
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

  get lookbackWindow() {
    return this._lookbackWindow;
  }
  set lookbackWindow(value: number) {
    this._lookbackWindow = value;
    this.emitUpdate();
  }

  private makeSettings() {
    return {
      country: this.country,
      interval: this.interval,
      lookbackWindow: this.lookbackWindow,
    };
  }

  private emitUpdate() {
    this._settings.next(this.makeSettings());
  }
}
