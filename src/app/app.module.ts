import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesSearchComponent } from './images-search/images-search.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';


@NgModule({
  declarations: [
    AppComponent,
    ImagesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgImageFullscreenViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


