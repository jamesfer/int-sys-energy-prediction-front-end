import { Injectable, OnDestroy } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import { DataSet, PredictionResult } from '../types';
import { Observable } from 'rxjs/Observable';
import { reduce, keys } from 'lodash';
import { ConnectableObservable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../environments/environment';

// function fakeData(): PredictionResult {
//   return {
//     expected: {
//       '1': 1,
//       '2': 2,
//       '3': 3,
//       '4': 4,
//       '5': 5,
//       '6': 6,
//       '7': 7,
//       '8': 8,
//       '9': 9,
//     },
//     predicted: {
//       '1': 1.1,
//       '2': 2.2,
//       '3': 3.1,
//       '4': 3.9,
//       '5': 4.5,
//       '6': 5,
//       '7': 6.3,
//       '8': 7.8,
//       '9': 9,
//     }
//   };
// }

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
        console.log('Requesting new data', params);
        return this.http.get(environment.apiUrl, {
          params: {
            ...params,
            start: '2015',
            end: '2016',
          },
        });
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

  public expectedData() {
    return this.data().map(res => res.expected);
  }

  public dataPairs(): Observable<{ predicted: number, expected: number }[]> {
    return this.data().map(result => {
      return reduce(keys(result.expected), (accum, index) => {
        const predicted = result.predicted[index];
        const expected = result.expected[index];
        if (predicted !== undefined) {
          accum.push({ predicted, expected });
        }
        return accum;
      }, []);
    });
  }
}
