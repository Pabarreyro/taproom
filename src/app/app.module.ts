import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListTapsComponent } from './list-taps/list-taps.component';
import { EditTapComponent } from './edit-tap/edit-tap.component';
import { NewTapComponent } from './new-tap/new-tap.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTapsComponent,
    EditTapComponent,
    NewTapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
