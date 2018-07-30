import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatsService} from './stats.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartService} from './chart.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

import { MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PortfolioComponent } from './portfolio/portfolio.component';


const appRoutes: Routes = [
 {path: 'dashboard', component: MyDashboardComponent},
 {path: 'portfolio', component: PortfolioComponent},
 {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    MyNavComponent,
    PortfolioComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  providers: [StatsService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
