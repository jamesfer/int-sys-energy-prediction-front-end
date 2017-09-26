import { Injectable, OnDestroy } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import { DataSet, PredictionResult } from '../types';
import { Observable } from 'rxjs/Observable';
import { reduce } from 'lodash';
import { ConnectableObservable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

function fakeData(): PredictionResult {
  return {
    actual: {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
    },
    predicted: {
      '1': 1.1,
      '2': 2.2,
      '3': 3.1,
      '4': 3.9,
      '5': 4.5,
      '6': 5,
      '7': 6.3,
      '8': 7.8,
      '9': 9,
    }
  };
}

@Injectable()
export class EnergyDataService implements OnDestroy {
  private dataSubscription: Subscription;
  private dataObs: ConnectableObservable<PredictionResult>;

  constructor(
    protected settingsService: SettingsService,
    protected http: Http,
  ) {
    this.dataObs = this._data();
    this.dataSubscription = this.dataObs.connect();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  private _data(): ConnectableObservable<PredictionResult> {
    return this.settingsService.settings()
      .switchMap(params => {
        // return this.http.get('insert url here', { params });
        return Observable.of({ json: fakeData });
      })
      .map(response => response.json())
      .publishReplay(1);
  }

  public data(): Observable<PredictionResult> {
    return this.dataObs;
  }

  public predictedData() {
    return this.data().map(res => res.predicted);
  }

  public actualData() {
    return this.data().map(res => res.actual);
  }

  public dataPairs(): Observable<DataSet<{ predicted: number, actual: number }>> {
    return this.data().map(result => {
      return reduce(result.actual, (accum, actual, key) => {
        if (result.predicted[key] !== undefined) {
          accum[key] = {
            predicted: result.predicted[key],
            actual: result.actual[key],
          };
        }
        return accum;
      }, {});
    });
  }
}
