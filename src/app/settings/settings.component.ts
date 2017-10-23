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
  endMonth = '01';
  endHour = '20';

  private _settings: Settings | {} = {};


  constructor(protected settings: SettingsService) {}

  ngDoCheck() {
    if (!this.compressed && !this.lookback) {
      this.lookback = 1;
    }

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

    this.emitSettings({
      country: this.country,
      interval: this.interval,
      lookback: this.lookback === '' ? null : this.lookback,
      compressed: this.compressed,
      start,
      end,
    });
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
