import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './settings/settings.service';
import { GraphComponent } from './graph/graph.component';
import { ChartComponent } from './graph/chart/chart.component';
import { StatsComponent } from './graph/stats/stats.component';
import { EnergyDataService } from './graph/energy-data.service';
import { EnergyStatsService } from './graph/energy-stats.service';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { HistoryComponent } from './history/history.component';
import { GraphModalComponent } from './modals/graph/graph.component'

import { MatDialogModule } from '@angular/material'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    SettingsComponent,
    GraphComponent,
    ChartComponent,
    StatsComponent,
    HistoryComponent,
    GraphModalComponent
  ],
  providers: [
    SettingsService,
    EnergyDataService,
    EnergyStatsService,
  ],
  entryComponents: [
    GraphModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
