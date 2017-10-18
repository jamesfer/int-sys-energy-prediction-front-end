import { Injectable } from '@angular/core';
import { EnergyDataService } from './energy-data.service';
import { reduce, keys } from 'lodash';
import 'rxjs/add/operator/withLatestFrom';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnergyStatsService {
  constructor(protected energyData: EnergyDataService) {}

  public numPoints(): Observable<number> {
    return this.energyData.predictedData().map(predicted => predicted.length);
  }

  public meanSquaredError(): Observable<number> {
    return this.energyData.dataPairs()
      .map(result => {
        return reduce(result, (errorSum, { predicted, expected }) => {
          return errorSum + (predicted - expected) ** 2;
        }, 0);
      })
      .withLatestFrom(this.numPoints(), (errorSum, count) => errorSum / count);
  }

  public meanPercentError(): Observable<number> {
    return this.energyData.dataPairs()
      .map(result => {
        return reduce(result, (errorSum, { predicted, expected }) => {
            return errorSum + Math.abs(predicted - expected) / expected;
          }, 0) * 100;
      })
      .withLatestFrom(this.numPoints(), (errorSum, count) => errorSum / count);
  }
}
