import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewTimerComponent } from './new-timer/new-timer.component';
import { TimerServiceService } from './timer-service.service';
import { GlobalComponent } from './global/global.component';
import { AllTimersComponent } from './all-timers/all-timers.component';
import { NavComponent } from './nav/nav.component';
import { TimePipe } from './time.pipe';
import { NewStopWatchComponent } from './new-stop-watch/new-stop-watch.component';

const routes: Routes = [
  {path : 'landing', component: LandingPageComponent},
  {path : 'timer', component: TimerDisplayComponent, children: [
    {path: '', redirectTo: 'time', pathMatch: 'full'},
    { path : 'time', component: NewTimerComponent},
    { path : 'watch', component: NewStopWatchComponent},
  ]},
  { path: '', redirectTo: 'timer', pathMatch: 'full'},
  { path: '**', redirectTo: '/' }
];
@NgModule({
  declarations: [
    AppComponent,
    TimerDisplayComponent,
    LandingPageComponent,
    NewTimerComponent,
    GlobalComponent,
    AllTimersComponent,
    NavComponent,
    TimePipe,
    NewStopWatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [TimerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
