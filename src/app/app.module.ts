import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';

//Third Party
import { ClipboardModule } from 'ngx-clipboard';
import {NgsRevealModule} from 'ng-scrollreveal';

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
    ClipboardModule,
    NgsRevealModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
