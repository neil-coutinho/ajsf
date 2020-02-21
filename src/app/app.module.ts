import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Bootstrap4FrameworkModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[]
})
export class AppModule { 

 


}
