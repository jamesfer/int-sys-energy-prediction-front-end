import { Component, OnDestroy } from '@angular/core';
import { EnergyDataService } from '../energy-data.service';
import { AnonymousSubject, Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SettingsService } from '../../settings/settings.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnDestroy {
  private unsubscribe: Subject<void> = new AnonymousSubject<void>();

  datasets: { data: number[], label: string }[] = [];
  labels: string[] = [];

  type: string = 'line';

  loaded: boolean = false;

  constructor(protected energyData: EnergyDataService,
    protected settings: SettingsService
  ) {
    settings.settings()
      .takeUntil(this.unsubscribe)
      .subscribe(() => {
        this.datasets = [];
        this.labels = [];
      });

    energyData.data()
      .takeUntil(this.unsubscribe)
      .subscribe(results => {
        this.loaded = true;
        console.log('Received', results);
        this.labels = results.keys;
        if (results.settings.future) {
          this.datasets = [{
            label: 'Predicted - ' + results.settings.futureFromHours + ' hours from now',
            data: results.predicted,
          }];
        } else {
          this.datasets = [{
            label: 'Actual',
            data: results.expected,
          }, {
            label: 'Predicted',
            data: results.predicted,
          }];
        }
      });
  }

  public changeType(_type: string) {
    this.type = _type;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
