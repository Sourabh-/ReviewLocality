import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { LocalityReviewApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReviewsPage } from '../pages/reviews/reviews';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    LocalityReviewApp,
    HomePage,
    ReviewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(LocalityReviewApp),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LocalityReviewApp,
    HomePage,
    ReviewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
