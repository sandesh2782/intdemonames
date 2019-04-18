import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NamelistComponent } from './namelist/namelist.component';
import { NameComponent } from './namelist/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    NamelistComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
