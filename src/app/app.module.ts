import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//Third Party
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClipboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
