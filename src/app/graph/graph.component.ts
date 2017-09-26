import { Component } from '@angular/core';
import { EnergyDataService } from './energy-data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
})
export class GraphComponent {
  constructor(protected energyData: EnergyDataService) {}
}
