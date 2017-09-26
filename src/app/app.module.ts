import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    GraphComponent,
    ChartComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SettingsService,
    EnergyDataService,
    EnergyStatsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
