import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnergyDataService } from '../graph/energy-data.service';
import { AnonymousSubject, Subject } from 'rxjs/Subject';
import { GraphResult } from '../types';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  private unsubscribe: Subject<void> = new AnonymousSubject<void>();

  predictions: GraphResult[] = [];

  constructor(private energyData: EnergyDataService) { }

  ngOnInit() {
    this.predictions = [];

    // everytime data is retrieved from server, store inside predictions
    this.energyData.data()
    .takeUntil(this.unsubscribe)
    .subscribe(results => {
      console.log('Received', results);
      const graph:GraphResult = {
        labels: results.keys,
        datasets: [{
          label: 'Actual',
          data: results.expected,
        }, {
          label: 'Predicted',
          data: results.predicted,
        }],
        settings: results.settings,
        trained: results.trained
      }
      this.predictions.push(graph);
      console.log(this.predictions);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
