import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { GraphResult } from '../../types';

@Component({
  selector: 'modal-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphModalComponent implements OnInit {

  datasets: { data: number[], label: string }[] = [];
  labels: string[] = [];

  meanSquaredError: number;
  meanPercentError: number;

  type: string = 'line';

  constructor(public dialogRef: MatDialogRef<GraphModalComponent>,@Inject(MAT_DIALOG_DATA) public data: GraphResult) {
    this.datasets = data.datasets;
    this.labels = data.labels;
    this.meanPercentError = data.meanPercentError;
    this.meanSquaredError = data.meanSquaredError;
  }

  public changeType(_type: string) {
    this.type = _type;
  }

  ngOnInit() {
  }

}
