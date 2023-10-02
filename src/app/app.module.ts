import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { BigCardComponent } from './pages/home/big-card/big-card.component';
import { SmallCardComponent } from './pages/home/small-card/small-card.component';
import { ArticleContentComponent } from './pages/article-content/article-content.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BigCardComponent,
    SmallCardComponent,
    ArticleContentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
