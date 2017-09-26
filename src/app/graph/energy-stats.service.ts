import { Injectable } from '@angular/core';
import { EnergyDataService } from './energy-data.service';
import { reduce, keys } from 'lodash';
import 'rxjs/add/operator/withLatestFrom';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnergyStatsService {
  constructor(protected energyData: EnergyDataService) {}

  public numPoints(): Observable<number> {
    return this.energyData.predictedData().map(predicted => {
      return keys(predicted).length;
    });
  }

  public meanSquaredError(): Observable<number> {
    return this.energyData.dataPairs()
      .withLatestFrom(this.numPoints(), (result, count) => ({ result, count }))
      .map(({ result, count }) => {
        return reduce(result, (errorSum, { predicted, actual }) => {
          const error = predicted - actual;
          return errorSum + error ** 2;
        }, 0) / count;
      });
  }

  public meanPercentError(): Observable<number> {
    return this.energyData.dataPairs()
      .withLatestFrom(this.numPoints(), (result, count) => ({ result, count }))
      .map(({ result, count }) => {
        return reduce(result, (errorSum, { predicted, actual }) => {
            const error = Math.abs(predicted - actual) / actual;
            return errorSum + error;
          }, 0) * 100 / count;
      });
  }
}
