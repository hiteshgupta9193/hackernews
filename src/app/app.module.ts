import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

import { NewsService } from './services/news.service';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
