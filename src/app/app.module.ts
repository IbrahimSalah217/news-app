import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './news-app/header/header.component';
import { LeftBarComponent } from './news-app/left-bar/left-bar.component';
import { RightBarComponent } from './news-app/right-bar/right-bar.component';
import { NewsComponent } from './news-app/news/news.component';
import { NewDetailsComponent } from './news-app/new-details/new-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BarComponent } from './news-app/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent,
    RightBarComponent,
    NewsComponent,
    NewDetailsComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
