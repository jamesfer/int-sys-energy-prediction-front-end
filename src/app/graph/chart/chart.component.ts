import { Component, OnDestroy } from '@angular/core';
import { EnergyDataService } from '../energy-data.service';
import { AnonymousSubject, Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnDestroy {
  private unsubscribe: Subject<void> = new AnonymousSubject<void>();
  public data: any;

  constructor(protected energyData: EnergyDataService) {
    this.data = energyData.data();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
