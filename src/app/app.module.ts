import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListViewComponent } from './component/list-view/list-view.component';
import { ListViewModule } from './component/list-view/list-view.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
