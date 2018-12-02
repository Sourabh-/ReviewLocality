import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';
import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    IonicModule,
    HttpModule
  ],
  entryComponents: [],
  exports: [],
  providers: [ UtilityService ]
})
export class SharedModule {
  
}
