import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {FlightDataService} from './flights/flight-data.service';
import {FlightsComponent} from './flights/flights.component';
import {HotelsComponent} from './hotels/hotels.component';
import {AppRoutingModule} from './app.routing';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule
  ]
})
export class AppMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    HotelsComponent
  ],
  entryComponents: [
    FlightsComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [FlightDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
