import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnergyDataService } from '../graph/energy-data.service';
import { AnonymousSubject, Subject } from 'rxjs/Subject';
import { Observable }  from 'rxjs/Observable'
import "rxjs/add/observable/zip"
import { GraphResult } from '../types';

import { EnergyStatsService } from '../graph/energy-stats.service';
import 'rxjs/add/operator/take';

import { GraphModalComponent } from '../modals/graph/graph.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  private unsubscribe: Subject<void> = new AnonymousSubject<void>();

  predictions: GraphResult[] = [];

  constructor(private energyData: EnergyDataService, private energyStats: EnergyStatsService, public dialog: MatDialog) { }

  rowClicked(result: GraphResult) {
    let dialogRef = this.dialog.open(GraphModalComponent, {
      data: result,
      panelClass: ['col-xs-12', 'col-sm-12', 'col-md-8', 'col-lg-8']
    })
  }
  
  ngOnInit() {
    this.predictions = [];

    // everytime data is retrieved from server, store inside predictions
    this.energyData.data()
    .takeUntil(this.unsubscribe)
    .subscribe(results => {
      console.log('Received', results);

      //get error values
      const meanPercentObs = this.energyStats.meanPercentError().take(1);
      const meanSquaredObs = this.energyStats.meanSquaredError().take(1);

      Observable.zip(meanPercentObs, meanSquaredObs, (percent: number, squared: number) => ({percent,squared}))
      .subscribe(pair => {
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
          trained: results.trained,
          meanPercentError: pair.percent,
          meanSquaredError: pair.squared
        }
        this.predictions.push(graph);
        console.log(this.predictions);
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
