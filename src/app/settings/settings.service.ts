import { Injectable } from '@angular/core';
import { Interval, Settings } from '../types';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsService {
  protected _settings = new Subject<Settings>();
  protected _delete = new Subject<Boolean>();

  delete(): Observable<Boolean> {
    return this._delete;
  }

  pushDelete() {
    this._delete.next(true);
  }

  settings(): Observable<Settings> {
    return this._settings;
  }

  setSettings(value: Settings) {
    this._settings.next(value);
  }
}
