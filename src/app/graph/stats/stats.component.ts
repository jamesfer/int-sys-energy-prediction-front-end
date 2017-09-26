import { Component } from '@angular/core';
import { EnergyStatsService } from '../energy-stats.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent {
  numPoints: Observable<number>;
  meanSquaredError: Observable<string>;
  meanPercentError: Observable<string>;

  constructor(protected energyStats: EnergyStatsService) {
    this.numPoints = energyStats.numPoints();
    this.meanSquaredError = energyStats.meanSquaredError()
      .map(error => error.toFixed(2));
    this.meanPercentError = energyStats.meanPercentError()
      .map(error => error.toFixed(2));
  }
}
