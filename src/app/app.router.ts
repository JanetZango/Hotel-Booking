import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionComponent } from './vision/vision.component';
import { SitesComponent } from './sites/sites.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DoubleBedsComponent } from './double-beds/double-beds.component';
import { ConfirmatonComponent } from './confirmation/confirmaton.component';
import { DisplayBookingsComponent } from './display-bookings/display-bookings.component';

export const router: Routes = [

   
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'about-us', component: AboutUsComponent },
    { path: 'sites', component: SitesComponent},
    { path: 'vision', component: VisionComponent},
    { path: 'bookings', component: BookingsComponent},
    { path: 'home-page', component:HomePageComponent},
    { path: 'double-beds',component:DoubleBedsComponent},
    { path: 'confirmation',component:ConfirmatonComponent},
    { path: 'display-bookings',component:DisplayBookingsComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);