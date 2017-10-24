import { Injectable, OnDestroy } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import { PredictionResult } from '../types';
import { Observable } from 'rxjs/Observable';
import { reduce, keys } from 'lodash';
import { ConnectableObservable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../environments/environment';
import { includes } from 'lodash';


@Injectable()
export class EnergyDataService implements OnDestroy {
  private dataSubscription: Subscription;
  private deleteSubscription: Subscription;
  private dataObs: ConnectableObservable<PredictionResult>;
  private deleteObs: ConnectableObservable<Boolean>;

  constructor(
    protected settingsService: SettingsService,
    protected http: Http,
  ) {
    this.dataObs = this._data();
    this.dataSubscription = this.dataObs.connect();
    this.deleteObs = this._delete();
    this.deleteSubscription = this.deleteObs.connect();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  private _delete(): ConnectableObservable<Boolean> {
    return this.settingsService.delete()
      .switchMap(value => {
        console.log('Requesting training data to be deleted');
        return this.http.get(environment.apiUrl+'/delete')
        .catch(response => {
          const data = response.json();
          if (data.error) {
            alert(data.error);
          }
          return Observable.of<Response>();
        });
      }).map(response => response.json())
      .publishReplay(1);
  }

  private _data(): ConnectableObservable<PredictionResult> {
    return this.settingsService.settings()
      .switchMap(params => {
        console.log('Requesting new data', params);
        if (params.lookback === 0) {
          params.lookback = null;
        }

        return this.http.get(environment.apiUrl, { params })
          .catch(response => {
            const data = response.json();
            if (data.error) {
              alert(data.error);
            }
            return Observable.of<Response>();
          });
      })
      .map(response => response.json())
      .publishReplay(1);
  }

  public data(): Observable<PredictionResult> {
    return this.dataObs;
  }

  public delete(): Observable<Boolean> {
    return this.deleteObs;
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
