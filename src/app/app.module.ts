import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionComponent } from './vision/vision.component';
import { SitesComponent } from './sites/sites.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DoubleBedsComponent } from './double-beds/double-beds.component';
import { ConfirmatonComponent } from './confirmation/confirmaton.component';
import { DisplayBookingsComponent } from './display-bookings/display-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    VisionComponent,
    SitesComponent,
    BookingsComponent,
    HomePageComponent,
    DoubleBedsComponent,
    ConfirmatonComponent,
    DisplayBookingsComponent
  ],
  imports: [
    BrowserModule,
    routes
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
