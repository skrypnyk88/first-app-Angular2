import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabingingComponent } from './databinging/databinging.component';
import { EventBindingComponent } from './databinging/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabingingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
