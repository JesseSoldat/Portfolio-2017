import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
// import { AboutComponent } from './components/about/about.component';
// import { WorkComponent } from './components/work/work.component';
// import { SkillsComponent } from './components/skills/skills.component';
// import { WorkDetailsComponent } from './components/work/work-details/work-details.component';


//Third Party
import { ClipboardModule } from 'ngx-clipboard';
import {NgsRevealModule} from 'ng-scrollreveal';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClipboardComponent,
    // SkillsComponent,
    // WorkComponent,
    // AboutComponent,
    routedComponents,
    ResumeComponent,
    // WorkDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    NgsRevealModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
