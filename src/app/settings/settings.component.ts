import { Component, DoCheck, OnChanges } from '@angular/core';
import { SettingsService } from './settings.service';
import { Interval, Settings } from '../types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements DoCheck {
  country = 'DE';
  interval: Interval = 'hourly';
  lookback: number | '' = '';
  compressed = true;
  startYear = '2014';
  startMonth = '01';
  startHour = '08';
  endYear = '2015';
  endMonth = '12';
  endHour = '20';
  tts = true;

  future: boolean;
  futureFromHours: string;

  private _settings: Settings | {} = {};


  constructor(protected settings: SettingsService) {}

  ngDoCheck() {
    if (!this.compressed && !this.lookback) {
      this.lookback = 1;
    }

    if (this.interval === 'monthly' && this.compressed && this.lookback > 6) {
      this.lookback = 6;
    }

    if (this.future) {
      this.compressed = false;
      this.interval = 'hourly';
    }

    /* code to automatically update settings if a value has changed.
    this.emitSettings({
      country: this.country,
      interval: this.interval,
      lookback: this.lookback === '' ? null : this.lookback,
      compressed: this.compressed,
      start,
      end,
    });
    */
  }

  private getStartEnd() {
    let start = '';
    let end = '';
    if (this.interval === 'hourly') {
      if (this.compressed) {
        start = this.startHour;
        end = this.endHour;
      } else {
        start = `${this.startYear}/${this.startMonth}`;
        end = `${this.endYear}/${this.endMonth}`;
      }
    } else {
      if (this.compressed) {
        start = this.startMonth;
        end = this.endMonth;
      } else {
        start = this.startYear;
        end = this.endYear;
      }
    }
    return {
      "start": start,
      "end": end
    }
  }

  private getSettings(_train: boolean): Settings {
    // get start and end values
    const values = this.getStartEnd();
    console.log(values.start);
    console.log(values.end);

    // create date, join date to hour (YYYY/MM/DD HH:00:00)

    

    // return settings
    return {
      country: this.country,
      interval: this.interval,
      lookback: this.lookback === '' ? null : this.lookback,
      compressed: this.compressed,
      start: values.start,
      end: values.end,
      train: _train,
      tts: this.tts,
      future: this.future,
      futureFromHours: this.futureFromHours
    }
  }

  train() {
    this.settings.setSettings(this.getSettings(true));
  }

  predict() {
    // just predict values
    this.settings.setSettings(this.getSettings(false));
  }

  delete() {
    this.settings.pushDelete();
    alert('Model traing data has been deleted from the server!');
  }

  emitSettings(settings: Settings) {
    let changed = false;
    for (const key in settings) {
      if (this._settings[key] !== settings[key]) {
        changed = true;
        break;
      }
    }

    if (changed) {
      console.log(settings);
      this._settings = settings;
      this.settings.setSettings(settings);
    }
  }
}
