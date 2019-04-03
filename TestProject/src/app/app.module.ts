import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DenemeComponent } from './deneme/deneme.component';
import { DenemeCssComponent } from './deneme-css/deneme-css.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DenemeComponent,
    DenemeCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
