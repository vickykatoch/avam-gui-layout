import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AVAMGuiLayoutModule } from 'avam-gui-layout';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AVAMGuiLayoutModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
